import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "./components/Home/Header";
import Navbar from "./components/Navbar";


const outfit = Outfit({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Maulana Fajar Ibrahim",
  description: "Fullstack Web Developer with 3 years of experince | Laravel, Go, React/Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased px-4`}
      >
        <div className="max-w-3xl mx-auto">
          <Header />
          <Navbar />
          {children}
        </div>
        <GoogleAnalytics gaId="G-GE0W6JXP0N" />
      </body>
    </html>
  );
}
