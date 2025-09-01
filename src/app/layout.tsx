// src/app/layout.tsx - FINAL CORRECTED CODE

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css"; // This correctly imports your stylesheet

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HBD Love",
  description: "A special birthday message",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* The <head> tag should be empty here */}
      <head></head>
      <body className={inter.className}>
        {children}

        {/* These scripts with absolute paths are correct */}
        <Script src="/love-tree/jquery.min.js" strategy="afterInteractive" />
        <Script src="/love-tree/jscex.min.js" strategy="afterInteractive" />
        <Script src="/love-tree/jscex-parser.js" strategy="afterInteractive" />
        <Script src="/love-tree/jscex-jit.js" strategy="afterInteractive" />
        <Script src="/love-tree/jscex-builderbase.min.js" strategy="afterInteractive" />
        <Script src="/love-tree/jscex-async.min.js" strategy="afterInteractive" />
        <Script src="/love-tree/jscex-async-powerpack.min.js" strategy="afterInteractive" />
        <Script src="/love-tree/functions.js" strategy="afterInteractive" />
        <Script src="/love-tree/love.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}