import type { Metadata } from "next";
import { CurriculumGraph } from "@/components/curriculum/CurriculumGraph";

export const metadata: Metadata = {
  title: "Class 9 Science Map · Jarves",
  description:
    "Interactive prerequisite map for Sindh / Karachi Board Class 9 Physics, Chemistry and Maths.",
};

export default function CurriculumPage() {
  return <CurriculumGraph />;
}
