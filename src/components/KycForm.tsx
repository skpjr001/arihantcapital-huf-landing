"use client";

import { useId, useState, type FormEvent } from "react";
import { PRIVACY_HREF, TERMS_HREF } from "@/lib/site";
import { ChevronRight } from "./icons";

const MOBILE_RE = /^[6-9]\d{9}$/;
const INVALID = "Enter a valid 10-digit Indian mobile number.";
const INVALID_START = "Oops! We cannot proceed without a valid number.";

type Variant = "hero" | "community" | "cta";

const config: Record<
  Variant,
  { label: string; showLabel: boolean; button: string; buttonBelow: boolean; dark: boolean; fullConsent: boolean }
> = {
  hero: { label: "Karta’s mobile number", showLabel: true, button: "Open Demat", buttonBelow: false, dark: false, fullConsent: true },
  community: { label: "Mobile number", showLabel: false, button: "Join", buttonBelow: false, dark: true, fullConsent: false },
  cta: { label: "Karta’s mobile number", showLabel: true, button: "Open Demat", buttonBelow: true, dark: false, fullConsent: true },
};

export default function KycForm({ variant, id }: { variant: Variant; id?: string }) {
  const c = config[variant];
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputId = useId();
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  function onChange(raw: string) {
    const value = raw.replace(/\D/g, "").slice(0, 10);
    setMobile(value);
    // Live check like the reference form: Indian mobiles start with 6–9.
    setError(value && Number(value[0]) < 6 ? INVALID_START : null);
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return;
    const input = e.currentTarget.elements.namedItem("mobile") as HTMLInputElement | null;

    const validation = !mobile ? "Please enter your mobile number." : !MOBILE_RE.test(mobile) ? INVALID : null;
    if (validation) {
      setError(validation);
      input?.focus();
      return;
    }

    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/api/ekyc`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobile,
          dynamicParams: Object.fromEntries(new URLSearchParams(window.location.search)),
        }),
      });
      const data: { url?: string; result?: string; error?: string } = await res.json().catch(() => ({}));

      if (!res.ok || !data.url || !data.result) {
        setError(data.error ?? "Could not start KYC. Please try again.");
        return;
      }

      const target = `${data.url}?params=${data.result}`;
      // Opened after an await, so popup blockers may stop it — fall back to same tab.
      const win = window.open(target, "_blank");
      if (win) win.opener = null;
      else window.location.assign(target);
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const linkCls = c.dark
    ? "font-medium text-brand underline underline-offset-2 hover:text-lime"
    : "font-medium text-brand-text underline underline-offset-2 hover:text-forest";

  // Highlight the whole field (prefix + input) only when there's an error.
  const fieldBorder = error
    ? "border-red-600 ring-2 ring-red-600/25"
    : variant === "hero"
      ? "border-ink/30"
      : "border-brand";

  const button = (
    <button
      type="submit"
      disabled={loading}
      aria-busy={loading || undefined}
      className={`inline-flex shrink-0 items-center justify-center cursor-pointer rounded-full bg-cta font-semibold text-white transition-colors hover:bg-cta-hover disabled:cursor-wait disabled:opacity-70 ${
        c.buttonBelow
          ? "mt-6 h-10 w-full text-sm lg:mt-[46px] lg:h-[58px] lg:w-[210px] lg:text-xl"
          : "size-[58px] text-xl lg:h-[58px] lg:w-auto lg:px-8"
      }`}
    >
      <span className={c.buttonBelow ? "" : "max-lg:sr-only"}>{loading ? "Please wait…" : c.button}</span>
      {!c.buttonBelow &&
        (loading ? (
          <span aria-hidden="true" className="size-6 animate-spin rounded-full border-2 border-white/40 border-t-white lg:hidden" />
        ) : (
          <ChevronRight className="size-7 lg:hidden" />
        ))}
    </button>
  );

  return (
    <form id={id} noValidate onSubmit={onSubmit} className="scroll-mt-8">
      <label
        htmlFor={inputId}
        className={
          c.showLabel
            ? `mb-2 block font-medium text-ink lg:mb-[9px] lg:text-sm ${variant === "cta" ? "text-[13px]" : "text-base"}`
            : "sr-only"
        }
      >
        {c.label}
      </label>

      <div className={`flex items-stretch gap-2 ${variant === "hero" ? "lg:gap-4" : "lg:gap-4"}`}>
        <div
          className={`flex min-w-0 flex-1 items-center rounded-lg border bg-white transition-[color,border-color,box-shadow] ${fieldBorder} ${
            variant === "cta" ? "h-12 lg:h-[58px] lg:max-w-[519px]" : variant === "community" ? "h-[58px] lg:max-w-[532px]" : "h-[58px]"
          }`}
        >
          <span
            className={`flex select-none items-center pl-4 text-ink ${variant === "cta" ? "text-[15px] lg:text-lg" : "text-lg"}`}
            aria-hidden="true"
          >
            +91
            <span className="mx-3 h-[18px] w-px bg-ink/25" />
          </span>
          <input
            id={inputId}
            name="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => onChange(e.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={`${hintId}${error ? ` ${errorId}` : ""}`}
            className={`h-full w-full min-w-0 rounded-r-lg bg-transparent pr-4 text-ink placeholder:text-ink/60 outline-none ${
              variant === "cta" ? "text-[15px] lg:text-lg" : "text-lg"
            }`}
          />
        </div>
        {!c.buttonBelow && button}
      </div>

      <div aria-live="polite">
        {error && (
          <p id={errorId} className={`mt-2 text-sm font-medium ${c.dark ? "text-red-300" : "text-red-700"}`}>
            {error}
          </p>
        )}
      </div>

      <p
        id={hintId}
        className={`leading-[1.4] lg:mt-[17px] lg:text-xs ${c.dark ? "text-white/75" : "text-ink"} ${
          variant === "cta" ? "mt-3.5 text-[10px] lg:max-w-[400px]" : "mt-4 text-sm"
        }`}
      >
        By continuing, you agree to our{" "}
        <a href={TERMS_HREF} className={linkCls}>
          T&amp;C
        </a>
        ,{" "}
        <a href={PRIVACY_HREF} className={linkCls}>
          Privacy Policy
        </a>
        {c.fullConsent ? " and to receive account updates on SMS and WhatsApp." : "."}
      </p>

      {c.buttonBelow && button}
    </form>
  );
}
