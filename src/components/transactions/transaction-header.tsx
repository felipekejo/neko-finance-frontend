import { ChevronLeft, ChevronRight, Plus, Upload } from 'lucide-react'
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
import { TransactionAdd } from './transaction-add'

export function TransactionHeader() {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h3 className="text-lg font-semibold">January 2024</h3>
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="h-8 w-24 p-0 gap-2">
                <Plus className="h-4 w-4" />
                Add new
              </Button>
            </DialogTrigger>
            <DialogContent>
              <TransactionAdd />
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="h-8 w-24 p-0 gap-2">
            <Upload className="h-4 w-4" />
            Import
          </Button>
        </div>
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
