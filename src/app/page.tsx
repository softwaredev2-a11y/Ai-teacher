import type { Metadata } from "next";
import { CurriculumGraph } from "@/components/curriculum/CurriculumGraph";

// StudyFetch landing — commented out; curriculum only
/*
import dynamic from "next/dynamic";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { Reveal } from "@/components/Reveal";

const TrustSection = dynamic(() =>
  import("@/components/TrustSection").then((m) => ({ default: m.TrustSection })),
);
const DemoSection = dynamic(() =>
  import("@/components/DemoSection").then((m) => ({ default: m.DemoSection })),
);
const FeaturesSection = dynamic(() =>
  import("@/components/FeaturesSection").then((m) => ({
    default: m.FeaturesSection,
  })),
);
const ResearchSection = dynamic(() =>
  import("@/components/ResearchSection").then((m) => ({
    default: m.ResearchSection,
  })),
);
const PartnershipsSection = dynamic(() =>
  import("@/components/PartnershipsSection").then((m) => ({
    default: m.PartnershipsSection,
  })),
);
const FaqSection = dynamic(() =>
  import("@/components/FaqSection").then((m) => ({ default: m.FaqSection })),
);
const BlogSection = dynamic(() =>
  import("@/components/BlogSection").then((m) => ({ default: m.BlogSection })),
);
const FooterSection = dynamic(() =>
  import("@/components/FooterSection").then((m) => ({
    default: m.FooterSection,
  })),
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <Reveal>
        <TrustSection />
      </Reveal>
      <Reveal delay={0.05}>
        <DemoSection />
      </Reveal>
      <Reveal delay={0.05}>
        <FeaturesSection />
      </Reveal>
      <Reveal delay={0.05}>
        <ResearchSection />
      </Reveal>
      <Reveal delay={0.05}>
        <PartnershipsSection />
      </Reveal>
      <Reveal delay={0.05}>
        <FaqSection />
      </Reveal>
      <Reveal delay={0.05}>
        <BlogSection />
      </Reveal>
      <FooterSection />
    </div>
  );
}
*/

export const metadata: Metadata = {
  title: "Class 9 Science Map · Jarves",
  description:
    "Interactive prerequisite map for Sindh / Karachi Board Class 9 Physics, Chemistry and Maths.",
};

export default function Home() {
  return <CurriculumGraph />;
}
