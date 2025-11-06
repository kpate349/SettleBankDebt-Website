'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts'

interface SimulationData {
  totalDebt: number
  interestRate: number
  monthlyPayment: number
}

interface SimulationResults {
  timelineData: Array<{ month: number; original: number; consolidation: number; bankruptcy: number }>
  totals: { original: number; settlement: number; consolidation: number; bankruptcy: number }
  monthlyPayments: { original: number; settlement: number; consolidation: number; bankruptcy: number }
}

export default function DebtSimulatorPage() {
  const [data, setData] = useState<SimulationData>({
    totalDebt: 25000,
    interestRate: 18,
    monthlyPayment: 500
  })

  const [simulationResults, setSimulationResults] = useState<SimulationResults | null>(null)

  const calculateScenarios = () => {
    const { totalDebt, interestRate, monthlyPayment } = data
    const monthlyRate = interestRate / 100 / 12

    const settlementAmount = totalDebt * 0.5
    const settlementMonthlyPayment = settlementAmount / 24

    const consolidationRate = 8 / 100 / 12
    const consolidationTerm = 60
    const consolidationMonthly =
      (totalDebt * (consolidationRate * Math.pow(1 + consolidationRate, consolidationTerm))) /
      (Math.pow(1 + consolidationRate, consolidationTerm) - 1)

    const bankruptcyMonthly = totalDebt / 84

    const timelineData: SimulationResults['timelineData'] = []
    let balance = totalDebt
    let consolidationBalance = totalDebt
    let bankruptcyBalance = totalDebt

    for (let month = 1; month <= 84; month++) {
      const interest = balance * monthlyRate
      const principal = Math.max(0, Math.min(monthlyPayment - interest, balance))
      balance = Math.max(0, balance - principal)

      if (month <= 60) {
        const consInterest = consolidationBalance * consolidationRate
        const consPrincipal = consolidationMonthly - consInterest
        consolidationBalance = Math.max(0, consolidationBalance - consPrincipal)
      }

      if (month <= 84) {
        bankruptcyBalance = Math.max(0, bankruptcyBalance - bankruptcyMonthly)
      }

      if (month % 6 === 0) {
        timelineData.push({
          month,
          original: balance,
          consolidation: consolidationBalance,
          bankruptcy: bankruptcyBalance
        })
      }
    }

    let amortizationBalance = totalDebt
    let originalTerm = 0
    let originalTotal = 0
    let stuck = false

    while (amortizationBalance > 0 && originalTerm < 600) {
      const interestPortion = amortizationBalance * monthlyRate
      const principalPortion = Math.max(0, Math.min(monthlyPayment - interestPortion, amortizationBalance))
      if (principalPortion === 0 && amortizationBalance > 0) {
        stuck = true
        break
      }
      amortizationBalance = Math.max(0, amortizationBalance - principalPortion)
      originalTerm += 1
      originalTotal += monthlyPayment
    }

    if (stuck || (amortizationBalance > 0 && originalTerm === 600)) {
      originalTerm = 600
      originalTotal = monthlyPayment * originalTerm
    }
    const settlementTotal = settlementAmount
    const consolidationTotal = consolidationMonthly * consolidationTerm
    const bankruptcyTotal = bankruptcyMonthly * 84

    setSimulationResults({
      timelineData,
      totals: {
        original: originalTotal,
        settlement: settlementTotal,
        consolidation: consolidationTotal,
        bankruptcy: bankruptcyTotal
      },
      monthlyPayments: {
        original: monthlyPayment,
        settlement: settlementMonthlyPayment,
        consolidation: consolidationMonthly,
        bankruptcy: bankruptcyMonthly
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }))
  }

  const handleCalculate = () => {
    calculateScenarios()
  }

  const totalPaymentData = simulationResults
    ? [
        { name: 'Original Plan', amount: simulationResults.totals.original },
        { name: 'Settlement', amount: simulationResults.totals.settlement },
        { name: 'Consolidation', amount: simulationResults.totals.consolidation },
        { name: 'Bankruptcy', amount: simulationResults.totals.bankruptcy }
      ]
    : []

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 text-blue-800 mt-[-4rem] pt-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(59,130,246,0.18),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(34,197,94,0.2),transparent_60%)]"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 space-y-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-green-600 transition-colors font-medium">
          <span>←</span>
          <span>Back to Blog</span>
        </Link>

        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight text-blue-900">Debt Relief Simulator</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl font-light text-blue-800">
            Compare settlement, consolidation, and bankruptcy scenarios side-by-side to understand payoff timelines,
            monthly commitments, and total costs before you decide on your next move.
          </p>
        </header>

        <section className="rounded-3xl border border-blue-100 bg-white/80 shadow-xl backdrop-blur-sm p-8 space-y-10">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { label: 'Total Debt ($)', name: 'totalDebt', value: data.totalDebt },
              { label: 'Interest Rate (%)', name: 'interestRate', value: data.interestRate },
              { label: 'Current Monthly Payment ($)', name: 'monthlyPayment', value: data.monthlyPayment }
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-blue-700 mb-2">{field.label}</label>
                <input
                  type="number"
                  name={field.name}
                  value={field.value}
                  onChange={handleChange}
                  min={0}
                  className="w-full rounded-xl border border-blue-200 bg-white/90 px-4 py-3 text-base text-blue-900 shadow-sm transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300/60"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-500">Run your comparison</p>
            <button
              onClick={handleCalculate}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-green-700 hover:-translate-y-1"
            >
              Run Simulation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {simulationResults ? (
            <div className="space-y-10">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'Total Paid (Original)',
                    value: simulationResults.totals.original,
                    accent: 'text-red-500'
                  },
                  {
                    title: 'Total Paid (Settlement)',
                    value: simulationResults.totals.settlement,
                    accent: 'text-green-600'
                  },
                  {
                    title: 'Total Paid (Consolidation)',
                    value: simulationResults.totals.consolidation,
                    accent: 'text-blue-600'
                  }
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
                  >
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">{item.title}</p>
                    <p className={`mt-3 text-3xl font-bold ${item.accent}`}>
                      ${item.value.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Debt Payoff Timeline</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={simulationResults.timelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="month" tick={{ fill: '#1e3a8a' }} label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
                      <YAxis
                        tick={{ fill: '#1e3a8a' }}
                        label={{ value: 'Remaining Balance ($)', angle: -90, position: 'insideLeft' }}
                      />
                      <Tooltip
                        formatter={(value: number | string) => [`$${Number(value).toLocaleString()}`, 'Remaining Balance']}
                        contentStyle={{ borderRadius: 12, borderColor: '#bfdbfe' }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="original" stroke="#ef4444" strokeWidth={2} name="Original Plan" />
                      <Line type="monotone" dataKey="consolidation" stroke="#3b82f6" strokeWidth={2} name="Consolidation" />
                      <Line type="monotone" dataKey="bankruptcy" stroke="#10b981" strokeWidth={2} name="Bankruptcy" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-6">Total Payments Comparison</h3>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={totalPaymentData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                      <XAxis dataKey="name" tick={{ fill: '#1e3a8a' }} />
                      <YAxis
                        tick={{ fill: '#1e3a8a' }}
                        label={{ value: 'Total Amount ($)', angle: -90, position: 'insideLeft' }}
                      />
                      <Tooltip
                        formatter={(value: number | string) => [`$${Number(value).toLocaleString()}`, 'Total Payment']}
                        contentStyle={{ borderRadius: 12, borderColor: '#bfdbfe' }}
                      />
                      <Bar dataKey="amount" radius={[12, 12, 0, 0]} fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">Monthly Payment Comparison</h4>
                  <div className="space-y-3 text-blue-800">
                    <div className="flex justify-between font-medium">
                      <span>Original Plan</span>
                      <span>${simulationResults.monthlyPayments.original.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium text-green-600">
                      <span>Settlement</span>
                      <span>${simulationResults.monthlyPayments.settlement.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium text-blue-600">
                      <span>Consolidation</span>
                      <span>${simulationResults.monthlyPayments.consolidation.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-medium text-emerald-600">
                      <span>Bankruptcy</span>
                      <span>${simulationResults.monthlyPayments.bankruptcy.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-sm backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-blue-900 mb-4">Key Insights</h4>
                  <ul className="space-y-2 text-sm text-blue-800">
                    <li>• Settlement delivers the lowest total cost but requires accelerated payments.</li>
                    <li>• Consolidation restructures debt over five years with predictable payments.</li>
                    <li>• Bankruptcy spreads payments over seven years while offering maximum relief.</li>
                    <li>• Use these comparisons alongside professional guidance to choose your path.</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-blue-200 bg-white/60 p-8 text-center text-blue-500">
              Enter your current debt details and run the simulation to explore personalized scenarios.
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
