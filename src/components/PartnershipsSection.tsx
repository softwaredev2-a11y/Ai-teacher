import Image from "next/image";

const PARTNERSHIP_IMAGE =
  "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=800&fit=crop";

export function PartnershipsSection() {
  return (
    <section className="flex w-full justify-center bg-white px-6 py-12 sm:px-12 lg:px-[120px] lg:py-20 lg:pb-[88px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="relative aspect-square w-full max-w-[560px] shrink-0 overflow-hidden rounded-[20px] bg-[#B8C4D0]">
          <Image
            src={PARTNERSHIP_IMAGE}
            alt="Student wearing headphones"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
          <div className="absolute inset-x-0 bottom-0 h-[140px] bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white/20" />
              <span className="text-[16px] font-extrabold tracking-[0.5px] text-white">
                STUDY FETCH
              </span>
            </div>
            <div className="h-7 w-px bg-white/50" />
            <span className="text-[18px] font-bold tracking-wide text-white">
              NVIDIA
            </span>
          </div>
        </div>

        <div className="flex w-full flex-col justify-center gap-5 lg:flex-1">
          <p className="text-[14px] font-bold text-[#0A0A0A]">Partnerships</p>
          <h2 className="text-[32px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[40px] lg:text-[44px]">
            Expanding access
          </h2>
          <p className="max-w-[480px] text-[15px] leading-[1.55] text-[#4A4A4A] sm:text-[16px]">
            StudyFetch partners with NVIDIA to expand access to AI education
            through workforce readiness programs.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              className="rounded-full border border-[#D1D5DB] bg-white px-6 py-3 text-[14px] font-semibold text-[#0A0A0A]"
            >
              Learn more
            </button>
            <button
              type="button"
              className="rounded-full bg-[#004ff8] px-6 py-3 text-[14px] font-semibold text-white"
            >
              Get Started for Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
