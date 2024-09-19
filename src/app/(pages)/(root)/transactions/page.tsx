import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pencil, Trash } from 'lucide-react'

export default function Transactions() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
      </div>

      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filters:</span>
          <Input className="h-8 w-[320px]" />
        </form>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[140px]">Date</TableHead>

                <TableHead className="w-[140px]">Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="w-[240px]">Account</TableHead>
                <TableHead className="w-[140px]">Amount</TableHead>
                <TableHead className="w-[84px]"></TableHead>
                <TableHead className="w-[84px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell className="font-semibold">19/09/2024</TableCell>

                    <TableCell className="font-semibold">Coles</TableCell>
                    <TableCell className="font-medium">Groceries</TableCell>
                    <TableCell className="text-muted-foreground">
                      Joint Account
                    </TableCell>
                    <TableCell className="text-rose-500">AU$200.00</TableCell>
                    <TableCell>
                      <Button variant={'outline'} size={'sm'}>
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant={'outline'} size={'sm'}>
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
