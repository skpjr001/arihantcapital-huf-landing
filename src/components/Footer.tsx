import Link from "next/link";
import { footerColumns, importantLinks, PRIVACY_HREF, socialLinks, TERMS_HREF } from "@/lib/site";
import SocialIcon from "./SocialIcon";

const linkCls =
  "rounded-sm text-ink hover:text-brand-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";
const greenLinkCls =
  "font-medium text-brand-text underline underline-offset-2 hover:text-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function Footer() {
  return (
      <footer className="border-t-4 border-orange bg-footer pb-10 text-ink">
        <div className="container-page pt-[60px] lg:pt-[110px]">
          {/* Link columns */}
          <div className="grid gap-0 md:grid-cols-4 md:gap-10">
            {footerColumns.map((col, i) => (
              <nav
                key={col.title}
                aria-labelledby={`footer-${i}`}
                className="border-b border-ink/15 py-[33px] first:pt-0 md:border-0 md:py-0"
              >
                <h2 id={`footer-${i}`} className="mb-[22px] text-xl font-semibold leading-6 lg:mb-[18px]">
                  {col.title}
                </h2>
                <ul className="space-y-[7px] text-lg leading-[27px] lg:space-y-[7px]">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={linkCls}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                {col.title === "Connect With Us" && (
                  <ul className="mt-[22px] flex gap-2 lg:mt-[13px] flex-wrap" aria-label="Social media">
                    {socialLinks.map((s) => (
                      <li key={s.name}>
                        <a
                          href={s.href}
                          aria-label={s.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid size-9 place-items-center rounded-full border-2 border-brand text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                        >
                          <SocialIcon name={s.name} />
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </nav>
            ))}
          </div>

          {/* Important links */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 border-y border-dashed border-ink/25 py-[18px] lg:mt-[38px] lg:py-[14px]">
            <h2 className="pr-4 text-xl font-semibold">Important Links</h2>
            <ul className="flex items-center">
              {importantLinks.map((l) => (
                <li key={l.label} className="border-l border-ink/20 px-4 text-xl">
                  <a href={l.href} target="_blank" rel="noopener noreferrer" className={greenLinkCls}>
                    {l.label}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Disclosures */}
          <div className="mt-10 space-y-[21px] text-justify text-sm leading-[21px] text-ink lg:mt-[49px]">
            <p>
              Arihant Capital Markets Limited is a SEBI registered stock broker and depository participant. SEBI
              Registration number for NSE &amp; BSE :- INZ000180939; NSDL - IN-DP-127-2015 DP ID-IN301983; CDSL DP
              ID-43000;NCDEX - 01274; MCX - 56565; AMFI - ARN 15114; SEBI Merchant Banking Reg. No. - MB
              INM000011070; SEBI Research Analyst Reg. No. - INH000002764. <strong>Registered Address:</strong> 6, Lad
              colony, Y.N. Road, Indore – 452001. <strong>Corporate office address:</strong> #1011 Solitaire Corporate
              Park, Andheri Ghatkopar Link Road, Chakala, Andheri (E), Mumbai - 400093.
            </p>
            <p>
              Please carefully read the risk disclosure document as prescribed by SEBI and Do&rsquo;s &amp;
              Don&rsquo;ts by NSE, BSE, NCDEX &amp; MCX. For any complaints regarding securities broking, pls write to{" "}
              <a href="mailto:compliance@arihantcapital.com" className={greenLinkCls}>
                compliance@arihantcapital.com
              </a>{" "}
              and for DP write to{" "}
              <a href="mailto:depository@arihantcapital.com" className={greenLinkCls}>
                depository@arihantcapital.com
              </a>
              .
            </p>
            <p>
              If you want to register your complaints through SEBI Score Portal please{" "}
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className={greenLinkCls}>
                click here<span className="sr-only"> to open the SEBI SCORES portal (opens in a new tab)</span>
              </a>
              . Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
              Benefits: Effective Communication, Speedy redressal of the grievances.
              <br />
              Investments in securities market are subject to market risks; read all the related documents carefully
              before investing.
              <br />
              Disclaimer: Arihant Capital Markets Limited is engaged in client based and proprietary trading on various
              exchanges.
            </p>

            <h2 className="pt-2 text-[13px] font-semibold uppercase tracking-wide text-ink">Attention Investors</h2>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI
                registered intermediary (Broker, DP, Mutual Fund etc.), you need not undergo the same process again
                when you approach another intermediary.
              </li>
              <li>
                For Stock Broking Transaction &lsquo;Prevent unauthorised transactions in your account - update your
                mobile numbers/email IDs with your stockbrokers. Receive information of your transactions directly
                from Exchange on your mobile/email at the end of the day.
              </li>
              <li>
                For Depository Transaction &lsquo;Prevent Unauthorized Transactions in your demat account - Update
                your Mobile Number with your Depository Participant. Receive alerts on your Registered Mobile for all
                debit and other important transactions in your demat account directly from CDSL/NSDL on the same day.
              </li>
              <li>
                If you are subscribing to an IPO, there is no need to issue cheques. Just write the bank account
                number and sign in the application form to authorise your bank to make payment in case of allotment.
                No worries for refund as the money remains in investor&rsquo;s account.
              </li>
              <li>
                Investors should be cautious on unsolicited emails and SMS advising to buy, sell or hold securities and
                trade only on the basis of informed decision. Investors are advised to invest after conducting
                appropriate analysis of respective companies and not to blindly follow unfounded rumours, tips etc.
                Further, you are also requested to share your knowledge or evidence of systemic wrongdoing, potential
                frauds or unethical behaviour through the anonymous portal facility provided on BSE &amp; NSE website.
              </li>
              <li>
                Registration granted by SEBI and certification from NISM in no way guarantee performance of the
                intermediary or provide any assurance of returns to investors.
              </li>
            </ul>

            <p className="pt-2">Awareness regarding guidelines of margin collection:</p>
            <ol className="list-decimal space-y-1.5 pl-5">
              <li>
                Stock brokers can accept securities as margins from clients only by way of pledge in the depository
                system w.e.f September 01, 2020.
              </li>
              <li>
                Update your e-mail and phone number with your stock broker / depository participant and receive OTP
                directly from depository on your e-mail and/or mobile number to create pledge.
              </li>
              <li>
                Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every
                month.
              </li>
            </ol>
            <p>Issued in the interest of investors</p>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center gap-4 border-t border-neutral-300 pt-6 text-xs text-ink/85 md:flex-row md:justify-between">
            <p className="text-center">
              Copyright &copy; {COPYRIGHT_YEAR} Arihant Capital Markets Ltd. All rights Reserved.
            </p>
            <ul className="flex items-center">
              <li className="pr-4">
                <Link href={PRIVACY_HREF} className={greenLinkCls}>
                  Privacy
                </Link>
              </li>
              <li className="border-l border-neutral-300 pl-4">
                <Link href={TERMS_HREF} className={greenLinkCls}>
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
  );
}

// Static on purpose so the page stays fully prerendered (cacheComponents is on).
const COPYRIGHT_YEAR = 2020;
