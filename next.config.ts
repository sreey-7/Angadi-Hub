// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Phase 1: local /public images only.
    // Phase 2: add your S3 / Cloudinary domain here, e.g.:
    // { protocol: "https", hostname: "res.cloudinary.com" }
    remotePatterns: [],

    // Accepted local image formats
    formats: ["image/avif", "image/webp"],
  },

  // Phase 5: Three.js must run only on the client.
  // This stops Next.js from trying to SSR it on the server.
  experimental: {
    serverComponentsExternalPackages: ["three"],
  },

  // Strict mode catches React bugs early — keep it on
  reactStrictMode: true,
};

export default nextConfig;