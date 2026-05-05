import { STATIONS } from '../data.js'

export default function Stations() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl md:text-6xl mb-6">Six Stations</h1>
      <p className="text-lg text-ink/70 mb-12 max-w-2xl">
        Each station targets a domain that consistently distinguishes player level. Weights reflect
        match-time impact, not aesthetic preference.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {STATIONS.map((s) => (
          <div key={s.id} className="border border-ink/10 rounded-2xl p-6 hover:border-brand-blue transition-colors">
            <div className="flex items-baseline justify-between mb-2">
              <div className="font-display text-xs text-ink/40">STATION {String(s.id).padStart(2, '0')}</div>
              <div className="font-display text-2xl text-brand-blue">{s.points} pts</div>
            </div>
            <h2 className="text-2xl mb-3">{s.name}</h2>
            <p className="text-ink/70 mb-4 text-sm">{s.summary}</p>
            <div className="flex flex-wrap gap-2">
              {s.skills.map((k) => (
                <span key={k} className="text-xs bg-brand-blue-light text-brand-blue-dark px-3 py-1 rounded-full">
                  {k}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
