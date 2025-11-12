import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import WowInit from '@/components/WowInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://setgalaxy.com'),
  title: 'SetGalaxy - Professional Web Development & Digital Solutions',
  description: 'Leading web development company offering custom websites, mobile apps, digital marketing, brand development, and database administration. Transform your business with our expert digital solutions.',
  keywords: 'web development, web design, digital marketing, mobile app development, SEO, brand development, custom websites, responsive design, e-commerce, database administration, planning consultation, UI/UX design',
  authors: [{ name: 'SetGalaxy Team' }],
  creator: 'SetGalaxy',
  publisher: 'SetGalaxy',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://setgalaxy.com',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/images/setgalaxy_logo.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/images/setgalaxy_logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://setgalaxy.com',
    siteName: 'SetGalaxy',
    title: 'SetGalaxy - Professional Web Development & Digital Solutions',
    description: 'Leading web development company offering custom websites, mobile apps, digital marketing, brand development, and database administration. Transform your business with our expert digital solutions.',
    images: [
      {
        url: '/images/setgalaxy_logo.svg',
        width: 1200,
        height: 630,
        alt: 'SetGalaxy - Professional Web Development Company Logo',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@setgalaxy',
    creator: '@setgalaxy',
    title: 'SetGalaxy - Professional Web Development & Digital Solutions',
    description: 'Leading web development company offering custom websites, mobile apps, digital marketing, and brand development.',
    images: {
      url: '/images/setgalaxy_logo.svg',
      alt: 'SetGalaxy Logo',
    },
  },
  verification: {
    google: 'your-google-site-verification',
    yandex: 'your-yandex-verification',
    yahoo: 'your-yahoo-verification',
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
        <link rel="apple-touch-icon" href="/images/setgalaxy_logo.svg" />
        <meta name="theme-color" content="#53a3a5" />
        <meta name="msapplication-TileColor" content="#53a3a5" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </head>
      <body className={inter.className}>
        <WowInit />
        {children}
      </body>
    </html>
  )
}