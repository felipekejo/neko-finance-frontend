import { TransactionHeader } from '@/components/transactions/transaction-header'
import { TransactionTableRow } from '@/components/transactions/transaction-table-row'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function Transactions() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
      </div>
      <TransactionHeader />
      <div className="space-y-2.5">
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">Date</TableHead>

                <TableHead className="w-[240px]">Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="w-[240px]">Account</TableHead>
                <TableHead className="w-[140px]">Amount</TableHead>
                <TableHead className="w-[84px]">Essential</TableHead>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[64px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return <TransactionTableRow key={i} />
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
