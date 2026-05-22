import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // img tags are intentional — assets served from /public/content/
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
