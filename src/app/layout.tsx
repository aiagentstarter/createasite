import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaSify - Transform Your Business",
  description: "A modern SaaS platform to help you streamline operations and drive growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* Removed synchronous <script> tag */}
      </head>
      <body className={`${inter.className} h-full`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
