import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ohm Patel",
  description:
    "Ohm Patel, Brown engineering student recruiting for consulting, strategy and product roles. Experience at Eli Lilly and Yale; analysis work in biopharma, consumer finance and credit.",
  openGraph: {
    title: "Ohm Patel",
    description:
      "Brown engineering student recruiting for consulting, strategy and product roles in healthcare, tech and finance.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
