import { Check, Pencil, Trash } from 'lucide-react'
import { Button } from '../ui/button'
import { TableCell, TableRow } from '../ui/table'

export interface TransactionTableRowProps {}

export function TransactionTableRow() {
  return (
    <TableRow>
      <TableCell className="font-semibold">19/09/2024</TableCell>

      <TableCell className="font-semibold">Coles</TableCell>
      <TableCell className="font-medium">Groceries</TableCell>
      <TableCell className="text-muted-foreground">Joint Account</TableCell>
      <TableCell className="text-rose-500">AU$200.00</TableCell>
      <TableCell>
        <Check className="h-4 w-4" />
      </TableCell>

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
}
