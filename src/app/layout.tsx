import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

// Jost is a free geometric sans close to the Futura-style face in the design.
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  // "optional" avoids a late font swap repainting the hero H1 (the LCP element).
  // The font is preloaded, so it's used on virtually every real visit.
  display: "optional",
});

export const metadata: Metadata = {
  title: "Arihant Capital - Open HUF Demat Account Online",
  description:
    "Open your HUF demat account and invest in stocks, mutual funds, IPO, futures & options and NCDs as a separate legal entity for tax purposes.",
};

export const viewport: Viewport = {
  themeColor: "#035114",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} antialiased`}>
      <body className="min-h-dvh overflow-x-clip font-sans">
        {children}
      </body>
    </html>
  );
}
