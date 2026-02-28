import type { MetadataRoute } from "next"

import { categories } from "@/config/components"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://originui.com"

  const home = {
    url: baseUrl,
  }
  const search = {
    url: `${baseUrl}/search`,
  }
  const easings = {
    url: `${baseUrl}/easings`,
  }
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/${category.slug}`,
  }))

  return [home, ...categoryPages, search, easings]
}
