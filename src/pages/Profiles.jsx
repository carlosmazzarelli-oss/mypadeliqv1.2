import { PROFILES } from '../data.js'

export default function Profiles() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-5xl md:text-6xl mb-6">Player Profiles</h1>
      <p className="text-lg text-ink/70 mb-12 max-w-2xl">
        Padel iQ scores aggregate to a numerical rating, but the domain-level shape of a score
        usually maps to one of a small number of recognizable player types.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {PROFILES.map((p) => (
          <div key={p.name} className="bg-ink text-white rounded-2xl p-8">
            <div className="font-display text-xs text-brand-yellow mb-2">PROFILE</div>
            <h2 className="text-3xl mb-3">{p.name}</h2>
            <p className="text-white/70 mb-6">{p.summary}</p>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-2">Signature strengths</div>
            <ul className="space-y-1">
              {p.strengths.map((s) => (
                <li key={s} className="text-white/90">— {s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
