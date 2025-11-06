'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

gsap.registerPlugin(ScrollTrigger)

const mockData = {
  summary: {
    totalClients: 1250,
    averageDebtReduction: 58,
    averageResolutionTime: 4.2,
    averageSatisfaction: 4.7
  },
  debtReductionData: [
    { range: '$0-5K', count: 45, percentage: 12 },
    { range: '$5K-10K', count: 120, percentage: 32 },
    { range: '$10K-25K', count: 180, percentage: 48 },
    { range: '$25K-50K', count: 45, percentage: 12 },
    { range: '$50K+', count: 10, percentage: 3 }
  ],
  resolutionTimeData: [
    { month: '1-3', clients: 320, percentage: 26 },
    { month: '3-6', clients: 580, percentage: 46 },
    { month: '6-9', clients: 280, percentage: 22 },
    { month: '9-12', clients: 70, percentage: 6 }
  ],
  satisfactionData: [
    { rating: 5, count: 680, percentage: 54 },
    { rating: 4, count: 420, percentage: 34 },
    { rating: 3, count: 120, percentage: 10 },
    { rating: 2, count: 25, percentage: 2 },
    { rating: 1, count: 5, percentage: 0.4 }
  ],
  caseStudies: [
    {
      name: 'Sarah M.',
      debt: 35000,
      reduction: 75,
      time: 3,
      satisfaction: 5,
      testimonial: 'SettleBankDebt helped me save thousands and get back on track financially.'
    },
    {
      name: 'Mike R.',
      debt: 18500,
      reduction: 60,
      time: 5,
      satisfaction: 5,
      testimonial: 'Professional service and great results. Highly recommend!'
    },
    {
      name: 'Jennifer L.',
      debt: 42000,
      reduction: 70,
      time: 4,
      satisfaction: 4,
      testimonial: 'The settlement process was smooth and the savings were substantial.'
    }
  ]
}

const COLORS = ['#2563eb', '#16a34a', '#3b82f6', '#22c55e', '#1d4ed8']

export default function SuccessDashboard() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.dashboard-content',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-white to-green-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.15),rgba(34,197,94,0.15)_70%)]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full dashboard-content">
        <div className="bg-white shadow-xl backdrop-blur-sm border border-blue-100 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-extralight text-blue-900 mb-8 text-center">Customer Success Dashboard</h2>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white shadow-lg border border-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-blue-600">{mockData.summary.totalClients.toLocaleString()}</div>
              <div className="text-sm text-blue-800">Total Clients Helped</div>
            </div>
            <div className="bg-white shadow-lg border border-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-green-600">{mockData.summary.averageDebtReduction}%</div>
              <div className="text-sm text-blue-800">Average Debt Reduction</div>
            </div>
            <div className="bg-white shadow-lg border border-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-blue-600">{mockData.summary.averageResolutionTime} months</div>
              <div className="text-sm text-blue-800">Average Resolution Time</div>
            </div>
            <div className="bg-white shadow-lg border border-blue-100 rounded-xl p-6 text-center">
              <div className="text-3xl font-light text-green-600">{mockData.summary.averageSatisfaction}/5</div>
              <div className="text-sm text-blue-800">Average Satisfaction</div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Debt Reduction Distribution */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-blue-900">Debt Reduction by Amount</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockData.debtReductionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="range" stroke="#1e40af" />
                    <YAxis stroke="#1e40af" />
                    <Tooltip
                      formatter={(value) => [`${value} clients`, 'Count']}
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #bfdbfe',
                        borderRadius: '8px',
                        color: '#1e40af'
                      }}
                    />
                    <Bar dataKey="count" fill="url(#barGradient)" />
                    <defs>
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#16a34a" stopOpacity={0.8}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Resolution Time Distribution */}
            <div>
              <h3 className="text-2xl font-light mb-6 text-blue-900">Resolution Time Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={mockData.resolutionTimeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ month, percentage }) => `${month} months: ${percentage}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="clients"
                      stroke="#1f2937"
                    >
                      {mockData.resolutionTimeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value) => [`${value} clients`, 'Count']}
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #bfdbfe',
                        borderRadius: '8px',
                        color: '#1e40af'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Satisfaction Ratings */}
          <div className="mb-12">
            <h3 className="text-2xl font-light mb-6 text-blue-900">Customer Satisfaction Ratings</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {mockData.satisfactionData.map((item) => (
                <div key={item.rating} className="text-center">
                  <div className="text-3xl font-light text-blue-600">{item.rating}★</div>
                  <div className="text-xl font-light text-blue-900">{item.count}</div>
                  <div className="text-sm text-blue-800">({item.percentage}%)</div>
                  <div className="w-full bg-blue-100 rounded-full h-2 mt-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-2xl font-light mb-6 text-blue-900">Real Client Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {mockData.caseStudies.map((study, index) => (
                <div key={index} className="bg-white shadow-lg border border-blue-100 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-medium text-xl text-blue-900">{study.name}</h4>
                    <div className="text-right">
                      <div className="text-sm text-blue-800 font-medium">Debt: ${study.debt.toLocaleString()}</div>
                      <div className="text-green-600 font-semibold">{study.reduction}% saved</div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-3 text-blue-800">
                      <span className="font-medium">Resolution time:</span>
                      <span className="font-medium">{study.time} months</span>
                    </div>
                    <div className="flex justify-between text-sm text-blue-800">
                      <span className="font-medium">Satisfaction:</span>
                      <span className="font-medium text-blue-600">{'★'.repeat(study.satisfaction)}</span>
                    </div>
                  </div>
                  <blockquote className="text-blue-800 italic font-medium">&ldquo;{study.testimonial}&rdquo;</blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 border border-blue-100 rounded-xl">
            <p className="text-sm text-blue-800 text-center font-medium">
              * Results based on actual client data. Individual results may vary based on specific circumstances.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}