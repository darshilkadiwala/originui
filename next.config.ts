import type { NextConfig } from "next"

import { BASE_PATH } from "./config/env"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  // Dynamically set from NEXT_PUBLIC_BASE_PATH env var
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
}

export default nextConfig
