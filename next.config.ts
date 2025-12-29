import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // This handles the main blog page (ottamind.in)
        source: "/blog",
        destination: "https://blog.ottamind.in",
      },
      {
        // This handles posts (e.g., ottamind.in/privacy-policy)
        source: "/blog/:path*",
        destination: "blog.ottamind.in*",
      },
      {
        // This handles the CSS/JS files so the UI looks correct
        source: "/wp-content/:path*",
        destination: "blog.ottamind.in*",
      },
      {
        // This handles WordPress core system files
        source: "/wp-includes/:path*",
        destination: "blog.ottamind.in*",
      }
    ];
  },
};

export default nextConfig;
