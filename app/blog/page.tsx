'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function BlogIndex() {
  const heroRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
      gsap.fromTo(listRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.15 })
      gsap.fromTo(faqRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.25 })

      // subtle parallax for hero background
      gsap.to(heroRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => ctx.revert()
  }, [])

  const faqs = [
    {
      q: 'What is debt settlement?',
      a: 'Debt settlement is a negotiation process where a creditor agrees to accept less than the full amount owed, usually in a lump sum, to settle a delinquent account.'
    },
    {
      q: 'How does it affect my credit score?',
      a: 'Debt settlement can lower your credit score initially because accounts may be reported as settled for less than the balance, but it removes outstanding debt which can improve your credit over time.'
    },
    {
      q: 'Is debt settlement right for me?',
      a: 'Settlement may be appropriate if you have significant unsecured debt, struggle to make payments, and can secure a lump-sum or structured settlement; consult our advisors for a personalized assessment.'
    },
    {
      q: 'What are the tax implications?',
      a: 'Forgiven debt may be considered taxable income in some jurisdictions—consult a tax professional to understand how it applies to your situation.'
    },
    {
      q: 'Will creditors sue me during settlement?',
      a: 'While creditors can pursue legal action, experienced negotiators work to minimize litigation risk by communicating and negotiating proactively.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 text-blue-800 mt-[-4rem] pt-16">
      <section ref={heroRef} className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          {/* Back to Home link for easy navigation */}
          <div className="absolute left-6 top-6">
            <Link href="/" className="text-blue-600 hover:text-green-600 transition-colors font-medium">← Home</Link>
          </div>
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.15),rgba(34,197,94,0.15)_70%)]"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-blue-900 mb-6">Debt Settlement Blog</h1>
          <p className="text-lg md:text-xl font-light text-blue-800 max-w-3xl mx-auto">Expert insights and actionable guidance on managing debt, negotiation strategies, and real client outcomes.</p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/blog/debt-simulator"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-green-700 hover:-translate-y-1"
            >
              Access Debt Simulator
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section ref={listRef} className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Example article card */}
            <article className="bg-white shadow-lg backdrop-blur-sm border border-blue-100 rounded-2xl p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-extralight text-blue-900">Mastering Debt Settlement: A Comprehensive Guide</h2>
                  <div className="text-sm text-blue-600 mt-2">November 5, 2025 • By SettleBankDebt Team</div>
                </div>
              </div>
              <p className="mt-6 text-blue-800 font-light">A practical, step-by-step guide to understanding when settlement makes sense, how the negotiation process works, and what to expect during and after an agreement.</p>
              <div className="mt-6">
                <Link href="/blog/mastering-debt-settlement" className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium py-2 px-4 rounded-lg hover:from-blue-600 hover:to-green-600 transition-colors shadow-md">Read More</Link>
              </div>
            </article>

            {/* Placeholder for future cards */}
            <div className="bg-white shadow-lg backdrop-blur-sm border border-blue-100 rounded-2xl p-8 flex items-center justify-center text-blue-400">
              More articles coming soon
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-extralight text-blue-900 mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white shadow-md border border-blue-100 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-blue-50 transition-colors"
                >
                  <span className="text-blue-800 font-medium">{f.q}</span>
                  <span className="text-blue-600">{openIndex === i ? '−' : '+'}</span>
                </button>
                <div className={`px-6 pb-6 transition-all duration-300 ${openIndex === i ? 'block' : 'hidden'}`}>
                  <p className="text-blue-700 font-light">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Link href="/" className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium py-3 px-8 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg">Contact us for personalized advice</Link>
        </div>
      </section>
    </div>
  )
}