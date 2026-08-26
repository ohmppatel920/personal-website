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
  title: "Ohm Patel · Strategy, Healthcare & Technology",
  description:
    "Ohm Patel is a Brown engineer who takes on problems nobody has defined yet and can build what the answer turns out to require. Experience at Eli Lilly and Yale Medicine, with self-directed market analysis in biopharma and consumer finance.",
  openGraph: {
    title: "Ohm Patel · Strategy, Healthcare & Technology",
    description:
      "I find the problem worth solving, then ship the fix. Brown University, engineering, healthcare and technology.",
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
