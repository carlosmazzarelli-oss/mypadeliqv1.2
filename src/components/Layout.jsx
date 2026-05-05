import { NavLink, Outlet, Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { SITE_NAME, APP_URL, VERSION } from '../config.js'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/method', label: 'Method' },
  { to: '/stations', label: 'Stations' },
  { to: '/profiles', label: 'Profiles' },
  { to: '/about', label: 'About' },
]

function NavItem({ to, label, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-brand-blue' : 'text-ink/70 hover:text-ink'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-ink/10 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-tight">
            {SITE_NAME}
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <NavItem key={n.to} {...n} />
            ))}
          </nav>
          <a
            href={APP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-blue-dark transition-colors"
          >
            Launch App <ExternalLink size={14} />
          </a>
        </div>
        <nav className="md:hidden border-t border-ink/10 px-4 py-2 flex gap-2 overflow-x-auto">
          {NAV.map((n) => (
            <NavItem key={n.to} {...n} />
          ))}
        </nav>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-ink/10 mt-24">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-ink/60">
          <div>
            <div className="font-display text-lg text-ink">{SITE_NAME}</div>
            <div>v{VERSION} · Standardized Padel Player Assessment</div>
          </div>
          <div>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
