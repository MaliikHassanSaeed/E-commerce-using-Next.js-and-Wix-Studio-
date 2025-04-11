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
FEATURED_PRODUCTS_CATEGORY_ID:"00000000-000000-000000-000000000001",
NEXT_PUBLIC_WIX_APP_ID:"215238eb-22a5-4c36-9e7b-e7c08025e04e",
}
};

export default nextConfig;