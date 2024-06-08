'use client'

import { Inter as FontSans } from 'next/font/google'
import '../styles/globals.css'
import { Providers } from './providers'
import { cn } from '@/lib/utils'
import { Toaster } from '@/components/ui/sonner'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head />

      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          {children}
          <Toaster richColors />
        </Providers>
      </body>
    </html>
  )
}
