import { ArrowLeftToLine } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function MonthIncomeCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle>Income</CardTitle>
        <ArrowLeftToLine className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <span className="text-2xl font-bold tracking-tight">AU$20.00</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+2%</span>{' '}
          compared to last month
        </p>
      </CardContent>
    </Card>
  )
}
