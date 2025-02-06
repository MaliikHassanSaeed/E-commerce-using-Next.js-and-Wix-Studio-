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
FEATURED_PRODUCTS_CATEGORY_ID:"1ca2508c-dc7d-58a6-1fce-35b47e82dfe6"  }
};

export default nextConfig;