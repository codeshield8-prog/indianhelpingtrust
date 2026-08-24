import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fp } from '../data/founderPage'
import workImages from '../data/workImages'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'

function Chips({ items, tone = 'green' }) {
  const cls =
    tone === 'soft'
      ? 'rounded-full border border-brand-mist bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm'
      : 'rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green'
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {items.map((i) => (
        <span key={i} className={cls}>
          {i}
        </span>
      ))}
    </div>
  )
}

export default function FounderPage() {
  useEffect(() => {
    const prev = document.title
    document.title = 'Drx Chand Siddiqui | Founder & Chairman | Indian Helping Trust'
    return () => {
      document.title = prev
    }
  }, [])

  const firstImg = (key) => (workImages[key] || [])[0]?.src

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-brand-orange/10" />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="relative order-2 mx-auto w-full max-w-md animate-fade-up lg:order-1">
            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl bg-brand-green/15" aria-hidden="true" />
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-2xl bg-brand-orange/20" aria-hidden="true" />
            <img
              src={fp.portrait}
              alt={`${fp.name}, ${fp.role} of Indian Helping Trust`}
              width="1122"
              height="1402"
              className="relative h-auto w-full rounded-3xl shadow-xl ring-1 ring-black/5"
            />
          </div>
          <div className="order-1 animate-fade-up lg:order-2">
            <p className="eyebrow">{fp.hero.eyebrow}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl">
              {fp.name}
            </h1>
            <p className="mt-3 text-lg font-semibold text-brand-green">{fp.role}, {fp.org}</p>
            <span className="mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-brand-green to-brand-orange" />
            <p className="mt-5 text-lg leading-relaxed text-brand-slate">{fp.hero.intro}</p>
          </div>
        </div>
      </section>

      {/* 1 · THE BEGINNING */}
      <section className="section bg-brand-greentint">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={fp.beginning.eyebrow} title={fp.beginning.title} center={false} />
          <div className="space-y-4">
            {fp.beginning.paras.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-brand-slate">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 2 · THE VISION */}
      <section className="section bg-white">
        <div className="container-x mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={fp.vision.eyebrow} title={fp.vision.title} />
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">{fp.vision.text}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {fp.vision.values.map((v) => (
              <span key={v} className="rounded-full bg-brand-orange/10 px-4 py-2 text-sm font-semibold text-brand-orange">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · LISTENING */}
      <section className="section bg-brand-greentint">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow={fp.listening.eyebrow} title={fp.listening.title} center={false} />
            <p className="mt-4 text-base leading-relaxed text-brand-slate">{fp.listening.text}</p>
            <figure className="mt-6 rounded-2xl border-l-4 border-brand-orange bg-white p-6 shadow-sm">
              <blockquote className="text-lg font-medium italic leading-relaxed text-brand-ink">“{fp.listening.idea}”</blockquote>
            </figure>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {fp.listening.points.map((pt) => (
              <div key={pt} className="flex items-center gap-3 rounded-xl border border-brand-mist bg-white p-4 shadow-sm">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <span className="text-sm font-medium text-brand-ink">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · YOUTH & OPPORTUNITY */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow={fp.youth.eyebrow} title={fp.youth.title} text={fp.youth.text} />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-t-4 border-brand-orange bg-white p-7 shadow-sm">
              <h3 className="text-lg font-bold text-brand-ink">Challenges young people can face</h3>
              <Chips items={fp.youth.challenges} tone="soft" />
            </div>
            <div className="rounded-2xl border-t-4 border-brand-green bg-white p-7 shadow-sm">
              <h3 className="text-lg font-bold text-brand-ink">How organisations can help</h3>
              <Chips items={fp.youth.support} />
            </div>
          </div>
        </div>
      </section>

      {/* 5 · IDEAS TO ACTION */}
      <section className="section bg-brand-greentint">
        <div className="container-x mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={fp.ideasToAction.eyebrow} title={fp.ideasToAction.title} text={fp.ideasToAction.text} />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {fp.ideasToAction.sectors.map((s) => (
              <span key={s} className="rounded-full border border-brand-mist bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · REACHING COMMUNITIES */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow={fp.communities.eyebrow} title={fp.communities.title} text={fp.communities.text} />
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {fp.communities.locations.map((l) => (
              <div key={l.key} className="group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5">
                <img
                  src={firstImg(l.key)}
                  alt={`IHT work in ${l.name}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-sm font-semibold text-white">
                  <Icon name="pin" className="h-4 w-4 text-brand-orange" />
                  {l.name}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/programs" className="btn-ghost">
              Explore Our Work
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7 · THE PEOPLE / TEAM */}
      <section className="section bg-brand-greentint">
        <div className="container-x mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={fp.team.eyebrow} title={fp.team.title} text={fp.team.text} />
          <Link to="/core-team" className="btn-secondary mt-8">
            Meet Our Core Team
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* 8 · VOLUNTEERS */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading eyebrow={fp.volunteers.eyebrow} title={fp.volunteers.title} center={false} />
            <p className="mt-4 text-base leading-relaxed text-brand-slate">{fp.volunteers.text}</p>
            <Link to="/get-involved" className="btn-ghost mt-6">
              Become a Volunteer
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {fp.volunteers.imageKeys.map((k) => (
              <div key={k} className="overflow-hidden rounded-xl shadow-sm ring-1 ring-black/5">
                <img src={firstImg(k)} alt="IHT volunteers and community" loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 · A CONTINUING JOURNEY */}
      <section className="section bg-brand-greentint">
        <div className="container-x mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={fp.journey.eyebrow} title={fp.journey.title} />
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">{fp.journey.text}</p>
        </div>
      </section>

      {/* FOUNDER'S MESSAGE */}
      <section className="section bg-brand-greendeep">
        <div className="container-x mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-orange">{fp.message.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{fp.message.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">{fp.message.text}</p>
          <figure className="mt-8">
            <blockquote className="text-xl font-medium italic leading-relaxed text-white sm:text-2xl">
              “{fp.message.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-white/70">— {fp.name}, {fp.role}</figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-greendeep px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/25" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{fp.cta.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">{fp.cta.text}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/get-involved" className="btn-primary">Get Involved</Link>
                <Link to="/programs" className="btn-outline">Explore Our Programs</Link>
                <Link to="/core-team" className="btn-outline">Meet Our Core Team</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
