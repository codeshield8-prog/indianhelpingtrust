import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Seo, { breadcrumb, SITE } from '../components/Seo'

const causes = [
  { title: 'Education & child welfare', text: 'Many NGOs focus on keeping children in school through learning support, school kits and scholarships — helping first-generation learners access education.' },
  { title: 'Healthcare & community health', text: 'Some organisations run health awareness drives, camps and support that bring basic healthcare closer to underserved communities.' },
  { title: 'Disaster relief & humanitarian support', text: 'During floods, emergencies and other crises, relief-focused NGOs distribute essentials such as food, rations and supplies to affected families.' },
  { title: 'Elderly care', text: 'A number of NGOs spend time with and support residents of elderly homes, recognising the dignity and companionship older people deserve.' },
  { title: 'Women empowerment', text: 'Organisations working in this area support skills, self-help groups and livelihoods so that women can earn and participate with confidence.' },
  { title: 'Cleanliness & environment', text: 'Under initiatives like the Swachh Bharat Abhiyan, volunteers clean public spaces and raise awareness on sanitation and the environment.' },
  { title: 'Community development', text: 'Community-focused NGOs work alongside local people on the everyday needs of a neighbourhood or village — from awareness to practical support.' },
  { title: 'Youth engagement & volunteering', text: 'Sport, volunteering and youth activities give young people positive ways to participate, contribute and build community.' },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Top NGOs in India: Understanding Organisations Working for Social Change',
    description:
      'How NGOs in India work across causes such as education, healthcare, child welfare, disaster relief, women empowerment and community development — and how Indian Helping Trust contributes.',
    image: SITE + '/og-programs.jpg',
    author: { '@type': 'Organization', name: 'Indian Helping Trust' },
    publisher: {
      '@type': 'Organization',
      name: 'Indian Helping Trust',
      logo: { '@type': 'ImageObject', url: SITE + '/logo.png' },
    },
    mainEntityOfPage: SITE + '/top-ngos-in-india',
    datePublished: '2026-08-25',
  },
  breadcrumb([
    { name: 'Home', path: '/' },
    { name: 'Top NGOs in India', path: '/top-ngos-in-india' },
  ]),
]

export default function TopNgos() {
  return (
    <>
      <Seo
        title="Top NGOs in India: Organisations Working for Social Change"
        description="An overview of how NGOs in India work across causes like education, healthcare, child welfare, disaster relief and community development — and where Indian Helping Trust fits."
        path="/top-ngos-in-india"
        image="/og-programs.jpg"
        type="article"
        jsonLd={jsonLd}
      />

      <PageHero
        eyebrow="Resource"
        title="Top NGOs in India: Understanding Organisations Working for Social Change"
        text="“Top NGO” means different things to different people — because NGOs in India work across many different causes and regions. Here’s a simple, factual guide."
        crumb="Top NGOs in India"
      />

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-x mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-brand-slate">
            India is home to a large and diverse non-profit sector. Rather than a single ranking, the
            most helpful way to understand the “top” NGOs is by the causes they serve, the communities
            they reach, and the transparency and consistency of their work. An organisation that is a
            great fit for education may be different from one focused on disaster relief or elderly care.
          </p>
        </div>
      </section>

      {/* Causes */}
      <section className="section bg-brand-greentint">
        <div className="container-x">
          <SectionHeading
            eyebrow="Areas of Social Work"
            title="Causes NGOs in India work on"
            text="Different organisations focus on different needs. These are some of the most common areas of social work in India."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map((c) => (
              <div key={c.title} className="rounded-2xl border border-brand-mist bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-brand-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to evaluate */}
      <section className="section bg-white">
        <div className="container-x mx-auto max-w-3xl">
          <SectionHeading eyebrow="A Practical Lens" title="How to think about a “good” NGO" center={false} />
          <ul className="mt-6 space-y-3 text-base leading-relaxed text-brand-slate">
            <li>• <strong className="text-brand-ink">Clear focus:</strong> which causes and regions the organisation actually works in.</li>
            <li>• <strong className="text-brand-ink">On-the-ground work:</strong> real activities, photographs and community presence.</li>
            <li>• <strong className="text-brand-ink">Transparency:</strong> openness about its mission, people and how it works.</li>
            <li>• <strong className="text-brand-ink">Participation:</strong> whether people can get involved as volunteers or supporters.</li>
          </ul>
          <p className="mt-6 text-base leading-relaxed text-brand-slate">
            “Top” is best understood as the right fit for the cause you care about — not a fixed list.
          </p>
        </div>
      </section>

      {/* Where IHT fits */}
      <section className="section bg-brand-greentint">
        <div className="container-x mx-auto max-w-3xl">
          <SectionHeading eyebrow="One Example" title="Where Indian Helping Trust fits" center={false} />
          <p className="mt-6 text-base leading-relaxed text-brand-slate">
            <Link to="/" className="font-semibold text-brand-green hover:text-brand-greendark">Indian Helping Trust</Link>{' '}
            (IHT) is one such Indian non-profit. Founded in 2017 in Muzaffarpur, Bihar, it works with
            communities across different parts of India — including humanitarian relief, cleanliness
            drives under the Swachh Bharat Abhiyan, education support for children, elderly care, youth
            engagement and social awareness. Its work is described factually across the site, with real
            photographs from each location.
          </p>
          <p className="mt-4 text-base leading-relaxed text-brand-slate">
            You can explore this in more detail on the pages below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/programs" className="btn-secondary">Explore Our Programs<span aria-hidden="true"> →</span></Link>
            <Link to="/about" className="btn-ghost">About Indian Helping Trust<span aria-hidden="true"> →</span></Link>
            <Link to="/founder" className="btn-ghost">Meet Our Founder<span aria-hidden="true"> →</span></Link>
            <Link to="/get-involved" className="btn-ghost">Get Involved<span aria-hidden="true"> →</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
