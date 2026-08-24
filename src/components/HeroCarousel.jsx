import { useState, useEffect, useRef, useCallback } from 'react'

const AUTOPLAY_MS = 5000
const SWIPE_THRESHOLD = 45

// Renders ONLY the images passed in via `slides` (each { src, alt }).
// No overlays, labels, illustrations, or placeholder art — the photo is the focus.
export default function HeroCarousel({ slides }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = slides.length
  const touchX = useRef(null)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = useCallback((n) => setIndex((n + count) % count), [count])
  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  // Auto-slide — paused on hover / focus / touch.
  useEffect(() => {
    if (paused || reduceMotion.current || count <= 1) return
    const id = setInterval(() => setIndex((v) => (v + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, index, count])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
    setPaused(true)
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (dx > SWIPE_THRESHOLD) prev()
    else if (dx < -SWIPE_THRESHOLD) next()
    touchX.current = null
    setPaused(false)
  }
  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    else if (e.key === 'ArrowRight') next()
  }

  return (
    <div
      className="group relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Indian Helping Trust in action"
    >
      <div
        className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.5rem] bg-brand-mist shadow-xl ring-1 ring-black/5"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        {/* Slides — the uploaded photo is fully visible, no overlay on top of it */}
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading={i === 0 ? 'eager' : 'lazy'}
            ref={i === 0 ? (el) => el && el.setAttribute('fetchpriority', 'high') : undefined}
            decoding="async"
            draggable="false"
            className={`absolute inset-0 h-full w-full select-none object-cover object-center transition-opacity duration-700 ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            aria-hidden={i !== index}
          />
        ))}

        {/* Very light bottom fade ONLY behind the dots, so they stay legible.
            Covers just the lowest strip — the photo itself is not darkened. */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/25 to-transparent" />

        {/* Prev / next — subtle */}
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-ink opacity-0 shadow-md backdrop-blur transition-all hover:bg-white focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group-hover:opacity-100 max-lg:opacity-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 6l-6 6 6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-ink opacity-0 shadow-md backdrop-blur transition-all hover:bg-white focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white group-hover:opacity-100 max-lg:opacity-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  className={`h-2 rounded-full shadow transition-all duration-300 ${
                    i === index ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
