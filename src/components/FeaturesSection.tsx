"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

type FeatureTab = {
  id: string;
  label: string;
  badge: string;
  title: string;
  description: string;
  chatTitle: string;
  chatMessage: string;
};

const FEATURE_TABS: FeatureTab[] = [
  {
    id: "study-plan",
    label: "Study Plan",
    badge: "Study Plan",
    title: "Know exactly what comes next",
    description:
      "Spark.E builds a personalized study schedule around your materials and deadlines, breaking everything into clear milestones so you always know exactly where to focus.",
    chatTitle: "Study Plan: Weekly Schedule",
    chatMessage:
      "Your next milestone is Chapter 4 review. Want me to build flashcards from your uploaded notes?",
  },
  {
    id: "spark-e",
    label: "Spark.E",
    badge: "Spark.E",
    title: "Your AI tutor that actually knows your coursework",
    description:
      "Trained on your uploaded notes and materials, Spark.E answers questions, generates quizzes, and explains concepts around the clock via chat or voice.",
    chatTitle: "Chat: Protein Structure and Foldin...",
    chatMessage:
      "Let's jump into Protein Structure Hierarchy. How do you learn best? Examples, analogies, visuals, or something else?",
  },
  {
    id: "tutor-me",
    label: "Tutor Me",
    badge: "Tutor Me",
    title: "One-on-one tutoring powered by your materials",
    description:
      "Get step-by-step explanations tailored to how you learn, with practice problems and feedback based on the content you already uploaded.",
    chatTitle: "Tutor Me: Organic Chemistry",
    chatMessage:
      "Let's walk through reaction mechanisms together. Tell me which topic feels hardest right now.",
  },
  {
    id: "live-lecture",
    label: "Live Lecture",
    badge: "Live Lecture",
    title: "Turn lectures into structured notes instantly",
    description:
      "Record or upload lectures and get organized notes, key concepts, and follow-up questions while the material is still fresh.",
    chatTitle: "Live Lecture: Biology 201",
    chatMessage:
      "I captured 12 key concepts from today's lecture. Want a summary or practice questions first?",
  },
  {
    id: "notes",
    label: "Notes",
    badge: "Notes",
    title: "Smarter notes from everything you upload",
    description:
      "Transform PDFs, slides, and documents into clean, searchable notes with highlights, summaries, and linked study activities.",
    chatTitle: "Notes: History Unit 3",
    chatMessage:
      "I organized your notes into 6 sections. Should I generate a review sheet from the key terms?",
  },
  {
    id: "arcade",
    label: "Arcade",
    badge: "Arcade",
    title: "Learn faster with game-style study modes",
    description:
      "Reinforce what you know through quick, engaging study games built from your own course materials.",
    chatTitle: "Arcade: Vocabulary Sprint",
    chatMessage:
      "Ready for a 5-minute review game? I pulled 20 terms from your latest upload.",
  },
];

function ChatMockup({ title, message }: { title: string; message: string }) {
  return (
    <div className="flex h-full w-full max-w-[420px] flex-col gap-4 rounded-xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
      <p className="text-[13px] font-semibold text-[#1A1A1A]">{title}</p>
      <div className="flex items-start gap-2.5">
        <div className="mt-0.5 h-7 w-7 shrink-0 rounded-full bg-[#7C3AED]" />
        <p className="text-[12px] leading-[1.45] text-[#374151]">{message}</p>
      </div>
      <div className="mt-auto">
        <div className="rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-3 py-2.5">
          <p className="text-[12px] text-[#9CA3AF]">Write something...</p>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [activeId, setActiveId] = useState("spark-e");
  const activeTab =
    FEATURE_TABS.find((tab) => tab.id === activeId) ?? FEATURE_TABS[1];

  return (
    <section className="flex w-full flex-col items-center gap-5 bg-[#f9f9fb] px-6 py-12 sm:px-12 lg:gap-5 lg:px-[120px] lg:py-20 lg:pb-[88px]">
      <p className="text-center text-[14px] font-medium text-[#0A0A0A]">
        Features
      </p>

      <h2 className="max-w-[900px] text-center text-[28px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[36px] lg:text-[44px]">
        Unleash the power of your course materials
      </h2>

      <p className="max-w-[720px] text-center text-[15px] leading-[1.5] text-[#4A4A4A] sm:text-[16px]">
        Upload your materials once and unlock a suite of tools designed to help
        you understand faster, retain longer, and stress less.
      </p>

      <div className="w-full max-w-[1200px] overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white">
        <div className="flex h-14 overflow-x-auto border-b border-[#E5E5E5]">
          {FEATURE_TABS.map((tab, index) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`relative flex min-w-[120px] flex-1 items-center justify-center px-3 text-[14px] transition-colors sm:min-w-0 ${
                  index < FEATURE_TABS.length - 1
                    ? "border-r border-[#E5E5E5]"
                    : ""
                } ${
                  isActive
                    ? "font-semibold text-[#0A0A0A]"
                    : "font-medium text-[#1A1A1A] hover:text-[#0A0A0A]"
                }`}
              >
                {tab.label}
                {isActive ? (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#0A0A0A]" />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col gap-10 p-6 sm:p-8 lg:flex-row lg:p-10">
          <div className="flex min-h-[320px] flex-1 items-center justify-center rounded-2xl bg-[#DBEAFE] p-6 sm:min-h-[400px] sm:p-8">
            <ChatMockup
              title={activeTab.chatTitle}
              message={activeTab.chatMessage}
            />
          </div>

          <div className="flex w-full flex-col justify-center gap-4 lg:w-[440px] lg:shrink-0">
            <p className="text-[14px] font-bold text-[#0A0A0A]">
              {activeTab.badge}
            </p>
            <h3 className="max-w-[400px] text-[28px] font-normal leading-[1.2] tracking-[-0.5px] text-[#0A0A0A] sm:text-[32px] lg:text-[36px]">
              {activeTab.title}
            </h3>
            <p className="max-w-[400px] text-[15px] leading-[1.55] text-[#4A4A4A] sm:text-[16px]">
              {activeTab.description}
            </p>
            <div className="flex flex-wrap items-center gap-5 pt-1">
              <button
                type="button"
                className="rounded-full bg-[#004ff8] px-6 py-3 text-[14px] font-semibold text-white"
              >
                Start Now
              </button>
              <button
                type="button"
                className="flex items-center gap-1 text-[14px] font-semibold text-[#0A0A0A]"
              >
                Explore
                <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
