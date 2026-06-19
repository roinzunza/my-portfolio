import { PALETTES, type Palette } from "./palettes";
import { CUSTOM_SPRITES_COUNT, SPRITE_LAYER_COUNTS, type SpriteIndices } from "./sprites";
import {
  TEAMS,
  POSITIONS,
  FLAVORS as WC26_FLAVORS,
  BACKGROUNDS as WC26_BACKGROUNDS,
  LEGENDS as WC26_LEGENDS,
  poseForPosition,
  type Team,
  type PoseId,
} from "./sets/wc26";

/**
 * Deterministic card generator. Same seed → same card, always.
 * Uses mulberry32 — a tiny, fast PRNG with great distribution for game use.
 *
 * Supports multiple sets via `setId`. Each set has its own word tables,
 * background pool, sprite system, and easter-egg overrides.
 */

function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type SetId = "origins" | "wc26";

export interface SetMeta {
  id: SetId;
  name: string;
  code: string;
  label: string;
}

export const SETS: SetMeta[] = [
  { id: "origins", name: "Forge: Origins", code: "ORG", label: "Origins" },
  { id: "wc26",    name: "26 World Cup",   code: "W26", label: "World Cup" },
];

// ============================================================
// Origins word tables
// ============================================================

const ORIGINS_REALMS = [
  "Aetherwood", "Voidspire", "Ashenmoor", "Glaciron",
  "Sunpeak", "Duskhaven", "Embertide", "Mistveil",
];
const ORIGINS_CLASSES = [
  "Warrior", "Mage", "Ranger", "Rogue", "Paladin",
  "Bard", "Druid", "Necromancer", "Monk", "Shaman",
];
const ORIGINS_PREFIXES = [
  "Ancient", "Crimson", "Frost", "Storm", "Shadow",
  "Solar", "Lunar", "Ember", "Mystic", "Iron",
];
const ORIGINS_NOUNS = [
  "Phoenix", "Wraith", "Sentinel", "Drifter", "Prowler",
  "Knight", "Oracle", "Conjurer", "Stalker", "Champion",
];
const ORIGINS_SUFFIXES = [
  "of Embers", "the Eternal", "of the Pact", "the Bold",
  "of the Veil", "the Lost", "of Twilight", "the Reborn",
];
const ORIGINS_FLAVORS = [
  "Said to appear only under a black moon.",
  "Forged from a single shard of dawnglass.",
  "Speaks in whispers older than language.",
  "Walks where shadows refuse to follow.",
  "Sings the names of forgotten gods.",
  "Trades fortunes for finger bones.",
  "Has never lost a duel — but rarely accepts one.",
  "Sleeps beneath a cairn of broken crowns.",
  "Knew the world when it was warmer.",
  "Carries an heirloom no one remembers gifting.",
];

interface EasterEgg {
  name: string;
  klass: string;
  realm: string;
  flavor: string;
}

const ORIGINS_EASTER_EGGS: EasterEgg[] = [
  { name: "Mike",    klass: "Fisherman",          realm: "The Lone Shore",      flavor: "Knows every lake by the smell of its mornings." },
  { name: "Daniel",  klass: "Foreman",            realm: "Steelworks District", flavor: "Built half the skyline before anyone noticed." },
  { name: "Alfonso", klass: "Pro Gamer",          realm: "The Latency Realm",   flavor: "Hasn't slept since the patch dropped." },
  { name: "Ro",      klass: "Coffee Connoisseur", realm: "Roasters' Quarter",   flavor: "Won't drink anything pulled more than ninety seconds ago." },
  { name: "Eevee",   klass: "Loyal Frenchie",     realm: "The Sunlit Yard",     flavor: "Will trade a nap for a treat — but only the good kind." },
  { name: "Juana",   klass: "Apothecary",         realm: "Hollow Garden",       flavor: "Brews remedies the doctors won't admit work." },
  { name: "Marlo",   klass: "Bicyclist",          realm: "The Long Road",       flavor: "Has summited every climb in the canton. Twice, on a Sunday." },
];

// ============================================================
// Backgrounds (Origins) — frame gradient that fills the card art panel.
// ============================================================

export interface Background {
  name: string;
  from: string;
  to: string;
  tint: string;
}

const ORIGINS_BACKGROUNDS: Background[] = [
  { name: "Royal Navy",   from: "#1e2a4a", to: "#06091c", tint: "#3a4e80" },
  { name: "Arcane",       from: "#2d0f3e", to: "#080318", tint: "#7a3aa0" },
  { name: "Crimson",      from: "#3a1e0e", to: "#0e0805", tint: "#a04e1e" },
  { name: "Verdant",      from: "#0e2a1a", to: "#031208", tint: "#3aa05e" },
  { name: "Deep Teal",    from: "#1a3a3e", to: "#031216", tint: "#3aa0a0" },
  { name: "Rust",         from: "#2e1a0a", to: "#0e0603", tint: "#a06e1e" },
  { name: "Cobalt",       from: "#0a1a2e", to: "#03081a", tint: "#3a6ea0" },
  { name: "Void Violet",  from: "#1a0a1e", to: "#08031a", tint: "#7a3a8a" },
];

// ============================================================
// Rarity tiers — shared across all sets.
// ============================================================

export interface Rarity {
  label: string;
  color: string;
  ringColor: string;
  weight: number;
}

export const RARITIES: Rarity[] = [
  { label: "Common",    color: "#9aa2b5", ringColor: "#5a6376", weight: 60 },
  { label: "Uncommon",  color: "#5bd97a", ringColor: "#1f7a4c", weight: 25 },
  { label: "Rare",      color: "#5b9adf", ringColor: "#1f4a7a", weight: 10 },
  { label: "Epic",      color: "#b46bdc", ringColor: "#5b2a8a", weight:  4 },
  { label: "Legendary", color: "#f59e0b", ringColor: "#7a4a0e", weight:  0.9 },
  { label: "Mythic",    color: "#f5d65a", ringColor: "#7a5a0e", weight:  0.1 },
];

export const RARE_FOIL_CHANCE = 0.5;

export const FOIL_STRENGTH_BY_RARITY: Record<string, number> = {
  Common:    0,
  Uncommon:  0,
  Rare:      0.4,
  Epic:      0.65,
  Legendary: 0.85,
  Mythic:    1.0,
};

// ============================================================
// Card type — unified across sets via setId + optional fields.
// ============================================================

export interface GeneratedCard {
  seed: number;
  seedStr: string;
  setId: SetId;
  // Origins (layered creature):
  sprite?: SpriteIndices;
  customSpriteIdx: number | null;
  // wc26 (soccer player):
  teamIdx?: number;
  pose?: PoseId;
  jerseyNumber?: number;
  // shared:
  palette: Palette;
  realm: string;
  klass: string;
  name: string;
  background: Background;
  power: number;
  speed: number;
  skill: number;
  total: number;
  rarity: Rarity;
  cardNumber: number;
  flavor: string;
  hasFoil: boolean;
  foilStrength: number;
}

// ============================================================
// Helpers
// ============================================================

function pick<T>(rng: () => number, arr: T[]): T {
  return arr[Math.floor(rng() * arr.length)];
}

function pickRarity(rng: () => number): Rarity {
  const roll = rng() * 100;
  let cum = 0;
  for (const r of RARITIES) {
    cum += r.weight;
    if (roll <= cum) return r;
  }
  return RARITIES[0];
}

function rollFoil(rng: () => number, rarity: Rarity) {
  let hasFoil = false;
  if (rarity.label === "Rare") {
    hasFoil = rng() < RARE_FOIL_CHANCE;
  } else if (
    rarity.label === "Epic" ||
    rarity.label === "Legendary" ||
    rarity.label === "Mythic"
  ) {
    hasFoil = true;
  }
  const foilStrength = hasFoil ? (FOIL_STRENGTH_BY_RARITY[rarity.label] ?? 0) : 0;
  return { hasFoil, foilStrength };
}

// ============================================================
// Generate — public entrypoint
// ============================================================

export function generate(seed: number, setId: SetId = "origins"): GeneratedCard {
  return setId === "wc26" ? generateWc26(seed) : generateOrigins(seed);
}

// ============================================================
// Origins generator
// ============================================================

function generateOrigins(seed: number): GeneratedCard {
  const rng = mulberry32(seed);

  const sprite: SpriteIndices = {
    bodyIdx:      Math.floor(rng() * SPRITE_LAYER_COUNTS.bodies),
    eyesIdx:      Math.floor(rng() * SPRITE_LAYER_COUNTS.eyes),
    mouthIdx:     Math.floor(rng() * SPRITE_LAYER_COUNTS.mouths),
    hatIdx:       Math.floor(rng() * SPRITE_LAYER_COUNTS.hats),
    accessoryIdx: Math.floor(rng() * SPRITE_LAYER_COUNTS.accessories),
    paletteIdx:   Math.floor(rng() * PALETTES.length),
  };
  const palette = PALETTES[sprite.paletteIdx];

  let realm = pick(rng, ORIGINS_REALMS);
  let klass = pick(rng, ORIGINS_CLASSES);
  let name = `${pick(rng, ORIGINS_PREFIXES)} ${pick(rng, ORIGINS_NOUNS)} ${pick(rng, ORIGINS_SUFFIXES)}`;
  const background = pick(rng, ORIGINS_BACKGROUNDS);
  let flavor = pick(rng, ORIGINS_FLAVORS);

  const power = 30 + Math.floor(rng() * 70);
  const speed = 30 + Math.floor(rng() * 70);
  const skill = 30 + Math.floor(rng() * 70);

  const rarity = pickRarity(rng);
  const cardNumber = Math.floor(rng() * 9999) + 1;
  const { hasFoil, foilStrength } = rollFoil(rng, rarity);

  let customSpriteIdx: number | null = null;
  if (rarity.label === "Legendary" || rarity.label === "Mythic") {
    customSpriteIdx = Math.floor(rng() * CUSTOM_SPRITES_COUNT);
    const egg = ORIGINS_EASTER_EGGS[customSpriteIdx];
    name = egg.name;
    klass = egg.klass;
    realm = egg.realm;
    flavor = egg.flavor;
  }

  return {
    seed,
    seedStr: seed.toString(36),
    setId: "origins",
    sprite,
    customSpriteIdx,
    palette,
    realm,
    klass,
    name,
    background,
    power,
    speed,
    skill,
    total: power + speed + skill,
    rarity,
    cardNumber,
    flavor,
    hasFoil,
    foilStrength,
  };
}

// ============================================================
// WC26 generator
// ============================================================

function generateWc26(seed: number): GeneratedCard {
  const rng = mulberry32(seed);

  // Team & position come first — they drive the visual + label.
  const teamIdx = Math.floor(rng() * TEAMS.length);
  const team: Team = TEAMS[teamIdx];
  let klass = pick(rng, POSITIONS);
  let name = team.name;
  let realm = team.confederation;
  const background = pick(rng, WC26_BACKGROUNDS);
  let flavor = pick(rng, WC26_FLAVORS);
  const jerseyNumber = 1 + Math.floor(rng() * 23);

  const power = 30 + Math.floor(rng() * 70);
  const speed = 30 + Math.floor(rng() * 70);
  const skill = 30 + Math.floor(rng() * 70);

  const rarity = pickRarity(rng);
  const cardNumber = Math.floor(rng() * 9999) + 1;
  const { hasFoil, foilStrength } = rollFoil(rng, rarity);

  // Legend override on Legendary / Mythic.
  let customSpriteIdx: number | null = null;
  if (rarity.label === "Legendary" || rarity.label === "Mythic") {
    customSpriteIdx = Math.floor(rng() * WC26_LEGENDS.length);
    const legend = WC26_LEGENDS[customSpriteIdx];
    name = `${legend.name} · ${team.code}`;
    klass = legend.klass;
    flavor = legend.flavor;
  }

  const pose = poseForPosition(klass);

  // Palette is informational only on this set (we use team colors directly
  // for the sprite). Just pick something deterministic.
  const palette = PALETTES[Math.floor(rng() * PALETTES.length)];

  return {
    seed,
    seedStr: seed.toString(36),
    setId: "wc26",
    customSpriteIdx,
    teamIdx,
    pose,
    jerseyNumber,
    palette,
    realm,
    klass,
    name,
    background,
    power,
    speed,
    skill,
    total: power + speed + skill,
    rarity,
    cardNumber,
    flavor,
    hasFoil,
    foilStrength,
  };
}

/** Decode a URL-safe seed string. Returns null if invalid. */
export function decodeSeed(s: string | null | undefined): number | null {
  if (!s) return null;
  const n = parseInt(s, 36);
  return Number.isFinite(n) && n > 0 ? n : null;
}

/** A fresh random seed (full 32-bit positive integer). */
export function randomSeed(): number {
  return Math.floor(Math.random() * 0xfffffffe) + 1;
}

/** Get set metadata by id. Falls back to Origins if id is unknown. */
export function getSetMeta(id: SetId | string): SetMeta {
  return SETS.find((s) => s.id === id) ?? SETS[0];
}
