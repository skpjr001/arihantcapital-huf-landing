const testimonials = [
  {
    name: "Priya Sharma",
    role: "Product Manager",
    quote: "Exceptional service and user-friendly design! Highly recommended.",
    color: "#7c4ddb",
  },
  {
    name: "Rahul Mehta",
    role: "UI Designer",
    quote: "Great overall experience, but some features could be more intuitive.",
    color: "#0b5ba8",
  },
  {
    name: "Anjali Verma",
    role: "Marketing Executive",
    quote: "Good effort, but there’s room for improvement in performance speed.",
    color: "#be185d",
  },
];

function StarBox() {
  return (
    <span aria-hidden="true" className="grid size-[15px] place-items-center bg-[#219653]">
      <svg viewBox="0 0 24 24" className="size-[11px] fill-white">
        <path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8L12 2.5Z" />
      </svg>
    </span>
  );
}

function Avatar({ name, color, className }: { name: string; color: string; className: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .join("")
    .slice(0, 2);
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-full font-semibold text-white ${className}`}
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  );
}

export default function AlgoTestimonials() {
  return (
    <section aria-label="Client reviews" className="relative">
      {/* Desktop: three review cards */}
      <ul className="hidden grid-cols-3 gap-6 lg:grid">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="flex flex-col gap-6 rounded-xl border-2 border-[#D9D9D9] bg-[#FDFDFD] p-6"
          >
            <p className="flex flex-row gap-1">
              <span className="sr-only">Rated 5 out of 5</span>
              {Array.from({ length: 5 }, (_, i) => (
                <StarBox key={i} />
              ))}
            </p>
            <blockquote className="text-xl leading-[30px] text-[#514F6E]">
              <p>{t.quote}</p>
            </blockquote>
            <div className="flex flex-row items-center gap-4">
              <Avatar name={t.name} color={t.color} className="size-12 text-[10px]" />
              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold text-[#170F49]">{t.name}</span>
                <span className="text-lg text-[#6F6C90]">{t.role}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Mobile: one large quote card per slide */}
      <ul className="no-scrollbar w-full bg-[#F8F8F8] rounded-2xl flex overflow-x-auto scroll-px-[30px] py-16 lg:hidden">
        {testimonials.map((t) => (
          <li
            key={t.name}
            className="w-[95%] shrink-0 mt-4 ml-2 mr-2 mb-2 rounded-2xl bg-white p-10 shadow-[0px_4px_6.4px_0px_#00000026]"
          >
            <blockquote className="text-lg font-medium leading-[30px] text-[#696969]">
              <p>&ldquo; {t.quote} &rdquo;</p>
            </blockquote>
            <div className="mt-10 flex items-center gap-3">
              <Avatar name={t.name} color={t.color} className="size-15 text-sm" />
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-semibold text-[#000000]">{t.name}</span>
                <span className="text-2xl text-[#000000]/60">{t.role}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
