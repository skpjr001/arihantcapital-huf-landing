import Image from "next/image";
import { assets } from "@/lib/assets";
import { hufRoles } from "@/lib/site";
import { SectionHeading } from "./ui";

const line = "bg-ink/15";

export default function WhosWho() {
  return (
    <section aria-labelledby="whos-who-heading" className="bg-sage py-20 lg:py-[120px]">
      <div className="container-page grid items-center gap-[42px] lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col gap-2 lg:gap-3">
          <SectionHeading id="whos-who-heading">Who&rsquo;s who in an HUF Demat Account</SectionHeading>
          <p className="text-sm text-ink leading-5 lg:text-xl lg:leading-[26px]">
            Hindu, Jain, Sikh and Buddhist families can form an HUF. Once it has a PAN and a bank account, it can
            open a demat and trading account like any investor.
          </p>
          <ul className="list-disc space-y-[14px] pl-8 text-sm leading-5 marker:text-ink lg:space-y-3 lg:text-xl lg:leading-[26px]">
            {hufRoles.map((r) => (
              <li key={r.term} className="pl-1">
                <strong className="font-semibold">{r.term}</strong> {r.body}
              </li>
            ))}
          </ul>
        </div>

        {/* Structure diagram */}
        <figure aria-labelledby="huf-diagram-caption" className="mx-auto w-full max-w-[560px]">
          <figcaption id="huf-diagram-caption" className="sr-only">
            Example HUF structure: the Karta operates the account; the spouse is a member and the son and daughter
            are coparceners; together they form the Sharma Family HUF, which has its own PAN and bank account and
            holds an HUF demat and trading account with Arihant Capital.
          </figcaption>

          <div className="flex flex-col items-center" aria-hidden="true">
            <Node className="w-auto bg-forest px-3 text-white lg:w-[157px] lg:px-0" title="Karta" sub="Operates the account" subCls="text-white/80" />
            <span className={`h-[14px] w-px lg:h-10 ${line}`} />
            {/* Branch connector */}
            <span className="h-[10px] w-[calc(66.666%+2px)] rounded-t-md border-x border-t border-ink/15 lg:h-[14px]" />
            <div className="grid w-full grid-cols-3 gap-2 lg:gap-3">
              <Node title="Spouse" sub="Member" />
              <Node title="Daughter" sub="Coparcener" />
              <Node title="Son" sub="Coparcener" />
            </div>
            <span className={`h-[26px] w-px lg:h-10 ${line}`} />
            <Node
              className="w-auto border-dashed border-brand bg-white px-3 lg:w-[212px] lg:px-0"
              title="Sharma Family HUF"
              sub="It’s own PAN and bank account"
            />
            <span className={`h-[26px] w-px lg:h-10 ${line}`} />
            <div className="flex h-7 items-center justify-center whitespace-nowrap rounded-lg bg-brand px-3 text-[11px] font-semibold text-white lg:h-11 lg:w-[357px] lg:text-base">
              <Image src={assets.arihantWhiteLogo.src} width={105} height={36} alt="" className="h-4 w-auto lg:h-9" />
              <span className="h-3 w-px border border-solid [border-image-source:linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.4)_50%,rgba(255,255,255,0)_100%)] [border-image-slice:1] lg:h-5.5" />
              <span className="ml-2 lg:ml-3">HUF demat &amp; trading account</span>
            </div>
            </div>
          </figure>
        </div>
      </section>
  );
}

function Node({
  title,
  sub,
  className = "w-full border-ink/10 bg-white",
  subCls = "text-ink/80",
}: {
  title: string;
  sub: string;
  className?: string;
  subCls?: string;
}) {
  return (
    <div className={`flex h-[38px] flex-col items-center justify-center rounded-[5px] border text-center lg:h-[62px] lg:rounded-lg ${className}`}>
      <span className="text-xs font-medium leading-tight lg:text-base">{title}</span>
      <span className={`mt-[2px] text-[10px] leading-tight lg:mt-1 lg:text-[13px] ${subCls}`}>{sub}</span>
    </div>
  );
}
