import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com"],
  },
  transpilePackages: ["@calcom/embed-react"],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'book.adli.com',
            },
          ],
          destination: '/adli-landing/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'book.toranilaw.com',
            },
          ],
          destination: '/torani-landing/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'lawyer.addfutr.com',
            },
          ],
          destination: '/mitchell-landing/:path*',
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
