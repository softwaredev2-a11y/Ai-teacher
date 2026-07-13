"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Will StudyFetch actually help me do better on my exams?",
    answer:
      "Yes. StudyFetch builds a personalized study plan from your materials, breaking them into an ordered sequence of topics so you learn things the right way. Instead of guessing what to review, you get flashcards, quizzes, practice tests, and more built from exactly what you need to know.",
  },
  {
    question: "How does StudyFetch know what I need to study?",
    answer:
      "StudyFetch analyzes your uploaded materials and maps them into topics, priorities, and review activities so your study plan reflects what your course actually covers.",
  },
  {
    question: "How do I know if I'm actually learning?",
    answer:
      "Quizzes, practice tests, and progress tracking show what you have mastered and what still needs review, so you can focus on gaps before exam day.",
  },
  {
    question: "What if my exam is tomorrow?",
    answer:
      "StudyFetch can generate a focused cram plan from your materials, highlighting the highest-yield topics and practice activities for the time you have left.",
  },
  {
    question: "Who uses StudyFetch?",
    answer:
      "Students, educators, and teams use StudyFetch to turn course materials into personalized study systems for classes, exams, and workforce training.",
  },
] as const;

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="flex w-full flex-col items-center gap-12 bg-[#f9f9fb] px-6 py-12 sm:px-12 lg:gap-12 lg:px-[120px] lg:py-20 lg:pb-[88px]">
      <div className="flex w-full max-w-[1200px] flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <div className="flex w-full max-w-[380px] flex-col gap-5">
          <h2 className="text-[32px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[40px] lg:text-[44px]">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="max-w-[340px] text-[15px] leading-[1.5] text-[#4A4A4A] sm:text-[16px]">
            Find answers about StudyFetch, how Spark.E works, and what we
            support
          </p>
          <button
            type="button"
            className="w-fit rounded-full border border-[#D1D5DB] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#0A0A0A]"
          >
            Contact Us
          </button>
        </div>

        <div className="flex w-full flex-1 flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-xl border border-[#E5E7EB] bg-white px-5 py-5 sm:px-6"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="text-[15px] font-semibold leading-[1.35] text-[#0A0A0A] sm:text-[16px]">
                    {item.question}
                  </span>
                  {isOpen ? (
                    <X className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#6B7280]" />
                  ) : (
                    <Plus className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#6B7280]" />
                  )}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-[680px] text-[14px] leading-[1.55] text-[#4A4A4A] sm:text-[15px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}

          <div className="flex justify-center pt-4">
            <button
              type="button"
              className="rounded-full border border-[#D1D5DB] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#0A0A0A]"
            >
              See more
            </button>
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[1200px] flex-col items-center gap-6">
        <div className="h-px w-full bg-[#E5E7EB]" />
        <p className="text-center text-[15px] text-[#4A4A4A]">
          Still have questions? Try it yourself — it&apos;s free.
        </p>
        <button
          type="button"
          className="rounded-full bg-[#004ff8] px-7 py-3 text-[14px] font-semibold text-white"
        >
          Start for Free
        </button>
      </div>
    </section>
  );
}
