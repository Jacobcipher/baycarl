import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Baycarl | Visionary Entrepreneur & Creative Professional",
  description:
    "Portfolio of a visionary entrepreneur and creative professional driven by impact, innovation, and purpose — spanning creative services, digital platforms, logistics, and more.",
  keywords: [
    "Baycarl",
    "Entrepreneur",
    "Creative Professional",
    "Photography",
    "Pet Shop",
    "Digital Platforms",
    "Vendpost",
  ],
  openGraph: {
    title: "Baycarl | Visionary Entrepreneur & Creative Professional",
    description:
      "Portfolio of a visionary entrepreneur and creative professional driven by impact, innovation, and purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
