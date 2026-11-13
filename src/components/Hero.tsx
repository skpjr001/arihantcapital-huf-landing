import Image from "next/image";
import { assets } from "@/lib/assets";
import { highlights } from "@/lib/site";
import KycForm from "./KycForm";

/**
 * Desktop: hero + highlights strip together fill exactly one viewport (below the
 * 60px navbar), so the green strip sits at the bottom of the screen before scrolling.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex flex-col overflow-hidden lg:h-[calc(100dvh-60px)]"
    >
      <div className="flex min-h-0 flex-1 flex-col bg-[linear-gradient(237.68deg,#FFFFFF_55.29%,#FCFFED_83.37%)]">

        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden lg:block">
          <div className="absolute -bottom-[120px] -left-[160px] size-[520px] rounded-full bg-[#d9f2a0]/40 blur-[90px]" />
          <div className="absolute -right-[200px] bottom-[40px] size-[438px] rounded-full bg-[#1aae00]/[0.06] blur-[80px]" />
          <Image
            src={assets.coinBlurLeft.src}
            width={89}
            height={130}
            alt=""
            className="absolute -top-[22px] left-0 w-[60px]"
          />
          <Image
            src={assets.coinBlurRight.src}
            width={92}
            height={150}
            alt=""
            className="absolute bottom-[104px] right-0 w-[78px]"
          />
        </div>

        <div className="container-page relative grid flex-1 grid-cols-[minmax(0,1fr)] gap-8 pt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-6 lg:pt-8 short:pt-6">
          {/* Copy + form */}
          <div className="lg:max-w-[560px] lg:self-center lg:pb-[48px] short:pb-6">
            <h1
              id="hero-heading"
              className="text-[40px] font-medium leading-[42px] tracking-[-0.02em] text-ink lg:text-[64px] lg:leading-[68px] lg:tracking-[-0.025em] short:text-[48px] short:leading-[54px]"
            >
              <span className="lg:hidden">Family&rsquo;s HUF Demat Account</span>
              <span className="hidden lg:inline">Give your family&rsquo;s wealth an account of its&nbsp;own.</span>
            </h1>

            <p className="mt-0 text-sm leading-[18px] text-ink lg:mt-1 lg:max-w-[545px] short:text-base short:leading-[23px] lg:text-xl lg:leading-[26px]">
              <span className="lg:hidden">
                Open your HUF Demat Account and invest in stocks, mutual funds, IPO, F&amp;Os &amp; NCDs as a legal
                entity for tax purposes.
              </span>
              <span className="hidden lg:inline">
                It&rsquo;s time to open your HUF demat account and invest in stocks, mutual funds, IPO, futures and
                options &amp; NCDs as a legal entity for tax purposes.
              </span>
            </p>

            <div className="mt-6 lg:mt-10 short:mt-5">
              <KycForm variant="hero" id="start-kyc" />
            </div>

            <p className="mt-6 flex items-center gap-1 text-sm text-ink lg:mt-10 lg:text-base short:mt-5">
              <Image src={assets.sebiBadge.src} width={32} height={32} alt="" className="size-[28px] lg:size-8" />
              <span>
                <strong className="font-semibold">SEBI Registered Broker</strong> NSE, BSE, and MCX
              </span>
            </p>
          </div>

          {/* Visual: sits flush on the highlights strip */}
          <div className="flex justify-center lg:justify-end lg:self-end">
            <Image
              src={assets.heroPhone.src}
              width={assets.heroPhone.width}
              height={assets.heroPhone.height}
              alt="Arihant Capital app on a phone, showing the Coparceners Details step of HUF account opening"
              sizes="(min-width: 1024px) 560px, 90vw"
              preload
              fetchPriority="high"
              className="h-auto w-full max-w-[400px] lg:h-[clamp(380px,calc(100dvh-60px-64px-32px),570px)] short:h-[clamp(380px,calc(100dvh-60px-64px-24px),570px)] lg:w-auto lg:max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Highlights strip */}
      <div className="relative z-10 hidden lg:block bg-[linear-gradient(360deg,rgba(3,81,20,0.06)_0%,rgba(3,81,20,0.1)_100%)]">
        <ul className="container-page grid grid-cols-2 lg:h-16 lg:grid-cols-4">
          {highlights.map((item, i) => (
            <li
              key={item}
              className={`relative flex items-center justify-center py-4 text-center text-xl font-semibold text-leaf lg:py-0 lg:text-xl ${["lg:justify-start", "lg:justify-center", "lg:justify-center", "lg:justify-end"][i]
                } ${i % 2 === 1 ? "max-lg:border-l max-lg:border-forest/15" : ""} ${i >= 2 ? "max-lg:border-t max-lg:border-forest/15" : ""
                } ${i > 0
                  ? "lg:before:absolute lg:before:inset-y-3 lg:before:left-0 lg:before:w-px lg:before:bg-[linear-gradient(to_bottom,transparent,rgb(67_67_67/0.3),transparent)] lg:before:content-['']"
                  : ""
                }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
