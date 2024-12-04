import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.aceternity.com"],
  },
  transpilePackages: ['@calcom/embed-react'],
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
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
              value: 'lawyer.addfutr.com',
            },
          ],
          destination: '/adli-landing/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'test-lawyer.futr.agency',
            },
          ],
          destination: '/adli-landing/:path*',
        },
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
              value: 'book.mitchlawfirm.com',
            },
          ],
          destination: '/mitchell-landing/:path*',
        },
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'torani.addfutrdata.com',
            },
          ],
          destination: '/torani-landing/:path*',
        },
      ],
      afterFiles: [], // Required by type definition
      fallback: [],   // Required by type definition
    };
  },
};

export default nextConfig;
