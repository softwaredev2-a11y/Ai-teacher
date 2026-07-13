import Image from "next/image";

const BLOG_POSTS = [
  {
    title: "Meet Guided Chatting on StudyFetch",
    excerpt:
      "Spark.E now builds you a study plan and walks you through it. Tell it what you want to learn, and it takes you through the right activities, in the right order, ...",
    date: "June 18, 2026",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=600&fit=crop",
    imageBg: "#A8E6E3",
    alt: "Student using phone",
  },
  {
    title: "A New and Improved Study Plan",
    excerpt:
      "The Study Plan just got a full redesign. Track what you've covered and what you've truly mastered, pick the study mode that fits your timeline, and let...",
    date: "June 16, 2026",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop",
    imageBg: "#FFF59D",
    alt: "Student reading a book",
  },
] as const;

function BlogCard({
  title,
  excerpt,
  date,
  image,
  imageBg,
  alt,
}: (typeof BLOG_POSTS)[number]) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
      <div
        className="relative h-[220px] overflow-hidden sm:h-[280px]"
        style={{ backgroundColor: imageBg }}
      >
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <div className="relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px]">
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover object-top grayscale contrast-125"
              sizes="(max-width: 768px) 50vw, 300px"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 px-6 py-6 pb-7">
        <h3 className="text-[17px] font-normal leading-[1.3] text-[#0A0A0A] sm:text-[18px]">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.55] text-[#4A4A4A] sm:text-[15px]">
          {excerpt}
        </p>
        <div className="flex flex-col gap-1 pt-1">
          <p className="text-[14px] font-semibold text-[#0A0A0A]">StudyFetch</p>
          <p className="text-[13px] text-[#9CA3AF]">{date}</p>
        </div>
      </div>
    </article>
  );
}

export function BlogSection() {
  return (
    <section className="flex w-full flex-col items-center gap-10 bg-white px-6 py-12 sm:px-12 lg:gap-10 lg:px-[120px] lg:py-20 lg:pb-[88px]">
      <p className="text-center text-[14px] font-medium text-[#0A0A0A]">Blog</p>
      <h2 className="text-center text-[32px] font-normal leading-[1.15] tracking-[-1px] text-[#0A0A0A] sm:text-[40px] lg:text-[44px]">
        Uplifting learners
      </h2>
      <p className="text-center text-[15px] text-[#4A4A4A] sm:text-[16px]">
        Real students, real breakthroughs with Spark.E
      </p>

      <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 md:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>

      <button
        type="button"
        className="rounded-full border border-[#D1D5DB] bg-white px-6 py-2.5 text-[14px] font-semibold text-[#0A0A0A]"
      >
        See more
      </button>
    </section>
  );
}
