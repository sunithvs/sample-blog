import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/blogs/:slug*",
        destination: "https://blogs.ottamind.in/blogs/:slug*",
      },
      {
        source: "/:match*",
        destination: "https://blog.ottamind.in/:match*",
      },
    ];
  },
};

export default nextConfig;
