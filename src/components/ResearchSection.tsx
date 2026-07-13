import { ChevronRight } from "lucide-react";

const RESEARCH_STATS = [
  {
    value: "92%",
    label: "of regular active users reported grade improvements",
  },
  {
    value: "85%",
    label: "of total users reported grade improvements",
  },
  {
    value: "30%",
    label: "reduction is average study time reported",
  },
] as const;

function ResearchStatItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-1 gap-5">
      <div className="h-[88px] w-px shrink-0 bg-[#9DD4CC]" />
      <div className="flex flex-col gap-2.5">
        <p className="text-[40px] font-bold leading-none tracking-[-2px] text-[#0A0A0A] sm:text-[56px]">
          {value}
        </p>
        <p className="max-w-[280px] text-[14px] font-normal leading-[1.4] text-[#1A1A1A] sm:text-[16px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export function ResearchSection() {
  return (
    <section className="w-full bg-[#c1f1ec] px-6 py-12 sm:px-12 lg:px-[120px] lg:py-20 lg:pb-[88px]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10 lg:gap-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <p className="text-[14px] font-bold text-[#0A0A0A]">Research</p>
            <h2 className="max-w-[560px] text-[32px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[40px] lg:text-[44px]">
              Finals season put us to the test.
              <br />
              We passed.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-3 lg:items-end">
            <p className="max-w-[380px] text-left text-[12px] leading-[1.45] text-[#1A1A1A] lg:text-right">
              *Based on a study of 1,000 StudyFetch students
              <br />
              during December 2024 finals
            </p>
            <button
              type="button"
              className="flex items-center gap-1 text-[14px] font-semibold text-[#0A0A0A]"
            >
              Read the Report
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-12">
          {RESEARCH_STATS.map((stat) => (
            <ResearchStatItem
              key={stat.value}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
