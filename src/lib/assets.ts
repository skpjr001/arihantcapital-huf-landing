/**
 * All image assets in one place. width/height are the intrinsic size of the
 * file so next/image can reserve space and avoid layout shift.
 *
 * Raster images are WebP generated from the design SVGs (the original SVGs
 * embedded 4096px PNGs, ~32 MB in total). next/image further serves AVIF/WebP
 * at the exact rendered size.
 */
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const assets = {
  heroPhone: { src: `${base}/images/hero-visual.png`, width: 1120, height: 1174 }, // card + phone + pill + HUF card, baked
  coinBlurLeft: { src: `${base}/images/coin-2.webp`, width: 178, height: 260 },
  coinBlurRight: { src: `${base}/images/coin-1.webp`, width: 184, height: 300 },
  coin: { src: `${base}/images/coin-3.webp`, width: 342, height: 342 },
  stepsFamily: { src: `${base}/images/steps-family.webp`, width: 722, height: 480 },
  videoThumb: { src: `${base}/images/video-thumb.webp`, width: 497, height: 612 },
  ctaHandsPhone: { src: `${base}/images/cta-hands-phone.webp`, width: 1160, height: 1028 },
  avatarSudeep: { src: `${base}/images/avatar-sudeep.webp`, width: 80, height: 80 },

  sebiBadge: { src: `${base}/images/badge.svg`, width: 32, height: 32 },
  joinCommunity: { src: `${base}/images/Join-comminity-img.png`, width: 362, height: 240 },
  arihantMark: { src: `${base}/images/orange_icon.svg`, width: 15, height: 13 },
  arihantMarkWhite: { src: `${base}/images/white_logo.svg`, width: 47, height: 38 },
  arihantWhiteLogo: { src: `${base}/images/arihant-white-logo.svg`, width: 105, height: 36 },
  wordmark: { src: `${base}/images/arihant-wordmark.svg`, width: 87, height: 19 },
  logo: { src: `${base}/images/arihant-logo.svg`, width: 87, height: 19 }, // green wordmark + tagline
  taxpayer: { src: `${base}/images/taxpayer.svg`, width: 20, height: 20 },
  ipo: { src: `${base}/images/air_ballon.svg`, width: 16, height: 20 },
  succession: { src: `${base}/images/succession_planning.svg`, width: 20, height: 20 },
  family: { src: `${base}/images/family_protection.svg`, width: 20, height: 20 },
  zeroPaperwork: { src: `${base}/images/zero_paper_work.svg`, width: 28, height: 28 },
  zeroBranch: { src: `${base}/images/zero_branch_visits.svg`, width: 28, height: 28 },
} as const;

export type Asset = (typeof assets)[keyof typeof assets];
