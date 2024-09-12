'use client'

import { useState } from 'react'
import { ChartHome } from './ChartHome'
import { Calendar } from './ui/calendar'

export function BodyHome() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-4 m-7">
      <div className="col-span-2 row-span-2">
        <h1 className="text-4xl font-bold">Welcome to NekoFinance</h1>
        <p className="text-lg">
          This is a simple finance app that helps you manage your finances.
        </p>
      </div>
      <div className="col-span-1 row-span-2">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border bg-slate-600 w-full h-full"
        />
      </div>
      <div className="col-span-2 row-span-3 bg-white">
        <h2 className="text-2xl font-bold">Transactions</h2>
      </div>
      <div className="col-span-1 row-span-3">
        <div className="grid  grid-cols-1 grid-rows-3 h-full gap-4">
          <div className="row-span-2 bg-slate-500">
            <ChartHome />
          </div>
          <div className="bg-white">Total</div>
        </div>
      </div>
    </div>
  )
}
