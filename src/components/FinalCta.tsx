import Image from "next/image";
import { assets } from "@/lib/assets";
import KycForm from "./KycForm";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="relative lg:container-page lg:py-[90px]">
      <div className="relative">
        {/* Decorative coins (desktop), positioned against the card's edges */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
          <Image
            src={assets.coin.src}
            width={92}
            height={92}
            alt=""
            className="absolute left-[72px] top-[-50px] w-[92px] -rotate-[12deg] opacity-90 blur-[3px]"
          />
          <Image
            src={assets.coin.src}
            width={92}
            height={92}
            alt=""
            className="absolute right-[-40px] top-[84px] w-[92px] rotate-[24deg] opacity-90 blur-[3px]"
          />
          <Image
            src={assets.coin.src}
            width={155}
            height={155}
            alt=""
            className="absolute bottom-[-68px] left-[36.6%] w-[155px] rotate-[9deg]"
          />
        </div>

        <div className="relative z-10 overflow-hidden bg-white lg:rounded-2xl">
          <div className="bg-[linear-gradient(0deg,rgba(181,247,0,0.24),rgba(181,247,0,0.24)),radial-gradient(203.45%_100%_at_50%_0%,rgba(247,146,0,0.112)_0%,rgba(247,146,0,0)_20%),radial-gradient(203.45%_100%_at_50%_100%,rgba(247,146,0,0.08)_0%,rgba(247,146,0,0)_20%)] backdrop-blur-[48px] lg:flex lg:min-h-[574px] lg:items-stretch">
            <div className="px-[30px] pt-[60px] lg:w-[580px] lg:shrink-0 lg:self-center lg:py-[60px] lg:pl-[60px] lg:pr-0">
              <h2
                id="cta-heading"
                className="text-[28px] font-semibold leading-[28px] tracking-[-0.02em] text-forest lg:text-[40px] lg:leading-[44px] lg:tracking-[-0.03em]"
              >
                Start your family&rsquo;s <br />
                HUF demat account today
              </h2>
              <p className="mt-1 text-sm text-ink lg:mt-3 lg:text-xl">
                Invest as HUF and save taxes. Open your free account now.
              </p>
              <div className="mt-6 lg:mt-10">
                <KycForm variant="cta" />
              </div>
            </div>

            <div className="relative mt-[30px] flex overflow-hidden lg:mt-0 lg:flex-1 lg:items-end lg:justify-end lg:overflow-visible">
              <Image
                src={assets.ctaHandsPhone.src}
                width={assets.ctaHandsPhone.width}
                height={assets.ctaHandsPhone.height}
                sizes="(min-width: 1024px) 594px, 124vw"
                alt="Hands holding a phone showing the ArihantPlus app dashboard"
                className="h-auto w-[124%] max-w-none shrink-0 lg:-mb-px lg:mt-[45px] lg:w-full lg:max-w-[594px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
