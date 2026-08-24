import { Link } from 'react-router-dom'
import { hero, stats, focusAreas, steps, heroSlideAlts } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import FocusCard from '../components/FocusCard'
import TestimonialCarousel from '../components/TestimonialCarousel'
import DonateCTA from '../components/DonateCTA'
import HeroCarousel from '../components/HeroCarousel'
import MomentsOfImpact from '../components/MomentsOfImpact'
import Icon from '../components/Icon'

// Auto-load the REAL uploaded photos from src/assets/hero/ (slide-1.jpg, slide-2.jpg, …).
// Drop the files in and they appear automatically — no code changes needed.
const heroImages = import.meta.glob('../assets/hero/slide-*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})
const slides = Object.keys(heroImages)
  .sort()
  .map((path, i) => ({ src: heroImages[path], alt: heroSlideAlts[i] || 'Indian Helping Trust in action' }))

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-greentint">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-orange/10" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-brand-green/10" />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-slate">{hero.text}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to={hero.primaryCta.to} className="btn-primary">
                {hero.primaryCta.label}
              </Link>
              <Link to={hero.secondaryCta.to} className="btn-ghost">
                {hero.secondaryCta.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link to="/founder" className="btn-ghost">
                Meet Our Founder
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative w-full animate-fade-up">
            {slides.length > 0 ? (
              <HeroCarousel slides={slides} />
            ) : (
              <div className="flex aspect-[3/2] w-full flex-col items-center justify-center rounded-[1.5rem] border-2 border-dashed border-brand-green/40 bg-brand-greentint p-8 text-center">
                <p className="text-base font-semibold text-brand-ink">Hero photos not added yet</p>
                <p className="mt-2 text-sm text-brand-slate">
                  Add your images as <code className="rounded bg-white px-1 py-0.5">slide-1.jpg</code>,{' '}
                  <code className="rounded bg-white px-1 py-0.5">slide-2.jpg</code>,{' '}
                  <code className="rounded bg-white px-1 py-0.5">slide-3.jpg</code> in{' '}
                  <code className="rounded bg-white px-1 py-0.5">src/assets/hero/</code> and they appear here automatically.
                </p>
              </div>
            )}
            {slides.length > 0 && (
              <div className="absolute -bottom-6 -left-6 z-10 hidden rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 sm:block">
                <p className="text-3xl font-extrabold text-brand-green">25,000+</p>
                <p className="text-sm font-medium text-brand-slate">lives touched</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-brand-mist bg-white">
        <div className="container-x grid grid-cols-2 gap-6 py-12 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-brand-green sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-brand-slate">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Moments of Impact — real IHT photography */}
      <MomentsOfImpact />

      {/* Focus areas */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Our areas of focus"
            text="We work across the pillars that lift a community — from a child’s first classroom to a family’s next meal."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((f) => (
              <FocusCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-brand-greentint">
        <div className="container-x">
          <SectionHeading
            eyebrow="How it works"
            title="A simple chain of change"
            text="Your generosity sets off a chain reaction that reaches real people in real communities."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-2xl bg-white p-8 shadow-sm">
                <span className="text-5xl font-extrabold text-brand-green/15">{s.n}</span>
                <h3 className="mt-2 text-xl font-bold text-brand-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Voices" title="Stories from the ground" center />
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <DonateCTA />
    </>
  )
}
