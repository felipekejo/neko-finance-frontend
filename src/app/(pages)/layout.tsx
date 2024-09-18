'use client'

import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      {children}
      <Toaster richColors />
    </SessionProvider>
  )
}
