import { useState } from 'react'
import images from '../data/workImages'
import Lightbox from './Lightbox'
import Icon from './Icon'

const accentText = { green: 'text-brand-green', orange: 'text-brand-orange', blue: 'text-brand-blue' }
const accentBar = { green: 'bg-brand-green', orange: 'bg-brand-orange', blue: 'bg-brand-blue' }

// One location = one visual story showing ALL of that location's photographs,
// with a lightbox scoped to just this event.
export default function LocationStory({ story }) {
  const photos = images[story.key] || []
  const [open, setOpen] = useState(null)
  const lbPhotos = photos.map((p) => ({ src: p.src, caption: `${story.title} — ${story.name}` }))

  const spanFor = (i) => {
    if (photos.length === 1) return 'col-span-2 row-span-2'
    if (i === 0 && photos.length >= 5) return 'col-span-2 row-span-2'
    return ''
  }

  return (
    <div id={story.key} className="scroll-mt-24">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3">
          <span className={`h-6 w-1.5 rounded-full ${accentBar[story.accent]}`} />
          <span className={`text-xs font-bold uppercase tracking-[0.16em] ${accentText[story.accent]}`}>
            {story.sector}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-brand-ink sm:text-3xl">
          {story.title}
        </h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-brand-slate">
          <Icon name="pin" className="h-4 w-4 text-brand-orange" />
          {story.name}
          <span className="text-brand-slate/50">·</span>
          {photos.length} {photos.length === 1 ? 'photograph' : 'photographs'}
        </p>
        <p className="mt-4 text-base leading-relaxed text-brand-slate">{story.text}</p>
      </div>

      <div className="mt-8 grid auto-rows-[130px] grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-3 lg:auto-rows-[170px] lg:grid-cols-4">
        {photos.map((p, i) => (
          <button
            key={p.stem}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`View photograph ${i + 1} — ${story.name}`}
            className={`group relative overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5 ${spanFor(i)}`}
          >
            <img
              src={p.src}
              alt={`${story.title} — ${story.name}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            />
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      <Lightbox photos={lbPhotos} startIndex={open} onClose={() => setOpen(null)} />
    </div>
  )
}
