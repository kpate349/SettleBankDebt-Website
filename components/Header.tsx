'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50 bg-transparent h-16">
      <nav className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center h-full">
              {/* use local logo from public/settlebankdebt.png */}
              <Image src="/settlebankdebt.png" alt="SettleBankDebt" width={100} height={200} className="object-contain" priority />
            </Link>
            <span className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-yellow-900 text-xs font-semibold uppercase tracking-wider rounded-full border border-yellow-300 shadow-lg animate-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.069-3.292z" />
              </svg>
              18 Years of Service
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold rounded-lg"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="px-4 py-2 text-blue-900 hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold rounded-lg"
            >
              Blog
            </Link>
            <a
              href="tel:+18774927222"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-blue-900 font-semibold shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.18 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
                />
              </svg>
              1-877-492-7222
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}