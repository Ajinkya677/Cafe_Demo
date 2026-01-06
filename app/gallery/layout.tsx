import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery - CafeVerse',
  description: 'Visual journey through CafeVerse - explore our coffee, space, and culinary creations.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

