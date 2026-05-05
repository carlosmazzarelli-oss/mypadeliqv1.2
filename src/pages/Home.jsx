import { Link } from 'react-router-dom'
import { ArrowRight, Target, BarChart3, Users } from 'lucide-react'
import { TAGLINE, APP_URL } from '../config.js'
import { USE_CASES } from '../data.js'

export default function Home() {
  return (
    <>
      <section className="bg-brand-blue-light">
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-brand-blue font-bold mb-4">
            Padel iQ
          </div>
          <h1 className="text-5xl md:text-7xl leading-none mb-6 max-w-4xl">
            {TAGLINE}.
          </h1>
          <p className="text-lg md:text-xl text-ink/70 max-w-2xl mb-10">
            A 100-point evaluation system measuring technical execution, tactical awareness,
            consistency, and point-building intelligence across six domains.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={APP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-brand-blue text-white px-6 py-3 rounded-full font-medium hover:bg-brand-blue-dark transition-colors"
            >
              Launch App <ArrowRight size={16} />
            </a>
            <Link
              to="/method"
              className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3 rounded-full font-medium hover:border-ink transition-colors"
            >
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <Feature
            icon={<Target />}
            title="Six domains, 100 points"
            body="A fixed weighting across wall control, net play, overheads, defense, opening patterns, and tactics."
          />
          <Feature
            icon={<BarChart3 />}
            title="Repeatable, comparable"
            body="Scripted scenarios and calibration rules so two evaluators in two clubs reach the same number."
          />
          <Feature
            icon={<Users />}
            title="Built for pathways"
            body="From first intake at a club to ranked competitive seeding — one rubric, one score."
          />
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl mb-12">Who it's for</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {USE_CASES.map((u) => (
              <div key={u.who} className="border-t border-white/15 pt-6">
                <div className="text-brand-yellow font-display text-2xl mb-2">{u.who}</div>
                <p className="text-white/70">{u.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Feature({ icon, title, body }) {
  return (
    <div>
      <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-2xl mb-2">{title}</h3>
      <p className="text-ink/70">{body}</p>
    </div>
  )
}
