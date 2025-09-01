import type { Metadata } from 'next'
import { Lora } from 'next/font/google' // Import Lora
import './globals.css'

// Initialize the font with desired weights and subsets
const lora = Lora({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Happy Birthday, Mom!',
  description: 'A special birthday message for the best mom.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={lora.className}>{children}</body>
    </html>
  )
}