import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/fajar3108.github.io",
  images: {
    remotePatterns: [new URL('https://mir-s3-cdn-cf.behance.net/**')],
  },
};

export default nextConfig;
