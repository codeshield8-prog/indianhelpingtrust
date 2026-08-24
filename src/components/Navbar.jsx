import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { nav } from '../data/site'
import logo from '../assets/iht-logo-full.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between gap-4">
        <Link to="/" className="flex items-center" aria-label="Indian Helping Trust — home">
          <img src={logo} alt="Indian Helping Trust" className="h-10 w-auto sm:h-12" />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'text-brand-green'
                      : 'text-brand-ink hover:text-brand-green'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/get-involved" className="btn-primary hidden lg:inline-flex">
          Donate
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-brand-ink lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-brand-mist bg-white lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-3 text-base font-semibold ${
                      isActive ? 'bg-brand-greentint text-brand-green' : 'text-brand-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link to="/get-involved" className="btn-primary w-full">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
