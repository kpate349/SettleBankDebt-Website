'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'

export default function ArticlePage() {
  const articleRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(articleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      )
    }, articleRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 text-blue-800 mt-[-4rem] pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.15),rgba(34,197,94,0.15)_70%)]"></div>
      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <Link href="/blog" className="inline-block mb-8 text-blue-600 hover:text-green-600 transition-colors font-medium">
          ← Back to Blog
        </Link>
        <article ref={articleRef} className="prose max-w-none">
          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
              Mastering Debt Settlement: A Comprehensive Guide
            </h1>
            <div className="flex items-center space-x-4 text-blue-700 font-medium">
              <span>November 5, 2025</span>
              <span>•</span>
              <span>By SettleBankDebt Team</span>
            </div>
          </header>

          <div className="text-lg leading-relaxed text-blue-800 space-y-6">
            <p>
              Debt settlement has become an increasingly popular option for individuals struggling with overwhelming financial obligations. This comprehensive guide explores the intricacies of debt settlement, providing you with the knowledge needed to make informed decisions about your financial future.
            </p>

            <h2 className="text-2xl font-light text-white mt-8 mb-4">Understanding Debt Settlement</h2>
            <p>
              Debt settlement involves negotiating with creditors to reduce the total amount you owe. Unlike debt consolidation or bankruptcy, settlement allows you to pay a lump sum that's less than your original balance, potentially saving you thousands of dollars.
            </p>

            <h2 className="text-2xl font-light text-white mt-8 mb-4">The Settlement Process</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Assessment of your current financial situation</li>
              <li>Development of a customized settlement strategy</li>
              <li>Direct negotiation with creditors on your behalf</li>
              <li>Final agreement and lump-sum payment arrangement</li>
              <li>Ongoing support and monitoring</li>
            </ol>

            <h2 className="text-2xl font-light text-white mt-8 mb-4">Benefits of Professional Debt Settlement</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Significant reduction in total debt (typically 30-70%)</li>
              <li>Professional negotiation expertise</li>
              <li>Protection from creditor harassment</li>
              <li>Streamlined process with single point of contact</li>
              <li>Tax implications guidance</li>
            </ul>

            <h2 className="text-2xl font-light text-white mt-8 mb-4">Is Debt Settlement Right for You?</h2>
            <p>
              While debt settlement can be highly effective, it's not suitable for everyone. Consider your credit score, income stability, and long-term financial goals. Our team of experts can help you determine if settlement aligns with your unique circumstances.
            </p>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-light text-white mb-4">Key Considerations</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Credit score impact (typically 50-100 point drop)</li>
                <li>• Tax implications on forgiven debt</li>
                <li>• Potential for creditor lawsuits</li>
                <li>• Time commitment (3-48 months average)</li>
              </ul>
            </div>

            <h2 className="text-2xl font-light text-white mt-8 mb-4">Why Choose SettleBankDebt</h2>
            <p>
              With over 1,250 clients successfully settled and an average debt reduction of 58%, SettleBankDebt combines expertise, transparency, and personalized service. Our track record speaks for itself, with clients achieving financial freedom faster than industry averages.
            </p>

            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-medium py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Start Your Settlement Journey
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
