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
  title: "Ohm Patel — Healthcare × Software",
  description:
    "Ohm Patel — a Brown engineer building software at the intersection of healthcare and engineering. Eli Lilly, Yale, and research turning clinical and scientific data into shipped tools.",
  openGraph: {
    title: "Ohm Patel — Healthcare × Software",
    description:
      "Building software where healthcare meets engineering. Brown University · Mechanical Engineering → Computer Science.",
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
