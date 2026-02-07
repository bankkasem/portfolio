import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Enable compression for all responses
  compress: true,

  // Remove X-Powered-By header for smaller response
  poweredByHeader: false,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
    // Optimize barrel file imports for better tree-shaking
    optimizePackageImports: ["@/components"],
  },
};

export default withNextIntl(nextConfig);
