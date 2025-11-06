'use client'

const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    href: 'https://x.com/settlebankdebt',
    svgPath: 'M19.633 7.997c.013.18.013.36.013.54 0 5.5-4.187 11.832-11.832 11.832-2.354 0-4.546-.69-6.387-1.874a8.41 8.41 0 005.994-1.68 4.168 4.168 0 01-3.89-2.89c.26.04.52.066.793.066.38 0 .76-.053 1.12-.146a4.16 4.16 0 01-3.337-4.082v-.053c.553.307 1.187.493 1.86.52a4.154 4.154 0 01-1.853-3.46c0-.767.206-1.466.567-2.08a11.82 11.82 0 008.575 4.35 4.7 4.7 0 01-.106-.954A4.162 4.162 0 0115.54 4a4.084 4.084 0 012.994 1.266 8.188 8.188 0 002.64-1.007 4.17 4.17 0 01-1.833 2.303 8.3 8.3 0 002.4-.653 8.96 8.96 0 01-2.108 2.088z'
  },
    {
    name: 'YouTube',
    href: 'https://www.youtube.com/@settlebankdebt6580',
    svgPath: 'M2.166 5.267a2.5 2.5 0 012.414-1.767c1.78-.126 4.42-.182 5.42-.182s3.64.056 5.42.182a2.5 2.5 0 012.414 1.767c.196.737.266 1.84.266 3.516s-.07 2.779-.266 3.516a2.5 2.5 0 01-2.414 1.767c-1.78.126-4.42.182-5.42.182s-3.64-.056-5.42-.182a2.5 2.5 0 01-2.414-1.767C1.97 11.562 1.9 10.459 1.9 8.783s.07-2.779.266-3.516zm6.501 1.933v3.2l3.2-1.6-3.2-1.6z'
  }
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-green-900 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.4),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.35),transparent_60%)]" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-6xl px-6 py-12 space-y-12">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-white">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zm-.75 2.5a.75.75 0 00-1.5 0v3.25c0 .2.08.39.22.53l2.25 2.25a.75.75 0 101.06-1.06L9.25 9.06V6.5z" />
                </svg>
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">Phone Hours</h3>
                <ul className="mt-4 space-y-1 text-sm md:text-base">
                  {[
                    { day: 'Monday', hours: '9am–10pm' },
                    { day: 'Tuesday', hours: '9am–10pm' },
                    { day: 'Wednesday', hours: '9am–10pm' },
                    { day: 'Thursday', hours: '9am–10pm' },
                    { day: 'Friday', hours: '9am–10pm' },
                    { day: 'Saturday', hours: '10am–5pm' },
                    { day: 'Sunday', hours: '10am–5pm' }
                  ].map((item) => (
                    <li key={item.day} className="flex justify-between border-b border-white/5 pb-1 last:border-b-0 last:pb-0">
                      <span className="font-semibold text-white/90">{item.day}</span>
                      <span className="text-white/80">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-white">
                    <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 1.77.803 3.46 1.717 4.887.918 1.435 1.99 2.704 2.718 3.48.37.385.873.633 1.565.633.692 0 1.195-.248 1.565-.633.728-.776 1.8-2.045 2.718-3.48C15.197 11.46 16 9.77 16 8a6 6 0 00-6-6zm0 3a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Address</h3>
                  <p className="mt-2 text-sm md:text-base text-white/80">
                    99 Wall St #189<br />New York, NY 10005, USA
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 text-white">
                    <path d="M2.003 5.884l2-3.5A1 1 0 014.868 2h10.264a1 1 0 01.865.384l2 2.5a1 1 0 01-.107 1.363L14 9.868v4.382a1 1 0 01-.553.894l-4 2a1 1 0 01-.894 0l-4-2A1 1 0 014 14.25V9.868L2.178 6.247a1 1 0 01-.175-.363z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <a href="tel:+18774927222" className="mt-2 block text-sm md:text-base text-white/80 hover:text-white">
                    +1 877-492-7222
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 text-sm text-white/80 md:flex-row md:text-base">
          <p className="text-center md:text-left">
            © 2025 SettleBankDebt.com — 99 Wall St #189, New York, NY 10005, USA
          </p>
          <div className="flex justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition transform duration-200 hover:-translate-y-1 hover:border-white/40 hover:bg-white/20"
                aria-label={link.name}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-white transition-colors duration-200 group-hover:text-white"
                >
                  <path d={link.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
