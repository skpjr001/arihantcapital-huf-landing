import { assets } from "@/lib/assets";
import { BLOGS_HREF, blogPosts, VIDEO_HREF, YOUTUBE_HREF } from "@/lib/site";
import { ChevronRight } from "./icons";
import { ArrowLink, SectionHeading } from "./ui";
import ReactPlayer from "react-player";

export default function HowToOpen() {
  return (
    <section aria-labelledby="how-to-heading" className="bg-sage py-20 lg:py-[120px]">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-10">
        <div className="contents lg:block">
          <div>
            <SectionHeading id="how-to-heading">How to open HUF Demat Account</SectionHeading>
            {/* TODO: replace placeholder copy from the design */}
            <p className="mt-2 text-sm lg:mt-3 lg:text-xl text-ink">Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="max-lg:order-3">
            <ul className="lg:mt-6 space-y-2">
              {blogPosts.map((p) => (
                <li key={p.title}>
                  <a
                    href={p.href}
                    className="group flex items-center gap-2 rounded-lg border border-brand/40 bg-white transition-colors hover:border-brand p-4"
                  >
                    <span className="min-w-0 flex-1 flex flex-col gap-1 justify-center">
                      <span className="rounded bg-lime px-[6px] py-[2px] w-fit text-sm font-semibold uppercase text-ink">
                        Blog
                      </span>
                      <span className="truncate text-lg text-ink font-semibold">{p.title}</span>
                      <span className="text-sm text-ink/64">{p.readTime}</span>
                    </span>
                    <ChevronRight className="size-6 shrink-0 text-ink transition-transform group-hover:translate-x-0.5" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex flex-wrap gap-y-3 lg:mt-[33px] gap-x-6">
              <ArrowLink href={BLOGS_HREF}>All Blogs</ArrowLink>
              <ArrowLink href={YOUTUBE_HREF} external>
                Arihant’s YouTube Channel
              </ArrowLink>
            </p>
          </div>
        </div>

        {/* Video: thumbnail → inline react-player with controls */}
        <div className="w-full lg:w-[560px] h-[202px] lg:h-[320px] rounded-2xl overflow-hidden">
          <ReactPlayer
            src={VIDEO_HREF}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </section>
  );
}
