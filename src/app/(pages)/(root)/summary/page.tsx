import { MonthIncomeCard } from '@/components/summary/month-income-card'
import { MonthOutcomeCard } from '@/components/summary/month-outcome-card'
import { TotalAllAccountsCard } from '@/components/summary/total-all-accounts-card'

export default function Summary() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Summary</h1>
      <div className="grid grid-cols-4 gap-4">
        <MonthIncomeCard />
        <MonthOutcomeCard />
        <TotalAllAccountsCard />
      </div>
    </div>
  )
}
