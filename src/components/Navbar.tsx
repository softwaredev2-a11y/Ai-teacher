import { ChevronDown, Menu } from "lucide-react";

const navLinks = ["Features", "Educators & Enterprise", "News"] as const;

export function Navbar() {
  return (
    <div className="w-full bg-white px-4 py-2.5 sm:px-6 lg:px-8">
      <nav className="mx-auto flex min-h-14 w-full max-w-[1376px] flex-wrap items-center justify-between gap-3 rounded-[18px] border border-[#E5E5E5] bg-white px-4 py-2 sm:px-6 lg:px-7">
        <div className="flex flex-col leading-[1.1]">
          <span className="text-[13px] font-extrabold tracking-[0.5px] text-[#1A1040]">
            STUDY
          </span>
          <span className="text-[13px] font-extrabold tracking-[0.5px] text-[#1A1040]">
            FETCH
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-5 lg:gap-7">
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((label) => (
              <button
                key={label}
                type="button"
                className="flex items-center gap-1 text-[14px] font-medium text-[#1A1A1A]"
              >
                {label}
                <ChevronDown className="h-3.5 w-3.5" strokeWidth={2} />
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
          >
            <Menu className="h-5 w-5 text-[#1A1A1A]" strokeWidth={2} />
          </button>

          <div className="hidden items-center gap-2.5 lg:flex">
            <button
              type="button"
              className="rounded-full bg-[#004ff8] px-5 py-2.5 text-[14px] font-semibold text-white"
            >
              Start for Free
            </button>
            <button
              type="button"
              className="rounded-full border-[1.5px] border-[#0A0A0A] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#0A0A0A]"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
