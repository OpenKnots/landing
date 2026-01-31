import React from "react"
import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

import { Geist, Geist_Mono, Geist as Font_Geist, Geist_Mono as Font_Geist_Mono, Source_Serif_4 as Font_Source_Serif_4 } from 'next/font/google'

// Initialize fonts
const _geist = Font_Geist({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _geistMono = Font_Geist_Mono({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const _sourceSerif_4 = Font_Source_Serif_4({ subsets: ['latin'], weight: ["200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
  title: 'OpenKnot AI - Composable AI Agents You Can Trust',
  description: 'Build reliable, auditable AI agents with clear boundaries. OpenKnot AI provides composable, inspectable, and production-ready AI infrastructure.',
  keywords: ['AI agents', 'AI infrastructure', 'composable AI', 'auditable AI', 'machine learning', 'AI orchestration'],
  authors: [{ name: 'OpenKnot AI' }],
  openGraph: {
    title: 'OpenKnot AI - Composable AI Agents You Can Trust',
    description: 'Build reliable, auditable AI agents with clear boundaries.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenKnot AI - Composable AI Agents You Can Trust',
    description: 'Build reliable, auditable AI agents with clear boundaries.',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
