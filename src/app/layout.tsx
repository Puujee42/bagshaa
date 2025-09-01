// app/layout.tsx - USE THIS CORRECTED CODE

import { Inter } from "next/font/google";
import Script from 'next/script'; // 1. Import the Script component

import './globals.css'; // 2. Import your global stylesheet directly

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "For My Mom",
  description: "Happy Birthday!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* 3. Use the Script component to load your external libraries */}
        {/* The "afterInteractive" strategy ensures they load after the page is usable */}
        {/* The order here is important if scripts depend on each other */}
        <Script src="/js/jquery.min.js" strategy="afterInteractive" />
        <Script src="/js/jscex.min.js" strategy="afterInteractive" />
        <Script src="/js/tree.js" strategy="afterInteractive" />
        <Script src="/js/jquery.typewriter.js" strategy="afterInteractive" /> 
      </body>
    </html>
  );
}