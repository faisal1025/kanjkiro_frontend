import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    api_local: 'http://localhost:4000/api',
    api_prod: "https://...."
  },
};

export default nextConfig;
