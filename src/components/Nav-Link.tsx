import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      data-active={pathname === props.href}
      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground data-[active=true]:text-foreground"
      {...props}
    />
  )
}
