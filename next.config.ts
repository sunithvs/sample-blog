import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Blog home
      {
        source: "/blog",
        destination: "https://blog.ottamind.in",
      },

      // Blog posts & pages
      {
        source: "/blog/:path*",
        destination: "https://blog.ottamind.in/:path*",
      },

      // WordPress assets
      {
        source: "/wp-content/:path*",
        destination: "https://blog.ottamind.in/wp-content/:path*",
      },
      {
        source: "/wp-includes/:path*",
        destination: "https://blog.ottamind.in/wp-includes/:path*",
      },
    ];
  },
};

export default nextConfig;
