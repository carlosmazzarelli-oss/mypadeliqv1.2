export const STATIONS = [
  {
    id: 1,
    name: "Wall & Glass Control",
    points: 18,
    summary: "Reading rebounds off the back glass and side walls; recovery and reset under pressure.",
    skills: ["Back-glass bandeja", "Side-wall lob defense", "Court reset"],
  },
  {
    id: 2,
    name: "Net Game & Volley Discipline",
    points: 18,
    summary: "First volley placement, body volley control, and patient construction at the net.",
    skills: ["Block volley", "Drop volley", "Volley positioning"],
  },
  {
    id: 3,
    name: "Bandeja & Vibora",
    points: 16,
    summary: "Holding net position with the staple overhead shots used to keep opponents pinned back.",
    skills: ["Bandeja depth", "Vibora angle", "Recovery footwork"],
  },
  {
    id: 4,
    name: "Lob & Defensive Shape",
    points: 16,
    summary: "Trajectory control on the lob plus defensive lateral movement and partner spacing.",
    skills: ["Topspin lob", "Defensive lob", "Lateral coverage"],
  },
  {
    id: 5,
    name: "Serve, Return & First Three Shots",
    points: 16,
    summary: "Pattern reliability through the opening exchange — the most measurable phase of any point.",
    skills: ["Serve placement", "Return depth", "Third-ball shape"],
  },
  {
    id: 6,
    name: "Tactics & Point Construction",
    points: 16,
    summary: "Decision quality: choosing the shot the situation demands rather than the shot you like.",
    skills: ["Pattern recognition", "Pressure timing", "Partner play"],
  },
]

export const RATING_BANDS = [
  { range: "85–100", label: "Elite", note: "Ranked competitive player." },
  { range: "70–84", label: "Advanced", note: "Strong club competitor; consistent under pressure." },
  { range: "55–69", label: "Intermediate+", note: "Reliable patterns with developing tactical depth." },
  { range: "40–54", label: "Intermediate", note: "Comfortable in rallies; tactical gaps under stress." },
  { range: "25–39", label: "Improver", note: "Building shot library and court positioning." },
  { range: "0–24", label: "Beginner", note: "Learning fundamentals and footwork." },
]

export const PROFILES = [
  {
    name: "The Architect",
    summary: "Patient point-builder. Wins with shape, not power.",
    strengths: ["Lob trajectory", "Bandeja patience", "Spacing"],
  },
  {
    name: "The Counter-Puncher",
    summary: "Defends deep, converts the half-chance.",
    strengths: ["Wall reads", "Reset volleys", "Court coverage"],
  },
  {
    name: "The Closer",
    summary: "Aggressive at the net; finishes the moment one opens.",
    strengths: ["Vibora", "Smash variety", "Volley pressure"],
  },
  {
    name: "The Generalist",
    summary: "Balanced across all six domains; few exploitable gaps.",
    strengths: ["Pattern flexibility", "Partner play", "Consistency"],
  },
]

export const USE_CASES = [
  { who: "Clubs", what: "Standardized intake assessment for new members and league seeding." },
  { who: "Academies", what: "Repeatable benchmarking across a player's development arc." },
  { who: "Coaches", what: "Domain-level diagnostics that translate directly into session plans." },
  { who: "Federations", what: "Comparable scores across regions and competitive pathways." },
]

export const CALIBRATION_RULES = [
  "Two certified evaluators score independently; scores are reconciled if they differ by more than 6 points.",
  "Stations are run in a fixed order to control fatigue effects.",
  "All point-based stations use the same ball pressure and net height.",
  "Tactics scoring uses scripted scenarios with predetermined optimal responses.",
  "Re-assessment requires a minimum 30-day gap to reduce practice-effect bias.",
]
