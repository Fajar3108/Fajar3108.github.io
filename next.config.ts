import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "",
  images: {
    remotePatterns: [new URL('https://mir-s3-cdn-cf.behance.net/**')],
    unoptimized: true,
  },
};

export default nextConfig;
