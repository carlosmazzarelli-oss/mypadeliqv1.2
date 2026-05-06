import { Link } from 'react-router-dom'
import { APP_URL } from '../config.js'

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-5xl md:text-6xl mb-6">About</h1>
      <p className="text-lg text-ink/70 mb-6">
        Padel iQ exists because there was no shared language for talking about player level across
        clubs, academies, and competitive pathways. Casual ratings drift; tournament results miss
        most players entirely.
      </p>
      <p className="text-lg text-ink/70 mb-6">
        The system is designed to be honest about what it measures — six domains, 100 points,
        scripted enough that two evaluators in two cities reach the same number — and modest about
        what it doesn't.
      </p>
      <p className="text-lg text-ink/70 mb-12">
        Read <Link to="/method" className="text-brand-blue underline">the method</Link> for the
        scoring rubric, or <a href={APP_URL} target="_blank" rel="noreferrer" className="text-brand-blue underline">launch the app</a> to record an assessment.
      </p>

      <div className="border-t border-ink/10 pt-8 text-sm text-ink/60">
        For licensing, certification, or partnership inquiries, contact your federation
        representative or the originating club.
      </div>
    </div>
  )
}
