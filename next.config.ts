import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true, // Disables type checking
  },
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.sanity.io'
      },
      {
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        hostname: 'media.licdn.com',
      },
    ],
  },
};

export default nextConfig;
