import type { MetadataRoute } from "next";
import { allColumns, siteUrl } from "../lib/columns";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/columns`, changeFrequency: "weekly", priority: 0.8 },
    ...allColumns.map(column => ({ url: `${siteUrl}/columns/${column.slug}`, lastModified: new Date(`${column.date}T09:00:00+09:00`), changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
