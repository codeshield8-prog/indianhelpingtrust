import { Link } from 'react-router-dom'

// Compact hero banner reused by inner pages.
export default function PageHero({ eyebrow, title, text, crumb }) {
  return (
    <section className="relative overflow-hidden bg-brand-greendeep">
      <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-brand-orange/25" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-brand-green/30" />
      <div className="container-x relative py-16 sm:py-20">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">{eyebrow}</p>}
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {text && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{text}</p>}
        <p className="mt-6 text-sm text-white/60">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white/90">{crumb || title}</span>
        </p>
      </div>
    </section>
  )
}
