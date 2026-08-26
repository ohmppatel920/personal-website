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
  title: "Ohm Patel — Strategy, Healthcare & Technology",
  description:
    "Ohm Patel — a Brown engineer who scopes ambiguous problems, gets the data to say something, and lands on a recommendation — then builds what it implies. Eli Lilly, Yale Medicine, and self-directed market analysis across biopharma and consumer finance.",
  openGraph: {
    title: "Ohm Patel — Strategy, Healthcare & Technology",
    description:
      "I find the problem worth solving, then ship the fix. Brown University · Engineering · Healthcare × Technology.",
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
