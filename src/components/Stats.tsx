import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section aria-label="Arihant Capital in numbers" className="bg-cta shadow-[inset_0px_0px_24px_0px_rgba(0,0,0,0.32)]">
      <ul
        tabIndex={0}
        aria-label="Key figures (scrollable)"
        className="no-scrollbar relative mx-auto flex max-w-[1208px] snap-x snap-mandatory overflow-x-auto py-[25px] focus-visible:outline-white lg:overflow-visible lg:px-6 lg:py-[58px]"
      >
        {stats.map((s, i) => (
          <li
            key={s.label}
            className={`relative flex w-[160px] shrink-0 snap-start flex-col items-center text-center text-white lg:w-auto lg:flex-1 ${
              i > 0
                ? "before:absolute before:inset-y-1 before:left-0 before:w-px before:bg-[linear-gradient(to_bottom,transparent,rgb(255_255_255/0.4),transparent)] before:content-['']"
                : ""
            }`}
          >
            <span className="text-[28px] font-semibold leading-8 lg:text-[40px] lg:leading-[44px]">{s.value}</span>
            <span className="mt-1 text-sm leading-6 lg:mt-[13px] lg:text-2xl">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
