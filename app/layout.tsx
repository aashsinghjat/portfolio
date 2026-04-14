import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aash Singh Jat - Senior Frontend Developer",
  description: "Senior Frontend Developer with 7+ years building scalable web applications. Expert in Next.js, Vue.js, React, TypeScript. Maersk, Deloitte, UN experience.",
  keywords: [
    "Frontend Developer",
    "Senior Frontend Engineer",
    "Next.js Developer",
    "Vue.js Developer",
    "React Developer",
    "TypeScript",
    "Full Stack Developer",
    "Bangalore",
    "Portfolio"
  ],
  authors: [{ name: "Aash Singh Jat" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aashsinghjat.vercel.app",
    siteName: "Aash Singh Jat - Portfolio",
    title: "Aash Singh Jat - Senior Frontend Developer",
    description: "Senior Frontend Developer specializing in Next.js, Vue.js, and high-performance web applications",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aash Singh Jat - Senior Frontend Developer",
    description: "Senior Frontend Developer | Next.js, Vue.js, React | 7+ years experience",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
