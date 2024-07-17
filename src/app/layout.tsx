import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "株式会社印刷工房",
  description:
    "株式会社印刷工房は、紙製品のプロフェッショナルとして企画・編集〜製作、印刷から配送まで一貫して請負。確かな技術と感性による品質で、信頼を「カタチ」にいたします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
