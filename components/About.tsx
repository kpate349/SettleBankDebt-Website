'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current,
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
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white/80 px-6 py-10 shadow-xl md:px-12">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-white to-green-200/30" aria-hidden="true"></div>
            <div className="pointer-events-none absolute top-4 right-4 hidden lg:block">
              <Image
                src="/top-10-ranked-1.png"
                alt="Top 10 Ranked Debt Relief"
                width={150}
                height={150}
                className="w-28 h-20 object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="relative grid items-center gap-10 md:grid-cols-[1.2fr_1fr] lg:gap-16">
              <div className="space-y-5 text-center md:text-left">
                <span className="inline-flex items-center justify-center rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
                  Comprehensive Debt Solution
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-blue-900">
                  We resolve bank loans, credit cards, medical bills, and unsecured debt.
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-blue-800">
                  Our specialists support both consumer and business debt settlement with negotiations tailored to your financial goals.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-blue-800">
                  SettleBankDebt.com delivers an assertive, respectful strategy that stops collection calls, reduces what you owe, and walks beside you through every milestone until your balances are resolved.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-blue-800">
                  We also help clients located outside the United States when their lenders are U.S. banks or creditors.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white/90 p-5 shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm md:text-base leading-relaxed text-blue-800">
                    We negotiate directly with your lenders for faster, better settlements.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white/90 p-5 shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm md:text-base leading-relaxed text-blue-800">
                    Transparent action plans and regular progress updates keep you in control and informed.
                  </p>
                </div>
                <div className="flex items-start gap-4 rounded-2xl border border-blue-100 bg-white/90 p-5 shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <p className="text-sm md:text-base leading-relaxed text-blue-800">
                    Settle your debt while keeping full control of your finances. We don't require you to set aside funds in a separate savings account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={contentRef} className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Missed Payments?
            </h2>
            <p className="text-lg text-blue-800 leading-relaxed">
              Already missed payments on your debt? Settle Bank Debt can negotiate with your lenders to clear it.
            </p>
            <div className="mt-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Currently in Collections?
            </h2>
            <p className="text-lg text-blue-800 leading-relaxed">
              Let us handle the harassing phone calls from your lenders and negotiate a settlement.
            </p>
            <div className="mt-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Declared Delinquent?
            </h2>
            <p className="text-lg text-blue-800 leading-relaxed">
              All is not lost. Let us negotiate with your lenders to lower the amount that you owe.
            </p>
            <div className="mt-6">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}