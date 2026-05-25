import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/grabme-web",
  assetPrefix: "/grabme-web/",
};

export default nextConfig;