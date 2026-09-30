import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joven Sanchez — BSIT Student & Web Developer",
  description:
    "Bachelor of Science in Information Technology (BSIT) student passionate about modern web development, systems architecture, and clean user experiences.",
  openGraph: {
    title: "Joven Sanchez — BSIT Student & Web Developer",
    description:
      "Bachelor of Science in Information Technology (BSIT) student passionate about modern web development, systems architecture, and clean user experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans flex flex-col selection:bg-white/20 selection:text-white">
        <Navbar />
        <main className="flex-1 pt-24 sm:pt-28 pb-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
