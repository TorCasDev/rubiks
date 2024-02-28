import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rubiks Cube Solver",
  description: "How to solve a rubiks cube",
  icons: "/favicon.ico"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>{children}</body>
      <SpeedInsights/>
      <Analytics/>
    </html>
  );
}
