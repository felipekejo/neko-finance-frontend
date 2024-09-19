'use client'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import { DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

const addTransactionForm = z.object({
  description: z.string().email(),
  account: z.string().min(1),
  amount: z.number().min(1),
  category: z.string(),
})

type AddTransactionForm = z.infer<typeof addTransactionForm>
export function TransactionAdd() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AddTransactionForm>({})

  async function handleAddTransaction(data: AddTransactionForm) {
    console.log(data)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast.success('Transaction added successfully')
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Add Transaction</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit(handleAddTransaction)}>
        <Tabs defaultValue="outcomes">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
            <TabsTrigger value="incomes">Incomes</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="space-y-2">
          <Label>Name</Label>
          <Input type="text" id="description " {...register('description')} />
        </div>
        <div className="space-y-2">
          <Label>Account</Label>
          <Input type="text" id="account " {...register('account')} />
        </div>
        <div className="space-y-2">
          <Label>Amount</Label>
          <Input type="text" id="amount " {...register('amount')} />
        </div>
        <div className="pt-4">
          <Button disabled={isSubmitting} className=" w-full" type="submit">
            Add Transaction
          </Button>
        </div>
      </form>
    </DialogContent>
  )
}
