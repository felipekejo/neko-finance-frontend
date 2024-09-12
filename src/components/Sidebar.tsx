'use client'

import { HomeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Sidebar() {
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r pt-8 max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
    <nav className="flex flex-col gap-4">
      <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
        <Image
          src="./icons/neko.svg"
          width={34}
          height={34}
          alt="Horizontal Logo"
          className="size=[24px] max-xl:text-[14px] max-xl:leading-[20px] text-logo-1"
        />
        <h1 className="2xl:text-[26px] 2xl:leading-[32px] font-ibm-plex-serif font-bold text-black-1 max-xl:hidden">
          NekoFinance
        </h1>
      </Link>
      <Link href="/" className="flex items-center gap-2 py-1 rounded-lg justify-center">
      <div className="flex items-center gap-2 justify-center">
        <HomeIcon className="text-lg"/>
        <p className="text-lg">Home</p>
      </div>
      </Link>
      <Link href="/" className="flex items-center gap-2 py-1 rounded-lg justify-center">
      <div className="flex items-center gap-2 justify-center">
        <HomeIcon className="text-lg"/>
        <p className="text-lg">Home</p>
      </div>
      </Link>
      <Link href="/" className="flex items-center gap-2 py-1 rounded-lg justify-center">
      <div className="flex items-center gap-2 justify-center">
        <HomeIcon className="text-lg"/>
        <p className="text-lg">Home</p>
      </div>
      </Link>
      <Link href="/" className="flex items-center gap-2 py-1 rounded-lg justify-center">
      <div className="flex items-center gap-2 justify-center">
        <HomeIcon className="text-lg"/>
        <p className="text-lg">Home</p>
      </div>
      </Link>


    </nav>
    FOOTER
  </section>
  )
}