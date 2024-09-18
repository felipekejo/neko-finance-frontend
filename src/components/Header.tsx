'use client'
import {
  ArrowRightLeft,
  ChartNoAxesCombined,
  CircleDollarSign,
  Home,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { NavLink } from './Nav-Link'

export function Header() {
  return (
    <div className="border-b border-foreground/5">
      <div className="flex h-16 items-center gap-6 px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="./icons/neko.svg"
            width={34}
            height={34}
            alt="Horizontal Logo"
            className="h-6 w-6"
          />
          <h1 className="text-2xl">NekoFinance</h1>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href={'/'}>
            <Home className="h-4 w-4" />
            Home
          </NavLink>
          <NavLink href="/accounts">
            <CircleDollarSign className="h-4 w-4" />
            My Accounts
          </NavLink>
          <NavLink href="/transactions">
            <ArrowRightLeft className="h-4 w-4" />
            Transactions
          </NavLink>
          <NavLink href="/stats">
            <ChartNoAxesCombined className="h-4 w-4" />
            Charts
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
