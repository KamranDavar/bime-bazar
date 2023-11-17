import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'

const vazirmatn = Vazirmatn({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bime Bazar',
  description: 'Personal Info',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={vazirmatn.className }>{children}</body>
    </html>
  )
}
