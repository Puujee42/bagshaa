// src/app/layout.tsx - FINAL CORRECTED CODE

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css"; // Correct way to import CSS

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
      <head>
        {/*
          Importing the CSS directly (line 5) is the correct Next.js way.
          This <head> section should be empty.
        */}
      </head>
      <body className={inter.className}>
        {children}

        {/* 
          STRATEGY CHANGE: "beforeInteractive" ensures these scripts load
          and execute IN ORDER before the page becomes interactive.
          This fixes the race condition error in production.
        */}
        <Script src="/love-tree/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/love-tree/jscex.min.js" strategy="beforeInteractive" />
        <Script src="/love-tree/jscex-parser.js" strategy="beforeInteractive" />
        <Script src="/love-tree/jscex-jit.js" strategy="beforeInteractive" />
        <Script src="/love-tree/jscex-builderbase.min.js" strategy="beforeInteractive" />
        <Script src="/love-tree/jscex-async.min.js" strategy="beforeInteractive" />
        <Script src="/love-tree/jscex-async-powerpack.min.js" strategy="beforeInteractive" />
        <Script src="/love-tree/functions.js" strategy="beforeInteractive" />
        <Script src="/love-tree/love.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}