import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Academic Homepage",
  description: "Academic homepage, publications, projects, and CV.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Your Name",
    description: "Academic homepage, publications, projects, and CV.",
    images: ["/og-card.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
