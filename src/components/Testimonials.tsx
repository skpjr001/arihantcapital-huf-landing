"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { reviews } from "@/lib/site";
import { ChevronLeft, ChevronRight, Star } from "./icons";
import { SectionHeading } from "./ui";

const AVATAR_COLORS = ["#7c4ddb", "#0b5ba8", "#c2410c", "#047857", "#be185d"];

/** CMS descriptions are HTML; render them as plain text. */
function htmlToText(html: string) {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

const testimonials = reviews.map(({ id, attributes: a }, i) => ({
  id,
  author: a.reviewer_place ? `${a.reviewer_name}, ${a.reviewer_place}` : a.reviewer_name,
  quote: htmlToText(a.review_description),
  avatar: a.reviewer_image.data?.attributes.url,
  avatarColor: AVATAR_COLORS[i % AVATAR_COLORS.length],
}));

export default function Testimonials() {
  const listRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const update = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = listRef.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: reduce ? "auto" : "smooth" });
  };

  const navBtn =
    "grid size-10 place-items-center rounded-lg text-white transition-colors enabled:bg-ink enabled:hover:bg-black disabled:cursor-not-allowed disabled:bg-ink/30";

  return (
    <section
      aria-labelledby="testimonials-heading"
      aria-roledescription="carousel"
      className="py-20 lg:pb-[100px] lg:pt-[120px]"
    >
      <div className="container-page">
        <SectionHeading id="testimonials-heading">What our clients have to say</SectionHeading>

        <ul
          ref={listRef}
          tabIndex={0}
          aria-label="Client reviews"
          className="no-scrollbar relative -mx-[30px] mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-[30px] px-[30px] pb-2 lg:mx-0 lg:mt-[38px] lg:gap-[25px] lg:scroll-px-0 lg:px-0"
        >
          {testimonials.map((t, i) => (
            <li
              key={t.id}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${testimonials.length}`}
              className="flex w-[240px] shrink-0 snap-start flex-col rounded-2xl border border-ink/15 bg-white px-6 pb-6 pt-6 text-center lg:w-[calc((100%-50px)/3)] lg:px-[35px] lg:pt-[35px]"
            >
              {/* <p className="flex justify-center gap-2 lg:gap-4">
                <span className="sr-only">Rated 5 out of 5</span>
                {Array.from({ length: 5 }, (_, s) => (
                  <Star key={s} className="size-[22px] lg:size-6" />
                ))}
              </p> */}
              {/* <h3 className="mt-[18px] text-lg font-medium leading-6 lg:mt-[37px] lg:text-xl">{t.title}</h3> */}
              <blockquote className="mt-[6px] flex-1 text-[15px] leading-5 lg:mt-1 lg:text-lg lg:leading-[26px]">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <div className="mt-[22px] flex items-center justify-between border-t border-ink/15 pt-[22px] lg:mt-6 lg:pt-5">
                <cite className="text-base not-italic text-ink/80">{t.author}</cite>
                {t.avatar ? (
                  <Image src={t.avatar} width={40} height={40} alt="" className="size-5 shrink-0 rounded-full object-cover lg:size-10" />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid size-5 shrink-0 place-items-center rounded-full text-xs font-semibold text-white lg:size-10 lg:text-2xl"
                    style={{ backgroundColor: t.avatarColor }}
                  >
                    {t.author[0].toLowerCase()}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center gap-3">
          <button type="button" className={navBtn} onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous review">
            <ChevronLeft className="size-5" />
          </button>
          <button type="button" className={navBtn} onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next review">
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
