import { useState } from 'react'
import { donationTiers, involveWays } from '../data/site'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icon'
import { iconBg } from '../components/colorMap'

const presets = ['500', '1500', '5000', '10000']

export default function GetInvolved() {
  const [amount, setAmount] = useState('1500')
  const [custom, setCustom] = useState('')
  const [freq, setFreq] = useState('once')
  const [done, setDone] = useState(false)

  const active = custom || amount

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI-only: no live payment gateway wired yet.
    setDone(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Get involved"
        title="Stand with us"
        text="Give, volunteer or partner — there are many ways to be part of the change. Every one of them matters."
        crumb="Get Involved"
      />

      {/* Ways to help */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading eyebrow="Three ways to help" title="Choose how you’ll make an impact" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {involveWays.map((w, i) => (
              <div key={w.title} className="rounded-2xl border border-brand-mist bg-white p-8 text-center shadow-sm">
                <div
                  className={`mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl ${
                    iconBg[['green', 'orange', 'blue'][i % 3]]
                  }`}
                >
                  <Icon name={w.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-ink">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-slate">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section className="section bg-brand-greentint">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          {/* Impact tiers */}
          <div>
            <SectionHeading
              eyebrow="Your impact"
              title="See what your gift can do"
              center={false}
            />
            <div className="mt-8 space-y-4">
              {donationTiers.map((t) => (
                <div key={t.amount} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                  <div className="rounded-xl bg-brand-green/10 px-4 py-3 text-lg font-extrabold text-brand-green">
                    {t.amount}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-ink">{t.title}</h3>
                    <p className="text-sm text-brand-slate">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form card */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            {done ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <Icon name="check" className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-2xl font-bold text-brand-ink">Thank you!</h3>
                <p className="mt-2 max-w-sm text-brand-slate">
                  This is a demo form — no payment was processed. Connect a payment provider to
                  accept a <strong>₹{Number(active).toLocaleString('en-IN')}</strong> {freq === 'monthly' ? 'monthly ' : ''}
                  gift.
                </p>
                <button onClick={() => setDone(false)} className="btn-ghost mt-6">
                  Make another donation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-brand-ink">Make a donation</h3>

                {/* Frequency */}
                <div className="mt-6 grid grid-cols-2 gap-2 rounded-full bg-brand-mist p-1">
                  {['once', 'monthly'].map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => setFreq(f)}
                      className={`rounded-full py-2 text-sm font-semibold capitalize transition-colors ${
                        freq === f ? 'bg-white text-brand-green shadow' : 'text-brand-slate'
                      }`}
                    >
                      {f === 'once' ? 'One-time' : 'Monthly'}
                    </button>
                  ))}
                </div>

                {/* Amount presets */}
                <div className="mt-5 grid grid-cols-4 gap-2">
                  {presets.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setAmount(p)
                        setCustom('')
                      }}
                      className={`rounded-xl border-2 py-2.5 text-sm font-bold transition-colors ${
                        amount === p && !custom
                          ? 'border-brand-green bg-brand-green/5 text-brand-green'
                          : 'border-brand-mist text-brand-ink hover:border-brand-green/40'
                      }`}
                    >
                      ₹{Number(p).toLocaleString('en-IN')}
                    </button>
                  ))}
                </div>

                {/* Custom amount */}
                <div className="mt-4">
                  <label className="mb-1 block text-sm font-medium text-brand-ink">Or enter an amount</label>
                  <div className="flex items-center rounded-xl border-2 border-brand-mist px-3 focus-within:border-brand-green">
                    <span className="text-brand-slate">₹</span>
                    <input
                      type="number"
                      min="1"
                      inputMode="numeric"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      placeholder="Custom amount"
                      className="w-full bg-transparent px-2 py-3 outline-none"
                    />
                  </div>
                </div>

                {/* Donor details */}
                <div className="mt-4 grid gap-4">
                  <Field label="Full name" name="name" placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
                </div>

                <button type="submit" className="btn-primary mt-6 w-full">
                  Donate ₹{Number(active || 0).toLocaleString('en-IN')}
                  {freq === 'monthly' ? ' / month' : ''}
                </button>
                <p className="mt-3 text-center text-xs text-brand-slate">
                  Demo form — no real payment is taken. Secure gateway to be connected.
                </p>
              </form>
            )}
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
