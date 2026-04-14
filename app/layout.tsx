import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aash Singh Jat - Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer building scalable, high-performance web experiences. Featured work: Maersk InsightsHub, UN Digital Africa, Toyota E-commerce.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Aash Singh Jat" }],
  openGraph: {
    type: "website",
    title: "Aash Singh Jat - Portfolio",
    description:
      "Senior Frontend Engineer specializing in React, Next.js, and high-scale applications",
    url: "https://portfolio-aashsinghjat.vercel.app",
    siteName: "Aash Singh Jat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aash Singh Jat - Portfolio",
    description: "Senior Frontend Engineer",
  },
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
