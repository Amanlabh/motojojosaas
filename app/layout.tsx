import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MOTOJOJO',
  description: 'Explore and Enjoy',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
