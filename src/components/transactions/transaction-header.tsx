import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'

export function TransactionHeader() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Button variant="outline" className="h-8 w-8 p-0">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-lg font-semibold">January 2024</h3>
        <Button variant="outline" className="h-8 w-8 p-0">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <h3 className="text-lg font-semibold flex gap-2 items-center">
          Income: <p className="text-emerald-500">AU$200.00</p>
        </h3>
        <h3 className="text-lg font-semibold flex gap-2 items-center">
          Expenses: <p className="text-rose-500">AU$200.00</p>
        </h3>
        <h3 className="text-lg font-semibold">Total: AU$200.00</h3>
      </div>
    </>
  )
}
