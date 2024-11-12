import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
    },
  },
};

export default nextConfig;
