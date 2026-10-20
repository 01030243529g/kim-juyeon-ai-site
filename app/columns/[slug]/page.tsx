import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allColumns, columnBySlug, siteUrl } from "../../../lib/columns";
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return allColumns.map(column => ({ slug: column.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const column = columnBySlug((await params).slug);
  if (!column) return {};
  const path = `/columns/${column.slug}`;
  return { title: `${column.title} | AI강사 김주연`, description: column.description,
    alternates: { canonical: path },
    openGraph: { title: column.title, description: column.description, url: path, type: "article", locale: "ko_KR", publishedTime: column.date, images: [{ url: "/kim-juyeon-portrait.webp", alt: "AI강사 김주연" }] },
    twitter: { card: "summary_large_image", title: column.title, description: column.description, images: ["/kim-juyeon-portrait.webp"] },
  };
}
export default async function ColumnPage({ params }: Props) {
  const column = columnBySlug((await params).slug);
  if (!column) notFound();
  const schema = { "@context": "https://schema.org", "@type": "Article", headline: column.title, description: column.description, datePublished: column.date, author: { "@type": "Person", name: "김주연", url: siteUrl }, mainEntityOfPage: `${siteUrl}/columns/${column.slug}` };
  return <main className="column-shell">
    <header className="column-top"><a href="/">김주연 · AI EDUCATOR &amp; AUTHOR</a><a href="/columns">교육 칼럼 목록</a></header>
    <article className="column-article">
      <p className="column-meta">{column.category} · <time dateTime={column.date}>{column.date}</time> · 김주연</p>
      <h1 className="column-title">{column.title}</h1><p className="column-lead">{column.intro}</p>
      {column.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map(p => <p key={p}>{p}</p>)}{section.prompt && <pre className="column-prompt">{section.prompt}</pre>}</section>)}
      <aside className="column-sources"><h2>참고 자료</h2><p>{column.sourceNote}</p><ul>{column.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></li>)}</ul></aside>
      <div className="column-cta"><h2>우리 기관에 맞는 AI 실습 교육이 필요하신가요?</h2><p>교육 대상과 목적에 맞춘 강의를 안내합니다.</p><a href="/#contact">김주연 강사에게 문의하기 ↗</a></div>
    </article><a className="column-back" href="/columns">← 교육 칼럼 목록</a>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
  </main>;
}
