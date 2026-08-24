import { Link } from 'react-router-dom'

export default function DonateCTA() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green to-brand-greendeep px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-orange/25" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-white/10" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Your help can change a life today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              Every contribution — however small — becomes a meal, a lesson, or a life-saving
              checkup for someone who needs it. Stand with us.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/get-involved" className="btn-primary">
                Donate Now
              </Link>
              <Link to="/get-involved" className="btn-outline">
                Become a Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
