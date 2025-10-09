import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: '/app2',
  //         destination: `${process.env.NEXT_PUBLIC_APP2_URL}/app2`,
  //       },
  //       {
  //         source: '/app2/:path*',
  //         destination: `${process.env.NEXT_PUBLIC_APP2_URL}/app2/:path*`,
  //       },
  //     ],
  //   }
  // },
};

export default nextConfig;
