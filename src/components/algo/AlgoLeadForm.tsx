"use client";

import { useId, useState, type FormEvent } from "react";

const MOBILE_RE = /^[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Field = "name" | "phone" | "email";
type Errors = Partial<Record<Field, string>>;

function validate(v: Record<Field, string>): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.phone) e.phone = "Please enter your mobile number.";
  else if (!MOBILE_RE.test(v.phone)) e.phone = "Enter a valid 10-digit Indian mobile number.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address.";
  return e;
}

export default function AlgoLeadForm() {
  const uid = useId();
  const [values, setValues] = useState<Record<Field, string>>({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  const set = (f: Field, val: string) => {
    setValues((v) => ({ ...v, [f]: val }));
    if (errors[f]) setErrors((e) => ({ ...e, [f]: undefined }));
  };

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const first = (Object.keys(errs) as Field[])[0];
    if (first) {
      (e.currentTarget.elements.namedItem(first) as HTMLInputElement | null)?.focus();
      return;
    }
    // TODO: wire to the lead-capture API once it is available.
    setDone(true);
  }

  const inputCls = (f: Field) =>
    `h-11 w-full rounded-2xl bg-[#000000]/4 p-4 text-sm text-ink outline-none placeholder:text-[#ACACAC] transition-shadow ${errors[f] ? "ring-2 ring-red-600/40" : ""
    }`;
  const labelCls = "mb-2 block text-base font-semibold text-[#000000]";
  const errCls = "mt-1.5 text-xs font-semibold text-red-700";

  return (
    <div className="w-full lg:max-w-[572px] rounded-3xl bg-white p-[26px] shadow-[0_4px_18px_rgb(0_0_0/0.12)] lg:border lg:border-[#D3D2D2] lg:p-9 lg:shadow-[0_4px_14px_rgb(0_0_0/0.08)]">
      <form noValidate onSubmit={onSubmit}>
        <div>
          <label htmlFor={`${uid}-name`} className={labelCls}>
            Name
          </label>
          <input
            id={`${uid}-name`}
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Write here.."
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${uid}-name-err` : undefined}
            className={inputCls("name")}
          />
          {errors.name && <p id={`${uid}-name-err`} className={errCls}>{errors.name}</p>}
        </div>

        <div className="mt-5">
          <label htmlFor={`${uid}-phone`} className={labelCls}>
            Phone
          </label>
          <input
            id={`${uid}-phone`}
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            placeholder="+91"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? `${uid}-phone-err` : undefined}
            className={inputCls("phone")}
          />
          {errors.phone && <p id={`${uid}-phone-err`} className={errCls}>{errors.phone}</p>}
        </div>

        <div className="mt-5">
          <label htmlFor={`${uid}-email`} className={labelCls}>
            Email
          </label>
          <input
            id={`${uid}-email`}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="example@gmail.com"
            value={values.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${uid}-email-err` : undefined}
            className={inputCls("email")}
          />
          {errors.email && <p id={`${uid}-email-err`} className={errCls}>{errors.email}</p>}
        </div>

        <button
          type="submit"
          className="mt-5 h-[50px] w-full cursor-pointer rounded-[10px] bg-cta text-base font-medium text-white"
        >
          Explore
        </button>
      </form>
    </div>
  );
}
