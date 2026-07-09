import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import AtmosphereCanvas from "@/components/AtmosphereCanvas";

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

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ohm Patel — Software & Product",
  description:
    "Ohm Patel — a Brown engineer who builds full-stack software, ships to production, and leads teams. Eli Lilly, Yale, and projects across data, ML, and product. Targeting SWE and product roles.",
  openGraph: {
    title: "Ohm Patel — Software & Product",
    description:
      "I build software people use, and ship it. Brown University · Engineering → Software & Product.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        <AtmosphereCanvas />
        <div className="grain" aria-hidden />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
