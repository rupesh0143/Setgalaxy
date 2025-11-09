import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WowInit from '@/components/WowInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://setgalaxy.com'),
  title: 'SetGalaxy - Professional Web Development Services',
  description: 'Expert web development, design, and digital solutions. Transform your business with our professional web services.',
  keywords: 'web development, web design, digital solutions, professional services',
  authors: [{ name: 'SetGalaxy' }],
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/favicon.ico', sizes: '180x180', type: 'image/x-icon' },
    ],
  },
  openGraph: {
    title: 'SetGalaxy - Professional Web Development Services',
    description: 'Expert web development, design, and digital solutions.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <WowInit />
        {children}
      </body>
    </html>
  )
}