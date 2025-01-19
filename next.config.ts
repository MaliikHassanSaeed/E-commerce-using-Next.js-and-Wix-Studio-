import type { NextConfig } from "next";

const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com",
      },
     
    ],
  },
  env:{
    NEXT_PUBLIC_WIX_CLIENT_ID: "ec0bbf0b-3023-462a-a0f3-08d7418bedce"
  }
};

export default nextConfig;
