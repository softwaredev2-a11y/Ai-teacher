function StatItem({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex gap-5">
      <div className="h-[72px] w-px shrink-0 bg-[#D1D1D6]" />
      <div className="flex flex-col gap-2">
        <p className="text-[40px] font-bold leading-none tracking-[-2px] text-[#0A0A0A] sm:text-[56px]">
          {value}
        </p>
        <p className="max-w-[300px] text-[14px] font-normal leading-[1.4] text-[#1A1A1A] sm:text-[16px]">
          {label}
        </p>
      </div>
    </div>
  );
}

export function TrustSection() {
  return (
    <section className="flex w-full flex-col items-center gap-9 bg-[#f9f9fb] px-6 py-12 sm:px-12 sm:py-12 lg:gap-9 lg:px-[120px] lg:py-12 lg:pb-14">
      <div className="flex w-full max-w-[900px] flex-col gap-10">
        <h2 className="max-w-[700px] text-[32px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[40px] lg:text-[44px]">
          The trusted AI learning platform
          <br />
          for students.
        </h2>

        <div className="flex flex-col gap-10 sm:flex-row sm:gap-[72px]">
          <StatItem value="8M+" label="Users Worldwide" />
          <StatItem
            value="92%"
            label="of Frequent Active Users Reported Better Grades"
          />
        </div>
      </div>

      <button
        type="button"
        className="rounded-full bg-[#004ff8] px-5 py-2.5 text-[14px] font-semibold text-white"
      >
        Start for Free
      </button>
    </section>
  );
}
