import type { MetadataRoute } from "next"

import { categories } from "@/config/components"
import { SITE_URL } from "@/config/env"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

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
