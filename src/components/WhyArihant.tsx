import Image from "next/image";
import { assets } from "@/lib/assets";
import { arihantReasons, charges } from "@/lib/site";
import { Percent } from "./icons";
import { SectionHeading } from "./ui";

export default function WhyArihant() {
  return (
    <section aria-labelledby="why-arihant-heading" className="py-20 lg:py-[120px]">
      <div className="container-page grid gap-[15px] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10">
        {/* Left column */}
        <div className="flex flex-col lg:row-span-2">
          <SectionHeading id="why-arihant-heading">
            Why open HUF Demat Account <br className="hidden lg:inline" />
            with Arihant?
          </SectionHeading>
          <p className="mt-1 text-sm leading-5 lg:mt-3 lg:text-xl text-ink">
            Three decades of helping Indian famili  es build wealth, now in one app.
          </p>

          <div className="flex-1 rounded-2xl bg-mint mt-10 p-6 lg:px-10 lg:py-[75px]  ">
            <span className="grid size-14 place-items-center rounded-full bg-brand lg:size-[88px]" aria-hidden="true">
              <Image src={assets.arihantMarkWhite.src} width={30} height={30} alt="" className="w-[30px] lg:w-[43px]" />
            </span>
            <h3 className="mt-4 text-[28px] font-medium leading-[30px] tracking-[-0.02em] text-forest lg:mt-10 lg:text-[40px] lg:leading-[44px] lg:tracking-[-0.03em]">
              Generating wealth <br />
              since 1992
            </h3>
            <p className="mt-3 text-sm lg:text-2xl leading-5 text-forest/64 lg:leading-[31px]">
              A listed, SEBI-registered firm with research, broking and wealth management under one roof, and 800+
              branches and partners across India.
            </p>
          </div>
        </div>

        {/* Reasons */}
        <ul className="rounded-2xl border border-ink/24 p-6 space-y-6 flex flex-col justify-between lg:p-10">
          {arihantReasons.map((r) => (
            <li key={r.title} className="flex gap-3 lg:gap-3">
              <span
                className="grid h-[65px] w-8 shrink-0 place-items-center justify-items-between rounded-lg bg-mint text-brand lg:h-[61px] lg:w-[43px]"
                aria-hidden="true"
              >
                <Percent className="size-5" />
              </span>
              <div>
                <h3 className="text-sm font-semibold leading-4 lg:text-base lg:leading-5">{r.title}</h3>
                <p className="mt-[2px] lg:mt-1 text-xs leading-[15px] lg:text-sm lg:leading-[18px]">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Charges */}
        <section aria-labelledby="charges-heading" className="rounded-2xl bg-mint p-6 lg:p-10">
          <div className="flex items-center justify-between border-b border-ink/10 pb-3 lg:pb-[13px]">
            <h3 id="charges-heading" className="text-xl font-semibold text-forest lg:text-2xl">
              Charges
            </h3>
            <Image src={assets.coin.src} width={43} height={43} alt="" className="size-8 opacity-95 lg:size-[43px]" />
          </div>
          <dl className="mt-3 space-y-3 text-sm lg:text-base">
            {charges.map((c) => (
              <div key={c.label} className="flex items-center justify-between">
                <dt>
                  {c.fullLabel ? (
                    <abbr title={c.fullLabel} className="no-underline">
                      {c.label}
                    </abbr>
                  ) : (
                    c.label
                  )}
                </dt>
                <dd className="font-semibold">{c.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
