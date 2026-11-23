import type { NextConfig } from "next";

const basePath = "/huf_uat";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  basePath,
  // next/image does not prefix basePath onto string `src`s — expose it so
  // src/lib/assets.ts can do it (see node_modules/next/dist/docs basePath.md).
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  distDir: "dist",
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75],
    // Reviewer photos from the CMS (see `reviews` in src/lib/site.ts)
    remotePatterns: [new URL("https://d1uenl0z1eg3km.cloudfront.net/**")],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
