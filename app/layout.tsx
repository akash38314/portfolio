import type { Metadata, Viewport } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-fira' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Akash Kumar Pandey - Software Developer',
  description: 'Self-taught developer building full-stack web applications. Skilled in React, Next.js, Node.js, and modern web technologies.',
  keywords: 'Software Developer, Full Stack Developer, React, Next.js, Node.js, MongoDB, Portfolio',
  authors: [{ name: 'Akash Kumar Pandey' }],
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23000"/><text x="50" y="65" font-size="50" text-anchor="middle" fill="%23fff" font-family="Arial">AKP</text></svg>',
        type: 'image/svg+xml',
      },
    ],
    shortcut: ['data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23000"/><text x="50" y="65" font-size="50" text-anchor="middle" fill="%23fff" font-family="Arial">AKP</text></svg>'],
    apple: ['data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23000"/><text x="50" y="65" font-size="50" text-anchor="middle" fill="%23fff" font-family="Arial">AKP</text></svg>'],
  },
  openGraph: {
    title: 'Akash Kumar Pandey - Software Developer',
    description: 'Self-taught developer building full-stack web applications.',
    url: 'https://akash-portfolio.vercel.app',
    siteName: 'Akash Kumar Pandey Portfolio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akash Kumar Pandey - Software Developer',
    description: 'Self-taught developer building full-stack web applications.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-black text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}