import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: site.url, lastModified, priority: 1 },
    { url: `${site.url}/presenca-digital`, lastModified, priority: 0.8 },
    { url: `${site.url}/automacao`, lastModified, priority: 0.8 },
    { url: `${site.url}/resultados`, lastModified, priority: 0.8 },
  ];
}
