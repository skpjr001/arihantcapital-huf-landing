"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/lib/assets";
import { OPEN_ACCOUNT_HREF } from "@/lib/site";
import { usePathname } from "next/navigation";

/** Sticky top bar: 48px tall on mobile, 60px on desktop. */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const algoPage = pathname.includes("/algo-trading")

  // Close the mobile menu on Escape or when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 64rem)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_4px_rgb(0_0_0/0.08)]">
      <nav aria-label="Main" className="container-page flex h-12 items-center justify-between lg:h-[60px]">
        <div className="shrink-0">
          <Image
            src={assets.logo.src}
            width={assets.logo.width}
            height={assets.logo.height}
            alt=""
            preload
            className="h-6 w-auto lg:h-[30px]"
          />
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-8 lg:flex">
          {/* <a href={LOGIN_HREF} className="text-base font-medium text-brand-text hover:text-cta-hover">
            Login
          </a> */}
          <a
            href={OPEN_ACCOUNT_HREF}
            className="inline-flex h-10 items-center rounded-full bg-cta px-6 text-base font-medium text-white transition-colors hover:bg-cta-hover"
          >
            {algoPage ? "Open Demat" : "Open HUF Account"}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 grid size-10 place-items-center rounded-md text-ink lg:hidden"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="absolute inset-x-0 top-full border-t border-ink/10 bg-white shadow-[0_8px_16px_rgb(0_0_0/0.08)] lg:hidden"
      >
        <div className="container-page flex flex-col gap-3 py-4">
          {/* <a
            href={LOGIN_HREF}
            onClick={close}
            className="inline-flex h-11 items-center justify-center rounded-full border border-cta text-base font-medium text-brand-text"
          >
            Login
          </a> */}
          <a
            href={OPEN_ACCOUNT_HREF}
            onClick={close}
            className="inline-flex h-11 items-center justify-center rounded-full bg-cta text-base font-medium text-white"
          >
            Open HUF Account
          </a>
        </div>
      </div>
    </header>
  );
}
