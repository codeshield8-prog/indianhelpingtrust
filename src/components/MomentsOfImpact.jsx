import { Link } from 'react-router-dom'
import { moments } from '../data/site'
import SectionHeading from './SectionHeading'
import Icon from './Icon'

// Auto-load the real IHT photographs placed in src/assets/moments/.
// Add a file (e.g. m6-selfie.jpg) + an entry in `moments` and it appears here.
const files = import.meta.glob('../assets/moments/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})

const fallback = { accent: 'green', category: 'Our Work', title: 'Indian Helping Trust', span: 'col-span-1 row-span-1' }

const items = Object.keys(files)
  .sort()
  .map((path) => {
    const stem = path.split('/').pop().replace(/\.[^.]+$/, '')
    return { src: files[path], stem, ...(moments[stem] || fallback) }
  })

const accentText = {
  green: 'text-brand-green',
  orange: 'text-brand-orange',
  blue: 'text-brand-blue',
}

function MomentTile({ item }) {
  const cls = `group relative block overflow-hidden rounded-2xl bg-brand-ink shadow-sm ring-1 ring-black/5 ${item.span}`
  const content = (
    <>
      <img
        src={item.src}
        alt={`${item.title} — ${item.category}, Indian Helping Trust`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

      {item.href && (
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-ink opacity-0 shadow transition-opacity duration-300 group-hover:opacity-100">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <p className={`text-[11px] font-bold uppercase tracking-[0.15em] ${accentText[item.accent] || 'text-brand-green'}`}>
          {item.category}
        </p>
        <p className="mt-1 text-sm font-semibold leading-snug text-white sm:text-base">{item.title}</p>
        {item.sub && <p className="text-xs text-white/85">{item.sub}</p>}
      </div>
    </>
  )

  return item.href ? (
    <Link to={item.href} className={cls} aria-label={`${item.title} — ${item.category}`}>
      {content}
    </Link>
  ) : (
    <div className={cls}>{content}</div>
  )
}

export default function MomentsOfImpact() {
  if (items.length === 0) return null
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="Moments of Impact"
          text="Stories, people and moments that reflect the work of Indian Helping Trust."
        />

        <div className="mt-12 grid auto-rows-[150px] grid-flow-row-dense grid-cols-2 gap-4 sm:auto-rows-[175px] lg:grid-cols-4 lg:auto-rows-[220px]">
          {items.map((item) => (
            <MomentTile key={item.stem} item={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/programs" className="btn-ghost">
            Explore Our Work
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
