import { Link } from 'react-router-dom'
import {
  teamHero,
  beyondProfession,
  workingTogether,
  coreIntro,
  members,
  professionsBand,
  leadership,
  professionPurpose,
  whyPeople,
  youthOpportunity,
  timeline,
  teamCta,
} from '../data/team'
import SectionHeading from '../components/SectionHeading'
import TeamMemberProfile from '../components/TeamMemberProfile'
import Icon from '../components/Icon'
import Seo, { breadcrumb } from '../components/Seo'

export default function CoreTeam() {
  return (
    <>
      <Seo
        title="Core Team | Indian Helping Trust Leadership & Members"
        description="Meet the core team of Indian Helping Trust — professionals from different backgrounds contributing to social work, including Rauful Azam, Imran Hussain Sikdar, Atauz Zaman Sikdar, Dheer Singh and Pyare Siddiqui."
        path="/core-team"
        image="/og-team.jpg"
        jsonLd={breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Core Team', path: '/core-team' },
        ])}
      />
      {/* 1 · HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/10" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-96 w-96 rounded-full bg-brand-orange/10" />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <p className="eyebrow">{teamHero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              {teamHero.title}
            </h1>
            <p className="mt-4 text-lg font-semibold text-brand-green sm:text-xl">{teamHero.altHeading}</p>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-slate">{teamHero.text}</p>
          </div>

          {/* Refined collage of the real member portraits */}
          <div className="animate-fade-up columns-2 gap-4 [&>*]:mb-4">
            {members.map((m) => (
              <div key={m.id} className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                <img
                  src={m.image}
                  alt={`${m.name}, ${m.role}`}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover ${m.objectPos || 'object-center'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 · BEYOND A PROFESSION */}
      <section className="section bg-brand-greentint">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={beyondProfession.eyebrow} title={beyondProfession.title} center={false} />
          <div className="space-y-4">
            {beyondProfession.paras.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-brand-slate">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · WORKING TOGETHER */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow={workingTogether.eyebrow} title={workingTogether.title} text={workingTogether.intro} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {workingTogether.points.map((pt) => (
              <div key={pt} className="flex items-start gap-3 rounded-2xl border border-brand-mist bg-white p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <p className="text-base leading-relaxed text-brand-ink">{pt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · CORE TEAM INTRO */}
      <section className="section bg-brand-greentint pb-0">
        <div className="container-x">
          <SectionHeading eyebrow={coreIntro.eyebrow} title={coreIntro.title} text={coreIntro.text} />
        </div>
      </section>

      {/* 5 · MEMBER PROFILES */}
      {members.map((member, i) => (
        <section key={member.id} className={`section ${i % 2 === 0 ? 'bg-brand-greentint' : 'bg-white'}`}>
          <div className="container-x">
            <TeamMemberProfile member={member} index={i} />
          </div>
        </section>
      ))}

      {/* 6 · PROFESSIONS BAND */}
      <section className="section bg-brand-greendeep">
        <div className="container-x text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-orange">{professionsBand.eyebrow}</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {professionsBand.title}
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {professionsBand.items.map((it) => (
              <span key={it} className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
                {it}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/80">{professionsBand.text}</p>
        </div>
      </section>

      {/* 7 · LEADERSHIP THAT LISTENS */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading eyebrow={leadership.eyebrow} title={leadership.title} center={false} />
          <div>
            <p className="text-base leading-relaxed text-brand-slate">{leadership.text}</p>
            <figure className="mt-6 rounded-2xl border-l-4 border-brand-orange bg-brand-orangetint p-6">
              <blockquote className="text-lg font-medium italic leading-relaxed text-brand-ink">
                “{leadership.idea}”
              </blockquote>
            </figure>
            <Link to={leadership.linkTo} className="btn-ghost mt-6">
              {leadership.linkLabel}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8 · YOUR PROFESSION CAN SERVE A LARGER PURPOSE */}
      <section className="section bg-brand-greentint">
        <div className="container-x mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={professionPurpose.eyebrow} title={professionPurpose.title} />
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">{professionPurpose.text}</p>
        </div>
      </section>

      {/* 9 · WHY PEOPLE MATTER */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow={whyPeople.eyebrow} title={whyPeople.title} text={whyPeople.text} />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {whyPeople.contributions.map((c) => (
              <span key={c} className="rounded-full border border-brand-mist bg-white px-4 py-2 text-sm font-semibold text-brand-ink shadow-sm">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10 · YOUTH & OPPORTUNITY */}
      <section className="section bg-brand-greentint">
        <div className="container-x mx-auto max-w-3xl text-center">
          <SectionHeading eyebrow={youthOpportunity.eyebrow} title={youthOpportunity.title} />
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">{youthOpportunity.text}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {youthOpportunity.values.map((v) => (
              <span key={v} className="rounded-full bg-brand-green/10 px-4 py-2 text-sm font-semibold text-brand-green">
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11 · TIMELINE */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Our Journey" title="Growing around a shared vision" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {timeline.map((t, i) => (
              <div key={t.year} className="relative rounded-2xl border border-brand-mist bg-white p-7 shadow-sm">
                <span className={`text-4xl font-extrabold ${i === 2 ? 'text-brand-orange' : 'text-brand-green'}`}>{t.year}</span>
                <h3 className="mt-2 text-lg font-bold text-brand-ink">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12 · CTA */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-greendeep px-6 py-14 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/25" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{teamCta.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">{teamCta.text}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link to="/get-involved" className="btn-primary">Get Involved</Link>
                <Link to="/programs" className="btn-outline">Explore Our Programs</Link>
                <Link to="/founder" className="btn-outline">Meet the Founder</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
