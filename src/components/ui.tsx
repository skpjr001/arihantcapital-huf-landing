import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

/** Section H2 with the design's type scale (28px mobile → 40px desktop). */
export function SectionHeading({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`text-[28px] font-semibold leading-[30px] tracking-[-0.02em] lg:text-[40px] lg:leading-[44px] lg:tracking-[-0.03em] ${className}`}
    >
      {children}
    </h2>
  );
}

/** Green text link with the short underline bar + ↗ icon used across the page. */
export function ArrowLink({ href, children, external = false }: { href: string; children: ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group relative inline-flex items-center gap-[6px] pb-[6px] text-lg text-brand-text after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-8 after:rounded-full after:bg-brand after:transition-[width] hover:after:w-full lg:text-base"
    >
      {children}
      <ArrowUpRight className="size-4" />
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
