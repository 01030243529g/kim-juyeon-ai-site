import type { Metadata } from "next";
import { allColumns } from "../../lib/columns";
export const metadata: Metadata = {
  title: "교육 칼럼 | AI강사 김주연",
  description: "AI 입문과 시니어 디지털 교육, 콘텐츠 제작에 도움이 되는 쉬운 실습 안내입니다.",
  alternates: { canonical: "/columns" },
  openGraph: { title: "교육 칼럼 | AI강사 김주연", description: "생활과 교육에 바로 쓰는 AI 실습 안내", url: "/columns", type: "website", locale: "ko_KR" },
};
export default function ColumnsPage() {
  return <main className="column-shell">
    <header className="column-top"><a href="/">김주연 · AI EDUCATOR &amp; AUTHOR</a><a href="/#contact">강의 문의 ↗</a></header>
    <p className="section-kicker">LEARN &amp; PRACTICE</p><h1 className="column-title">교육 칼럼</h1>
    <p className="column-lead">작은 질문에서 나만의 결과물까지. 생활과 교육에 바로 쓰는 AI 실습 안내를 전합니다.</p>
    <div className="column-list">{allColumns.map(column => <article className="column-item" key={column.slug}>
      <p className="column-meta">{column.category} · <time dateTime={column.date}>{column.date}</time></p>
      <h2><a href={`/columns/${column.slug}`}>{column.title} ↗</a></h2><p>{column.description}</p>
    </article>)}</div><a className="column-back" href="/">← 공식 홈페이지</a>
  </main>;
}
