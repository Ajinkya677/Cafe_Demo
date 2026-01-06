import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - CafeVerse',
  description: 'Learn about CafeVerse, our mission, values, and commitment to premium coffee experiences.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

