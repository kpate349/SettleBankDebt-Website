'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo(subtitleRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.0, ease: 'power2.out', delay: 0.45 }
      )
      gsap.to(heroRef.current, {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])
  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-start relative overflow-visible py-24 bg-gradient-to-br from-blue-100 via-white to-green-100"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.15),rgba(34,197,94,0.15)_70%)]"></div>
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-900 mb-8 tracking-tight"
        >
          Settle
          <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent font-extrabold">
            Bank Debt
          </span>
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-blue-800 font-medium leading-relaxed mb-12"
        >
          Fast Debt Settlement Services for Individuals and Businesses
        </p>
        <div className="mx-auto mb-12 max-w-3xl">
          <div className="rounded-3xl border border-blue-100 bg-white/80 px-6 py-6 shadow-lg backdrop-blur-sm">
            <h3 className="text-base font-semibold uppercase tracking-[0.3em] text-blue-600">Services We Offer</h3>
            <ul className="mt-6 grid gap-4 text-left sm:grid-cols-2">
              {[
                'Debt Consolidation',
                'Debt Settlement',
                'Management Plans',
                'Credit Card Debt Assistance',
                'Student Loan Consolidation',
                'Student Loan Forgiveness',
                'Student Loan Repayment Negotiation'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-blue-800">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-7.5 7.5a1 1 0 01-1.414 0l-3.5-3.5a1 1 0 011.414-1.414L8.5 12.086l6.793-6.793a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-base md:text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <video
            controls
            playsInline
            className="w-full h-auto rounded-lg"
            style={{ maxHeight: '40vh', objectFit: 'cover' }}
          >
            <source src="/settlebankdebtintro.mp4" type="video/mp4" />
          </video>
          <div className="flex gap-4 mt-8 justify-center">
            <a
              href="tel:+1234567890"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 flex items-center shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}