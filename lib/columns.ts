import columns from "../content/columns.json";
export const siteUrl = "https://kim-juyeon-ai-site.vercel.app";
export const allColumns = [...columns].sort((a, b) => b.date.localeCompare(a.date));
export function columnBySlug(slug: string) {
  return allColumns.find((column) => column.slug === slug);
}
