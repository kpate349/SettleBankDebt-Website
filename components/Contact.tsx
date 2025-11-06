'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current,
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
  <section ref={sectionRef} id="contact" className="min-h-screen flex items-center py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 via-white to-green-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,150,255,0.15),rgba(34,197,94,0.15)_70%)]"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extralight text-blue-900 mb-8">
            Get Started Today
          </h2>
          <p className="text-xl text-blue-800 max-w-2xl mx-auto">
            Take the first step towards financial freedom. Contact us for a free consultation.
          </p>
        </div>
        <form ref={formRef} className="bg-white shadow-xl backdrop-blur-sm border border-blue-100 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-blue-800 mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full bg-white border border-blue-200 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:border-green-400 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-blue-800 mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full bg-white border border-blue-200 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:border-green-400 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-blue-800 mb-2 font-medium">Message</label>
            <textarea
              rows={6}
              className="w-full bg-white border border-blue-200 rounded-lg px-4 py-3 text-blue-900 placeholder-blue-400 focus:border-green-400 focus:outline-none transition-colors resize-none"
              placeholder="Tell us about your situation..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-medium py-4 px-8 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}