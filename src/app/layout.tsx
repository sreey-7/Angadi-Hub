// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angadi Hub — Kerala's Ancient Marketplace",
  description:
    "Authenticated artefacts, botanical rarities, and ceremonial objects from the heart of Kerala.",
  keywords: ["Kerala", "antiques", "Kamattam", "Neelakurinji", "Aana Komb", "heritage"],
  openGraph: {
    title: "Angadi Hub",
    description: "Objects that carry centuries in them.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#0D0D1A] font-sans text-parchment antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}