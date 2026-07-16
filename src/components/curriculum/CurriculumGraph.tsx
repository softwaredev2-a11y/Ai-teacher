"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import CameraControls from "camera-controls";
import {
  CHAPTERS,
  EDGES,
  TOPICS,
  chapterColor,
  type ChapterId,
  type GradeId,
  type SubjectId,
  type Topic,
} from "@/data/physicsCurriculum";

CameraControls.install({ THREE });

type LayoutNode = Topic & {
  position: THREE.Vector3;
  index: number;
};

function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function buildLayout(): LayoutNode[] {
  const byChapter = new Map<ChapterId, Topic[]>();
  for (const t of TOPICS) {
    const list = byChapter.get(t.chapter) ?? [];
    list.push(t);
    byChapter.set(t.chapter, list);
  }

  return TOPICS.map((topic, index) => {
    const siblings = byChapter.get(topic.chapter)!;
    const si = siblings.indexOf(topic);
    const level = topic.level;
    const y = level * 2.4 - 1.15;
    const radius = 0.18 + level * 1.55;
    const angle =
      (si / Math.max(siblings.length, 1)) * Math.PI * 2 +
      CHAPTERS.findIndex((c) => c.id === topic.chapter) * 0.35 +
      seeded(index + 3) * 0.4;
    const jitter = 0.08 + seeded(index + 9) * 0.12;
    const x = Math.cos(angle) * (radius + jitter * seeded(index));
    const z = Math.sin(angle) * (radius + jitter * seeded(index + 1));
    return {
      ...topic,
      index,
      position: new THREE.Vector3(x, y + (seeded(index + 5) - 0.5) * 0.08, z),
    };
  });
}

const ease = [0.16, 1, 0.3, 1] as const;

const SUBJECTS: { id: SubjectId; label: string; blurb: string; accent: string }[] = [
  { id: "physics", label: "Physics", blurb: "Motion, force, energy & more", accent: "#4F8CFF" },
  { id: "chemistry", label: "Chemistry", blurb: "Atoms, bonds, solutions & more", accent: "#2DD4BF" },
  { id: "maths", label: "Maths", blurb: "Algebra, graphs, triangles & more", accent: "#F472B6" },
  { id: "english", label: "English", blurb: "Grammar, essays, letters & more", accent: "#F87171" },
  { id: "urdu", label: "Urdu", blurb: "مضمون، درخواست، تشریح و گرامر", accent: "#E879F9" },
  { id: "islamiat", label: "Islamiat", blurb: "ایمانیات، عبادات، سیرت ﷺ", accent: "#22C55E" },
  { id: "biology", label: "Biology", blurb: "Cells, tissues, mitosis & more", accent: "#34D399" },
  { id: "computer", label: "Computer Science", blurb: "Hardware, OS, flowcharts & more", accent: "#38BDF8" },
];

const GRADES: { id: GradeId; label: string; blurb: string }[] = [
  { id: "9", label: "Class 9", blurb: "Karachi Board · Science group map" },
  { id: "10", label: "Class 10", blurb: "Karachi Board · Science group map" },
  { id: "11", label: "Class 11", blurb: "Intermediate Part-I · Science group map" },
];

function enabledForSubject(subject: SubjectId, grade: GradeId): Record<ChapterId, boolean> {
  return Object.fromEntries(
    CHAPTERS.map((c) => [c.id, c.subject === subject && c.grade === grade]),
  ) as Record<ChapterId, boolean>;
}

function allOff(): Record<ChapterId, boolean> {
  return Object.fromEntries(CHAPTERS.map((c) => [c.id, false])) as Record<ChapterId, boolean>;
}

export function CurriculumGraph() {
  const mountRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<{
    setEnabled: (e: Record<ChapterId, boolean>) => void;
    setSelected: (id: string | null) => void;
  } | null>(null);

  const [activeGrade, setActiveGrade] = useState<GradeId | null>(null);
  const [activeSubject, setActiveSubject] = useState<SubjectId | null>(null);
  const [enabled, setEnabled] = useState<Record<ChapterId, boolean>>(allOff);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const nodes = useMemo(() => buildLayout(), []);
  const byId = useMemo(() => new Map(nodes.map((n) => [n.id, n])), [nodes]);

  const gradeSubjects = useMemo(() => {
    if (!activeGrade) return [];
    const ids = new Set(
      CHAPTERS.filter((c) => c.grade === activeGrade).map((c) => c.subject),
    );
    return SUBJECTS.filter((s) => ids.has(s.id));
  }, [activeGrade]);

  const subjectChapters = useMemo(
    () =>
      activeSubject && activeGrade
        ? CHAPTERS.filter((c) => c.subject === activeSubject && c.grade === activeGrade)
        : [],
    [activeSubject, activeGrade],
  );
  const subjectTopics = useMemo(() => {
    if (!activeSubject || !activeGrade) return [];
    const chapterIds = new Set(subjectChapters.map((c) => c.id));
    return TOPICS.filter((t) => chapterIds.has(t.chapter));
  }, [activeSubject, activeGrade, subjectChapters]);
  const subjectEdges = useMemo(() => {
    const ids = new Set(subjectTopics.map((t) => t.id));
    return EDGES.filter((e) => ids.has(e.topicId) && ids.has(e.prerequisiteId));
  }, [subjectTopics]);

  const selected = selectedId ? byId.get(selectedId) : null;
  const prereqs = selectedId
    ? EDGES.filter((e) => e.topicId === selectedId).map((e) => ({
        ...e,
        topic: byId.get(e.prerequisiteId),
      }))
    : [];
  const unlocks = selectedId
    ? EDGES.filter((e) => e.prerequisiteId === selectedId).map((e) => ({
        ...e,
        topic: byId.get(e.topicId),
      }))
    : [];

  function openGrade(grade: GradeId) {
    setActiveGrade(grade);
    setActiveSubject(null);
    setEnabled(allOff());
    setSelectedId(null);
  }

  function openSubject(subject: SubjectId) {
    if (!activeGrade) return;
    setActiveSubject(subject);
    setEnabled(enabledForSubject(subject, activeGrade));
    setSelectedId(null);
  }

  function backToSubjects() {
    setActiveSubject(null);
    setEnabled(allOff());
    setSelectedId(null);
  }

  function backToClasses() {
    setActiveGrade(null);
    setActiveSubject(null);
    setEnabled(allOff());
    setSelectedId(null);
  }

  useEffect(() => {
    apiRef.current?.setEnabled(enabled);
  }, [enabled]);

  useEffect(() => {
    apiRef.current?.setSelected(selectedId);
  }, [selectedId]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0a0a0a");
    scene.fog = new THREE.FogExp2("#0a0a0a", 0.045);

    const camera = new THREE.PerspectiveCamera(
      42,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0.15, 0.35, 4.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.domElement.style.touchAction = "none";
    mount.appendChild(renderer.domElement);

    const controls = new CameraControls(camera, renderer.domElement);
    controls.setLookAt(0.15, 0.35, 4.2, 0, 0.05, 0, false);
    controls.minDistance = 1.5;
    controls.maxDistance = 8.5;
    controls.maxPolarAngle = Math.PI * 0.92;
    controls.minPolarAngle = 0.12;
    controls.dollyToCursor = true;
    controls.smoothTime = 0.45;
    controls.draggingSmoothTime = 0.18;
    controls.azimuthRotateSpeed = 0.55;
    controls.polarRotateSpeed = 0.45;
    controls.dollySpeed = 0.55;
    controls.truckSpeed = 0.55;
    controls.restThreshold = 0.005;
    controls.mouseButtons.left = CameraControls.ACTION.ROTATE;
    controls.mouseButtons.right = CameraControls.ACTION.TRUCK;
    controls.mouseButtons.middle = CameraControls.ACTION.DOLLY;
    controls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;
    controls.touches.one = CameraControls.ACTION.TOUCH_ROTATE;
    controls.touches.two = CameraControls.ACTION.TOUCH_DOLLY_TRUCK;

    const clock = new THREE.Clock();
    const home = { px: 0.15, py: 0.35, pz: 4.2, tx: 0, ty: 0.05, tz: 0 };

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.DirectionalLight(0xffffff, 0.65);
    key.position.set(2, 4, 3);
    scene.add(key);

    const glowGeo = new THREE.RingGeometry(0.05, 1.8, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: "#1a2030",
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.rotation.x = -Math.PI / 2;
    glow.position.y = -1.25;
    scene.add(glow);

    const world = new THREE.Group();
    scene.add(world);

    const sphereGeo = new THREE.SphereGeometry(1, 16, 16);
    const meshes: THREE.Mesh[] = [];
    const baseScales: number[] = [];

    for (const node of nodes) {
      const mat = new THREE.MeshStandardMaterial({
        color: chapterColor(node.chapter),
        emissive: chapterColor(node.chapter),
        emissiveIntensity: 0.35,
        roughness: 0.35,
        metalness: 0.15,
        transparent: true,
        opacity: 1,
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      const scale = 0.03 + (1 - node.level) * 0.012 + seeded(node.index) * 0.012;
      mesh.scale.setScalar(scale);
      mesh.position.copy(node.position);
      mesh.userData = { id: node.id, chapter: node.chapter, index: node.index };
      world.add(mesh);
      meshes.push(mesh);
      baseScales.push(scale);
    }

    const fillerPositions: number[] = [];
    const fillerColors: number[] = [];
    const fillerChapters: ChapterId[] = [];
    const tmpColor = new THREE.Color();
    for (let i = 0; i < 420; i++) {
      const level = Math.pow(seeded(i + 40), 0.72);
      const y = level * 2.4 - 1.15;
      const radius = 0.12 + level * 1.7 + seeded(i + 2) * 0.25;
      const angle = seeded(i + 8) * Math.PI * 2;
      fillerPositions.push(
        Math.cos(angle) * radius,
        y + (seeded(i + 11) - 0.5) * 0.2,
        Math.sin(angle) * radius,
      );
      const ch = CHAPTERS[Math.floor(seeded(i + 17) * CHAPTERS.length)];
      fillerChapters.push(ch.id);
      tmpColor.set(ch.color);
      fillerColors.push(tmpColor.r, tmpColor.g, tmpColor.b);
    }
    const allFillerPos = new Float32Array(fillerPositions);
    const allFillerCol = new Float32Array(fillerColors);
    const fillerGeo = new THREE.BufferGeometry();
    fillerGeo.setAttribute("position", new THREE.BufferAttribute(allFillerPos.slice(), 3));
    fillerGeo.setAttribute("color", new THREE.BufferAttribute(allFillerCol.slice(), 3));
    const fillers = new THREE.Points(
      fillerGeo,
      new THREE.PointsMaterial({
        size: 0.022,
        vertexColors: true,
        transparent: true,
        opacity: 0.55,
        depthWrite: false,
        sizeAttenuation: true,
      }),
    );
    world.add(fillers);

    const edgeMeta: { a: number; b: number }[] = [];
    const allEdgePos: number[] = [];
    for (const edge of EDGES) {
      const a = byId.get(edge.prerequisiteId);
      const b = byId.get(edge.topicId);
      if (!a || !b) continue;
      edgeMeta.push({ a: a.index, b: b.index });
      allEdgePos.push(
        a.position.x,
        a.position.y,
        a.position.z,
        b.position.x,
        b.position.y,
        b.position.z,
      );
    }
    const edgeGeo = new THREE.BufferGeometry();
    edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(allEdgePos, 3));
    const edgeMat = new THREE.LineBasicMaterial({
      color: "#6a6a6a",
      transparent: true,
      opacity: 0.28,
    });
    const lines = new THREE.LineSegments(edgeGeo, edgeMat);
    world.add(lines);

    const highlightGeo = new THREE.BufferGeometry();
    const highlightMat = new THREE.LineBasicMaterial({
      color: "#ffffff",
      transparent: true,
      opacity: 0.95,
    });
    const highlightLines = new THREE.LineSegments(highlightGeo, highlightMat);
    world.add(highlightLines);

    let enabledState = Object.fromEntries(CHAPTERS.map((c) => [c.id, false])) as Record<
      ChapterId,
      boolean
    >;
    let selectedState: string | null = null;
    let frame = 0;

    function rebuildEdges() {
      const visible: number[] = [];
      for (const e of edgeMeta) {
        const na = nodes[e.a];
        const nb = nodes[e.b];
        if (!enabledState[na.chapter] || !enabledState[nb.chapter]) continue;
        visible.push(
          na.position.x,
          na.position.y,
          na.position.z,
          nb.position.x,
          nb.position.y,
          nb.position.z,
        );
      }
      edgeGeo.setAttribute("position", new THREE.Float32BufferAttribute(visible, 3));
      edgeGeo.computeBoundingSphere();

      const fPos: number[] = [];
      const fCol: number[] = [];
      for (let i = 0; i < fillerChapters.length; i++) {
        if (!enabledState[fillerChapters[i]]) continue;
        const i3 = i * 3;
        fPos.push(allFillerPos[i3], allFillerPos[i3 + 1], allFillerPos[i3 + 2]);
        fCol.push(allFillerCol[i3], allFillerCol[i3 + 1], allFillerCol[i3 + 2]);
      }
      fillerGeo.setAttribute("position", new THREE.Float32BufferAttribute(fPos, 3));
      fillerGeo.setAttribute("color", new THREE.Float32BufferAttribute(fCol, 3));
      fillerGeo.computeBoundingSphere();
      const anyOn = Object.values(enabledState).some(Boolean);
      fillers.visible = anyOn;
      lines.visible = anyOn;
      glow.visible = anyOn;
    }

    function applySelection() {
      const id = selectedState;
      const hi: number[] = [];

      for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const mat = mesh.material as THREE.MeshStandardMaterial;
        const node = nodes[i];
        mesh.visible = enabledState[node.chapter];

        const active = id === node.id;
        const isPrereq = id
          ? EDGES.some((e) => e.topicId === id && e.prerequisiteId === node.id)
          : false;
        const isUnlock = id
          ? EDGES.some((e) => e.prerequisiteId === id && e.topicId === node.id)
          : false;

        if (!id) {
          mat.emissiveIntensity = 0.35;
          mat.opacity = 1;
          mesh.scale.setScalar(baseScales[i]);
        } else if (active) {
          mat.emissiveIntensity = 0.95;
          mat.opacity = 1;
          mesh.scale.setScalar(baseScales[i] * 1.85);
        } else if (isPrereq || isUnlock) {
          mat.emissiveIntensity = 0.7;
          mat.opacity = 1;
          mesh.scale.setScalar(baseScales[i] * 1.3);
        } else {
          mat.emissiveIntensity = 0.08;
          mat.opacity = 0.22;
          mesh.scale.setScalar(baseScales[i] * 0.85);
        }
      }

      if (id) {
        for (const e of EDGES) {
          if (e.topicId !== id && e.prerequisiteId !== id) continue;
          const a = byId.get(e.prerequisiteId);
          const b = byId.get(e.topicId);
          if (!a || !b) continue;
          if (!enabledState[a.chapter] || !enabledState[b.chapter]) continue;
          hi.push(a.position.x, a.position.y, a.position.z, b.position.x, b.position.y, b.position.z);
        }
      }
      highlightGeo.setAttribute("position", new THREE.Float32BufferAttribute(hi, 3));
      highlightGeo.computeBoundingSphere();
      rebuildEdges();
    }

    apiRef.current = {
      setEnabled: (e) => {
        enabledState = e;
        applySelection();
      },
      setSelected: (id) => {
        selectedState = id;
        applySelection();
      },
    };
    applySelection();

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let downX = 0;
    let downY = 0;

    const onPointerDown = (event: PointerEvent) => {
      downX = event.clientX;
      downY = event.clientY;
    };

    const onPointerUp = (event: PointerEvent) => {
      const dx = event.clientX - downX;
      const dy = event.clientY - downY;
      if (dx * dx + dy * dy > 36) return;

      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObjects(meshes.filter((m) => m.visible), false);
      if (!hits.length) return;
      const id = hits[0].object.userData.id as string;
      setSelectedId((prev) => (prev === id ? null : id));
    };

    const onDblClick = () => {
      void controls.setLookAt(home.px, home.py, home.pz, home.tx, home.ty, home.tz, true);
      setSelectedId(null);
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("dblclick", onDblClick);

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      frame += 1;
      const delta = clock.getDelta();
      // Ease auto-spin — almost pause while inspecting a topic
      const spin = selectedState ? 0.00025 : 0.00115;
      world.rotation.y += spin;
      if (selectedState) {
        const idx = nodes.findIndex((n) => n.id === selectedState);
        if (idx >= 0) {
          const pulse = 1 + Math.sin(frame * 0.08) * 0.06;
          meshes[idx].scale.setScalar(baseScales[idx] * 1.85 * pulse);
        }
      }
      controls.update(delta);
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      apiRef.current = null;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("dblclick", onDblClick);
      controls.dispose();
      renderer.dispose();
      sphereGeo.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      fillerGeo.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      highlightGeo.dispose();
      highlightMat.dispose();
      for (const m of meshes) (m.material as THREE.Material).dispose();
      if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);
    };
  }, [byId, nodes]);

  const totalEdges = subjectEdges.length;
  const visibleCount = subjectTopics.filter((t) => enabled[t.chapter]).length;
  const subjectMeta = SUBJECTS.find((s) => s.id === activeSubject);
  const gradeMeta = GRADES.find((g) => g.id === activeGrade);

  return (
    <div
      data-lenis-prevent
      className="curriculum-shell relative h-dvh w-full overflow-hidden bg-[#0a0a0a] text-white"
    >
      <div ref={mountRef} className="absolute inset-0 touch-none" />

      {/* Step 1 — pick a class */}
      <AnimatePresence>
        {!activeGrade && (
          <motion.div
            key="class-picker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-0 z-20 flex items-start justify-center overflow-y-auto bg-[#0a0a0a]/92 p-5 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <div className="w-full max-w-lg">
              <p className="mb-3 text-[13px] font-semibold tracking-[0.2em]">JARVES</p>
              <h1 className="font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
                Pick a class<span className="text-[#e85d4c]">.</span>
              </h1>
              <p className="mt-3 text-[14px] text-[#a3a3a3]">
                Karachi Board (BSEK) — then choose a subject map.
              </p>
              <div className="mt-8 grid gap-3">
                {GRADES.map((g) => {
                  const topicCount = TOPICS.filter((t) => {
                    const ch = CHAPTERS.find((c) => c.id === t.chapter);
                    return ch?.grade === g.id;
                  }).length;
                  return (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => openGrade(g.id)}
                      className="group flex items-center justify-between rounded-2xl border border-[#2a2a2a] bg-[#121212] px-5 py-4 text-left transition hover:border-[#444] hover:bg-[#171717]"
                    >
                      <div>
                        <p className="text-lg font-medium">{g.label}</p>
                        <p className="text-[13px] text-[#888]">{g.blurb}</p>
                      </div>
                      <span className="text-[12px] text-[#666] transition group-hover:text-[#aaa]">
                        {topicCount} topics →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 2 — pick a subject */}
      <AnimatePresence>
        {activeGrade && !activeSubject && (
          <motion.div
            key="subject-picker"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease }}
            className="absolute inset-0 z-20 flex items-start justify-center overflow-y-auto bg-[#0a0a0a]/92 p-5 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <div className="w-full max-w-lg">
              <div className="mb-3 flex items-center gap-3">
                <p className="text-[13px] font-semibold tracking-[0.2em]">JARVES</p>
                <button
                  type="button"
                  onClick={backToClasses}
                  className="rounded-md border border-[#333] px-2.5 py-1 text-[11px] tracking-wide text-[#aaa] transition hover:border-[#555] hover:text-white"
                >
                  ← Classes
                </button>
              </div>
              <h1 className="font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">
                Pick a subject<span className="text-[#e85d4c]">.</span>
              </h1>
              <p className="mt-3 text-[14px] text-[#a3a3a3]">
                {gradeMeta?.label} · Karachi Board — open one map at a time.
              </p>
              <div className="mt-8 grid gap-3 pb-8">
                {gradeSubjects.map((s) => {
                  const count = TOPICS.filter((t) => {
                    const ch = CHAPTERS.find((c) => c.id === t.chapter);
                    return ch?.subject === s.id && ch.grade === activeGrade;
                  }).length;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => openSubject(s.id)}
                      className="group flex items-center justify-between rounded-2xl border border-[#2a2a2a] bg-[#121212] px-5 py-4 text-left transition hover:border-[#444] hover:bg-[#171717]"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="size-3 rounded-full"
                          style={{ background: s.accent, boxShadow: `0 0 16px ${s.accent}66` }}
                        />
                        <div>
                          <p className="text-lg font-medium">{s.label}</p>
                          <p className="text-[13px] text-[#888]">{s.blurb}</p>
                        </div>
                      </div>
                      <span className="text-[12px] text-[#666] transition group-hover:text-[#aaa]">
                        {count} topics →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3 — subject map UI */}
      <AnimatePresence>
        {activeGrade && activeSubject && (
          <motion.div
            key="subject-map-ui"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease }}
            className="pointer-events-none absolute inset-0 z-10 flex flex-col"
          >
            {/* Top copy */}
            <div className="shrink-0 p-5 md:max-w-[440px] md:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-3 md:mb-10 md:gap-4">
                <p className="text-[13px] font-semibold tracking-[0.2em] md:text-[15px]">JARVES</p>
                <button
                  type="button"
                  onClick={backToSubjects}
                  className="pointer-events-auto rounded-md border border-[#333] px-2.5 py-1 text-[11px] tracking-wide text-[#aaa] transition hover:border-[#555] hover:text-white"
                >
                  ← Subjects
                </button>
                <button
                  type="button"
                  onClick={backToClasses}
                  className="pointer-events-auto rounded-md border border-[#333] px-2.5 py-1 text-[11px] tracking-wide text-[#aaa] transition hover:border-[#555] hover:text-white"
                >
                  ← Classes
                </button>
              </div>
              <h1 className="font-serif text-[1.85rem] leading-[1.12] tracking-[-0.02em] sm:text-[2.2rem] md:text-[2.75rem]">
                {gradeMeta?.label} {subjectMeta?.label}
                <span className="text-[#e85d4c]">.</span>
              </h1>
              <p className="mt-3 hidden text-[14px] leading-relaxed text-[#a3a3a3] md:mt-5 md:block">
                Skill map for Sindh / Karachi Board (BSEK) — most-repeated past-paper topics
                (2015–2024).
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-[#a3a3a3] md:mt-4 md:text-[14px]">
                <span className="text-white">{visibleCount}</span> concepts and{" "}
                <span className="text-white">{totalEdges}</span> prerequisite links.{" "}
                <span className="hidden text-white sm:inline">Tap any dot</span>
                <span className="text-white sm:hidden">Tap a dot</span> to see what must come first.
              </p>
              <div className="pointer-events-auto mt-3 flex items-center gap-4 md:mt-6">
                <span
                  className="rounded-lg border border-[#333] bg-[#141414] px-3 py-1.5 text-[12px] text-[#ddd] md:px-3.5 md:py-2 md:text-[13px]"
                  style={{ borderColor: `${subjectMeta?.accent}55` }}
                >
                  {gradeMeta?.label?.toUpperCase()} · {subjectMeta?.label?.toUpperCase()} · BSEK
                </span>
              </div>
            </div>

            {/* Spacer — keeps the graph readable in the middle on phones */}
            <div className="min-h-0 flex-1" />

            {/* Chapter legend — Marble-style bottom on mobile, left dock on desktop */}
            <div className="pointer-events-auto shrink-0 p-4 md:absolute md:bottom-8 md:left-10 md:w-[340px] md:p-0">
              <div className="max-h-[34vh] overflow-y-auto rounded-xl border border-[#2a2a2a] bg-[#111]/cc p-3 backdrop-blur-md md:max-h-[42vh] md:p-3.5">
                <p className="mb-2 text-[10px] font-semibold tracking-[0.12em] text-[#888]">
                  CHAPTERS · CLICK TO TOGGLE
                </p>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 md:grid-cols-1">
                  {subjectChapters.map((ch) => {
                    const count = TOPICS.filter((t) => t.chapter === ch.id).length;
                    const on = enabled[ch.id];
                    return (
                      <li key={ch.id}>
                        <button
                          type="button"
                          onClick={() => setEnabled((e) => ({ ...e, [ch.id]: !e[ch.id] }))}
                          className="curriculum-legend-row flex w-full items-center gap-2 rounded-md px-0.5 py-0.5 text-left hover:bg-white/5"
                          style={{ opacity: on ? 1 : 0.35 }}
                        >
                          <span
                            className="inline-block size-2 shrink-0 rounded-full"
                            style={{ background: ch.color }}
                          />
                          <span className="min-w-0 flex-1 truncate text-[10px] font-medium tracking-wide text-[#c8c8c8] md:text-[11px]">
                            {ch.name.toUpperCase()}
                          </span>
                          <span className="shrink-0 text-[10px] text-[#888] md:text-[11px]">
                            {count}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <p className="mt-2 text-[12px] font-medium leading-snug text-white md:hidden">
                The open map of {gradeMeta?.label} {subjectMeta?.label}, built for Karachi Board.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {activeGrade && activeSubject && selected && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease }}
            className="curriculum-panel absolute inset-x-3 bottom-[calc(34vh+1.25rem)] z-20 max-h-[40vh] overflow-y-auto rounded-xl border border-[#2a2a2a] bg-[#111]/f2 p-4 shadow-2xl backdrop-blur-md md:inset-x-auto md:top-8 md:right-8 md:bottom-auto md:max-h-none md:w-[min(340px,calc(100vw-2rem))] md:p-5"
          >
            <button
              type="button"
              onClick={() => setSelectedId(null)}
              className="absolute top-3 right-3 text-[#777] hover:text-white"
              aria-label="Close"
            >
              ×
            </button>
            <p className="pr-6 text-[10px] tracking-[0.14em] text-[#888] uppercase">
              {CHAPTERS.find((c) => c.id === selected.chapter)?.subject} ·{" "}
              {CHAPTERS.find((c) => c.id === selected.chapter)?.name}
            </p>
            <h2 className="mt-1 font-serif text-xl leading-tight md:text-2xl">{selected.name}</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-[#a3a3a3]">{selected.description}</p>

            <div className="mt-4">
              <p className="text-[10px] tracking-[0.12em] text-[#888]">
                {prereqs.length} PREREQUISITES
              </p>
              <p className="mt-2 text-[12px] font-medium text-[#ccc]">Builds directly on</p>
              <ul className="mt-1 space-y-1">
                {prereqs.length === 0 && (
                  <li className="text-[12px] text-[#666]">Foundation topic — no prerequisites</li>
                )}
                {prereqs.map((p) => (
                  <li key={p.prerequisiteId}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(p.prerequisiteId)}
                      className="text-left text-[13px] text-white underline-offset-2 hover:underline"
                    >
                      {p.topic?.name}
                    </button>
                    <p className="text-[11px] text-[#777]">{p.reason}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <p className="text-[12px] font-medium text-[#ccc]">Unlocks next</p>
              <ul className="mt-1 space-y-1">
                {unlocks.length === 0 && (
                  <li className="text-[12px] text-[#666]">End of this branch</li>
                )}
                {unlocks.map((u) => (
                  <li key={u.topicId}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(u.topicId)}
                      className="text-left text-[13px] text-white underline-offset-2 hover:underline"
                    >
                      {u.topic?.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {activeGrade && activeSubject && (
        <p className="pointer-events-none absolute right-4 bottom-[calc(34vh+0.35rem)] z-10 hidden text-[10px] text-[#666] sm:right-8 md:bottom-6 md:block md:text-[11px]">
          Drag to spin · Scroll to zoom · Tap a dot · Double-tap to reset
        </p>
      )}
    </div>
  );
}
