import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Maulana Fajar Ibrahim",
  description: "Fullstack Web Developer with 3 years of experince | Laravel, Go, React/Next",
};

const date = new Date()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased px-4`}
      >
        <div className="max-w-4xl mx-auto">
          <Navbar />
          {children}
        </div>

        <footer className="text-center py-10">
          Copyright {date.getFullYear()} &copy; <span className="text-blue-600">Maulana Fajar Ibrahim</span>
        </footer>
      </body>
    </html>
  );
}
