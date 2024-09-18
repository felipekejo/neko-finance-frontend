import { Input } from '@/components/ui/input'

export default function Transactions() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
      </div>

      <div className="space-y-2.5">
        <span className="text-sm font-semibold">Filters:</span>
        <Input className="h-8 w-[320px]" />
      </div>
    </>
  )
}
