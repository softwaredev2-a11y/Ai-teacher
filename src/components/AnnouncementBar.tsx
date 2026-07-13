"use client";

import { useState } from "react";
import { Handshake, X } from "lucide-react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative flex min-h-10 w-full items-center justify-center bg-[#f6d6fd] px-12 py-2 sm:px-14">
      <div className="flex max-w-3xl items-center gap-2">
        <Handshake className="h-4 w-4 shrink-0 text-[#6B4E9E]" strokeWidth={2} />
        <p className="text-center text-[11px] font-medium leading-snug text-[#2D2D2D] sm:text-[13px]">
          Introducing Honen, AI training built for the workforce.&nbsp;&nbsp;Learn
          More ↗
        </p>
      </div>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Close announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#666666] hover:text-[#1A1A1A] sm:right-4"
      >
        <X className="h-4 w-4" strokeWidth={2} />
      </button>
    </div>
  );
}
