/**
 * 26 World Cup card set. 48 national teams, no FIFA branding —
 * just team names + colors + footballing flavor.
 */

export interface Team {
  name: string;
  code: string;       // 3-letter abbreviation
  confederation: string;
  primary: string;    // jersey
  secondary: string;  // shorts
  accent: string;     // socks / trim
}

/** All 48 teams expected at the 26 World Cup. Color palettes are
 *  iconic team colors, not exact federation specs. */
export const TEAMS: Team[] = [
  // CONCACAF — hosts + qualifiers
  { name: "United States", code: "USA", confederation: "CONCACAF", primary: "#1a3a8a", secondary: "#ffffff", accent: "#d4001f" },
  { name: "Canada",        code: "CAN", confederation: "CONCACAF", primary: "#d4001f", secondary: "#ffffff", accent: "#1a1a1a" },
  { name: "Mexico",        code: "MEX", confederation: "CONCACAF", primary: "#006847", secondary: "#ffffff", accent: "#ce1126" },
  { name: "Panama",        code: "PAN", confederation: "CONCACAF", primary: "#d4001f", secondary: "#1a3a8a", accent: "#ffffff" },
  { name: "Costa Rica",    code: "CRC", confederation: "CONCACAF", primary: "#d4001f", secondary: "#1a3a8a", accent: "#ffffff" },
  { name: "Honduras",      code: "HON", confederation: "CONCACAF", primary: "#1a3a8a", secondary: "#ffffff", accent: "#1a3a8a" },
  { name: "Jamaica",       code: "JAM", confederation: "CONCACAF", primary: "#fcd116", secondary: "#1a1a1a", accent: "#009b3a" },

  // CONMEBOL
  { name: "Argentina",     code: "ARG", confederation: "CONMEBOL", primary: "#74acdf", secondary: "#ffffff", accent: "#f6b40e" },
  { name: "Brazil",        code: "BRA", confederation: "CONMEBOL", primary: "#f9c000", secondary: "#009c3b", accent: "#002776" },
  { name: "Uruguay",       code: "URU", confederation: "CONMEBOL", primary: "#5cb0e8", secondary: "#1a3a8a", accent: "#1a1a1a" },
  { name: "Colombia",      code: "COL", confederation: "CONMEBOL", primary: "#fcd116", secondary: "#003893", accent: "#ce1126" },
  { name: "Ecuador",       code: "ECU", confederation: "CONMEBOL", primary: "#fcd116", secondary: "#1a3a8a", accent: "#ce1126" },
  { name: "Paraguay",      code: "PAR", confederation: "CONMEBOL", primary: "#ce1126", secondary: "#ffffff", accent: "#1a3a8a" },
  { name: "Chile",         code: "CHI", confederation: "CONMEBOL", primary: "#d4001f", secondary: "#1a3a8a", accent: "#ffffff" },

  // UEFA
  { name: "France",        code: "FRA", confederation: "UEFA", primary: "#1a3a8a", secondary: "#ffffff", accent: "#d4001f" },
  { name: "England",       code: "ENG", confederation: "UEFA", primary: "#ffffff", secondary: "#1a3a8a", accent: "#d4001f" },
  { name: "Germany",       code: "GER", confederation: "UEFA", primary: "#ffffff", secondary: "#1a1a1a", accent: "#dd0000" },
  { name: "Spain",         code: "ESP", confederation: "UEFA", primary: "#aa1518", secondary: "#1a3a8a", accent: "#fcd116" },
  { name: "Portugal",      code: "POR", confederation: "UEFA", primary: "#aa1518", secondary: "#006a4e", accent: "#fcd116" },
  { name: "Netherlands",   code: "NED", confederation: "UEFA", primary: "#f36c21", secondary: "#1a3a8a", accent: "#ffffff" },
  { name: "Italy",         code: "ITA", confederation: "UEFA", primary: "#1a3a8a", secondary: "#ffffff", accent: "#fcd116" },
  { name: "Belgium",       code: "BEL", confederation: "UEFA", primary: "#1a1a1a", secondary: "#fcd116", accent: "#d4001f" },
  { name: "Croatia",       code: "CRO", confederation: "UEFA", primary: "#d4001f", secondary: "#ffffff", accent: "#1a3a8a" },
  { name: "Switzerland",   code: "SUI", confederation: "UEFA", primary: "#d4001f", secondary: "#1a1a1a", accent: "#ffffff" },
  { name: "Denmark",       code: "DEN", confederation: "UEFA", primary: "#d4001f", secondary: "#ffffff", accent: "#ffffff" },
  { name: "Poland",        code: "POL", confederation: "UEFA", primary: "#ffffff", secondary: "#d4001f", accent: "#d4001f" },
  { name: "Turkey",        code: "TUR", confederation: "UEFA", primary: "#d4001f", secondary: "#ffffff", accent: "#ffffff" },
  { name: "Austria",       code: "AUT", confederation: "UEFA", primary: "#d4001f", secondary: "#ffffff", accent: "#1a1a1a" },
  { name: "Czechia",       code: "CZE", confederation: "UEFA", primary: "#d4001f", secondary: "#1a3a8a", accent: "#ffffff" },
  { name: "Norway",        code: "NOR", confederation: "UEFA", primary: "#d4001f", secondary: "#1a3a8a", accent: "#ffffff" },
  { name: "Wales",         code: "WAL", confederation: "UEFA", primary: "#d4001f", secondary: "#ffffff", accent: "#006a4e" },

  // AFC
  { name: "Japan",         code: "JPN", confederation: "AFC", primary: "#1a3a8a", secondary: "#ffffff", accent: "#d4001f" },
  { name: "South Korea",   code: "KOR", confederation: "AFC", primary: "#d4001f", secondary: "#1a3a8a", accent: "#ffffff" },
  { name: "Iran",          code: "IRN", confederation: "AFC", primary: "#ffffff", secondary: "#239f40", accent: "#d4001f" },
  { name: "Saudi Arabia",  code: "KSA", confederation: "AFC", primary: "#006c35", secondary: "#ffffff", accent: "#1a1a1a" },
  { name: "Australia",     code: "AUS", confederation: "AFC", primary: "#fdd200", secondary: "#005a30", accent: "#ffffff" },
  { name: "Qatar",         code: "QAT", confederation: "AFC", primary: "#8a1538", secondary: "#ffffff", accent: "#ffffff" },
  { name: "Iraq",          code: "IRQ", confederation: "AFC", primary: "#239f40", secondary: "#ffffff", accent: "#d4001f" },
  { name: "Uzbekistan",    code: "UZB", confederation: "AFC", primary: "#ffffff", secondary: "#1a3a8a", accent: "#1a8a3a" },

  // CAF
  { name: "Morocco",       code: "MAR", confederation: "CAF", primary: "#c1272d", secondary: "#006233", accent: "#ffffff" },
  { name: "Senegal",       code: "SEN", confederation: "CAF", primary: "#00853f", secondary: "#ffffff", accent: "#e31b23" },
  { name: "Egypt",         code: "EGY", confederation: "CAF", primary: "#d4001f", secondary: "#ffffff", accent: "#1a1a1a" },
  { name: "Nigeria",       code: "NGA", confederation: "CAF", primary: "#008751", secondary: "#ffffff", accent: "#ffffff" },
  { name: "Algeria",       code: "ALG", confederation: "CAF", primary: "#006233", secondary: "#ffffff", accent: "#d21034" },
  { name: "Tunisia",       code: "TUN", confederation: "CAF", primary: "#d4001f", secondary: "#ffffff", accent: "#1a1a1a" },
  { name: "Cameroon",      code: "CMR", confederation: "CAF", primary: "#007a5e", secondary: "#d4001f", accent: "#fcd116" },
  { name: "Ghana",         code: "GHA", confederation: "CAF", primary: "#ffffff", secondary: "#1a1a1a", accent: "#d4001f" },
  { name: "Ivory Coast",   code: "CIV", confederation: "CAF", primary: "#f77f00", secondary: "#ffffff", accent: "#239f40" },

  // OFC
  { name: "New Zealand",   code: "NZL", confederation: "OFC", primary: "#ffffff", secondary: "#1a1a1a", accent: "#1a1a1a" },
];

export const POSITIONS = [
  "Goalkeeper", "Centre-Back", "Full-Back", "Defensive Mid",
  "Playmaker", "Winger", "Striker", "Captain",
];

export const FLAVORS = [
  "Reads the game three passes ahead.",
  "Calmest player in the box, every time.",
  "Has scored from his own half. Twice.",
  "Wears the armband like it weighs nothing.",
  "Comes off the bench, changes the match.",
  "Tracks back like a defender, finishes like a striker.",
  "Knows every angle in the box.",
  "Never lost a one-on-one on this stage.",
  "Tournament debut, looks like a veteran.",
  "Gets quieter the bigger the game.",
];

/** The set's display backgrounds — turf greens + stadium night colors. */
export const BACKGROUNDS = [
  { name: "Stadium Lights", from: "#0a2a1a", to: "#031208", tint: "#3aa05e" },
  { name: "Night Match",    from: "#0a1a2e", to: "#03081a", tint: "#3a6ea0" },
  { name: "Sunset Pitch",   from: "#3a1e0e", to: "#0e0805", tint: "#a04e1e" },
  { name: "Floodlit",       from: "#1a3a3e", to: "#031216", tint: "#3aa0a0" },
  { name: "Final Sky",      from: "#2d0f3e", to: "#080318", tint: "#7a3aa0" },
  { name: "Grass Cathedral",from: "#0e2a1a", to: "#021008", tint: "#5bd97a" },
  { name: "Tunnel Cold",    from: "#1e2a4a", to: "#06091c", tint: "#3a4e80" },
  { name: "Stoppage Time",  from: "#1a0a1e", to: "#08031a", tint: "#7a3a8a" },
];

/** Stand-in for "easter eggs" without using real player names. */
export const LEGENDS = [
  { name: "El Capitán",    klass: "Captain",      flavor: "Wears the armband like it weighs nothing." },
  { name: "The Maestro",   klass: "Playmaker",    flavor: "Slows the match down to his own rhythm." },
  { name: "El Diez",       klass: "Number Ten",   flavor: "Magicians always carry the ball." },
  { name: "The Phantom",   klass: "Striker",      flavor: "Always free in the six-yard box." },
  { name: "El Muro",       klass: "Centre-Back",  flavor: "They didn't make it past him. Anyone." },
  { name: "The Closer",    klass: "Late Sub",     flavor: "Brought on when the match needs to end." },
];

/** Soccer player pose used by the sprite renderer. */
export type PoseId = "standing" | "kicking" | "keeper" | "celebrate";

/** Return a pose given a position string. */
export function poseForPosition(position: string): PoseId {
  if (position === "Goalkeeper") return "keeper";
  if (position === "Striker" || position === "Winger") return "kicking";
  if (position === "Captain") return "celebrate";
  return "standing";
}
