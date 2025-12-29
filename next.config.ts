import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blogs/:slug*",
        destination: "https://blog.ottamind.in/:slug*",
      }
    ];
  },
};
