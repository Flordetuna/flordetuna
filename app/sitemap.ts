import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.flordetunars.com.br", changeFrequency: "monthly", priority: 1 }];
}
