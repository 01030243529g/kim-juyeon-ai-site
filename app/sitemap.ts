import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://ai-instructor-kim-juyeon.cool-hinny-5610.chatgpt.site"), changeFrequency: "monthly", priority: 1 }];
}
