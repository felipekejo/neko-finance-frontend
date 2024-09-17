'use client'
import Image from 'next/image'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center text-lg font-medium text-foreground gap-3">
          <Image
            src="/icons/neko.svg"
            width={34}
            height={34}
            alt="Horizontal Logo"
            className="size=[24px] max-xl:text-[14px] max-xl:leading-[20px] text-logo-1"
          />
          <span className="font-semibold">NekoFinance</span>
        </div>

        <footer className="text-sm">
          &copy; {new Date().getFullYear()} NekoFinance
        </footer>
      </div>
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}
