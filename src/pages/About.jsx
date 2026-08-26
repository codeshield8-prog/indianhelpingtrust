import { Link } from 'react-router-dom'
import { about, stats } from '../data/site'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import FounderSection from '../components/FounderSection'
import Seo, { breadcrumb } from '../components/Seo'
import DonateCTA from '../components/DonateCTA'
import Icon from '../components/Icon'
import mark from '../assets/iht-mark.jpg'

export default function About() {
  return (
    <>
      <Seo
        title="About Indian Helping Trust | Our Mission, Vision & Values"
        description="Learn about Indian Helping Trust — an Indian NGO founded in 2017 — its mission, vision and values, and the founder and team behind its community work across India."
        path="/about"
        image="/og-programs.jpg"
        jsonLd={breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <PageHero
        eyebrow="Who we are"
        title="About Indian Helping Trust"
        text="Action towards empowerment — a people-first non-profit building lasting change with the communities we serve."
        crumb="About"
      />

      <FounderSection />

      {/* Mission & Vision */}
      <section className="section bg-brand-greentint">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border-t-4 border-brand-green bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
              <Icon name="check" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-brand-ink">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-brand-slate">{about.mission}</p>
          </div>
          <div className="rounded-2xl border-t-4 border-brand-orange bg-white p-8 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
              <Icon name="heart" className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-brand-ink">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-brand-slate">{about.vision}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="What guides us" title="Our core values" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-brand-mist bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-bold text-brand-ink">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo meaning + stats */}
      <section className="section bg-brand-orangetint">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div className="flex justify-center">
            <div className="rounded-3xl bg-white p-10 shadow-sm">
              <img src={mark} alt="Indian Helping Trust emblem" className="h-40 w-auto" />
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Our emblem"
              title="Three hands, one purpose"
              text="The three interlocking hands — red, green and blue — represent people holding one another up. Change happens when we act together."
              center={false}
            />
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-brand-green">{s.value}</p>
                  <p className="text-sm font-medium text-brand-slate">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder & core team links */}
      <section className="bg-white pb-16 text-center">
        <div className="container-x flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/founder" className="btn-secondary">
            Meet Our Founder
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link to="/core-team" className="btn-ghost">
            Meet Our Core Team
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <DonateCTA />
    </>
  )
}
