import { ChartHome } from '@/components/ChartHome'
import { MonthIncomeCard } from '@/components/summary/month-income-card'
import { MonthOutcomeCard } from '@/components/summary/month-outcome-card'
import { TotalAllAccountsCard } from '@/components/summary/total-all-accounts-card'
import { WeeklyTransactionsChart } from '@/components/summary/weekly-transactions-chart'

export default function Summary() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Summary</h1>
      <div className="grid grid-cols-3 gap-4">
        <MonthIncomeCard />
        <MonthOutcomeCard />
        <TotalAllAccountsCard />
      </div>
      <div className="grid grid-cols-9 gap-4">
        <WeeklyTransactionsChart />
        <ChartHome />
      </div>
    </div>
  )
}
