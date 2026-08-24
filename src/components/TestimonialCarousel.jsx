import { useState, useEffect, useCallback } from 'react'
import { testimonials } from '../data/site'

export default function TestimonialCarousel() {
  const [i, setI] = useState(0)
  const count = testimonials.length

  const go = useCallback((n) => setI((n + count) % count), [count])

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % count), 6000)
    return () => clearInterval(id)
  }, [count])

  const t = testimonials[i]

  return (
    <div className="mx-auto max-w-3xl text-center">
      <svg viewBox="0 0 24 24" className="mx-auto h-12 w-12 text-brand-green/30" fill="currentColor">
        <path d="M9.9 7C7 8.5 5.5 11 5.5 14.3c0 .9.1 1.5.4 2.2C6.6 18 8 19 9.6 19c1.9 0 3.4-1.4 3.4-3.3 0-1.8-1.3-3.1-3-3.1-.3 0-.7 0-1 .2.4-1.6 1.7-3 3.4-3.9L9.9 7Zm8 0c-2.9 1.5-4.4 4-4.4 7.3 0 .9.1 1.5.4 2.2.7 1.5 2.1 2.5 3.7 2.5 1.9 0 3.4-1.4 3.4-3.3 0-1.8-1.3-3.1-3-3.1-.3 0-.7 0-1 .2.4-1.6 1.7-3 3.4-3.9L17.9 7Z" />
      </svg>

      <blockquote className="mt-6 min-h-[7rem] text-lg font-medium leading-relaxed text-brand-ink sm:text-xl">
        “{t.quote}”
      </blockquote>

      <div className="mt-6">
        <p className="font-bold text-brand-ink">{t.name}</p>
        <p className="text-sm text-brand-slate">{t.role}</p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        {testimonials.map((_, n) => (
          <button
            key={n}
            onClick={() => go(n)}
            aria-label={`Show testimonial ${n + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              n === i ? 'w-8 bg-brand-green' : 'w-2.5 bg-brand-green/30 hover:bg-brand-green/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
