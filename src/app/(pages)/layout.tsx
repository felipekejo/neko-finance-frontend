'use client'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from 'sonner'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="nekoFinance-theme"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster richColors />
    </ThemeProvider>
  )
}
