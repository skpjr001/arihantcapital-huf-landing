import Image from "next/image";
import { familyBenefits } from "@/lib/site";
import { SectionHeading } from "./ui";

export default function WhyFamilies() {
  return (
    <section aria-labelledby="why-families-heading" className="hidden lg:block py-[120px]">
      <div className="container-page grid gap-8 lg:grid-cols-[360px_1fr] lg:gap-10">
        <div className="w-full lg:w-[400px]">
          <SectionHeading id="why-families-heading">Why families open an HUF Demat Account</SectionHeading>
          <p className="mt-3 text-xl text-ink leading-[26px]">
            One family. One more PAN. More ways to grow wealth together.
          </p>
          <p className="mt-6 text-[11px] text-ink/64 ">
            *Tax benefits vary by case. Consult your tax advisor.
          </p>
        </div>

        <ul className="grid rounded-2xl bg-lime/24 px-6 py-2 sm:grid-cols-2 lg:px-10 lg:py-10">
          {familyBenefits.map((b, i) => (
            <li
              key={b.title}
              className={`relative py-6 sm:py-0 ${i > 0 ? "max-sm:border-t max-sm:border-ink/10" : ""} ${
                i % 2 === 0 ? "sm:pr-10" : "sm:pl-10"
              } ${i >= 2 ? "sm:pt-6 lg:pt-6" : "sm:pb-6 lg:pb-6"} ${  
                // Desktop dividers: vertical between columns, horizontal between rows (fading at ends)
                i % 2 === 1
                  ? "sm:before:absolute sm:before:inset-y-0 sm:before:left-0 sm:before:w-px sm:before:bg-[linear-gradient(90deg,rgba(67,67,67,0)_0%,rgba(67,67,67,0.16)_50%,rgba(67,67,67,0)_100%)] sm:before:content-['']"
                  : ""
              } ${
                i < 2
                  ? "sm:after:absolute sm:after:inset-x-0 sm:after:bottom-0 sm:after:h-px sm:after:content-[''] " +
                    (i === 0
                      ? "sm:after:bg-[linear-gradient(to_right,transparent,rgb(67_67_67/0.12))]"
                      : "sm:after:bg-[linear-gradient(to_left,transparent,rgb(67_67_67/0.12))]")
                  : ""
              }`}
            >
              <span className="grid size-10 place-items-center rounded-lg bg-brand/12" aria-hidden="true">
                <Image src={b.icon.src} width={b.icon.width} height={b.icon.height} alt="" />
              </span>
              <h3 className="mt-3 text-base font-semibold leading-5">{b.title}</h3>
              <p className="mt-1 text-sm text-ink leading-[18px]">{b.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
