import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script'; // Import the Script component
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
      <head>
        {/* Load the CSS for the animation */}
        <link rel="stylesheet" type="text/css" href="/love-tree/default.css" />
      </head>
      <body className={inter.className}>
        {children}

        {/* Load all the necessary JavaScript files for the animation */}
        {/* The 'beforeInteractive' strategy ensures they load before the page logic runs */}
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