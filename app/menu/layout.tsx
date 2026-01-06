import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu - CafeVerse',
  description: 'Explore our premium selection of coffee, espresso, and delicious pastries at CafeVerse.',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

