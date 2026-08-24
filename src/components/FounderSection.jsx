import { founder } from '../data/site'
import founderImg from '../assets/founder-chand-siddiqui.png'

// Small sub-heading with an alternating green/orange accent bar.
function BlockHeading({ children, accent = 'green' }) {
  const bar = accent === 'orange' ? 'bg-brand-orange' : 'bg-brand-green'
  return (
    <div className="flex items-center gap-3">
      <span className={`h-6 w-1.5 rounded-full ${bar}`} />
      <h3 className="text-lg font-bold tracking-tight text-brand-ink sm:text-xl">{children}</h3>
    </div>
  )
}

export default function FounderSection() {
  return (
    <section className="section relative overflow-hidden bg-white">
      {/* very subtle IHT-inspired background shapes */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-green/5" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-brand-orange/5" aria-hidden="true" />

      <div className="container-x relative">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:sticky lg:top-28 lg:max-w-none">
              {/* accent panels behind the portrait */}
              <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl bg-brand-green/15" aria-hidden="true" />
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-2xl bg-brand-orange/20" aria-hidden="true" />
              {/* thin brand accent line */}
              <div className="absolute -left-2 top-10 hidden h-24 w-1 rounded-full bg-gradient-to-b from-brand-orange to-brand-green lg:block" aria-hidden="true" />

              <img
                src={founderImg}
                alt="Drx Chand Siddiqui, Founder & Chairman of Indian Helping Trust"
                width="1122"
                height="1402"
                loading="lazy"
                decoding="async"
                className="relative h-auto w-full rounded-3xl shadow-xl ring-1 ring-black/5"
              />
            </div>
          </div>

          {/* RIGHT — biography */}
          <div className="lg:col-span-7">
            <p className="eyebrow">{founder.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
              {founder.role}
            </h2>
            <div className="mt-2">
              <p className="text-2xl font-bold text-brand-green sm:text-3xl">{founder.name}</p>
              <span className="mt-3 block h-1 w-20 rounded-full bg-gradient-to-r from-brand-green to-brand-orange" />
              <p className="mt-3 text-sm font-medium text-brand-slate">{founder.roleFull}</p>
            </div>

            {/* Introduction */}
            <div className="mt-10 space-y-5">
              <BlockHeading accent="green">Introduction</BlockHeading>
              {founder.intro.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-brand-slate">
                  {p}
                </p>
              ))}
            </div>

            <hr className="my-10 border-brand-mist" />

            {/* His Vision */}
            <div className="space-y-5">
              <BlockHeading accent="orange">His Vision</BlockHeading>
              <p className="text-base leading-relaxed text-brand-slate">{founder.vision}</p>

              {/* Quote block */}
              <figure className="relative overflow-hidden rounded-2xl border-l-4 border-brand-green bg-brand-greentint p-6 sm:p-8">
                <span
                  className="pointer-events-none absolute -top-2 right-4 select-none font-serif text-7xl leading-none text-brand-orange/25"
                  aria-hidden="true"
                >
                  &rdquo;
                </span>
                <blockquote className="relative text-lg font-medium italic leading-relaxed text-brand-ink sm:text-xl">
                  “{founder.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-brand-green">
                  — {founder.name}
                </figcaption>
              </figure>
            </div>

            <hr className="my-10 border-brand-mist" />

            {/* A Journey of Service */}
            <div className="space-y-5">
              <BlockHeading accent="green">A Journey of Service</BlockHeading>
              <p className="text-base leading-relaxed text-brand-slate">{founder.journeyLead}</p>
              <p className="text-base leading-relaxed text-brand-slate">
                {founder.journeyClose.pre}
                <strong className="font-semibold text-brand-ink">{founder.journeyClose.strong}</strong>
              </p>
            </div>

            <hr className="my-10 border-brand-mist" />

            {/* Leadership signature */}
            <div>
              <BlockHeading accent="orange">Leadership at Indian Helping Trust</BlockHeading>
              <div className="mt-5 inline-flex flex-col rounded-2xl border border-brand-mist bg-white px-6 py-5 shadow-sm">
                <span className="text-lg font-bold text-brand-ink">{founder.signature.name}</span>
                <span className="font-semibold text-brand-green">{founder.signature.role}</span>
                <span className="text-sm text-brand-slate">{founder.signature.org}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
