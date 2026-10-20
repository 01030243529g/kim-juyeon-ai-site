import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "https://kim-juyeon-ai-site.vercel.app")),
  title: "AI강사 김주연 | AI 교육·콘텐츠·글쓰기",
  description: "공공·복지·교육기관을 위한 생성형 AI, 콘텐츠 제작, 스마트폰 영상, AI 글쓰기 교육. AI강사 김주연 공식 소개 사이트입니다.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "/",
    title: "AI강사 김주연 | AI 교육·콘텐츠·글쓰기",
    description: "공공·복지·교육기관을 위한 생성형 AI와 콘텐츠 제작 실습 교육. 김주연 강사의 강의 분야, 경력, 저서와 강의 문의를 확인하세요.",
    images: [{ url: "/kim-juyeon-portrait.webp", alt: "AI강사 김주연" }],
  },
  twitter: { card: "summary_large_image", title: "AI강사 김주연", images: ["/kim-juyeon-portrait.webp"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
