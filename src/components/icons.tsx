import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { "aria-hidden": true, focusable: false, viewBox: "0 0 24 24" } as const;

export function ChevronRight(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 5.5 15.5 12 9 18.5" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 5.5 8.5 12 15 18.5" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg {...base} fill="currentColor" {...props}>
      <path d="M8 5.2v13.6a.8.8 0 0 0 1.2.7l10.6-6.8a.8.8 0 0 0 0-1.4L9.2 4.5A.8.8 0 0 0 8 5.2Z" />
    </svg>
  );
}

export function Percent(props: IconProps) {
  return (
    <svg {...base} fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" {...props}>
      <path d="M18 6 6 18" />
      <circle cx="7" cy="7" r="2.4" />
      <circle cx="17" cy="17" r="2.4" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg aria-hidden focusable={false} viewBox="0 0 24 24" {...props}>
      <defs>
        <linearGradient id="star-g" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffc93c" />
          <stop offset="1" stopColor="#f79200" />
        </linearGradient>
      </defs>
      <path
        fill="url(#star-g)"
        d="M12 2.6c.4 0 .7.2.9.6l2.3 4.8 5.2.7c.8.1 1.1 1.1.5 1.7l-3.8 3.6.9 5.2c.1.8-.7 1.4-1.4 1L12 17.8l-4.6 2.4c-.7.4-1.6-.2-1.4-1l.9-5.2-3.8-3.6c-.6-.6-.3-1.6.5-1.7l5.2-.7 2.3-4.8c.2-.4.5-.6.9-.6Z"
      />
    </svg>
  );
}
