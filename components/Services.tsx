'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.service-card')
      gsap.fromTo(cards,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extralight text-blue-900 mb-8">
            Our Services
          </h2>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto">
            Comprehensive debt settlement solutions tailored to your needs
          </p>
        </div>
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          <div className="service-card bg-white backdrop-blur-sm border border-blue-100 rounded-2xl p-8 hover:border-blue-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-2xl font-light text-blue-900 mb-4">Debt Analysis</h3>
            <p className="text-blue-800 leading-relaxed">
              Comprehensive review of your financial situation to identify settlement opportunities.
            </p>
          </div>
          <div className="service-card bg-white backdrop-blur-sm border border-blue-100 rounded-2xl p-8 hover:border-green-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-2xl font-light text-blue-900 mb-4">Negotiation</h3>
            <p className="text-blue-800 leading-relaxed">
              Expert negotiation with creditors to secure reduced settlement amounts.
            </p>
          </div>
          <div className="service-card bg-white backdrop-blur-sm border border-blue-100 rounded-2xl p-8 hover:border-blue-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-2xl font-light text-blue-900 mb-4">Settlement</h3>
            <p className="text-blue-800 leading-relaxed">
              Finalize agreements and provide ongoing support for successful debt resolution.
            </p>
          </div>
        </div>
        <div className="mt-16 rounded-3xl border border-blue-100 bg-white/80 p-10 shadow-xl backdrop-blur-sm">
          <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start">
            <div className="hidden md:block">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-7 w-7 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-blue-900">It’s Time To Take Action</h3>
              <p className="mt-4 text-lg leading-relaxed text-blue-800">
                Being in debt can be a debilitating and overwhelming experience. We are here to offer smart, proven ways to manage your debt and restore your financial health.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blue-800">
                You are not alone with your financial difficulties. Millions of people have experienced accumulated debt, either through unexpected medical expenses, business ventures, over-purchasing and student loans, to name a few reasons for high debt.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-blue-800">
                And now we are here to assist you through the entire process of taking back control of your finances and your life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}