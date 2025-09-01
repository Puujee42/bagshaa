import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";

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
      <head></head>
      <body className={inter.className}>
        {children}

        {/* We ONLY need jQuery and the tree logic. All broken Jscex files are GONE. */}
        {/* We can safely go back to afterInteractive now. */}
        <Script src="/love-tree/jquery.min.js" strategy="afterInteractive" />
        <Script src="/love-tree/tree.js" strategy="afterInteractive" />
        <Script src="/love-tree/jquery.typewriter.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}