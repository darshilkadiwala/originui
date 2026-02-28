import type { NextConfig } from "next"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "/testing-repo"

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },
  // Dynamically set from NEXT_PUBLIC_BASE_PATH env var (defaults to "/testing-repo")
  basePath,
  assetPrefix: basePath,
}

export default nextConfig
