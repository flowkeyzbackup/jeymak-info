import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JeyMak",
  description: "Premium agricultural products in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
    >
      <body>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}