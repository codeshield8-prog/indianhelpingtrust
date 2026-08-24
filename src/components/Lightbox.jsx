import { useEffect, useState } from 'react'

// Simple accessible image lightbox. `photos` = [{ src, caption }]; open when startIndex != null.
export default function Lightbox({ photos, startIndex, onClose }) {
  const [i, setI] = useState(startIndex ?? 0)

  useEffect(() => {
    if (startIndex != null) setI(startIndex)
  }, [startIndex])

  useEffect(() => {
    if (startIndex == null) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') setI((v) => (v + 1) % photos.length)
      else if (e.key === 'ArrowLeft') setI((v) => (v - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [startIndex, photos.length, onClose])

  if (startIndex == null) return null
  const p = photos[i]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); setI((v) => (v - 1 + photos.length) % photos.length) }}
        aria-label="Previous"
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); setI((v) => (v + 1) % photos.length) }}
        aria-label="Next"
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
      </button>

      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={p.src}
          alt={p.caption || ''}
          className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain shadow-2xl"
        />
        {p.caption && (
          <figcaption className="mt-3 text-center text-sm text-white/80">
            {p.caption}
            <span className="ml-2 text-white/40">
              {i + 1} / {photos.length}
            </span>
          </figcaption>
        )}
      </figure>
    </div>
  )
}
