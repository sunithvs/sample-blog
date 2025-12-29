import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Rule 1: Matches the exact /blogs path (the blog homepage)
      {
        source: "/blogs",
        destination: "https://blogs.ottamind.in",
      },
      // Rule 2: Matches all sub-paths (posts, categories, assets)
      {
        source: "/blogs/:path*",
        destination: "https://blogs.ottamind.in/:path*",
      },
    ];
  },
};

export default nextConfig;
