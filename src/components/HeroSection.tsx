import Image from "next/image";
import {
  AudioLines,
  Layers,
  ListChecks,
  Pencil,
  Play,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type HeroCard = {
  id: string;
  image: string;
  alt: string;
  badge?: {
    x: number;
    y: number;
    size: number;
    color: string;
    icon: LucideIcon;
  };
  desktop: { x: number; y: number; width: number; height: number };
  mobile: { x: number; y: number; width: number; height: number };
};

const MOBILE_CANVAS = { w: 390, h: 800 };
const DESKTOP_CANVAS = { w: 1440, h: 860 };

const heroCards: HeroCard[] = [
  {
    id: "card1",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
    alt: "Student with tablet",
    badge: {
      x: -12,
      y: -12,
      size: 44,
      color: "#F5C518",
      icon: Pencil,
    },
    desktop: { x: 100, y: 60, width: 150, height: 110 },
    mobile: { x: 200, y: 95, width: 115, height: 75 },
  },
  {
    id: "card2",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop",
    alt: "Student portrait",
    desktop: { x: 400, y: 10, width: 115, height: 155 },
    mobile: { x: 118, y: 118, width: 68, height: 95 },
  },
  {
    id: "card3",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
    alt: "Students studying outdoors",
    desktop: { x: 1080, y: 50, width: 155, height: 115 },
    mobile: { x: 255, y: 12, width: 115, height: 82 },
  },
  {
    id: "card4",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=350&fit=crop",
    alt: "Students with laptop",
    badge: {
      x: 175,
      y: 45,
      size: 52,
      color: "#2DD4BF",
      icon: ListChecks,
    },
    desktop: { x: 60, y: 320, width: 210, height: 135 },
    mobile: { x: 12, y: 408, width: 130, height: 85 },
  },
  {
    id: "card5",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=350&h=400&fit=crop",
    alt: "Student with headphones",
    badge: {
      x: -18,
      y: 50,
      size: 44,
      color: "#EC4899",
      icon: AudioLines,
    },
    desktop: { x: 1190, y: 275, width: 135, height: 145 },
    mobile: { x: 24, y: 20, width: 100, height: 128 },
  },
  {
    id: "card6",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=400&fit=crop",
    alt: "Student using phone",
    badge: {
      x: -14,
      y: -14,
      size: 48,
      color: "#60A5FA",
      icon: Layers,
    },
    desktop: { x: 190, y: 600, width: 125, height: 155 },
    mobile: { x: 145, y: 478, width: 88, height: 118 },
  },
  {
    id: "card7",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=500&h=300&fit=crop",
    alt: "Group of students",
    desktop: { x: 530, y: 655, width: 185, height: 105 },
    mobile: { x: 160, y: 400, width: 85, height: 52 },
  },
  {
    id: "card8",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    alt: "Hands holding smartphone",
    badge: {
      x: 115,
      y: -14,
      size: 44,
      color: "#4ADE80",
      icon: Play,
    },
    desktop: { x: 1020, y: 575, width: 145, height: 115 },
    mobile: { x: 255, y: 438, width: 100, height: 76 },
  },
];

function HeroCardItem({
  card,
  layout,
  canvas,
  rounded = "rounded-2xl",
}: {
  card: HeroCard;
  layout: { x: number; y: number; width: number; height: number };
  canvas: { w: number; h: number };
  rounded?: string;
}) {
  const BadgeIcon = card.badge?.icon;

  return (
    <div
      className="absolute z-0 overflow-visible"
      style={{
        left: `${(layout.x / canvas.w) * 100}%`,
        top: `${(layout.y / canvas.h) * 100}%`,
        width: `${(layout.width / canvas.w) * 100}%`,
        height: `${(layout.height / canvas.h) * 100}%`,
      }}
    >
      <div className={`relative h-full w-full overflow-hidden ${rounded}`}>
        <Image
          src={card.image}
          alt={card.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 28vw, 200px"
        />
      </div>

      {card.badge && BadgeIcon ? (
        <div
          className="absolute flex items-center justify-center rounded-full"
          style={{
            left: `${(card.badge.x / card.desktop.width) * 100}%`,
            top: `${(card.badge.y / card.desktop.height) * 100}%`,
            width: `${(card.badge.size / card.desktop.width) * 100}%`,
            aspectRatio: "1",
            backgroundColor: card.badge.color,
          }}
        >
          <BadgeIcon className="h-[45%] w-[45%] text-white" strokeWidth={2} />
        </div>
      ) : null}
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative w-full overflow-x-hidden bg-white px-4 pb-8 pt-2 sm:px-6 lg:px-0 lg:pb-0 lg:pt-0">
      <Reveal
        delay={0.08}
        className="relative mx-auto aspect-[390/800] w-full max-w-[390px] lg:hidden"
      >
        {heroCards.map((card) => (
          <HeroCardItem
            key={card.id}
            card={card}
            layout={card.mobile}
            canvas={MOBILE_CANVAS}
            rounded="rounded-[14px]"
          />
        ))}

        <div className="absolute inset-x-0 top-[34%] z-10 flex flex-col items-center gap-5 px-6">
          <h1 className="text-center leading-[1.1] tracking-[-0.8px] text-[#1A1A1A]">
            <span className="text-[28px] font-normal">Learning that adapts to </span>
            <span className="text-[28px] font-normal italic">you</span>
          </h1>
          <button
            type="button"
            className="rounded-full bg-[#004ff8] px-8 py-3.5 text-[15px] font-semibold text-white"
          >
            Start learning
          </button>
        </div>
      </Reveal>

      <Reveal
        delay={0.08}
        className="relative mx-auto hidden aspect-[1440/860] w-full max-w-[1440px] lg:block"
      >
        {heroCards.map((card) => (
          <HeroCardItem
            key={card.id}
            card={card}
            layout={card.desktop}
            canvas={DESKTOP_CANVAS}
          />
        ))}

        <div
          className="absolute z-10 flex flex-col items-center gap-7"
          style={{
            left: `${(420 / DESKTOP_CANVAS.w) * 100}%`,
            top: `${(280 / DESKTOP_CANVAS.h) * 100}%`,
            width: `${(600 / DESKTOP_CANVAS.w) * 100}%`,
          }}
        >
          <h1 className="flex flex-wrap items-center justify-center text-center leading-[1.1] tracking-[-1.5px] text-[#1A1A1A]">
            <span className="text-[56px] font-normal">Learning that adapts to </span>
            <span className="text-[56px] font-normal italic">you</span>
          </h1>
          <button
            type="button"
            className="rounded-full bg-[#004ff8] px-9 py-4 text-[16px] font-semibold text-white"
          >
            Start learning
          </button>
        </div>
      </Reveal>
    </section>
  );
}
