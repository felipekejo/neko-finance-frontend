import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-accent-foreground">
        Return to{' '}
        <Link href="/" className="text-sky-600 dark:text-sky-400">
          Home
        </Link>
      </p>
    </div>
  )
}
