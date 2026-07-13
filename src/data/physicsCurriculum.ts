export type SubjectId =
  | "physics"
  | "chemistry"
  | "maths"
  | "english"
  | "urdu"
  | "islamiat"
  | "biology"
  | "computer";

export type ChapterId =
  | "measurement"
  | "kinematics"
  | "dynamics"
  | "turning"
  | "energy"
  | "matter"
  | "thermal"
  | "heat"
  | "circuits"
  | "magnetism"
  | "chem-fundamentals"
  | "chem-atomic"
  | "chem-periodic"
  | "chem-molecules"
  | "chem-states"
  | "chem-solutions"
  | "math-reals"
  | "math-logs"
  | "math-sets"
  | "math-algebra"
  | "math-factor"
  | "math-fractions"
  | "math-linear"
  | "math-graphs"
  | "math-triangles"
  | "eng-reading"
  | "eng-grammar"
  | "eng-essay"
  | "eng-letter"
  | "eng-dialogue"
  | "eng-story"
  | "eng-translation"
  | "eng-textbook"
  | "urdu-tashreeh"
  | "urdu-summary"
  | "urdu-essay"
  | "urdu-application"
  | "urdu-letter"
  | "urdu-idioms"
  | "urdu-grammar"
  | "urdu-textbook"
  | "isl-beliefs"
  | "isl-ibadat"
  | "isl-seerah"
  | "isl-akhlaq"
  | "isl-rights"
  | "isl-quran-hadith"
  | "isl-daily"
  | "bio-intro"
  | "bio-problem"
  | "bio-diversity"
  | "bio-cells"
  | "bio-cycle"
  | "cs-basics"
  | "cs-systems"
  | "cs-storage"
  | "cs-io"
  | "cs-os"
  | "cs-problem"
  | "cs-flow";

export type Topic = {
  id: string;
  name: string;
  chapter: ChapterId;
  /** 0 = foundation tip (bottom), 1 = advanced (top) */
  level: number;
  description: string;
};

export type Edge = {
  topicId: string;
  prerequisiteId: string;
  reason: string;
};

export const CHAPTERS: {
  id: ChapterId;
  name: string;
  color: string;
  subject: SubjectId;
  priority: "high" | "medium";
}[] = [
  { id: "kinematics", name: "Kinematics", color: "#4F8CFF", subject: "physics", priority: "high" },
  { id: "dynamics", name: "Dynamics", color: "#7EB8D8", subject: "physics", priority: "high" },
  { id: "energy", name: "Work and Energy", color: "#5BA3A3", subject: "physics", priority: "high" },
  { id: "measurement", name: "Measurement", color: "#E8C547", subject: "physics", priority: "high" },
  { id: "turning", name: "Turning Effect", color: "#E89A5C", subject: "physics", priority: "high" },
  { id: "matter", name: "Properties of Matter", color: "#E07A7A", subject: "physics", priority: "medium" },
  { id: "thermal", name: "Thermal Properties", color: "#C96B8A", subject: "physics", priority: "medium" },
  { id: "heat", name: "Transfer of Heat", color: "#A85C9A", subject: "physics", priority: "medium" },
  { id: "circuits", name: "Electric Circuits", color: "#8B7AE0", subject: "physics", priority: "medium" },
  { id: "magnetism", name: "Magnetism", color: "#6B8AE0", subject: "physics", priority: "medium" },
  { id: "chem-molecules", name: "Structure of Molecules", color: "#7CDA6A", subject: "chemistry", priority: "high" },
  { id: "chem-atomic", name: "Atomic Structure", color: "#2DD4BF", subject: "chemistry", priority: "high" },
  { id: "chem-periodic", name: "Periodic Table", color: "#34D399", subject: "chemistry", priority: "high" },
  { id: "chem-fundamentals", name: "Fundamentals of Chemistry", color: "#A3E635", subject: "chemistry", priority: "high" },
  { id: "chem-solutions", name: "Solutions", color: "#14B8A6", subject: "chemistry", priority: "high" },
  { id: "chem-states", name: "Physical States of Matter", color: "#84CC16", subject: "chemistry", priority: "high" },
  // Maths — highest priority board units
  { id: "math-factor", name: "Factorization", color: "#F472B6", subject: "maths", priority: "high" },
  { id: "math-linear", name: "Linear Equations & Inequalities", color: "#FB7185", subject: "maths", priority: "high" },
  { id: "math-fractions", name: "Algebraic Manipulation", color: "#F9A8D4", subject: "maths", priority: "high" },
  { id: "math-triangles", name: "Congruent Triangles", color: "#E879F9", subject: "maths", priority: "high" },
  { id: "math-algebra", name: "Algebraic Expressions", color: "#C084FC", subject: "maths", priority: "high" },
  { id: "math-logs", name: "Logarithms", color: "#A78BFA", subject: "maths", priority: "high" },
  { id: "math-graphs", name: "Linear Graphs", color: "#818CF8", subject: "maths", priority: "high" },
  { id: "math-reals", name: "Real & Radical Numbers", color: "#FBBF24", subject: "maths", priority: "high" },
  { id: "math-sets", name: "Sets", color: "#F59E0B", subject: "maths", priority: "high" },
  // English
  { id: "eng-grammar", name: "Grammar", color: "#F87171", subject: "english", priority: "high" },
  { id: "eng-essay", name: "Essay Writing", color: "#FB923C", subject: "english", priority: "high" },
  { id: "eng-letter", name: "Letter & Application", color: "#FDBA74", subject: "english", priority: "high" },
  { id: "eng-reading", name: "Reading Comprehension", color: "#EF4444", subject: "english", priority: "high" },
  { id: "eng-dialogue", name: "Dialogue Writing", color: "#FCA5A5", subject: "english", priority: "high" },
  { id: "eng-story", name: "Story Writing", color: "#F97316", subject: "english", priority: "high" },
  { id: "eng-translation", name: "Translation", color: "#EA580C", subject: "english", priority: "high" },
  { id: "eng-textbook", name: "Textbook Exercises", color: "#DC2626", subject: "english", priority: "high" },
  // Urdu
  { id: "urdu-essay", name: "مضمون نویسی", color: "#E879F9", subject: "urdu", priority: "high" },
  { id: "urdu-application", name: "درخواست نویسی", color: "#D946EF", subject: "urdu", priority: "high" },
  { id: "urdu-letter", name: "خط نویسی", color: "#C026D3", subject: "urdu", priority: "high" },
  { id: "urdu-tashreeh", name: "تشریح", color: "#A855F7", subject: "urdu", priority: "high" },
  { id: "urdu-summary", name: "خلاصہ نویسی", color: "#9333EA", subject: "urdu", priority: "high" },
  { id: "urdu-idioms", name: "محاورے و ضرب الامثال", color: "#7E22CE", subject: "urdu", priority: "high" },
  { id: "urdu-grammar", name: "اردو گرامر", color: "#6B21A8", subject: "urdu", priority: "high" },
  { id: "urdu-textbook", name: "درسی سوالات", color: "#581C87", subject: "urdu", priority: "high" },
  // Islamiat
  { id: "isl-beliefs", name: "ایمانیات", color: "#22C55E", subject: "islamiat", priority: "high" },
  { id: "isl-ibadat", name: "عبادات", color: "#16A34A", subject: "islamiat", priority: "high" },
  { id: "isl-seerah", name: "سیرت النبی ﷺ", color: "#15803D", subject: "islamiat", priority: "high" },
  { id: "isl-akhlaq", name: "اخلاقیات و معاشرت", color: "#4ADE80", subject: "islamiat", priority: "high" },
  { id: "isl-rights", name: "حقوق العباد", color: "#86EFAC", subject: "islamiat", priority: "high" },
  { id: "isl-quran-hadith", name: "آیات و احادیث", color: "#BBF7D0", subject: "islamiat", priority: "high" },
  { id: "isl-daily", name: "اسلامی تعلیمات", color: "#14532D", subject: "islamiat", priority: "high" },
  // Biology
  { id: "bio-intro", name: "Introduction to Biology", color: "#34D399", subject: "biology", priority: "high" },
  { id: "bio-problem", name: "Solving a Biological Problem", color: "#10B981", subject: "biology", priority: "high" },
  { id: "bio-diversity", name: "Biodiversity", color: "#059669", subject: "biology", priority: "high" },
  { id: "bio-cells", name: "Cells and Tissues", color: "#047857", subject: "biology", priority: "high" },
  { id: "bio-cycle", name: "Cell Cycle", color: "#065F46", subject: "biology", priority: "high" },
  // Computer Science
  { id: "cs-basics", name: "Basics of IT", color: "#38BDF8", subject: "computer", priority: "high" },
  { id: "cs-systems", name: "Computer Systems", color: "#0EA5E9", subject: "computer", priority: "high" },
  { id: "cs-storage", name: "Storage Devices", color: "#0284C7", subject: "computer", priority: "high" },
  { id: "cs-io", name: "Input & Output Devices", color: "#0369A1", subject: "computer", priority: "high" },
  { id: "cs-os", name: "Operating Systems", color: "#7DD3FC", subject: "computer", priority: "high" },
  { id: "cs-problem", name: "Problem Solving", color: "#BAE6FD", subject: "computer", priority: "high" },
  { id: "cs-flow", name: "Flowcharts & Algorithms", color: "#075985", subject: "computer", priority: "high" },
];

export const TOPICS: Topic[] = [
  // Measurement — foundation
  { id: "base-qty", name: "Base & Derived Quantities", chapter: "measurement", level: 0.05, description: "Physical quantities and how they are classified." },
  { id: "si-units", name: "SI Units", chapter: "measurement", level: 0.08, description: "Standard units used in Physics." },
  { id: "least-count", name: "Least Count", chapter: "measurement", level: 0.12, description: "Smallest measurable value of an instrument." },
  { id: "vernier", name: "Vernier Calipers", chapter: "measurement", level: 0.16, description: "Measure length with vernier scale." },
  { id: "screw-gauge", name: "Screw Gauge", chapter: "measurement", level: 0.18, description: "Measure small diameters precisely." },
  { id: "sig-figs", name: "Significant Figures", chapter: "measurement", level: 0.14, description: "Report measured values correctly." },
  { id: "sci-notation", name: "Scientific Notation", chapter: "measurement", level: 0.1, description: "Write very large/small numbers." },

  // Kinematics
  { id: "distance-disp", name: "Distance & Displacement", chapter: "kinematics", level: 0.22, description: "Scalar distance vs vector displacement." },
  { id: "speed-vel", name: "Speed & Velocity", chapter: "kinematics", level: 0.28, description: "How fast and in which direction." },
  { id: "accel", name: "Acceleration & Deceleration", chapter: "kinematics", level: 0.34, description: "Rate of change of velocity." },
  { id: "uniform", name: "Uniform & Non-uniform Motion", chapter: "kinematics", level: 0.3, description: "Constant vs changing speed." },
  { id: "eq-motion", name: "Equations of Motion", chapter: "kinematics", level: 0.42, description: "v = u + at and related equations." },
  { id: "dt-graph", name: "Distance-Time Graph", chapter: "kinematics", level: 0.36, description: "Read motion from s–t graphs." },
  { id: "vt-graph", name: "Velocity-Time Graph", chapter: "kinematics", level: 0.4, description: "Read motion from v–t graphs." },

  // Dynamics
  { id: "force", name: "Force and its Effects", chapter: "dynamics", level: 0.38, description: "Push/pull that can change motion." },
  { id: "n1", name: "Newton's First Law", chapter: "dynamics", level: 0.44, description: "Inertia — objects resist change in motion." },
  { id: "n2", name: "Newton's Second Law", chapter: "dynamics", level: 0.5, description: "F = ma." },
  { id: "n3", name: "Newton's Third Law", chapter: "dynamics", level: 0.48, description: "Action and reaction pairs." },
  { id: "mass-weight", name: "Mass vs Weight", chapter: "dynamics", level: 0.46, description: "Amount of matter vs gravitational force." },
  { id: "momentum", name: "Momentum", chapter: "dynamics", level: 0.54, description: "p = mv." },
  { id: "cons-momentum", name: "Conservation of Momentum", chapter: "dynamics", level: 0.6, description: "Total momentum stays constant in a closed system." },

  // Turning effect
  { id: "torque", name: "Moment of Force (Torque)", chapter: "turning", level: 0.52, description: "Turning effect of a force." },
  { id: "couple", name: "Couple", chapter: "turning", level: 0.56, description: "Two equal opposite forces causing rotation." },
  { id: "cog", name: "Center of Gravity", chapter: "turning", level: 0.5, description: "Point where weight acts." },
  { id: "equilibrium", name: "Equilibrium", chapter: "turning", level: 0.58, description: "No net force or net torque." },
  { id: "eq-conditions", name: "Conditions of Equilibrium", chapter: "turning", level: 0.62, description: "ΣF = 0 and Στ = 0." },

  // Work & energy
  { id: "work", name: "Work", chapter: "energy", level: 0.55, description: "W = F·d when force causes displacement." },
  { id: "power", name: "Power", chapter: "energy", level: 0.6, description: "Rate of doing work." },
  { id: "ke", name: "Kinetic Energy", chapter: "energy", level: 0.64, description: "Energy due to motion." },
  { id: "pe", name: "Potential Energy", chapter: "energy", level: 0.64, description: "Energy due to position." },
  { id: "cons-energy", name: "Conservation of Energy", chapter: "energy", level: 0.7, description: "Energy transforms but total stays constant." },

  // Medium chapters
  { id: "density", name: "Density", chapter: "matter", level: 0.45, description: "Mass per unit volume." },
  { id: "pressure", name: "Pressure", chapter: "matter", level: 0.5, description: "Force per unit area." },
  { id: "elasticity", name: "Elasticity", chapter: "matter", level: 0.55, description: "Return to original shape after force." },

  { id: "heat-temp", name: "Heat & Temperature", chapter: "thermal", level: 0.58, description: "Thermal energy vs degree of hotness." },
  { id: "specific-heat", name: "Specific Heat", chapter: "thermal", level: 0.66, description: "Heat needed to raise temperature." },
  { id: "latent", name: "Latent Heat", chapter: "thermal", level: 0.7, description: "Heat during change of state." },

  { id: "conduction", name: "Conduction", chapter: "heat", level: 0.68, description: "Heat through solids by contact." },
  { id: "convection", name: "Convection", chapter: "heat", level: 0.7, description: "Heat by fluid movement." },
  { id: "radiation", name: "Radiation", chapter: "heat", level: 0.72, description: "Heat as electromagnetic waves." },

  { id: "current", name: "Electric Current", chapter: "circuits", level: 0.65, description: "Flow of charge." },
  { id: "voltage", name: "Voltage", chapter: "circuits", level: 0.68, description: "Potential difference." },
  { id: "resistance", name: "Resistance", chapter: "circuits", level: 0.72, description: "Opposition to current." },
  { id: "ohm", name: "Ohm's Law", chapter: "circuits", level: 0.78, description: "V = IR." },

  { id: "magnets", name: "Magnets", chapter: "magnetism", level: 0.7, description: "North and south poles." },
  { id: "mag-field", name: "Magnetic Field", chapter: "magnetism", level: 0.76, description: "Region around a magnet." },
  { id: "electromagnet", name: "Electromagnet", chapter: "magnetism", level: 0.82, description: "Magnetism from electric current." },

  // ——— Chemistry Ch.1 Fundamentals ———
  { id: "chem-branches", name: "Branches of Chemistry", chapter: "chem-fundamentals", level: 0.04, description: "Main branches and what each studies." },
  { id: "chem-props", name: "Physical & Chemical Properties", chapter: "chem-fundamentals", level: 0.08, description: "Properties that change with / without new substances." },
  { id: "chem-ecm", name: "Elements, Compounds & Mixtures", chapter: "chem-fundamentals", level: 0.12, description: "How matter is classified." },
  { id: "chem-mixtures", name: "Homogeneous & Heterogeneous Mixtures", chapter: "chem-fundamentals", level: 0.16, description: "Uniform vs non-uniform mixtures." },
  { id: "chem-atomic-mass-no", name: "Atomic Number & Mass Number", chapter: "chem-fundamentals", level: 0.2, description: "Z and A — protons and nucleons." },
  { id: "chem-balance", name: "Balancing Chemical Equations", chapter: "chem-fundamentals", level: 0.28, description: "Conserve atoms on both sides of a reaction." },
  { id: "chem-valency", name: "Valency & Chemical Formulas", chapter: "chem-fundamentals", level: 0.24, description: "Write formulas using valency." },

  // ——— Chemistry Ch.2 Atomic Structure ———
  { id: "chem-discovery", name: "Discovery of e⁻, p⁺ & n⁰", chapter: "chem-atomic", level: 0.22, description: "How electron, proton and neutron were found." },
  { id: "chem-bohr", name: "Bohr's Atomic Model", chapter: "chem-atomic", level: 0.32, description: "Electrons in fixed orbits / shells." },
  { id: "chem-config", name: "Electronic Configuration", chapter: "chem-atomic", level: 0.38, description: "How electrons fill shells (2, 8, 8…)." },
  { id: "chem-isotopes", name: "Isotopes", chapter: "chem-atomic", level: 0.34, description: "Same Z, different A." },
  { id: "chem-ram", name: "Relative Atomic Mass", chapter: "chem-atomic", level: 0.4, description: "Average mass relative to C-12." },
  { id: "chem-isotope-uses", name: "Uses of Isotopes", chapter: "chem-atomic", level: 0.44, description: "Medicine, industry and dating uses." },

  // ——— Chemistry Ch.3 Periodic Table ———
  { id: "chem-mpt", name: "Modern Periodic Table", chapter: "chem-periodic", level: 0.42, description: "Elements ordered by atomic number." },
  { id: "chem-groups-periods", name: "Groups and Periods", chapter: "chem-periodic", level: 0.46, description: "Columns = groups, rows = periods." },
  { id: "chem-trends", name: "Periodic Trends", chapter: "chem-periodic", level: 0.52, description: "Size, reactivity and related trends." },
  { id: "chem-metals", name: "Metals, Non-metals & Metalloids", chapter: "chem-periodic", level: 0.48, description: "Classify elements by properties." },
  { id: "chem-valency-group", name: "Valency from Group Number", chapter: "chem-periodic", level: 0.54, description: "Predict valency from the group." },

  // ——— Chemistry Ch.4 Structure of Molecules ———
  { id: "chem-ionic", name: "Ionic Bond", chapter: "chem-molecules", level: 0.56, description: "Transfer of electrons between atoms." },
  { id: "chem-covalent", name: "Covalent Bond", chapter: "chem-molecules", level: 0.58, description: "Sharing of electron pairs." },
  { id: "chem-ionic-comp", name: "Electrovalent Compounds", chapter: "chem-molecules", level: 0.62, description: "Compounds formed by ionic bonding." },
  { id: "chem-cov-comp", name: "Covalent Compounds", chapter: "chem-molecules", level: 0.64, description: "Compounds formed by sharing electrons." },
  { id: "chem-lewis", name: "Lewis Dot Structures", chapter: "chem-molecules", level: 0.66, description: "Show valence electrons in dots." },
  { id: "chem-ionic-vs-cov", name: "Ionic vs Covalent Properties", chapter: "chem-molecules", level: 0.7, description: "Compare melting point, conductivity, etc." },

  // ——— Chemistry Ch.5 Physical States ———
  { id: "chem-kmt", name: "Kinetic Molecular Theory", chapter: "chem-states", level: 0.5, description: "Particles in constant motion." },
  { id: "chem-slg", name: "Solids, Liquids & Gases", chapter: "chem-states", level: 0.55, description: "Particle arrangement and properties." },
  { id: "chem-diffusion", name: "Diffusion", chapter: "chem-states", level: 0.6, description: "Mixing of particles without stirring." },
  { id: "chem-evap", name: "Evaporation & Condensation", chapter: "chem-states", level: 0.64, description: "Liquid ↔ vapour changes." },
  { id: "chem-melt-boil", name: "Melting & Boiling Points", chapter: "chem-states", level: 0.68, description: "Temperatures of phase change." },

  // ——— Chemistry Ch.6 Solutions ———
  { id: "chem-solute", name: "Solute & Solvent", chapter: "chem-solutions", level: 0.58, description: "What dissolves and what does the dissolving." },
  { id: "chem-sol-types", name: "Types of Solutions", chapter: "chem-solutions", level: 0.62, description: "Solid, liquid and gaseous solutions." },
  { id: "chem-conc", name: "Concentration of Solutions", chapter: "chem-solutions", level: 0.72, description: "How much solute in a given amount of solution." },
  { id: "chem-solubility", name: "Solubility", chapter: "chem-solutions", level: 0.68, description: "Maximum solute that can dissolve." },
  { id: "chem-sat", name: "Unsaturated, Saturated & Supersaturated", chapter: "chem-solutions", level: 0.74, description: "How full a solution is of solute." },
  { id: "chem-conc-num", name: "Concentration Numericals", chapter: "chem-solutions", level: 0.78, description: "Percentage / concentration calculations." },

  // ——— Maths Unit 1 Real & Radical Numbers ———
  { id: "math-reals-props", name: "Real Numbers & Properties", chapter: "math-reals", level: 0.06, description: "Real numbers and basic properties." },
  { id: "math-indices", name: "Laws of Indices", chapter: "math-reals", level: 0.12, description: "Power rules for simplifying expressions." },
  { id: "math-surds", name: "Simplification of Surds", chapter: "math-reals", level: 0.18, description: "Simplify radical expressions." },
  { id: "math-rationalize", name: "Rationalization of Denominators", chapter: "math-reals", level: 0.22, description: "Clear radicals from denominators." },
  { id: "math-sci-not", name: "Scientific Notation", chapter: "math-reals", level: 0.14, description: "Write numbers as a × 10ⁿ." },

  // ——— Maths Unit 2 Logarithms ———
  { id: "math-log-def", name: "Definition of Logarithm", chapter: "math-logs", level: 0.26, description: "log as the inverse of exponentiation." },
  { id: "math-log-laws", name: "Laws of Logarithms", chapter: "math-logs", level: 0.34, description: "Product, quotient and power laws." },
  { id: "math-char-mant", name: "Characteristic & Mantissa", chapter: "math-logs", level: 0.38, description: "Parts of a common logarithm." },
  { id: "math-common-log", name: "Common Logarithms", chapter: "math-logs", level: 0.36, description: "Logs with base 10." },
  { id: "math-log-expr", name: "Solving Logarithmic Expressions", chapter: "math-logs", level: 0.42, description: "Evaluate and simplify log expressions." },

  // ——— Maths Unit 3 Sets ———
  { id: "math-set-form", name: "Roster & Set-builder Form", chapter: "math-sets", level: 0.1, description: "Two ways to write a set." },
  { id: "math-set-ops", name: "Union, Intersection, Difference", chapter: "math-sets", level: 0.16, description: "Basic set operations." },
  { id: "math-complement", name: "Complement of a Set", chapter: "math-sets", level: 0.2, description: "Elements not in the set." },
  { id: "math-venn", name: "Venn Diagrams", chapter: "math-sets", level: 0.24, description: "Picture sets and operations." },
  { id: "math-set-word", name: "Word Problems on Sets", chapter: "math-sets", level: 0.3, description: "Apply set ops to real problems." },

  // ——— Maths Unit 4 Algebraic Expressions ———
  { id: "math-expand", name: "Expansion & Simplification", chapter: "math-algebra", level: 0.28, description: "Expand and tidy algebraic expressions." },
  { id: "math-identities", name: "Identities (a±b)², a²−b²", chapter: "math-algebra", level: 0.34, description: "Standard algebraic identities." },
  { id: "math-hcf-lcm", name: "HCF & LCM of Expressions", chapter: "math-algebra", level: 0.4, description: "Highest common factor and LCM." },
  { id: "math-alg-factor-intro", name: "Intro to Factorization", chapter: "math-algebra", level: 0.38, description: "Factor expressions using identities." },

  // ——— Maths Unit 5 Factorization ———
  { id: "math-common-factor", name: "Taking Common Factor", chapter: "math-factor", level: 0.4, description: "Factor by pulling out the common term." },
  { id: "math-grouping", name: "Grouping Method", chapter: "math-factor", level: 0.46, description: "Factor by grouping terms." },
  { id: "math-diff-sq", name: "Difference of Squares", chapter: "math-factor", level: 0.48, description: "a² − b² = (a−b)(a+b)." },
  { id: "math-perf-sq", name: "Perfect Square Trinomials", chapter: "math-factor", level: 0.5, description: "Recognize and factor perfect squares." },
  { id: "math-cubic-factor", name: "Factorization of Cubics", chapter: "math-factor", level: 0.56, description: "Factor cubic expressions." },

  // ——— Maths Unit 6 Algebraic Manipulation ———
  { id: "math-alg-frac-simp", name: "Simplifying Algebraic Fractions", chapter: "math-fractions", level: 0.52, description: "Cancel common factors in fractions." },
  { id: "math-alg-frac-add", name: "Add & Subtract Fractions", chapter: "math-fractions", level: 0.58, description: "Combine algebraic fractions." },
  { id: "math-alg-frac-mul", name: "Multiply & Divide Fractions", chapter: "math-fractions", level: 0.56, description: "Product and quotient of fractions." },
  { id: "math-complex-frac", name: "Complex Fractions", chapter: "math-fractions", level: 0.64, description: "Fractions within fractions." },

  // ——— Maths Unit 7 Linear Equations ———
  { id: "math-lin-eq", name: "Solving Linear Equations", chapter: "math-linear", level: 0.54, description: "Solve ax + b = c type equations." },
  { id: "math-lin-word", name: "Word Problems (Linear)", chapter: "math-linear", level: 0.62, description: "Translate stories into equations." },
  { id: "math-ineq", name: "Linear Inequalities", chapter: "math-linear", level: 0.58, description: "Solve and interpret inequalities." },
  { id: "math-num-line", name: "Inequalities on Number Line", chapter: "math-linear", level: 0.6, description: "Graph solutions on a number line." },

  // ——— Maths Unit 8 Linear Graphs ———
  { id: "math-cartesian", name: "Cartesian Coordinates", chapter: "math-graphs", level: 0.48, description: "x–y plane and ordered pairs." },
  { id: "math-plot", name: "Plotting Points", chapter: "math-graphs", level: 0.52, description: "Mark points on the plane." },
  { id: "math-lin-graph", name: "Graph of a Linear Equation", chapter: "math-graphs", level: 0.66, description: "Draw y = mx + c." },
  { id: "math-slope", name: "Slope and Intercept", chapter: "math-graphs", level: 0.68, description: "Gradient and where the line cuts axes." },
  { id: "math-graph-apps", name: "Applications of Graphs", chapter: "math-graphs", level: 0.74, description: "Use graphs in real situations." },

  // ——— Maths Unit 9 Congruent Triangles ———
  { id: "math-congruence", name: "SAS, ASA, AAS, RHS", chapter: "math-triangles", level: 0.7, description: "Criteria for triangle congruence." },
  { id: "math-tri-theorems", name: "Theorems and Proofs", chapter: "math-triangles", level: 0.76, description: "Prove results using congruence." },
  { id: "math-tri-construct", name: "Construction & Reasoning", chapter: "math-triangles", level: 0.78, description: "Construct and justify congruent triangles." },

  // ——— English ———
  { id: "eng-comprehension", name: "Reading Comprehension", chapter: "eng-reading", level: 0.2, description: "Unseen passage — read and answer questions." },
  { id: "eng-tenses", name: "Tenses", chapter: "eng-grammar", level: 0.1, description: "Present, past and future forms." },
  { id: "eng-voice", name: "Active & Passive Voice", chapter: "eng-grammar", level: 0.28, description: "Change voice of sentences." },
  { id: "eng-narration", name: "Direct & Indirect Speech", chapter: "eng-grammar", level: 0.32, description: "Reported speech rules." },
  { id: "eng-prepositions", name: "Prepositions", chapter: "eng-grammar", level: 0.18, description: "Correct use of prepositions." },
  { id: "eng-essay-friend", name: "Essay: My Best Friend", chapter: "eng-essay", level: 0.4, description: "Write a composition on friendship." },
  { id: "eng-essay-hobby", name: "Essay: My Hobby", chapter: "eng-essay", level: 0.42, description: "Write about a personal hobby." },
  { id: "eng-essay-place", name: "Essay: Historical Place", chapter: "eng-essay", level: 0.46, description: "A visit to a historical place." },
  { id: "eng-essay-edu", name: "Essay: Importance of Education", chapter: "eng-essay", level: 0.48, description: "Why education matters." },
  { id: "eng-essay-pc", name: "Essay: Computer in Our Life", chapter: "eng-essay", level: 0.5, description: "Role of computers today." },
  { id: "eng-app-sick", name: "Application: Sick Leave", chapter: "eng-letter", level: 0.36, description: "Write a sick leave application." },
  { id: "eng-app-fee", name: "Application: Fee Concession", chapter: "eng-letter", level: 0.38, description: "Request fee concession." },
  { id: "eng-app-leave", name: "Leave Application", chapter: "eng-letter", level: 0.34, description: "Formal leave application." },
  { id: "eng-dialogue", name: "Dialogue Writing", chapter: "eng-dialogue", level: 0.44, description: "Write natural short dialogues." },
  { id: "eng-story", name: "Story Writing", chapter: "eng-story", level: 0.52, description: "Write a short moral story." },
  { id: "eng-translation", name: "Translation (Urdu → English)", chapter: "eng-translation", level: 0.56, description: "Translate Urdu sentences into English." },
  { id: "eng-short-q", name: "Textbook Short Questions", chapter: "eng-textbook", level: 0.3, description: "Prepare short questions from the book." },
  { id: "eng-summary", name: "Textbook Summaries", chapter: "eng-textbook", level: 0.54, description: "Summaries of textbook lessons." },

  // ——— Urdu ———
  { id: "urdu-tashreeh-poem", name: "تشریحِ نظمیں", chapter: "urdu-tashreeh", level: 0.35, description: "اہم نظموں کی تشریح۔" },
  { id: "urdu-tashreeh-prose", name: "تشریحِ نثر", chapter: "urdu-tashreeh", level: 0.38, description: "اہم نثری اقتباسات کی تشریح۔" },
  { id: "urdu-khulasa", name: "خلاصہ نویسی", chapter: "urdu-summary", level: 0.42, description: "متن کا مختصر خلاصہ لکھنا۔" },
  { id: "urdu-mazmoon-taleem", name: "مضمون: تعلیم کی اہمیت", chapter: "urdu-essay", level: 0.45, description: "تعلیم کی اہمیت پر مضمون۔" },
  { id: "urdu-mazmoon-waqt", name: "مضمون: وقت کی پابندی", chapter: "urdu-essay", level: 0.48, description: "وقت کی پابندی پر مضمون۔" },
  { id: "urdu-mazmoon-mehnat", name: "مضمون: محنت کی عظمت", chapter: "urdu-essay", level: 0.5, description: "محنت کی عظمت پر مضمون۔" },
  { id: "urdu-mazmoon-pc", name: "مضمون: کمپیوٹر کے فوائد", chapter: "urdu-essay", level: 0.52, description: "کمپیوٹر کے فوائد پر مضمون۔" },
  { id: "urdu-darkhwast", name: "درخواست نویسی", chapter: "urdu-application", level: 0.4, description: "رسمي درخواستیں لکھنا۔" },
  { id: "urdu-khat", name: "خط نویسی", chapter: "urdu-letter", level: 0.44, description: "ذاتی اور رسمی خطوط۔" },
  { id: "urdu-mahaware", name: "محاورے", chapter: "urdu-idioms", level: 0.3, description: "محاوروں کا صحیح استعمال۔" },
  { id: "urdu-amsal", name: "ضرب الامثال", chapter: "urdu-idioms", level: 0.32, description: "ضرب الامثال یاد کرنا۔" },
  { id: "urdu-wahid-jama", name: "واحد جمع", chapter: "urdu-grammar", level: 0.12, description: "واحد اور جمع کی تبدیلی۔" },
  { id: "urdu-muzakkar", name: "مذکر مؤنث", chapter: "urdu-grammar", level: 0.14, description: "مذکر اور مؤنث الفاظ۔" },
  { id: "urdu-mutradif", name: "مترادفات و متضادات", chapter: "urdu-grammar", level: 0.22, description: "ہم معنی اور متضاد الفاظ۔" },
  { id: "urdu-darsi", name: "درسی سوالات و جوابات", chapter: "urdu-textbook", level: 0.55, description: "کتاب کے تمام سوالات یاد کرنا۔" },

  // ——— Islamiat ———
  { id: "isl-iman", name: "ایمانیات", chapter: "isl-beliefs", level: 0.1, description: "اسلام کے بنیادی عقائد۔" },
  { id: "isl-salah", name: "نماز کی اہمیت", chapter: "isl-ibadat", level: 0.25, description: "صلوٰۃ کی اہمیت اور فضائل۔" },
  { id: "isl-saum", name: "روزہ", chapter: "isl-ibadat", level: 0.28, description: "صوم کے احکام اور فوائد۔" },
  { id: "isl-zakat", name: "زکوٰۃ", chapter: "isl-ibadat", level: 0.3, description: "زکوٰۃ کی اہمیت۔" },
  { id: "isl-hajj", name: "حج", chapter: "isl-ibadat", level: 0.32, description: "حج کے ارکان۔" },
  { id: "isl-seerah", name: "سیرت النبی ﷺ", chapter: "isl-seerah", level: 0.4, description: "آپ ﷺ کی زندگی کے اہم واقعات۔" },
  { id: "isl-akhlaq", name: "اسلامی اخلاقیات", chapter: "isl-akhlaq", level: 0.45, description: "اسلامی اخلاقی اقدار۔" },
  { id: "isl-parents", name: "والدین کے حقوق", chapter: "isl-rights", level: 0.48, description: "حقوقِ والدین۔" },
  { id: "isl-neighbors", name: "پڑوسیوں کے حقوق", chapter: "isl-rights", level: 0.5, description: "حقوقِ ہمسائیگی۔" },
  { id: "isl-huqooq", name: "حقوق العباد", chapter: "isl-rights", level: 0.52, description: "بندوں کے حقوق۔" },
  { id: "isl-ayat", name: "قرآنی آیات مع ترجمہ", chapter: "isl-quran-hadith", level: 0.35, description: "منتخب آیات اور ترجمہ یاد کرنا۔" },
  { id: "isl-hadith", name: "احادیث مع ترجمہ", chapter: "isl-quran-hadith", level: 0.38, description: "منتخب احادیث اور ترجمہ۔" },
  { id: "isl-daily", name: "اسلام اور روزمرہ زندگی", chapter: "isl-daily", level: 0.58, description: "اسلامی تعلیمات کا عملی اطلاق۔" },

  // ——— Biology ———
  { id: "bio-levels", name: "Levels of Organization", chapter: "bio-intro", level: 0.08, description: "From cell to biosphere." },
  { id: "bio-intro-scope", name: "Introduction to Biology", chapter: "bio-intro", level: 0.05, description: "What biology studies." },
  { id: "bio-method", name: "Scientific Method", chapter: "bio-problem", level: 0.15, description: "Steps to solve a biological problem." },
  { id: "bio-classify", name: "Classification of Organisms", chapter: "bio-diversity", level: 0.28, description: "How living things are grouped." },
  { id: "bio-biodiversity", name: "Importance of Biodiversity", chapter: "bio-diversity", level: 0.32, description: "Why biodiversity matters." },
  { id: "bio-plant-cell", name: "Plant Cell", chapter: "bio-cells", level: 0.4, description: "Structure of a plant cell." },
  { id: "bio-animal-cell", name: "Animal Cell", chapter: "bio-cells", level: 0.42, description: "Structure of an animal cell." },
  { id: "bio-cell-vs", name: "Animal vs Plant Cell", chapter: "bio-cells", level: 0.48, description: "Compare plant and animal cells." },
  { id: "bio-organelles", name: "Cell Organelles", chapter: "bio-cells", level: 0.5, description: "Functions of cell organelles." },
  { id: "bio-tissues", name: "Types of Tissues", chapter: "bio-cells", level: 0.55, description: "Plant and animal tissues." },
  { id: "bio-mitosis", name: "Mitosis", chapter: "bio-cycle", level: 0.62, description: "Stages of mitosis." },
  { id: "bio-meiosis", name: "Meiosis", chapter: "bio-cycle", level: 0.68, description: "Stages of meiosis." },
  { id: "bio-mito-meio", name: "Mitosis vs Meiosis", chapter: "bio-cycle", level: 0.74, description: "Compare mitosis and meiosis." },

  // ——— Computer Science ———
  { id: "cs-chars", name: "Characteristics of Computers", chapter: "cs-basics", level: 0.06, description: "Speed, accuracy, storage and more." },
  { id: "cs-hw-sw", name: "Hardware vs Software", chapter: "cs-basics", level: 0.12, description: "Physical parts vs programs." },
  { id: "cs-cpu", name: "CPU Components", chapter: "cs-systems", level: 0.28, description: "ALU, CU and registers." },
  { id: "cs-memory", name: "Primary & Secondary Memory", chapter: "cs-storage", level: 0.35, description: "RAM, ROM and storage devices." },
  { id: "cs-storage-dev", name: "Storage Devices", chapter: "cs-storage", level: 0.38, description: "HDD, SSD, USB and optical media." },
  { id: "cs-input", name: "Input Devices", chapter: "cs-io", level: 0.22, description: "Keyboard, mouse, scanner, etc." },
  { id: "cs-output", name: "Output Devices", chapter: "cs-io", level: 0.24, description: "Monitor, printer, speakers, etc." },
  { id: "cs-os-fn", name: "Functions of OS", chapter: "cs-os", level: 0.48, description: "What an operating system does." },
  { id: "cs-algo", name: "Algorithms", chapter: "cs-problem", level: 0.55, description: "Step-by-step problem solving." },
  { id: "cs-flowchart", name: "Flowchart Symbols", chapter: "cs-flow", level: 0.62, description: "Standard flowchart symbols." },
  { id: "cs-trace", name: "Flowchart Tracing", chapter: "cs-flow", level: 0.68, description: "Trace and dry-run flowcharts." },
  { id: "cs-number", name: "Number System Basics", chapter: "cs-basics", level: 0.42, description: "Binary and decimal conversion." },
];

export const EDGES: Edge[] = [
  { topicId: "si-units", prerequisiteId: "base-qty", reason: "Need quantities before assigning units" },
  { topicId: "least-count", prerequisiteId: "si-units", reason: "Measuring needs an understanding of units" },
  { topicId: "vernier", prerequisiteId: "least-count", reason: "Vernier reading uses least count" },
  { topicId: "screw-gauge", prerequisiteId: "least-count", reason: "Screw gauge reading uses least count" },
  { topicId: "sig-figs", prerequisiteId: "si-units", reason: "Significant figures apply to measured units" },
  { topicId: "sci-notation", prerequisiteId: "base-qty", reason: "Notation expresses measured quantities" },

  { topicId: "speed-vel", prerequisiteId: "distance-disp", reason: "Speed/velocity are rates of distance/displacement" },
  { topicId: "accel", prerequisiteId: "speed-vel", reason: "Acceleration is change of velocity" },
  { topicId: "uniform", prerequisiteId: "speed-vel", reason: "Uniform motion is about constant speed" },
  { topicId: "eq-motion", prerequisiteId: "accel", reason: "Equations of motion need acceleration" },
  { topicId: "dt-graph", prerequisiteId: "distance-disp", reason: "Graphs plot distance against time" },
  { topicId: "dt-graph", prerequisiteId: "speed-vel", reason: "Slope of s–t graph is speed" },
  { topicId: "vt-graph", prerequisiteId: "accel", reason: "Slope of v–t graph is acceleration" },
  { topicId: "vt-graph", prerequisiteId: "speed-vel", reason: "v–t graph plots velocity" },

  { topicId: "force", prerequisiteId: "accel", reason: "Force relates to change in motion" },
  { topicId: "n1", prerequisiteId: "force", reason: "First law is about unbalanced force" },
  { topicId: "n2", prerequisiteId: "force", reason: "Second law defines F = ma" },
  { topicId: "n2", prerequisiteId: "accel", reason: "F = ma needs acceleration" },
  { topicId: "n3", prerequisiteId: "force", reason: "Third law is about force pairs" },
  { topicId: "mass-weight", prerequisiteId: "force", reason: "Weight is a gravitational force" },
  { topicId: "momentum", prerequisiteId: "speed-vel", reason: "Momentum needs velocity" },
  { topicId: "momentum", prerequisiteId: "n2", reason: "Momentum links to Newton's 2nd law" },
  { topicId: "cons-momentum", prerequisiteId: "momentum", reason: "Conservation applies to momentum" },

  { topicId: "torque", prerequisiteId: "force", reason: "Torque is a turning force" },
  { topicId: "couple", prerequisiteId: "torque", reason: "A couple is a pair of torques" },
  { topicId: "cog", prerequisiteId: "force", reason: "Weight acts at center of gravity" },
  { topicId: "equilibrium", prerequisiteId: "torque", reason: "Rotational equilibrium needs torque" },
  { topicId: "equilibrium", prerequisiteId: "force", reason: "Translational equilibrium needs force" },
  { topicId: "eq-conditions", prerequisiteId: "equilibrium", reason: "Conditions formalize equilibrium" },

  { topicId: "work", prerequisiteId: "force", reason: "Work needs force and displacement" },
  { topicId: "work", prerequisiteId: "distance-disp", reason: "Work uses displacement" },
  { topicId: "power", prerequisiteId: "work", reason: "Power is work per time" },
  { topicId: "ke", prerequisiteId: "speed-vel", reason: "KE depends on speed" },
  { topicId: "ke", prerequisiteId: "work", reason: "Work–energy theorem links work and KE" },
  { topicId: "pe", prerequisiteId: "work", reason: "PE is stored work against gravity" },
  { topicId: "pe", prerequisiteId: "mass-weight", reason: "Gravitational PE uses weight/mass" },
  { topicId: "cons-energy", prerequisiteId: "ke", reason: "Conservation tracks KE changes" },
  { topicId: "cons-energy", prerequisiteId: "pe", reason: "Conservation tracks PE changes" },

  { topicId: "density", prerequisiteId: "base-qty", reason: "Density uses mass and volume" },
  { topicId: "pressure", prerequisiteId: "force", reason: "Pressure is force over area" },
  { topicId: "elasticity", prerequisiteId: "force", reason: "Elastic behaviour under force" },

  { topicId: "heat-temp", prerequisiteId: "base-qty", reason: "Thermal ideas build on measured quantities" },
  { topicId: "specific-heat", prerequisiteId: "heat-temp", reason: "Specific heat needs heat & temperature" },
  { topicId: "latent", prerequisiteId: "heat-temp", reason: "Latent heat is heat at constant temperature" },

  { topicId: "conduction", prerequisiteId: "heat-temp", reason: "Heat transfer modes need heat concept" },
  { topicId: "convection", prerequisiteId: "heat-temp", reason: "Heat transfer modes need heat concept" },
  { topicId: "radiation", prerequisiteId: "heat-temp", reason: "Heat transfer modes need heat concept" },

  { topicId: "current", prerequisiteId: "base-qty", reason: "Current is a physical quantity" },
  { topicId: "voltage", prerequisiteId: "current", reason: "Voltage drives current" },
  { topicId: "resistance", prerequisiteId: "current", reason: "Resistance opposes current" },
  { topicId: "ohm", prerequisiteId: "voltage", reason: "Ohm's law needs V" },
  { topicId: "ohm", prerequisiteId: "resistance", reason: "Ohm's law needs R" },

  { topicId: "mag-field", prerequisiteId: "magnets", reason: "Field surrounds magnets" },
  { topicId: "electromagnet", prerequisiteId: "mag-field", reason: "Electromagnets create magnetic fields" },
  { topicId: "electromagnet", prerequisiteId: "current", reason: "Electromagnets need electric current" },

  // Chemistry edges
  { topicId: "chem-props", prerequisiteId: "chem-branches", reason: "Properties make sense after knowing what chemistry studies" },
  { topicId: "chem-ecm", prerequisiteId: "chem-props", reason: "Classify matter after knowing properties" },
  { topicId: "chem-mixtures", prerequisiteId: "chem-ecm", reason: "Mixture types build on elements/compounds/mixtures" },
  { topicId: "chem-atomic-mass-no", prerequisiteId: "chem-ecm", reason: "Atomic numbers describe elements" },
  { topicId: "chem-valency", prerequisiteId: "chem-atomic-mass-no", reason: "Valency relates to atomic structure of elements" },
  { topicId: "chem-balance", prerequisiteId: "chem-valency", reason: "Balancing needs chemical formulas first" },
  { topicId: "chem-balance", prerequisiteId: "chem-ecm", reason: "Equations involve compounds and elements" },

  { topicId: "chem-discovery", prerequisiteId: "chem-atomic-mass-no", reason: "Particles explain atomic number and mass" },
  { topicId: "chem-bohr", prerequisiteId: "chem-discovery", reason: "Bohr model uses electrons and nucleus" },
  { topicId: "chem-config", prerequisiteId: "chem-bohr", reason: "Configuration places electrons in Bohr shells" },
  { topicId: "chem-isotopes", prerequisiteId: "chem-atomic-mass-no", reason: "Isotopes differ in mass number" },
  { topicId: "chem-isotopes", prerequisiteId: "chem-discovery", reason: "Isotopes differ in neutron count" },
  { topicId: "chem-ram", prerequisiteId: "chem-isotopes", reason: "Relative atomic mass averages isotopes" },
  { topicId: "chem-isotope-uses", prerequisiteId: "chem-isotopes", reason: "Uses follow understanding isotopes" },

  { topicId: "chem-mpt", prerequisiteId: "chem-atomic-mass-no", reason: "Table is ordered by atomic number" },
  { topicId: "chem-mpt", prerequisiteId: "chem-config", reason: "Modern table links to electron shells" },
  { topicId: "chem-groups-periods", prerequisiteId: "chem-mpt", reason: "Groups/periods are table structure" },
  { topicId: "chem-metals", prerequisiteId: "chem-groups-periods", reason: "Metal classification uses table position" },
  { topicId: "chem-trends", prerequisiteId: "chem-groups-periods", reason: "Trends run across periods and groups" },
  { topicId: "chem-valency-group", prerequisiteId: "chem-groups-periods", reason: "Group number predicts valency" },
  { topicId: "chem-valency-group", prerequisiteId: "chem-valency", reason: "Builds on basic valency idea" },

  { topicId: "chem-ionic", prerequisiteId: "chem-config", reason: "Bonding uses outer electrons" },
  { topicId: "chem-ionic", prerequisiteId: "chem-valency", reason: "Ionic charge links to valency" },
  { topicId: "chem-covalent", prerequisiteId: "chem-config", reason: "Covalent sharing uses valence electrons" },
  { topicId: "chem-ionic-comp", prerequisiteId: "chem-ionic", reason: "Ionic compounds come from ionic bonds" },
  { topicId: "chem-cov-comp", prerequisiteId: "chem-covalent", reason: "Covalent compounds come from covalent bonds" },
  { topicId: "chem-lewis", prerequisiteId: "chem-covalent", reason: "Lewis dots show shared pairs" },
  { topicId: "chem-lewis", prerequisiteId: "chem-config", reason: "Dots represent valence electrons" },
  { topicId: "chem-ionic-vs-cov", prerequisiteId: "chem-ionic-comp", reason: "Compare after knowing ionic compounds" },
  { topicId: "chem-ionic-vs-cov", prerequisiteId: "chem-cov-comp", reason: "Compare after knowing covalent compounds" },

  { topicId: "chem-kmt", prerequisiteId: "chem-props", reason: "KMT explains physical behaviour of matter" },
  { topicId: "chem-slg", prerequisiteId: "chem-kmt", reason: "States follow from particle motion" },
  { topicId: "chem-diffusion", prerequisiteId: "chem-kmt", reason: "Diffusion is particle movement" },
  { topicId: "chem-evap", prerequisiteId: "chem-slg", reason: "Phase changes between liquid and gas" },
  { topicId: "chem-melt-boil", prerequisiteId: "chem-slg", reason: "Melting/boiling are state changes" },

  { topicId: "chem-solute", prerequisiteId: "chem-mixtures", reason: "Solutions are a type of mixture" },
  { topicId: "chem-sol-types", prerequisiteId: "chem-solute", reason: "Types need solute/solvent idea" },
  { topicId: "chem-solubility", prerequisiteId: "chem-solute", reason: "Solubility limits how much dissolves" },
  { topicId: "chem-sat", prerequisiteId: "chem-solubility", reason: "Saturation depends on solubility" },
  { topicId: "chem-conc", prerequisiteId: "chem-solute", reason: "Concentration measures solute amount" },
  { topicId: "chem-conc-num", prerequisiteId: "chem-conc", reason: "Numericals apply concentration formulas" },

  // Maths edges
  { topicId: "math-indices", prerequisiteId: "math-reals-props", reason: "Indices act on real numbers" },
  { topicId: "math-surds", prerequisiteId: "math-indices", reason: "Surds use index / root laws" },
  { topicId: "math-rationalize", prerequisiteId: "math-surds", reason: "Rationalize after simplifying surds" },
  { topicId: "math-sci-not", prerequisiteId: "math-indices", reason: "Scientific notation uses powers of 10" },

  { topicId: "math-log-def", prerequisiteId: "math-indices", reason: "Logs are the inverse of indices" },
  { topicId: "math-log-laws", prerequisiteId: "math-log-def", reason: "Laws follow from the definition" },
  { topicId: "math-common-log", prerequisiteId: "math-log-def", reason: "Common logs are base-10 logs" },
  { topicId: "math-char-mant", prerequisiteId: "math-common-log", reason: "Characteristic/mantissa split common logs" },
  { topicId: "math-log-expr", prerequisiteId: "math-log-laws", reason: "Solving uses logarithm laws" },
  { topicId: "math-log-expr", prerequisiteId: "math-char-mant", reason: "Tables use characteristic and mantissa" },

  { topicId: "math-set-ops", prerequisiteId: "math-set-form", reason: "Operations need sets written clearly" },
  { topicId: "math-complement", prerequisiteId: "math-set-ops", reason: "Complement builds on set operations" },
  { topicId: "math-venn", prerequisiteId: "math-set-ops", reason: "Venn diagrams show set operations" },
  { topicId: "math-set-word", prerequisiteId: "math-venn", reason: "Word problems use Venn reasoning" },
  { topicId: "math-set-word", prerequisiteId: "math-complement", reason: "Word problems often need complements" },

  { topicId: "math-expand", prerequisiteId: "math-reals-props", reason: "Algebra builds on number properties" },
  { topicId: "math-identities", prerequisiteId: "math-expand", reason: "Identities come from expansion" },
  { topicId: "math-alg-factor-intro", prerequisiteId: "math-identities", reason: "Factorization reverses identities" },
  { topicId: "math-hcf-lcm", prerequisiteId: "math-alg-factor-intro", reason: "HCF/LCM need factored form" },

  { topicId: "math-common-factor", prerequisiteId: "math-expand", reason: "Common factor is reverse of expansion" },
  { topicId: "math-grouping", prerequisiteId: "math-common-factor", reason: "Grouping extends common-factor method" },
  { topicId: "math-diff-sq", prerequisiteId: "math-identities", reason: "Uses a² − b² identity" },
  { topicId: "math-perf-sq", prerequisiteId: "math-identities", reason: "Uses (a±b)² identities" },
  { topicId: "math-cubic-factor", prerequisiteId: "math-grouping", reason: "Cubics often need grouping or formulas" },
  { topicId: "math-cubic-factor", prerequisiteId: "math-diff-sq", reason: "Some cubics reduce via square difference" },

  { topicId: "math-alg-frac-simp", prerequisiteId: "math-common-factor", reason: "Simplify fractions by factoring" },
  { topicId: "math-alg-frac-simp", prerequisiteId: "math-diff-sq", reason: "Often cancel using factored forms" },
  { topicId: "math-alg-frac-mul", prerequisiteId: "math-alg-frac-simp", reason: "Multiply after simplifying" },
  { topicId: "math-alg-frac-add", prerequisiteId: "math-hcf-lcm", reason: "Adding fractions needs LCM of denominators" },
  { topicId: "math-alg-frac-add", prerequisiteId: "math-alg-frac-simp", reason: "Add after simplifying" },
  { topicId: "math-complex-frac", prerequisiteId: "math-alg-frac-add", reason: "Complex fractions nest simpler fraction ops" },
  { topicId: "math-complex-frac", prerequisiteId: "math-alg-frac-mul", reason: "Complex fractions use multiply/divide" },

  { topicId: "math-lin-eq", prerequisiteId: "math-expand", reason: "Solving needs algebraic simplification" },
  { topicId: "math-ineq", prerequisiteId: "math-lin-eq", reason: "Inequalities extend equation methods" },
  { topicId: "math-num-line", prerequisiteId: "math-ineq", reason: "Graph the inequality solution set" },
  { topicId: "math-lin-word", prerequisiteId: "math-lin-eq", reason: "Word problems become linear equations" },

  { topicId: "math-plot", prerequisiteId: "math-cartesian", reason: "Plotting needs coordinates" },
  { topicId: "math-lin-graph", prerequisiteId: "math-plot", reason: "Graphs join plotted points" },
  { topicId: "math-lin-graph", prerequisiteId: "math-lin-eq", reason: "Linear graphs come from linear equations" },
  { topicId: "math-slope", prerequisiteId: "math-lin-graph", reason: "Slope/intercept describe the line" },
  { topicId: "math-graph-apps", prerequisiteId: "math-slope", reason: "Applications use slope and intercept" },

  { topicId: "math-congruence", prerequisiteId: "math-reals-props", reason: "Congruence builds on geometric reasoning foundations" },
  { topicId: "math-tri-theorems", prerequisiteId: "math-congruence", reason: "Proofs use congruence criteria" },
  { topicId: "math-tri-construct", prerequisiteId: "math-congruence", reason: "Construction follows congruence rules" },

  // English edges
  { topicId: "eng-voice", prerequisiteId: "eng-tenses", reason: "Voice changes need tense knowledge" },
  { topicId: "eng-narration", prerequisiteId: "eng-tenses", reason: "Narration depends on tense shifts" },
  { topicId: "eng-prepositions", prerequisiteId: "eng-tenses", reason: "Grammar builds together" },
  { topicId: "eng-essay-friend", prerequisiteId: "eng-tenses", reason: "Essays need correct grammar" },
  { topicId: "eng-essay-hobby", prerequisiteId: "eng-tenses", reason: "Essays need correct grammar" },
  { topicId: "eng-essay-place", prerequisiteId: "eng-tenses", reason: "Essays need correct grammar" },
  { topicId: "eng-essay-edu", prerequisiteId: "eng-tenses", reason: "Essays need correct grammar" },
  { topicId: "eng-essay-pc", prerequisiteId: "eng-tenses", reason: "Essays need correct grammar" },
  { topicId: "eng-app-sick", prerequisiteId: "eng-tenses", reason: "Applications need formal grammar" },
  { topicId: "eng-app-fee", prerequisiteId: "eng-tenses", reason: "Applications need formal grammar" },
  { topicId: "eng-app-leave", prerequisiteId: "eng-tenses", reason: "Applications need formal grammar" },
  { topicId: "eng-dialogue", prerequisiteId: "eng-tenses", reason: "Dialogues need natural tense use" },
  { topicId: "eng-story", prerequisiteId: "eng-tenses", reason: "Stories need narrative tenses" },
  { topicId: "eng-story", prerequisiteId: "eng-dialogue", reason: "Stories often include dialogue" },
  { topicId: "eng-translation", prerequisiteId: "eng-tenses", reason: "Translation needs grammar accuracy" },
  { topicId: "eng-translation", prerequisiteId: "eng-prepositions", reason: "Prepositions matter in translation" },
  { topicId: "eng-comprehension", prerequisiteId: "eng-tenses", reason: "Reading needs language basics" },
  { topicId: "eng-short-q", prerequisiteId: "eng-comprehension", reason: "Textbook answers need reading skill" },
  { topicId: "eng-summary", prerequisiteId: "eng-short-q", reason: "Summaries build on lesson understanding" },

  // Urdu edges
  { topicId: "urdu-tashreeh-prose", prerequisiteId: "urdu-tashreeh-poem", reason: "تشریح کی مشق نظموں کے بعد نثر پر" },
  { topicId: "urdu-khulasa", prerequisiteId: "urdu-tashreeh-prose", reason: "خلاصہ تشریح کی سمجھ کے بعد" },
  { topicId: "urdu-mazmoon-taleem", prerequisiteId: "urdu-wahid-jama", reason: "مضمون کے لیے بنیادی گرامر" },
  { topicId: "urdu-mazmoon-waqt", prerequisiteId: "urdu-mazmoon-taleem", reason: "مضمون نویسی کی مشق بڑھانا" },
  { topicId: "urdu-mazmoon-mehnat", prerequisiteId: "urdu-mazmoon-waqt", reason: "مضامین کی ترتیب وار مشق" },
  { topicId: "urdu-mazmoon-pc", prerequisiteId: "urdu-mazmoon-mehnat", reason: "مضامین کی ترتیب وار مشق" },
  { topicId: "urdu-darkhwast", prerequisiteId: "urdu-wahid-jama", reason: "درخواست کے لیے درست زبان" },
  { topicId: "urdu-khat", prerequisiteId: "urdu-darkhwast", reason: "خط نویسی درخواست سے ملتی جلتی ہے" },
  { topicId: "urdu-muzakkar", prerequisiteId: "urdu-wahid-jama", reason: "گرامر کی بنیاد واحد جمع سے" },
  { topicId: "urdu-mutradif", prerequisiteId: "urdu-muzakkar", reason: "الفاظ کا ذخیرہ گرامر کے بعد" },
  { topicId: "urdu-amsal", prerequisiteId: "urdu-mahaware", reason: "ضرب الامثال محاوروں سے جڑی ہیں" },
  { topicId: "urdu-darsi", prerequisiteId: "urdu-tashreeh-prose", reason: "درسی جوابات تشریح کے بعد" },
  { topicId: "urdu-darsi", prerequisiteId: "urdu-khulasa", reason: "خلاصہ درسی تیاری کا حصہ" },

  // Islamiat edges
  { topicId: "isl-salah", prerequisiteId: "isl-iman", reason: "عبادات ایمان کے بعد" },
  { topicId: "isl-saum", prerequisiteId: "isl-salah", reason: "عبادات کی ترتیب" },
  { topicId: "isl-zakat", prerequisiteId: "isl-saum", reason: "عبادات کی ترتیب" },
  { topicId: "isl-hajj", prerequisiteId: "isl-zakat", reason: "عبادات کی ترتیب" },
  { topicId: "isl-seerah", prerequisiteId: "isl-iman", reason: "سیرت عقیدے کی روشنی میں" },
  { topicId: "isl-ayat", prerequisiteId: "isl-iman", reason: "آیات ایمانیات سے جڑی ہیں" },
  { topicId: "isl-hadith", prerequisiteId: "isl-ayat", reason: "احادیث آیات کے ساتھ یاد کریں" },
  { topicId: "isl-akhlaq", prerequisiteId: "isl-seerah", reason: "اخلاق سیرت سے سیکھے جاتے ہیں" },
  { topicId: "isl-parents", prerequisiteId: "isl-akhlaq", reason: "حقوق اخلاق کا عملی رخ" },
  { topicId: "isl-neighbors", prerequisiteId: "isl-parents", reason: "حقوق العباد کی توسیع" },
  { topicId: "isl-huqooq", prerequisiteId: "isl-neighbors", reason: "حقوق العباد کا مجموعی تصور" },
  { topicId: "isl-daily", prerequisiteId: "isl-huqooq", reason: "روزمرہ اطلاق حقوق و اخلاق کے بعد" },
  { topicId: "isl-daily", prerequisiteId: "isl-salah", reason: "نماز روزمرہ زندگی کا مرکز" },

  // Biology edges
  { topicId: "bio-levels", prerequisiteId: "bio-intro-scope", reason: "Organization levels need biology basics" },
  { topicId: "bio-method", prerequisiteId: "bio-intro-scope", reason: "Scientific method is how biology works" },
  { topicId: "bio-classify", prerequisiteId: "bio-levels", reason: "Classification uses levels of life" },
  { topicId: "bio-biodiversity", prerequisiteId: "bio-classify", reason: "Biodiversity builds on classification" },
  { topicId: "bio-plant-cell", prerequisiteId: "bio-levels", reason: "Cells are a basic level of life" },
  { topicId: "bio-animal-cell", prerequisiteId: "bio-levels", reason: "Cells are a basic level of life" },
  { topicId: "bio-cell-vs", prerequisiteId: "bio-plant-cell", reason: "Compare after knowing plant cell" },
  { topicId: "bio-cell-vs", prerequisiteId: "bio-animal-cell", reason: "Compare after knowing animal cell" },
  { topicId: "bio-organelles", prerequisiteId: "bio-cell-vs", reason: "Organelles after cell comparison" },
  { topicId: "bio-tissues", prerequisiteId: "bio-organelles", reason: "Tissues are groups of cells" },
  { topicId: "bio-mitosis", prerequisiteId: "bio-tissues", reason: "Cell division after cell/tissue study" },
  { topicId: "bio-meiosis", prerequisiteId: "bio-mitosis", reason: "Meiosis compared after mitosis" },
  { topicId: "bio-mito-meio", prerequisiteId: "bio-meiosis", reason: "Full comparison needs both processes" },

  // Computer edges
  { topicId: "cs-hw-sw", prerequisiteId: "cs-chars", reason: "Hardware/software after computer basics" },
  { topicId: "cs-input", prerequisiteId: "cs-hw-sw", reason: "I/O devices are hardware" },
  { topicId: "cs-output", prerequisiteId: "cs-input", reason: "Output pairs with input devices" },
  { topicId: "cs-cpu", prerequisiteId: "cs-hw-sw", reason: "CPU is core hardware" },
  { topicId: "cs-memory", prerequisiteId: "cs-cpu", reason: "Memory works with the CPU" },
  { topicId: "cs-storage-dev", prerequisiteId: "cs-memory", reason: "Storage extends memory concepts" },
  { topicId: "cs-number", prerequisiteId: "cs-hw-sw", reason: "Number systems underpin computing" },
  { topicId: "cs-os-fn", prerequisiteId: "cs-hw-sw", reason: "OS manages hardware and software" },
  { topicId: "cs-os-fn", prerequisiteId: "cs-memory", reason: "OS manages memory" },
  { topicId: "cs-algo", prerequisiteId: "cs-chars", reason: "Algorithms are how computers solve problems" },
  { topicId: "cs-flowchart", prerequisiteId: "cs-algo", reason: "Flowcharts visualize algorithms" },
  { topicId: "cs-trace", prerequisiteId: "cs-flowchart", reason: "Tracing needs flowchart literacy" },
];

export function chapterColor(id: ChapterId) {
  return CHAPTERS.find((c) => c.id === id)!.color;
}
