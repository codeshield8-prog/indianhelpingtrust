import { Link } from 'react-router-dom'
import { org, nav } from '../data/site'
import Icon from './Icon'
import logo from '../assets/iht-logo-full.png'

export default function Footer() {
  return (
    <footer className="bg-brand-greendeep text-white/80">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-lg bg-white p-3">
            <img src={logo} alt={org.name} className="h-9 w-auto" />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {org.tagline}. A non-profit working to bring education, healthcare and dignity to
            communities across India.
          </p>
          <div className="mt-5 flex gap-2">
            {org.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-orange"
              >
                <Icon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-orange" />
              <span>{org.address}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-green" />
              <a href={`tel:${org.phone.replace(/[^+\d]/g, '')}`} className="hover:text-white">
                {org.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-blue" />
              <a href={`mailto:${org.email}`} className="hover:text-white">
                {org.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Support us</h3>
          <p className="mt-4 text-sm">
            Your contribution funds meals, classrooms and medical camps on the ground.
          </p>
          <Link to="/get-involved" className="btn-primary mt-4">
            Donate Now
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © 2017 {org.name}. All rights reserved.
          </p>
          <p>{org.reg}</p>
        </div>
      </div>
    </footer>
  )
}
