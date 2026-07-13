import { Accessibility, ChevronDown, Globe } from "lucide-react";

function SocialIcon({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <a href="#" aria-label={label} className="text-[#2D2D2D]">
      {children}
    </a>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Website",
    links: ["Home", "Login", "Sign Up"],
  },
  {
    title: "Company",
    links: [
      "Blog",
      "FAQ",
      "Privacy Policy",
      "Terms of Service",
      "Enterprise Terms",
      "Status",
      "Join the Team",
    ],
  },
  {
    title: "Helpful",
    links: [
      "Email Support",
      "Feedback",
      "Question Bank",
      "Documentation",
      "Creators",
    ],
  },
  {
    title: "Educators & Institutions",
    links: [
      "For Teachers",
      "For Institutions",
      "Our Mission",
      "Our Principles",
      "For Parents",
      "Accelerate the workforce",
      "Homeschool",
    ],
  },
  {
    title: "Use Cases",
    links: [
      "AI Writing Assistance",
      "Document Summarization",
      "Flashcard Generation",
      "Quiz and Test Preparation",
      "Subject-Specific AI Study Aids",
      "Video Learning Tools",
      "PDF to Brainrot",
      "Games - PDF to Game",
      "Explainer Videos",
    ],
  },
  {
    title: "Our Features",
    links: [
      "Notes AI",
      "Flashcards AI",
      "AI Quizzes",
      "Spark.E AI",
      "Text Spark.E",
      "Spark.E Visuals",
      "Record Live Lecture",
      "Essay Grader",
      "Audio Recap",
      "Call With Spark.E",
      "Explainer Video",
      "PDF to Game",
    ],
  },
] as const;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly string[];
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[14px] font-bold text-[#0A0A0A]">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="text-[13px] text-[#2D2D2D] transition-colors hover:text-[#0A0A0A]"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="flex w-full flex-col items-center gap-10 bg-[#f6d6fd] px-6 py-12 sm:px-12 lg:gap-12 lg:px-[120px] lg:py-16 lg:pb-14">
      <div className="flex w-full max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-[560px] flex flex-col gap-3">
          <h2 className="text-[28px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[36px] lg:text-[40px]">
            Ready to transform how you study?
          </h2>
          <p className="text-[15px] text-[#4A4A4A] sm:text-[16px]">
            Get tips on studying smarter and updates on new features
          </p>
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2.5">
          <button
            type="button"
            className="rounded-full bg-[#004ff8] px-6 py-3 text-[14px] font-semibold text-white"
          >
            Start for Free
          </button>
          <button
            type="button"
            className="rounded-full border-[1.5px] border-[#0A0A0A] bg-white px-7 py-3 text-[14px] font-semibold text-[#0A0A0A]"
          >
            Login
          </button>
        </div>
      </div>

      <div className="h-px w-full max-w-[1200px] bg-[#E8C8F0]" />

      <div className="grid w-full max-w-[1200px] grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-8">
        {FOOTER_COLUMNS.map((column) => (
          <FooterColumn key={column.title} {...column} />
        ))}
      </div>

      <div className="h-px w-full max-w-[1200px] bg-[#E8C8F0]" />

      <div className="flex w-full max-w-[1200px] flex-col gap-6">
        <div className="flex flex-col leading-[1.1]">
          <span className="text-[16px] font-extrabold tracking-[0.5px] text-[#1A1040]">
            STUDY
          </span>
          <span className="text-[16px] font-extrabold tracking-[0.5px] text-[#1A1040]">
            FETCH
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-[#D1D5DB] bg-white px-3.5 py-2 text-[13px] font-medium text-[#2D2D2D]"
          >
            <Globe className="h-3.5 w-3.5" />
            English (US)
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full border border-[#D1D5DB] bg-white px-3.5 py-2 text-[13px] font-medium text-[#2D2D2D]"
          >
            <Accessibility className="h-3.5 w-3.5" />
            Show Accessibility Settings
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <div className="h-9 w-9 rounded-full border border-[#D1D5DB] bg-white" />
          <div className="h-9 w-9 rounded-full border border-[#D1D5DB] bg-white" />
          <div className="flex h-9 w-[52px] items-center justify-center rounded-md border border-[#D1D5DB] bg-white text-[9px] font-bold text-[#6B7280]">
            SOC2
          </div>
          <div className="h-9 w-9 rounded-full border border-[#D1D5DB] bg-white" />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-[#4A4A4A]">
            © 2024 StudyFetch Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <SocialIcon label="Instagram">
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Twitter">
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="LinkedIn">
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="YouTube">
              <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
}
