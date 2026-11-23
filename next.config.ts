import type { NextConfig } from "next";

// basePath is baked in at build time (including output: "standalone" — server.js
// never re-reads this file). .env is gitignored, so CI/UAT builds don't see it;
// fall back to the UAT prefix. Set BASE_PATH="" explicitly to serve from root.
const BASE_PATH = process.env.BASE_PATH ?? "/HUFLandingPage";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  output: "standalone",
  basePath: BASE_PATH,
  // next/image does not prefix basePath onto string `src`s — expose it so
  // src/lib/assets.ts can do it (see node_modules/next/dist/docs basePath.md).
  env: { NEXT_PUBLIC_BASE_PATH: BASE_PATH },
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
