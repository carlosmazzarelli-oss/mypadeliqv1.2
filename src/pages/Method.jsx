import { RATING_BANDS, CALIBRATION_RULES } from '../data.js'

export default function Method() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl md:text-6xl mb-6">The Method</h1>
      <p className="text-lg text-ink/70 mb-12">
        Padel iQ is a fixed rubric: six stations, 100 points, two certified evaluators. Every score
        is reproducible because every station is scripted, weighted, and calibrated.
      </p>

      <h2 className="text-3xl mt-16 mb-6">Rating bands</h2>
      <div className="border border-ink/10 rounded-2xl divide-y divide-ink/10">
        {RATING_BANDS.map((b) => (
          <div key={b.range} className="grid grid-cols-[100px_140px_1fr] gap-4 px-6 py-4 items-baseline">
            <div className="font-display text-xl text-brand-blue">{b.range}</div>
            <div className="font-medium">{b.label}</div>
            <div className="text-ink/60 text-sm">{b.note}</div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl mt-16 mb-6">Calibration rules</h2>
      <ul className="space-y-3">
        {CALIBRATION_RULES.map((r, i) => (
          <li key={i} className="flex gap-4">
            <span className="font-display text-brand-blue text-xl shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
            <span className="text-ink/80">{r}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
