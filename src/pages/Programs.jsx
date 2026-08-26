import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  workIntro,
  workSectors,
  workStories,
  internationalStory,
  volunteersBand,
} from '../data/work'
import images from '../data/workImages'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import LocationStory from '../components/LocationStory'
import Lightbox from '../components/Lightbox'
import DonateCTA from '../components/DonateCTA'
import Icon from '../components/Icon'
import { iconBg } from '../components/colorMap'
import Seo, { breadcrumb } from '../components/Seo'

export default function Programs() {
  const [intlOpen, setIntlOpen] = useState(null)
  const [volOpen, setVolOpen] = useState(null)

  const intlPhotos = (images[internationalStory.key] || []).map((p) => ({
    src: p.src,
    caption: internationalStory.title,
  }))

  // Volunteers band: one representative photo per chosen location (kept correctly labelled).
  const volItems = volunteersBand.locationKeys
    .map((k) => {
      const first = (images[k] || [])[0]
      return first ? { key: k, src: first.src, label: k.charAt(0).toUpperCase() + k.slice(1) } : null
    })
    .filter(Boolean)
  const volPhotos = volItems.map((v) => ({ src: v.src, caption: `IHT volunteers — ${v.label}` }))

  return (
    <>
      <Seo
        title="Our Work & Programs | Indian Helping Trust Across India"
        description="Explore Indian Helping Trust's work across India — humanitarian relief in Assam, Bihar and Gujarat, Swachh Bharat drives in Delhi and Bihar, education in Bangalore, youth & sports in Mysuru, and more."
        path="/programs"
        image="/og-programs.jpg"
        jsonLd={breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Our Work', path: '/programs' },
        ])}
      />
      <PageHero eyebrow={workIntro.eyebrow} title={workIntro.title} text={workIntro.text} crumb="Our Work" />

      {/* Sectors overview */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="Areas of our work"
            text="Across regions, IHT responds to the needs in front of it — from relief and cleanliness drives to education, elderly care and youth engagement."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {workSectors.map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-full border border-brand-mist bg-white px-4 py-2.5 shadow-sm">
                <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${iconBg[s.accent]}`}>
                  <Icon name={s.icon} className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-brand-ink">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Where We Work — quick geographic overview (jumps to each story) */}
          <div className="mt-12 border-t border-brand-mist pt-8">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand-green">
              Where we work
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {workStories.map((s) => (
                <a
                  key={s.key}
                  href={`#${s.key}`}
                  className="rounded-full bg-brand-mist px-4 py-2 text-sm font-medium text-brand-ink transition-colors hover:bg-brand-green hover:text-white"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Per-location visual stories (alternating backgrounds) */}
      {workStories.map((story, i) => (
        <section key={story.key} className={`section ${i % 2 === 0 ? 'bg-brand-greentint' : 'bg-white'}`}>
          <div className="container-x">
            <LocationStory story={story} />
          </div>
        </section>
      ))}

      {/* International engagement */}
      <section className="section bg-brand-greentint">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <button
            type="button"
            onClick={() => setIntlOpen(0)}
            className="group order-1 block overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 lg:order-2"
          >
            <img
              src={intlPhotos[0]?.src}
              alt={internationalStory.title}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </button>
          <div className="lg:order-1">
            <SectionHeading eyebrow={internationalStory.eyebrow} title={internationalStory.title} center={false} />
            <p className="mt-4 text-base leading-relaxed text-brand-slate">{internationalStory.text}</p>
          </div>
        </div>
      </section>

      {/* Volunteers band */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading eyebrow={volunteersBand.eyebrow} title={volunteersBand.title} center={false} />
            <p className="mt-4 text-base leading-relaxed text-brand-slate">{volunteersBand.text}</p>
            <Link to="/get-involved" className="btn-ghost mt-6">
              Become a Volunteer
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {volItems.map((v, idx) => (
              <button
                key={v.key}
                type="button"
                onClick={() => setVolOpen(idx)}
                className="group relative block overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5"
              >
                <img
                  src={v.src}
                  alt={`IHT volunteers — ${v.label}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-2 left-3 text-xs font-semibold text-white">{v.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Founder transition */}
      <section className="section bg-brand-greentint">
        <div className="container-x mx-auto max-w-3xl text-center">
          <span className="mx-auto mb-6 block h-1 w-16 rounded-full bg-gradient-to-r from-brand-green to-brand-orange" />
          <p className="text-xl font-medium leading-relaxed text-brand-ink sm:text-2xl">
            Guided by a vision of service and community empowerment, Indian Helping Trust continues to
            turn compassion into meaningful action.
          </p>
          <Link to="/founder" className="btn-ghost mt-8">
            Meet Our Founder
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <DonateCTA />

      <Lightbox photos={intlPhotos} startIndex={intlOpen} onClose={() => setIntlOpen(null)} />
      <Lightbox photos={volPhotos} startIndex={volOpen} onClose={() => setVolOpen(null)} />
    </>
  )
}
