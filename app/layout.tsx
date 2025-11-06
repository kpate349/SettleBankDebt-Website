import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Settle Bank Debt - Expert Debt Settlement Services',
  description: 'Transform your financial future with our expert debt settlement solutions. Professional negotiation and personalized guidance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16`}>{children}</body>
    </html>
  )
}