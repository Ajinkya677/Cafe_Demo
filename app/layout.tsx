import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CafeVerse - Premium 3D Cafe Website Demo',
  description: 'A modern, visually stunning 3D cafe website demo showcasing premium UI/UX skills. Perfect for attracting cafe owners and freelance clients.',
  keywords: 'cafe website, coffee shop, 3D website, demo, portfolio',
  authors: [{ name: 'CafeVerse Demo' }],
  openGraph: {
    title: 'CafeVerse - Premium 3D Cafe Website Demo',
    description: 'A modern, visually stunning 3D cafe website demo',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

