import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Zen_Maru_Gothic } from 'next/font/google'

const notoSansJP = Noto_Sans_JP({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: '--font-noto'
});

const zenMaruGothic = Zen_Maru_Gothic({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-zen'
});

export const metadata: Metadata = {
  title: 'ちょこbaby | あきる野市・日の出町の出張ベビーシッター',
  description: '東京都あきる野市・日の出町限定。4児の母が提供する、安心の出張型ベビーシッターサービス。買い物や美容院など、ちょっとした時間のお預かりに。',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
