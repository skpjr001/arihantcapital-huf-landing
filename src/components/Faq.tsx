"use client";

import { useId, useState } from "react";
import { faqs, SUPPORT_HREF } from "@/lib/site";
import { ArrowLink, SectionHeading } from "./ui";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section aria-labelledby="faq-heading" className="py-20 lg:py-30">
      <div className="container-page grid lg:grid-cols-[360px_1fr] gap-10">
        <div className="flex flex-col gap-1 lg:gap-6 w-full lg:max-w-90">
          <div className="flex flex-col gap-1 lg:gap-3">
            <SectionHeading id="faq-heading" className="text-ink">FAQs</SectionHeading>
            <p className="text-sm lg:text-xl">Explore the questions that families usually ask</p>
          </div>
          <p className="max-lg:order-3 mt-10 lg:mt-0">
            <ArrowLink href={SUPPORT_HREF}>Support</ArrowLink>
          </p>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <div key={f.q} className="border-b border-[rgba(67,67,67,0.24)]">
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-3 text-left text-sm font-semibold leading-[18px] text-ink lg:py-4 lg:text-base"
                  >
                    {f.q}
                    <span aria-hidden="true" className="relative size-3 shrink-0">
                      <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 rounded bg-ink" />
                      <span
                        className={`absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 rounded bg-ink transition-transform ${
                          isOpen ? "scale-y-0" : ""
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="bg-[rgba(67,67,67,0.08)] p-3 text-sm leading-[18px] text-ink lg:p-4"
                >
                  {f.a.map((item, index) =>
                    typeof item === "string" || item.type === "text" ? (
                      <p key={index} className="mb-3 last:mb-0">
                        {typeof item === "string" ? item : item.content}
                      </p>
                    ) : (
                      <ul key={index} className="mb-3 list-disc space-y-2 pl-5 last:mb-0">
                        {item.content.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
