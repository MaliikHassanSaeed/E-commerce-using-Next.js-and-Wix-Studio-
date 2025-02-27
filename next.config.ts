import type { NextConfig } from "next";

const nextConfig = {
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com",
      },   {
        protocol:"https",
        hostname:"static.wixstatic.com",
      },

     
    ],
  },
  env:{
NEXT_PUBLIC_WIX_CLIENT_ID:"ec0bbf0b-3023-462a-a0f3-08d7418bedce",
FEATURED_PRODUCTS_CATEGORY_ID:"00000000-000000-000000-000000000001"  }
};

export default nextConfig;