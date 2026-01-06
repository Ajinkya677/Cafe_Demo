import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - CafeVerse',
  description: 'Get in touch with CafeVerse. We\'d love to hear from you and answer any questions.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

