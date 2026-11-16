import Image from "next/image";
import { assets } from "@/lib/assets";
import { OPEN_ACCOUNT_HREF, requiredDocuments, steps } from "@/lib/site";
import { SectionHeading } from "./ui";

export default function Steps() {
  return (
    <section aria-labelledby="steps-heading" className="bg-forest py-20 text-white lg:py-[120px]">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_auto] lg:gap-10">
          <div className="flex flex-col gap-1 lg:gap-3">
            <SectionHeading id="steps-heading" className="text-white">
              Open your HUF Demat Account <br className="hidden lg:inline" />
              in just four steps
            </SectionHeading>
            <p className="text-sm leading-[18px] text-white/64 lg:text-xl lg:leading-[26px]">
              Simple and easy, 100% digital account opening.
              <br />
              The Karta completes every step on behalf of the family.
            </p>
          </div>

          {/* Photo with floating badges */}
          <div className="relative mx-auto w-[266px] sm:w-[360px] lg:mr-[100px]">
            <Image
              src={assets.stepsFamily.src}
              width={assets.stepsFamily.width}
              height={assets.stepsFamily.height}
              sizes="(min-width: 640px) 360px, 266px"
              alt="A father playfully lifting his young daughter in a park playground"
              className="h-auto w-full rounded-2xl"
            />
            <Badge className="-left-[40px] top-[87px] lg:-left-[52px] lg:top-[118px]" icon={assets.zeroPaperwork}>
              Zero Paperwork
            </Badge>
            <Badge
              className="-right-[68px] top-[140px] sm:-right-[46px] lg:-right-[92px] lg:top-[190px]"
              icon={assets.zeroBranch}
              iconFirst
            >
              Zero Branch Visits
            </Badge>
          </div>
        </div>

        <ol className="mt-10 grid lg:grid-cols-[repeat(3,300px)_1fr]">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`py-[25px] lg:py-0 lg:pr-[50px] ${
                i > 0
                  ? "max-lg:border-t max-lg:border-[rgb(255_255_255/0.08)] max-lg:[border-image:linear-gradient(to_right,transparent,rgb(255_255_255/0.12),transparent)_1]"
                  : "max-lg:pt-0"
              }`}
            >
              <p className="text-xs lg:text-sm font-semibold uppercase leading-4 text-orange">Step {i + 1}</p>
              <h3 className="mt-[6px] text-base lg:text-xl font-semibold leading-6 lg:mt-2">{s.title}</h3>
              <p className="mt-[2px] lg:mt-1 text-xs leading-[18px] text-white/64 lg:text-sm">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl bg-mint p-6 text-ink lg:p-10">
          <h3 className="text-xl font-semibold leading-[22px] lg:text-2xl lg:leading-7">
            What you need to open <br className="lg:hidden" />a HUF Demat Account?
          </h3>
          <p className="mt-1 text-[13px] text-ink/64 lg:text-sm">Keep these documents handy for a quick onboarding.</p>
          <ul className="mt-6 flex flex-wrap gap-2 lg:mt-[31px]">
            {requiredDocuments.map((d) => (
              <li
                key={d}
                className="rounded-lg bg-forest/8 px-3 py-[6px] text-sm font-semibold leading-[18px] text-forest lg:px-4 lg:py-2 lg:text-base"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={OPEN_ACCOUNT_HREF}
            className="inline-flex h-[45px] w-full items-center justify-center rounded-full bg-cta px-8 text-base lg:text-xl font-semibold text-white transition-colors sm:w-fit lg:h-[58px]"
          >
            Create HUF Account Now
          </a>
        </div>
      </div>
    </section>
  );
}

function Badge({
  children,
  icon,
  className,
  iconFirst = false,
}: {
  children: string;
  icon: { src: string };
  className: string;
  iconFirst?: boolean;
}) {
  const img = <Image src={icon.src} width={28} height={28} alt="" className="size-6 lg:size-7" />;
  return (
    <p
      className={`absolute flex h-[26px] items-center gap-2 whitespace-nowrap rounded-lg border border-solid border-transparent shadow-[3px_3px_9px_0px_rgba(0,0,0,0.4)] [background:linear-gradient(90deg,#FFF9A4_0%,#FFFFBF_100%)_padding-box,linear-gradient(270deg,rgba(52,179,80,0)_0%,#B5F700_71.16%)_border-box] px-[10px] text-[9px] font-semibold text-ink lg:h-[34px] lg:px-3 lg:text-xs ${className}`}
    >
      {iconFirst && img}
      {children}
      {!iconFirst && img}
    </p>
  );
}
