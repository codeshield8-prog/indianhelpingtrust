import { useState } from 'react'
import { org } from '../data/site'
import PageHero from '../components/PageHero'
import Icon from '../components/Icon'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only: wire to EmailJS / Formspree / your backend later.
    setSent(true)
    e.target.reset()
  }

  const details = [
    { icon: 'pin', color: 'text-brand-orange', label: 'Visit us', value: org.address },
    { icon: 'phone', color: 'text-brand-green', label: 'Call us', value: org.phone, href: `tel:${org.phone.replace(/[^+\d]/g, '')}` },
    { icon: 'mail', color: 'text-brand-blue', label: 'Email us', value: org.email, href: `mailto:${org.email}` },
  ]

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        text="Questions, partnerships, or want to volunteer? We’d love to hear from you."
        crumb="Contact"
      />

      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          {/* Details */}
          <div>
            <h2 className="text-2xl font-bold text-brand-ink">Reach out to us</h2>
            <p className="mt-3 leading-relaxed text-brand-slate">
              Our team usually responds within a couple of working days. For urgent matters, a phone
              call is fastest.
            </p>

            <div className="mt-8 space-y-5">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-mist">
                    <Icon name={d.icon} className={`h-6 w-6 ${d.color}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand-slate">
                      {d.label}
                    </p>
                    {d.href ? (
                      <a href={d.href} className="text-brand-ink hover:text-brand-blue">
                        {d.value}
                      </a>
                    ) : (
                      <p className="text-brand-ink">{d.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-2">
              {org.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-mist text-brand-ink transition-colors hover:bg-brand-orange hover:text-white"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-brand-mist bg-white p-8 shadow-lg">
            {sent && (
              <div className="mb-6 flex items-center gap-3 rounded-xl bg-brand-green/10 p-4 text-brand-greendark">
                <Icon name="check" className="h-5 w-5 shrink-0" />
                <p className="text-sm font-medium">
                  Thanks! Your message has been captured (demo form — connect a mail service to
                  deliver it).
                </p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <Field label="Subject" name="subject" placeholder="How can we help?" />
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-brand-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message…"
                  className="w-full rounded-xl border-2 border-brand-mist px-3 py-3 outline-none focus:border-brand-green"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-brand-mist shadow-sm">
            <iframe
              title="Indian Helping Trust location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(org.address)}&output=embed`}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-brand-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border-2 border-brand-mist px-3 py-3 outline-none focus:border-brand-green"
      />
    </div>
  )
}
