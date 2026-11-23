'use client'
import Image from 'next/image'
import Link from 'next/link'
import { assets } from '@/lib/assets'

const JoinCommunity = () => {
  return (
    <section className="container-page mb-20 lg:mb-[120px]">
      <div className="relative overflow-hidden rounded-[24px] lg:flex lg:items-center lg:justify-between px-6 py-10 lg:px-16 lg:py-16">
        <div
          className="absolute inset-0 z-0 bg-black bg-[radial-gradient(68.36%_50%_at_40%_0%,rgba(247,146,0,0.24)_0%,rgba(247,146,0,0)_100%)]"
        />

        <div className="relative z-10 lg:w-[55%]">
          <h2 className="text-white text-2xl lg:text-[32px] font-bold leading-tight">
            Join ArihantPlus Community
          </h2>
          <p className="mt-4 text-white/70 text-sm lg:text-base leading-relaxed">
            When investing becomes a shared experience, everyone has more to learn, discover and
            gain. Be part of the ArihantPlus community - a place to discuss markets, ask questions,
            help fellow investors, request new features, stay in the loop on what we’re building and
            grow together.
          </p>

          <Link
            href="https://productupdates.arihantplus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-7"
          >
            <button className="bg-white! cursor-pointer text-primaryBlack! px-[22px] py-[14px] rounded-[10px] border border-primaryBlack font-semibold transition-colors duration-300 ">
              Join Now
            </button>
          </Link>
        </div>

        <div className="relative z-10 hidden lg:block lg:w-[35%] mt-10 lg:mt-0">
          <div className="relative w-full aspect-[1222/640]">
            <Image
              src={assets.joinCommunity.src}
              alt="ArihantPlus community members"
              fill
              sizes="362px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinCommunity
