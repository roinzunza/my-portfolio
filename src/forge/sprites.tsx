import type { Palette } from "./palettes";
import { PlayerSprite, type PoseId } from "./sprites-wc26";
import { TEAMS } from "./sets/wc26";

/**
 * Layered SVG sprite system. Each character is composed of:
 *   <Body>  +  <Eyes>  +  <Mouth>  +  <Hat>  +  <Accessory>
 *
 * All layers use a normalized 200x200 viewBox with the face centered at
 * (100, 100):
 *   - Eyes anchor at y=95 (x=80 left, x=120 right).
 *   - Mouth anchors at y=118.
 *   - Hat sits above y=70.
 *   - Accessory occupies the right side (x=160-190).
 *
 * That way any body + any eyes + any hat slot together without a layout
 * clash. Variation comes from the layer choices and palette recolor.
 */

interface LayerProps {
  p: Palette;
}

// ============================================================
// BODIES (5)
// ============================================================

function BodySlime({ p }: LayerProps) {
  return (
    <g>
      {/* ground shadow */}
      <ellipse cx="100" cy="178" rx="60" ry="6" fill="rgba(0,0,0,0.35)" />
      {/* main blob */}
      <path
        d="M50,135 Q40,80 100,80 Q160,80 150,135 L150,165 Q130,178 100,178 Q70,178 50,165 Z"
        fill={p.primary}
        stroke={p.outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* highlight blob */}
      <path d="M68,90 Q70,82 84,82" stroke={p.accent} strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* belly shade */}
      <path d="M75,155 Q100,168 125,155" stroke={p.secondary} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
    </g>
  );
}

function BodyGhost({ p }: LayerProps) {
  return (
    <g>
      {/* main floating shape */}
      <path
        d="M55,100 Q55,65 100,65 Q145,65 145,100 L145,160 L132,172 L118,160 L105,172 L92,160 L78,172 L65,160 Z"
        fill={p.primary}
        stroke={p.outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* highlight cheek glow */}
      <ellipse cx="78" cy="120" rx="10" ry="6" fill={p.accent} opacity="0.45" />
      <ellipse cx="122" cy="120" rx="10" ry="6" fill={p.accent} opacity="0.45" />
      {/* head highlight */}
      <path d="M68,82 Q72,72 86,72" stroke={p.accent} strokeWidth="4" fill="none" strokeLinecap="round" />
    </g>
  );
}

function BodyRobot({ p }: LayerProps) {
  return (
    <g>
      {/* antenna */}
      <rect x="97" y="40" width="6" height="22" fill={p.outline} />
      <circle cx="100" cy="38" r="5" fill={p.eyes} stroke={p.outline} strokeWidth="2" />
      {/* head plate */}
      <rect x="55" y="62" width="90" height="78" rx="8" fill={p.primary} stroke={p.outline} strokeWidth="3" />
      {/* face screen panel */}
      <rect x="68" y="82" width="64" height="40" rx="4" fill={p.outline} opacity="0.35" />
      {/* neck */}
      <rect x="80" y="140" width="40" height="10" fill={p.secondary} stroke={p.outline} strokeWidth="2" />
      {/* shoulder body */}
      <rect x="48" y="150" width="104" height="28" rx="4" fill={p.secondary} stroke={p.outline} strokeWidth="3" />
      {/* chest light */}
      <circle cx="100" cy="164" r="5" fill={p.eyes} />
    </g>
  );
}

function BodyCat({ p }: LayerProps) {
  return (
    <g>
      {/* ears */}
      <path d="M60,75 L52,42 L82,65 Z" fill={p.primary} stroke={p.outline} strokeWidth="3" strokeLinejoin="round" />
      <path d="M140,75 L148,42 L118,65 Z" fill={p.primary} stroke={p.outline} strokeWidth="3" strokeLinejoin="round" />
      {/* inner ears */}
      <path d="M64,70 L58,52 L74,65 Z" fill={p.secondary} />
      <path d="M136,70 L142,52 L126,65 Z" fill={p.secondary} />
      {/* head */}
      <circle cx="100" cy="100" r="45" fill={p.primary} stroke={p.outline} strokeWidth="3" />
      {/* body small */}
      <ellipse cx="100" cy="160" rx="38" ry="20" fill={p.primary} stroke={p.outline} strokeWidth="3" />
      {/* cheek tufts */}
      <path d="M58,108 L48,110 M62,114 L50,118" stroke={p.outline} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M142,108 L152,110 M138,114 L150,118" stroke={p.outline} strokeWidth="2.5" strokeLinecap="round" />
    </g>
  );
}

function BodyBird({ p }: LayerProps) {
  return (
    <g>
      {/* body egg */}
      <ellipse cx="100" cy="110" rx="42" ry="55" fill={p.primary} stroke={p.outline} strokeWidth="3" />
      {/* tail feathers */}
      <path d="M85,160 Q70,175 60,168 M115,160 Q130,175 140,168 M100,165 Q100,180 100,180"
        stroke={p.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* head feather crest */}
      <path d="M100,55 Q92,42 102,38 Q108,46 100,55" fill={p.accent} stroke={p.outline} strokeWidth="2" strokeLinejoin="round" />
      {/* beak */}
      <path d="M148,108 L165,112 L148,118 Z" fill={p.accent} stroke={p.outline} strokeWidth="2" strokeLinejoin="round" />
      {/* belly highlight */}
      <ellipse cx="100" cy="135" rx="22" ry="28" fill={p.secondary} opacity="0.55" />
    </g>
  );
}

const BODIES = [BodySlime, BodyGhost, BodyRobot, BodyCat, BodyBird];

// ============================================================
// EYES (5)  — anchor: (80, 95) left, (120, 95) right
// ============================================================

function EyesDots({ p }: LayerProps) {
  return (
    <g>
      <circle cx="80" cy="95" r="6" fill={p.outline} />
      <circle cx="120" cy="95" r="6" fill={p.outline} />
      <circle cx="78" cy="93" r="2" fill={p.accent} />
      <circle cx="118" cy="93" r="2" fill={p.accent} />
    </g>
  );
}

function EyesGlow({ p }: LayerProps) {
  return (
    <g>
      <circle cx="80" cy="95" r="9" fill={p.eyes} opacity="0.35" />
      <circle cx="80" cy="95" r="5" fill={p.eyes} />
      <circle cx="120" cy="95" r="9" fill={p.eyes} opacity="0.35" />
      <circle cx="120" cy="95" r="5" fill={p.eyes} />
    </g>
  );
}

function EyesClosed({ p }: LayerProps) {
  return (
    <g stroke={p.outline} strokeWidth="3" fill="none" strokeLinecap="round">
      <path d="M72,95 Q80,101 88,95" />
      <path d="M112,95 Q120,101 128,95" />
    </g>
  );
}

function EyesAngry({ p }: LayerProps) {
  return (
    <g>
      <path d="M71,90 L88,95 L88,100 L75,98 Z" fill={p.outline} />
      <path d="M129,90 L112,95 L112,100 L125,98 Z" fill={p.outline} />
      {/* eye glints */}
      <circle cx="84" cy="96" r="1.5" fill={p.eyes} />
      <circle cx="116" cy="96" r="1.5" fill={p.eyes} />
    </g>
  );
}

function EyesCyclops({ p }: LayerProps) {
  return (
    <g>
      <circle cx="100" cy="95" r="14" fill={p.accent} stroke={p.outline} strokeWidth="3" />
      <circle cx="100" cy="95" r="7" fill={p.outline} />
      <circle cx="103" cy="92" r="2.5" fill={p.eyes} />
    </g>
  );
}

const EYES = [EyesDots, EyesGlow, EyesClosed, EyesAngry, EyesCyclops];

// ============================================================
// MOUTHS (4)  — anchor: (100, 118)
// ============================================================

function MouthSmile({ p }: LayerProps) {
  return (
    <path d="M85,118 Q100,128 115,118" stroke={p.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
  );
}

function MouthOpen({ p }: LayerProps) {
  return (
    <g>
      <ellipse cx="100" cy="122" rx="11" ry="7" fill={p.outline} />
      <ellipse cx="100" cy="120" rx="6" ry="3" fill={p.eyes} opacity="0.6" />
    </g>
  );
}

function MouthFrown({ p }: LayerProps) {
  return (
    <path d="M85,124 Q100,114 115,124" stroke={p.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
  );
}

function MouthFangs({ p }: LayerProps) {
  return (
    <g>
      <path d="M85,118 Q100,128 115,118" stroke={p.outline} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* fangs */}
      <path d="M92,120 L94,128 L96,120 Z" fill={p.accent} stroke={p.outline} strokeWidth="1" />
      <path d="M104,120 L106,128 L108,120 Z" fill={p.accent} stroke={p.outline} strokeWidth="1" />
    </g>
  );
}

const MOUTHS = [MouthSmile, MouthOpen, MouthFrown, MouthFangs];

// ============================================================
// HATS (6, including none)  — sits above y=70
// ============================================================

function HatNone(_: LayerProps) { return null; }

function HatCrown({ p }: LayerProps) {
  return (
    <g>
      {/* zigzag crown */}
      <path
        d="M60,68 L66,42 L76,55 L88,32 L100,48 L112,32 L124,55 L134,42 L140,68 Z"
        fill={p.eyes}
        stroke={p.outline}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* gem */}
      <circle cx="100" cy="55" r="4" fill={p.accent} stroke={p.outline} strokeWidth="1.5" />
    </g>
  );
}

function HatWizard({ p }: LayerProps) {
  return (
    <g>
      {/* cone */}
      <path
        d="M100,18 L65,68 L135,68 Z"
        fill={p.primary}
        stroke={p.outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* band */}
      <rect x="60" y="65" width="80" height="10" fill={p.secondary} stroke={p.outline} strokeWidth="2" />
      {/* star */}
      <path
        d="M100,32 L102,38 L108,38 L103,42 L105,48 L100,44 L95,48 L97,42 L92,38 L98,38 Z"
        fill={p.accent}
      />
    </g>
  );
}

function HatHalo({ p }: LayerProps) {
  return (
    <g>
      <ellipse cx="100" cy="38" rx="48" ry="8" fill="none" stroke={p.eyes} strokeWidth="4" opacity="0.8" />
      <ellipse cx="100" cy="38" rx="42" ry="5" fill="none" stroke={p.accent} strokeWidth="2" opacity="0.9" />
    </g>
  );
}

function HatHorns({ p }: LayerProps) {
  return (
    <g fill={p.accent} stroke={p.outline} strokeWidth="2.5" strokeLinejoin="round">
      <path d="M62,72 Q40,52 48,28 Q56,46 70,68 Z" />
      <path d="M138,72 Q160,52 152,28 Q144,46 130,68 Z" />
    </g>
  );
}

function HatHood({ p }: LayerProps) {
  return (
    <g>
      {/* hood shape */}
      <path
        d="M48,90 Q42,52 100,42 Q158,52 152,90 L150,68 Q120,58 100,58 Q80,58 50,68 Z"
        fill={p.secondary}
        stroke={p.outline}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* cowl fold shadow */}
      <path d="M60,70 Q100,62 140,70" stroke={p.outline} strokeWidth="2" fill="none" opacity="0.4" />
    </g>
  );
}

const HATS = [HatNone, HatCrown, HatWizard, HatHalo, HatHorns, HatHood];

// ============================================================
// ACCESSORIES (4, including none)  — occupies right side x=155-195
// ============================================================

function AccessoryNone(_: LayerProps) { return null; }

function AccessorySword({ p }: LayerProps) {
  return (
    <g>
      {/* blade */}
      <path d="M174,38 L182,42 L182,138 L174,142 Z" fill={p.accent} stroke={p.outline} strokeWidth="2" strokeLinejoin="round" />
      {/* blade fuller */}
      <line x1="178" y1="48" x2="178" y2="130" stroke={p.outline} strokeWidth="1.5" opacity="0.5" />
      {/* cross-guard */}
      <rect x="162" y="138" width="32" height="6" rx="2" fill={p.secondary} stroke={p.outline} strokeWidth="2" />
      {/* grip */}
      <rect x="173" y="144" width="10" height="20" fill={p.outline} />
      {/* pommel */}
      <circle cx="178" cy="168" r="5" fill={p.eyes} stroke={p.outline} strokeWidth="1.5" />
    </g>
  );
}

function AccessoryStaff({ p }: LayerProps) {
  return (
    <g>
      {/* shaft */}
      <rect x="175" y="58" width="6" height="118" rx="2" fill={p.secondary} stroke={p.outline} strokeWidth="1.5" />
      {/* tip wraps */}
      <rect x="173" y="64" width="10" height="3" fill={p.outline} />
      <rect x="173" y="170" width="10" height="3" fill={p.outline} />
      {/* orb glow */}
      <circle cx="178" cy="48" r="14" fill={p.eyes} opacity="0.35" />
      <circle cx="178" cy="48" r="9" fill={p.eyes} stroke={p.outline} strokeWidth="2" />
      <circle cx="174" cy="44" r="2.5" fill={p.accent} />
    </g>
  );
}

function AccessoryWings({ p }: LayerProps) {
  return (
    <g>
      {/* left wing */}
      <path
        d="M50,100 Q5,90 8,140 Q22,128 38,140 Q30,118 50,120 Z"
        fill={p.accent}
        stroke={p.outline}
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity="0.92"
      />
      {/* right wing */}
      <path
        d="M150,100 Q195,90 192,140 Q178,128 162,140 Q170,118 150,120 Z"
        fill={p.accent}
        stroke={p.outline}
        strokeWidth="2.5"
        strokeLinejoin="round"
        opacity="0.92"
      />
      {/* feather lines */}
      <path d="M18,128 L30,124 M22,138 L34,132" stroke={p.outline} strokeWidth="1.5" opacity="0.6" />
      <path d="M182,128 L170,124 M178,138 L166,132" stroke={p.outline} strokeWidth="1.5" opacity="0.6" />
    </g>
  );
}

const ACCESSORIES = [AccessoryNone, AccessorySword, AccessoryStaff, AccessoryWings];

// ============================================================
// CUSTOM SPRITES — hand-drawn easter-egg characters with fixed
// colors. Order MUST match EASTER_EGGS in generator.ts:
//   0: Mike (fisherman) · 1: Daniel (foreman) · 2: Alfonso (gamer)
//   3: Ro (coffee) · 4: Eevee (Frenchie) · 5: Juana (apothecary)
// ============================================================

const OUTLINE = "#1a1612";
const SKIN = "#e6b58a";

function CustomMike() {
  return (
    <g>
      {/* fishing rod */}
      <line x1="172" y1="25" x2="168" y2="180" stroke="#5a3a1e" strokeWidth="3" strokeLinecap="round" />
      <line x1="172" y1="25" x2="160" y2="40" stroke="#5a3a1e" strokeWidth="2" />
      <path d="M158,38 Q140,80 156,140" stroke="#888" strokeWidth="1" fill="none" />
      <circle cx="156" cy="140" r="3" fill="#d04a4a" stroke={OUTLINE} strokeWidth="1" />
      {/* bucket hat */}
      <path d="M60,68 Q60,42 100,42 Q140,42 140,68 Z" fill="#3a6a3e" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <rect x="54" y="64" width="92" height="8" rx="3" fill="#2a4e2e" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="115" cy="55" r="3" fill="#d4a847" />
      {/* head */}
      <circle cx="100" cy="92" r="22" fill={SKIN} stroke={OUTLINE} strokeWidth="3" />
      <circle cx="91" cy="90" r="2.5" fill={OUTLINE} />
      <circle cx="109" cy="90" r="2.5" fill={OUTLINE} />
      {/* beard */}
      <path d="M82,98 Q100,118 118,98 Q118,108 100,114 Q82,108 82,98 Z" fill="#7a5230" stroke={OUTLINE} strokeWidth="2" />
      <path d="M93,100 Q100,104 107,100" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* overalls */}
      <rect x="68" y="118" width="64" height="58" rx="6" fill="#3a5a8a" stroke={OUTLINE} strokeWidth="3" />
      <rect x="76" y="114" width="6" height="14" fill="#2a4470" stroke={OUTLINE} strokeWidth="2" />
      <rect x="118" y="114" width="6" height="14" fill="#2a4470" stroke={OUTLINE} strokeWidth="2" />
      <rect x="86" y="138" width="28" height="22" rx="2" fill="none" stroke="#2a4470" strokeWidth="2" />
      <circle cx="100" cy="148" r="2" fill="#d4a847" />
      <circle cx="170" cy="130" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
    </g>
  );
}

function CustomDaniel() {
  // Banking manager behind his desk: navy suit, red tie, stack of cash,
  // calculator, papers, and a briefcase by his side.
  const SUIT = "#1f2a40";
  const SHIRT = "#f5ecd8";
  const TIE = "#a02830";
  const DESK = "#5a3a1e";
  return (
    <g>
      <ellipse cx="100" cy="186" rx="78" ry="4" fill="rgba(0,0,0,0.3)" />

      {/* desk */}
      <rect x="14" y="158" width="172" height="18" rx="2" fill={DESK} stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="16" y1="174" x2="184" y2="174" stroke="#1f1410" strokeWidth="0.8" opacity="0.45" />

      {/* stack of cash on the right of desk */}
      <rect x="116" y="148" width="38" height="10" rx="1" fill="#2a7a4a" stroke={OUTLINE} strokeWidth="2" />
      <rect x="118" y="150" width="34" height="6" fill="#5bd97a" />
      <rect x="118" y="146" width="38" height="3" fill="#3aa05e" stroke={OUTLINE} strokeWidth="1.5" />
      <circle cx="135" cy="153" r="3" fill="#fcd116" stroke={OUTLINE} strokeWidth="1.2" />
      <text x="135" y="155.5" textAnchor="middle" fontSize="5" fontWeight="900" fill="#1f3a1e" fontFamily="Inter, sans-serif">$</text>

      {/* calculator on the left of desk */}
      <rect x="32" y="148" width="26" height="10" rx="1.5" fill="#1a1a26" stroke={OUTLINE} strokeWidth="2" />
      <rect x="34" y="150" width="22" height="3" fill="#a0d4ff" />
      <text x="50" y="153" textAnchor="end" fontSize="3.5" fontWeight="800" fill="#0a2a4a" fontFamily="Inter, sans-serif">100K</text>
      <rect x="34" y="155" width="3" height="2" fill="#5bd97a" />
      <rect x="38" y="155" width="3" height="2" fill="#5bd97a" />
      <rect x="42" y="155" width="3" height="2" fill="#5bd97a" />
      <rect x="46" y="155" width="3" height="2" fill="#5bd97a" />
      <rect x="50" y="155" width="3" height="2" fill="#e0344b" />

      {/* contract / papers center-front */}
      <rect x="68" y="150" width="46" height="9" fill={SHIRT} stroke={OUTLINE} strokeWidth="1.5" />
      <line x1="70" y1="153" x2="112" y2="153" stroke={OUTLINE} strokeWidth="0.6" />
      <line x1="70" y1="155" x2="100" y2="155" stroke={OUTLINE} strokeWidth="0.6" />
      <line x1="70" y1="157" x2="106" y2="157" stroke={OUTLINE} strokeWidth="0.6" />
      <path d="M88,156 L98,150 L96,156 Z" fill="#a02830" />

      {/* briefcase set down on the right edge of the desk */}
      <rect x="160" y="160" width="22" height="14" rx="2" fill="#1f1410" stroke={OUTLINE} strokeWidth="2.5" />
      <rect x="166" y="155" width="10" height="5" rx="1.5" fill="none" stroke={OUTLINE} strokeWidth="2" />
      <rect x="168" y="165" width="6" height="3" fill="#bba668" stroke={OUTLINE} strokeWidth="1" />

      {/* === Daniel === */}
      {/* suit jacket */}
      <path d="M60,96 L140,96 L136,158 L64,158 Z" fill={SUIT} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      {/* sleeves */}
      <rect x="48" y="98" width="14" height="42" rx="3" fill={SUIT} stroke={OUTLINE} strokeWidth="2.5" />
      <rect x="138" y="98" width="14" height="42" rx="3" fill={SUIT} stroke={OUTLINE} strokeWidth="2.5" />
      {/* lapels */}
      <path d="M80,96 L96,118 L96,150 L78,158 Z" fill={SUIT} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M120,96 L104,118 L104,150 L122,158 Z" fill={SUIT} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* white shirt */}
      <path d="M92,96 L108,96 L108,128 L92,128 Z" fill={SHIRT} stroke={OUTLINE} strokeWidth="2" />
      {/* tie knot */}
      <rect x="95" y="96" width="10" height="6" fill={TIE} stroke={OUTLINE} strokeWidth="2" />
      {/* tie body */}
      <path d="M95,102 L105,102 L107,140 L100,150 L93,140 Z" fill={TIE} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* tie diagonal stripes */}
      <line x1="95" y1="112" x2="105" y2="122" stroke="#6a1418" strokeWidth="1.4" opacity="0.7" />
      <line x1="96" y1="126" x2="106" y2="136" stroke="#6a1418" strokeWidth="1.4" opacity="0.7" />
      {/* pocket square */}
      <path d="M120,118 L132,118 L130,126 L122,126 Z" fill={SHIRT} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round" />
      {/* pocket square fold lines */}
      <line x1="124" y1="120" x2="125" y2="125" stroke={OUTLINE} strokeWidth="0.6" opacity="0.5" />
      <line x1="128" y1="120" x2="127" y2="125" stroke={OUTLINE} strokeWidth="0.6" opacity="0.5" />

      {/* hands resting on desk paperwork */}
      <circle cx="50" cy="142" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <circle cx="152" cy="142" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* head */}
      <circle cx="100" cy="68" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* side-parted hair */}
      <path d="M82,64 Q80,42 100,40 Q120,42 118,64 Q112,52 100,52 Q86,52 82,64 Z" fill="#2a1a12" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M84,52 Q88,46 96,48" stroke="#1a0a05" strokeWidth="1.2" fill="none" opacity="0.7" />
      {/* glasses */}
      <circle cx="91" cy="68" r="7" fill="rgba(255,255,255,0.2)" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="109" cy="68" r="7" fill="rgba(255,255,255,0.2)" stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="98" y1="68" x2="102" y2="68" stroke={OUTLINE} strokeWidth="2" />
      <circle cx="91" cy="68" r="1.5" fill={OUTLINE} />
      <circle cx="109" cy="68" r="1.5" fill={OUTLINE} />
      {/* eyebrows */}
      <path d="M84,60 L92,59 M108,59 L116,60" stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round" />
      {/* approving smile */}
      <path d="M93,80 Q100,84 107,80" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* chin shadow */}
      <path d="M88,84 Q100,90 112,84" stroke={OUTLINE} strokeWidth="1" fill="none" opacity="0.4" />
    </g>
  );
}

function CustomAlfonso() {
  return (
    <g>
      {/* headphones arc */}
      <path d="M62,70 Q100,30 138,70" stroke="#2a2a3e" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M62,70 Q100,30 138,70" stroke="#5b9adf" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="100" cy="92" r="22" fill={SKIN} stroke={OUTLINE} strokeWidth="3" />
      {/* hair tuft */}
      <path d="M80,80 Q88,68 100,72 Q112,68 120,80 Q110,76 100,78 Q90,76 80,80 Z" fill="#2a1812" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* earcups */}
      <ellipse cx="68" cy="92" rx="10" ry="12" fill="#2a2a3e" stroke={OUTLINE} strokeWidth="2.5" />
      <ellipse cx="132" cy="92" rx="10" ry="12" fill="#2a2a3e" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="68" cy="92" r="3" fill="#5b9adf" />
      <circle cx="132" cy="92" r="3" fill="#5b9adf" />
      {/* mic */}
      <path d="M68,100 Q56,116 78,118" stroke="#2a2a3e" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="78" cy="118" r="2.5" fill="#5b9adf" />
      {/* focused eyes */}
      <path d="M86,90 L96,90" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <path d="M104,90 L114,90" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      <circle cx="91" cy="90" r="1.5" fill="#5b9adf" />
      <circle cx="109" cy="90" r="1.5" fill="#5b9adf" />
      <path d="M92,104 Q100,108 110,104" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* hoodie */}
      <path d="M58,118 Q60,108 100,108 Q140,108 142,118 L142,178 L58,178 Z"
        fill="#1a1a2e" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <line x1="92" y1="118" x2="92" y2="138" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <line x1="108" y1="118" x2="108" y2="138" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <circle cx="92" cy="140" r="2" fill="#888" />
      <circle cx="108" cy="140" r="2" fill="#888" />
      <path d="M94,154 L100,148 L106,154 L100,160 Z" fill="#5b9adf" stroke={OUTLINE} strokeWidth="1.5" />
      {/* controller */}
      <ellipse cx="100" cy="178" rx="22" ry="8" fill="#2a2a3e" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="86" cy="178" r="2" fill="#5b9adf" />
      <circle cx="114" cy="178" r="2" fill="#d04a8a" />
    </g>
  );
}

function CustomRo() {
  // Barista at his espresso machine, steaming milk for a pour.
  // Machine on the right, Ro on the left, milk pitcher centered with
  // the steam wand engaged.
  const MACHINE_BODY = "#cfcfd4";    // brushed stainless body
  const MACHINE_DARK = "#3a3a44";    // accents / drip tray
  const APRON  = "#3a2418";          // dark espresso brown
  const SHIRT  = "#f5ecd8";          // cream tee
  const HAIR   = "#1f1410";
  return (
    <g>
      {/* counter top */}
      <rect x="14" y="166" width="172" height="14" rx="2" fill="#6a4a2a" stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="16" y1="170" x2="184" y2="170" stroke="#1f1410" strokeWidth="0.8" opacity="0.4" />
      <ellipse cx="100" cy="184" rx="74" ry="4" fill="rgba(0,0,0,0.35)" />

      {/* === ESPRESSO MACHINE === */}
      {/* main body */}
      <rect x="118" y="74" width="64" height="92" rx="4" fill={MACHINE_BODY} stroke={OUTLINE} strokeWidth="2.5" />
      {/* top hopper */}
      <rect x="124" y="62" width="52" height="14" rx="2" fill={MACHINE_DARK} stroke={OUTLINE} strokeWidth="2" />
      <rect x="128" y="58" width="44" height="6" fill="#6a6a7a" stroke={OUTLINE} strokeWidth="2" />
      {/* brand stripe */}
      <rect x="122" y="80" width="56" height="6" fill={MACHINE_DARK} />
      <text x="150" y="85" textAnchor="middle" fontSize="5" fontWeight="800" fill="#f5d65a" fontFamily="Inter, sans-serif">CAFFEINE</text>
      {/* pressure gauge */}
      <circle cx="135" cy="106" r="11" fill="#f5ede0" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="135" cy="106" r="9" fill="none" stroke={OUTLINE} strokeWidth="0.6" opacity="0.4" />
      <line x1="135" y1="106" x2="142" y2="100" stroke="#d04a4a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="135" cy="106" r="1.5" fill={OUTLINE} />
      {/* tiny tick marks on gauge */}
      <path d="M128,106 L130,106 M140,106 L142,106 M135,99 L135,101 M135,111 L135,113" stroke={OUTLINE} strokeWidth="0.8" />
      {/* shot button + steam knob */}
      <circle cx="158" cy="100" r="4" fill="#d04a4a" stroke={OUTLINE} strokeWidth="2" />
      <circle cx="170" cy="108" r="4" fill="#1f1410" stroke={OUTLINE} strokeWidth="2" />
      <line x1="170" y1="108" x2="174" y2="104" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
      {/* group head */}
      <rect x="138" y="124" width="24" height="14" rx="2" fill={MACHINE_DARK} stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="150" cy="131" r="5" fill="#1f1410" stroke={OUTLINE} strokeWidth="1.5" />
      {/* portafilter handle (wood) */}
      <rect x="160" y="129" width="20" height="6" rx="2" fill="#5a3a1e" stroke={OUTLINE} strokeWidth="2" />
      <rect x="178" y="128" width="4" height="8" rx="1" fill={MACHINE_DARK} stroke={OUTLINE} strokeWidth="1.5" />
      {/* espresso pour into cup */}
      <line x1="148" y1="136" x2="148" y2="148" stroke="#3a1a0e" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="152" y1="136" x2="152" y2="148" stroke="#3a1a0e" strokeWidth="1.5" strokeLinecap="round" />
      {/* drip tray + cup */}
      <rect x="122" y="148" width="56" height="14" rx="2" fill={MACHINE_DARK} stroke={OUTLINE} strokeWidth="2.5" />
      <path d="M142,148 L158,148 L156,162 L144,162 Z" fill="#f5ede0" stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="150" cy="150" rx="7" ry="2" fill="#5a2a14" />

      {/* steam wand swinging left toward Ro's pitcher */}
      <path d="M122,114 L82,128" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
      <path d="M122,114 L82,128" stroke="#aaa" strokeWidth="2" strokeLinecap="round" />
      <circle cx="84" cy="128" r="2.5" fill={MACHINE_DARK} />

      {/* === STEAM === */}
      <path d="M76,108 Q70,98 76,86 Q82,98 76,108 Z" fill="#e8e8ec" opacity="0.7" />
      <path d="M90,104 Q86,92 92,80 Q98,92 90,104 Z" fill="#e8e8ec" opacity="0.7" />
      <path d="M104,100 Q100,90 106,80 Q110,90 104,100 Z" fill="#e8e8ec" opacity="0.55" />
      <path d="M158,76 Q154,66 160,56 Q164,66 158,76 Z" fill="#e8e8ec" opacity="0.5" />

      {/* === RO === */}
      {/* body / apron */}
      <path d="M40,128 L92,128 L98,166 L34,166 Z" fill={APRON} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      {/* apron neck strap */}
      <line x1="56" y1="128" x2="58" y2="100" stroke={APRON} strokeWidth="3" strokeLinecap="round" />
      <line x1="76" y1="128" x2="74" y2="100" stroke={APRON} strokeWidth="3" strokeLinecap="round" />
      {/* shirt collar visible */}
      <path d="M52,128 L66,140 L80,128" fill={SHIRT} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* shirt sleeves visible at sides */}
      <rect x="32" y="116" width="10" height="20" rx="2" fill={SHIRT} stroke={OUTLINE} strokeWidth="2" />
      <rect x="86" y="118" width="10" height="18" rx="2" fill={SHIRT} stroke={OUTLINE} strokeWidth="2" />
      {/* arms (skin) */}
      <ellipse cx="30" cy="138" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="98" cy="136" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      {/* far hand on shot button */}
      <circle cx="98" cy="146" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* milk pitcher in his right hand, steam wand inserted */}
      <path d="M62,116 L86,116 L88,142 L60,142 Z" fill="#dddde2" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M58,114 L62,114 L62,118 L58,118 Z" fill="#dddde2" stroke={OUTLINE} strokeWidth="2" />
      {/* pitcher handle */}
      <path d="M86,118 Q96,118 96,128 Q96,138 86,138" fill="none" stroke={OUTLINE} strokeWidth="3" />
      {/* milk in pitcher */}
      <rect x="64" y="122" width="22" height="12" fill="#fafaf0" />
      <ellipse cx="75" cy="122" rx="11" ry="2" fill="#fafaf0" stroke={OUTLINE} strokeWidth="1" />
      {/* hand holding pitcher */}
      <circle cx="92" cy="130" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* head */}
      <circle cx="56" cy="92" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* slicked-back hair */}
      <path d="M40,84 Q36,58 56,56 Q76,58 72,84 Q68,74 56,74 Q44,74 40,84 Z" fill={HAIR} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* round glasses */}
      <circle cx="49" cy="92" r="7" fill="rgba(255,255,255,0.22)" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="65" cy="92" r="7" fill="rgba(255,255,255,0.22)" stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="56" y1="92" x2="58" y2="92" stroke={OUTLINE} strokeWidth="2" />
      <circle cx="49" cy="92" r="1.5" fill={OUTLINE} />
      <circle cx="65" cy="92" r="1.5" fill={OUTLINE} />
      {/* beard */}
      <path d="M40,102 Q56,116 72,102 Q70,112 56,116 Q42,112 40,102 Z" fill={HAIR} stroke={OUTLINE} strokeWidth="2" />
      <path d="M50,106 Q56,109 62,106" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* focused brow */}
      <path d="M42,84 L52,86 M60,86 L70,84" stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round" />
      {/* ear (subtle) */}
      <ellipse cx="76" cy="94" rx="3" ry="5" fill={SKIN} stroke={OUTLINE} strokeWidth="1.5" />
    </g>
  );
}

function CustomEevee() {
  return (
    <g>
      {/* ground shadow */}
      <ellipse cx="100" cy="182" rx="62" ry="6" fill="rgba(0,0,0,0.3)" />
      {/* hind legs */}
      <ellipse cx="60" cy="172" rx="14" ry="10" fill="#d4a06a" stroke={OUTLINE} strokeWidth="2.5" />
      <ellipse cx="140" cy="172" rx="14" ry="10" fill="#d4a06a" stroke={OUTLINE} strokeWidth="2.5" />
      {/* body */}
      <ellipse cx="100" cy="148" rx="50" ry="36" fill="#d4a06a" stroke={OUTLINE} strokeWidth="3" />
      <ellipse cx="100" cy="162" rx="28" ry="18" fill="#f5ecd8" opacity="0.85" />
      {/* front legs + paws */}
      <ellipse cx="78" cy="172" rx="9" ry="10" fill="#d4a06a" stroke={OUTLINE} strokeWidth="2.5" />
      <ellipse cx="122" cy="172" rx="9" ry="10" fill="#d4a06a" stroke={OUTLINE} strokeWidth="2.5" />
      <ellipse cx="78" cy="178" rx="7" ry="4" fill="#f5ecd8" />
      <ellipse cx="122" cy="178" rx="7" ry="4" fill="#f5ecd8" />
      {/* head */}
      <ellipse cx="100" cy="92" rx="40" ry="34" fill="#d4a06a" stroke={OUTLINE} strokeWidth="3" />
      {/* bat ears (Frenchie signature) */}
      <path d="M70,72 L58,32 L84,60 Z" fill="#d4a06a" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M130,72 L142,32 L116,60 Z" fill="#d4a06a" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* inner ear pink */}
      <path d="M71,68 L62,42 L80,60 Z" fill="#f0a8a0" />
      <path d="M129,68 L138,42 L120,60 Z" fill="#f0a8a0" />
      {/* white blaze on forehead */}
      <path d="M100,62 Q92,80 100,92 Q108,80 100,62 Z" fill="#f5ecd8" />
      {/* big round eyes */}
      <circle cx="84" cy="92" r="8" fill="#f5ecd8" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="84" cy="93" r="5" fill={OUTLINE} />
      <circle cx="85" cy="91" r="1.5" fill="#f5ecd8" />
      <circle cx="116" cy="92" r="8" fill="#f5ecd8" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="116" cy="93" r="5" fill={OUTLINE} />
      <circle cx="117" cy="91" r="1.5" fill="#f5ecd8" />
      {/* snout, nose, tongue */}
      <ellipse cx="100" cy="108" rx="14" ry="9" fill="#f5ecd8" stroke={OUTLINE} strokeWidth="2.5" />
      <ellipse cx="100" cy="104" rx="5" ry="3.5" fill={OUTLINE} />
      <path d="M88,114 Q100,118 112,114" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="100" cy="118" rx="4" ry="3" fill="#e88494" />
      {/* wrinkle */}
      <path d="M85,75 Q100,78 115,75" stroke={OUTLINE} strokeWidth="1.5" fill="none" opacity="0.6" />
    </g>
  );
}

function CustomJuana() {
  // Juana on a Megaformer mid-Lagree set: feet on the carriage,
  // hands gripping the overhead cables. Athletic gear, ponytail,
  // game face.
  const TOP    = "#3a7a4e"; // sports top (green keeps her color identity)
  const PANTS  = "#1a1a26"; // leggings
  const FRAME  = "#2a2a36"; // megaformer chassis
  const GRIP   = "#f9b400"; // handgrips
  return (
    <g>
      {/* shadow under machine */}
      <ellipse cx="100" cy="186" rx="80" ry="5" fill="rgba(0,0,0,0.35)" />

      {/* Megaformer chassis (base rail) */}
      <rect x="22" y="150" width="156" height="14" rx="3" fill={FRAME} stroke={OUTLINE} strokeWidth="2.5" />
      {/* track grooves */}
      <line x1="26" y1="155" x2="174" y2="155" stroke="#0a0a14" strokeWidth="1" opacity="0.6" />
      <line x1="26" y1="160" x2="174" y2="160" stroke="#0a0a14" strokeWidth="1" opacity="0.6" />
      {/* machine legs */}
      <rect x="28" y="164" width="14" height="14" fill="#161620" stroke={OUTLINE} strokeWidth="2" />
      <rect x="158" y="164" width="14" height="14" fill="#161620" stroke={OUTLINE} strokeWidth="2" />
      {/* carriage (moveable platform) */}
      <rect x="68" y="143" width="64" height="11" rx="2" fill="#4a4a5e" stroke={OUTLINE} strokeWidth="2" />
      <circle cx="76" cy="160" r="3" fill="#888" stroke={OUTLINE} strokeWidth="1" />
      <circle cx="124" cy="160" r="3" fill="#888" stroke={OUTLINE} strokeWidth="1" />
      {/* springs on the right end */}
      <path d="M132,151 L140,154 L132,157 L140,160 L132,163" stroke="#888" strokeWidth="2" fill="none" />
      <path d="M140,151 L148,154 L140,157 L148,160 L140,163" stroke="#888" strokeWidth="2" fill="none" />
      <line x1="148" y1="157" x2="174" y2="157" stroke={OUTLINE} strokeWidth="1.5" />

      {/* upright posts (handlebar towers) */}
      <line x1="40" y1="150" x2="40" y2="40" stroke={OUTLINE} strokeWidth="3" />
      <line x1="160" y1="150" x2="160" y2="40" stroke={OUTLINE} strokeWidth="3" />
      {/* overhead crossbar */}
      <line x1="38" y1="40" x2="162" y2="40" stroke={OUTLINE} strokeWidth="3" />
      {/* hanging cables + grips */}
      <line x1="72" y1="40" x2="72" y2="62" stroke="#666" strokeWidth="1.5" />
      <line x1="128" y1="40" x2="128" y2="62" stroke="#666" strokeWidth="1.5" />
      <rect x="68" y="60" width="8" height="14" rx="2" fill={GRIP} stroke={OUTLINE} strokeWidth="1.5" />
      <rect x="124" y="60" width="8" height="14" rx="2" fill={GRIP} stroke={OUTLINE} strokeWidth="1.5" />

      {/* === JUANA in lunge === */}
      {/* back leg planted on rail */}
      <path d="M108,108 L130,142 L130,150 L120,150 L108,128 Z" fill={PANTS} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* front leg bent on carriage */}
      <path d="M92,108 L74,140 L74,150 L84,150 L96,130 Z" fill={PANTS} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* training shoes */}
      <ellipse cx="79" cy="148" rx="9" ry="4" fill="#f5ecd8" stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="125" cy="148" rx="9" ry="4" fill="#f5ecd8" stroke={OUTLINE} strokeWidth="2" />
      {/* leggings stripes */}
      <line x1="84" y1="120" x2="80" y2="140" stroke="#3a3a4e" strokeWidth="2" opacity="0.5" />
      <line x1="116" y1="120" x2="122" y2="140" stroke="#3a3a4e" strokeWidth="2" opacity="0.5" />
      {/* leggings waistband */}
      <rect x="84" y="112" width="32" height="4" fill="#0a0a14" stroke={OUTLINE} strokeWidth="2" />
      {/* exposed waist */}
      <rect x="86" y="106" width="28" height="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      {/* sports top */}
      <path d="M82,86 L118,86 L116,108 L84,108 Z" fill={TOP} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* straps */}
      <line x1="88" y1="86" x2="90" y2="74" stroke={TOP} strokeWidth="3" strokeLinecap="round" />
      <line x1="112" y1="86" x2="110" y2="74" stroke={TOP} strokeWidth="3" strokeLinecap="round" />
      {/* arms reaching up + forward to the cables */}
      <path d="M88,88 L74,64" stroke={SKIN} strokeWidth="9" strokeLinecap="round" />
      <path d="M88,88 L74,64" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M112,88 L126,64" stroke={SKIN} strokeWidth="9" strokeLinecap="round" />
      <path d="M112,88 L126,64" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* hands gripping handles */}
      <circle cx="72" cy="62" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <circle cx="128" cy="62" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* head */}
      <circle cx="100" cy="56" r="18" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* high ponytail back */}
      <ellipse cx="100" cy="44" rx="20" ry="10" fill="#3a1f12" stroke={OUTLINE} strokeWidth="2" />
      <path d="M118,42 Q128,32 130,44 Q130,56 122,56 Q116,48 118,42 Z" fill="#3a1f12" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M130,44 Q140,36 144,52 Q146,62 134,56" fill="#3a1f12" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* focused eyes */}
      <path d="M88,55 L96,54" stroke={OUTLINE} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M104,54 L112,55" stroke={OUTLINE} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="93" cy="58" r="2" fill={OUTLINE} />
      <circle cx="107" cy="58" r="2" fill={OUTLINE} />
      {/* mouth set, breathing through it */}
      <ellipse cx="100" cy="66" rx="3.5" ry="2" fill={OUTLINE} />
      {/* sweat */}
      <path d="M115,52 L117,58 L113,58 Z" fill="#5b9adf" stroke={OUTLINE} strokeWidth="1" strokeLinejoin="round" />
      <path d="M84,50 L86,55 L82,55 Z" fill="#5b9adf" stroke={OUTLINE} strokeWidth="1" strokeLinejoin="round" />
    </g>
  );
}

function CustomMarlo() {
  return (
    <g>
      {/* shadow */}
      <ellipse cx="100" cy="184" rx="74" ry="5" fill="rgba(0,0,0,0.35)" />
      {/* rear wheel */}
      <circle cx="44" cy="158" r="22" fill="none" stroke={OUTLINE} strokeWidth="3" />
      <line x1="22" y1="158" x2="66" y2="158" stroke={OUTLINE} strokeWidth="1" opacity="0.4" />
      <line x1="44" y1="136" x2="44" y2="180" stroke={OUTLINE} strokeWidth="1" opacity="0.4" />
      <circle cx="44" cy="158" r="3" fill={OUTLINE} />
      {/* front wheel */}
      <circle cx="156" cy="158" r="22" fill="none" stroke={OUTLINE} strokeWidth="3" />
      <line x1="134" y1="158" x2="178" y2="158" stroke={OUTLINE} strokeWidth="1" opacity="0.4" />
      <line x1="156" y1="136" x2="156" y2="180" stroke={OUTLINE} strokeWidth="1" opacity="0.4" />
      <circle cx="156" cy="158" r="3" fill={OUTLINE} />
      {/* bike frame (red) — top tube + down tube + seat tube */}
      <line x1="44" y1="158" x2="98" y2="122" stroke="#d04a4a" strokeWidth="4" strokeLinecap="round" />
      <line x1="98" y1="122" x2="156" y2="158" stroke="#d04a4a" strokeWidth="4" strokeLinecap="round" />
      <line x1="44" y1="158" x2="98" y2="158" stroke="#d04a4a" strokeWidth="4" strokeLinecap="round" />
      <line x1="98" y1="122" x2="98" y2="158" stroke="#d04a4a" strokeWidth="4" strokeLinecap="round" />
      {/* handlebar stem */}
      <line x1="156" y1="158" x2="156" y2="114" stroke={OUTLINE} strokeWidth="3" />
      <path d="M144,114 L168,114 M156,114 L164,104" stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" />
      {/* seat */}
      <path d="M92,118 L106,118 L104,124 L94,124 Z" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      {/* legs in spandex (black) */}
      <path d="M86,124 L72,152 L86,156 L100,128 Z" fill="#1a1612" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M104,124 L122,152 L132,148 L116,128 Z" fill="#1a1612" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* cycling shoes (white) clipped to pedals */}
      <ellipse cx="78" cy="155" rx="9" ry="4" fill="#fffaf0" stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="127" cy="150" rx="9" ry="4" fill="#fffaf0" stroke={OUTLINE} strokeWidth="2" />
      {/* torso jersey (yellow) bent forward */}
      <path d="M82,118 L122,118 L132,84 L86,80 Z" fill="#fcd116" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      {/* jersey side stripes */}
      <path d="M86,98 L128,100 M86,108 L130,110" stroke="#d04a4a" strokeWidth="3" />
      {/* sponsor band */}
      <rect x="92" y="87" width="36" height="6" fill="#1a1612" />
      <text x="110" y="92" textAnchor="middle" fontSize="5" fontWeight="800" fill="#fcd116" fontFamily="Inter, sans-serif">VELO</text>
      {/* arms reaching forward to bars */}
      <path d="M124,84 L154,116" stroke={SKIN} strokeWidth="9" strokeLinecap="round" />
      <path d="M124,84 L154,116" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M118,90 L150,118" stroke={SKIN} strokeWidth="8" strokeLinecap="round" />
      <path d="M118,90 L150,118" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* gloved hands on bars */}
      <circle cx="152" cy="118" r="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      <circle cx="158" cy="116" r="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      {/* head */}
      <circle cx="88" cy="60" r="18" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* aero sunglasses */}
      <path d="M72,58 L106,58 L104,66 L74,66 Z" fill={OUTLINE} stroke={OUTLINE} strokeWidth="1.5" strokeLinejoin="round" />
      <line x1="88" y1="60" x2="88" y2="64" stroke={SKIN} strokeWidth="1.5" />
      {/* mouth focused */}
      <path d="M82,72 L96,72" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" />
      {/* helmet */}
      <path d="M70,46 Q70,28 90,26 Q108,28 108,46 L108,56 L70,56 Z" fill="#5b9adf" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M76,38 L76,52 M84,34 L84,52 M92,32 L92,52 M100,34 L100,52" stroke={OUTLINE} strokeWidth="1.5" opacity="0.85" />
      <rect x="68" y="54" width="42" height="4" rx="2" fill="#3a6ea8" stroke={OUTLINE} strokeWidth="1.5" />
      {/* speed lines behind */}
      <path d="M14,148 L26,148 M18,158 L30,158 M14,168 L26,168" stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    </g>
  );
}

function CustomKayla() {
  // Pastry chef with a piping bag and a tray of cupcakes on the counter.
  const APRON_PINK = "#f0b6c8";
  const APRON_TRIM = "#d885a0";
  const COUNTER   = "#6a4a2a";
  const HAT_WHITE = "#f8f6f0";
  return (
    <g>
      <ellipse cx="100" cy="186" rx="70" ry="4" fill="rgba(0,0,0,0.3)" />
      {/* counter */}
      <rect x="14" y="168" width="172" height="14" rx="2" fill={COUNTER} stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="16" y1="172" x2="184" y2="172" stroke="#1f1410" strokeWidth="0.8" opacity="0.4" />
      {/* tray of cupcakes on the right side */}
      <rect x="118" y="156" width="60" height="12" rx="2" fill="#bfb09a" stroke={OUTLINE} strokeWidth="2" />
      {/* 3 cupcakes */}
      {[126, 148, 170].map((cx, i) => (
        <g key={i}>
          <path d={`M${cx - 8},154 L${cx + 8},154 L${cx + 6},164 L${cx - 6},164 Z`} fill="#d4a062" stroke={OUTLINE} strokeWidth="1.5" />
          <path d={`M${cx - 9},152 L${cx + 9},152 L${cx + 9},148 Q${cx},134 ${cx - 9},148 Z`}
            fill={i === 0 ? "#f5b1c4" : i === 1 ? "#f5ede0" : "#a06b4a"}
            stroke={OUTLINE} strokeWidth="1.8" strokeLinejoin="round" />
          {/* cherry / sprinkle */}
          <circle cx={cx} cy={138} r="2" fill="#e0344b" stroke={OUTLINE} strokeWidth="1" />
        </g>
      ))}
      {/* floating sprinkles */}
      <rect x="40" y="118" width="2" height="6" rx="1" fill="#e0344b" transform="rotate(20 41 121)" />
      <rect x="158" y="124" width="2" height="6" rx="1" fill="#3a8aef" transform="rotate(-30 159 127)" />
      <rect x="32" y="142" width="2" height="6" rx="1" fill="#5bd97a" transform="rotate(40 33 145)" />

      {/* Kayla body — apron */}
      <path d="M58,120 L102,120 L106,168 L52,168 Z" fill={APRON_PINK} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      {/* apron bow / straps */}
      <line x1="68" y1="120" x2="70" y2="98" stroke={APRON_PINK} strokeWidth="3" strokeLinecap="round" />
      <line x1="90" y1="120" x2="88" y2="98" stroke={APRON_PINK} strokeWidth="3" strokeLinecap="round" />
      <rect x="74" y="140" width="14" height="6" rx="1" fill={APRON_TRIM} stroke={OUTLINE} strokeWidth="2" />
      {/* shirt collar */}
      <path d="M68,120 L80,134 L92,120" fill="#f5ecd8" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* flour smudge on apron */}
      <ellipse cx="80" cy="154" rx="6" ry="3" fill="#fafaf0" opacity="0.7" />

      {/* arm holding piping bag */}
      <ellipse cx="108" cy="124" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      {/* piping bag */}
      <path d="M118,108 L132,108 L138,128 L130,140 L122,128 Z" fill="#f5ecd8" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M130,140 L132,148 L128,148 Z" fill="#bfb09a" stroke={OUTLINE} strokeWidth="2" />
      {/* piped frosting squiggle */}
      <path d="M130,150 Q126,154 130,158 Q134,162 130,166" stroke={APRON_PINK} strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* hand on piping bag */}
      <circle cx="124" cy="118" r="5" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* far arm down */}
      <ellipse cx="50" cy="130" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* head */}
      <circle cx="78" cy="86" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* hair — wavy with ponytail */}
      <path d="M60,86 Q54,52 78,52 Q102,52 96,86 Q92,70 78,72 Q64,70 60,86 Z" fill="#8a5a3a" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M96,80 Q108,82 110,92 Q104,90 96,86" fill="#8a5a3a" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* chef's hat */}
      <path d="M62,52 Q56,40 62,32 Q66,42 70,38 Q74,28 78,38 Q82,28 86,38 Q92,32 94,40 Q98,52 92,52 Z"
        fill={HAT_WHITE} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="60" y="50" width="36" height="6" fill={HAT_WHITE} stroke={OUTLINE} strokeWidth="2.5" />
      {/* eyes happy */}
      <path d="M70,86 Q72,82 74,86" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M82,86 Q84,82 86,86" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* blush */}
      <circle cx="68" cy="94" r="2.5" fill="#e08a8a" opacity="0.6" />
      <circle cx="88" cy="94" r="2.5" fill="#e08a8a" opacity="0.6" />
      {/* smile */}
      <path d="M72,96 Q78,102 84,96" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* flour smudge on cheek */}
      <ellipse cx="64" cy="92" rx="3" ry="1.5" fill="#fafaf0" opacity="0.85" />
    </g>
  );
}

function CustomMiranda() {
  // Sourdough maker holding a scored boule, with a starter jar bubbling beside her.
  const APRON  = "#7a5a3a";
  const SHIRT  = "#f5ecd8";
  const BREAD  = "#c89060";
  const BREAD_CRUST = "#8a5230";
  const COUNTER = "#6a4a2a";
  return (
    <g>
      <ellipse cx="100" cy="186" rx="74" ry="4" fill="rgba(0,0,0,0.3)" />
      {/* counter */}
      <rect x="14" y="168" width="172" height="14" rx="2" fill={COUNTER} stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="16" y1="172" x2="184" y2="172" stroke="#1f1410" strokeWidth="0.8" opacity="0.4" />
      {/* flour dust on counter */}
      <ellipse cx="100" cy="172" rx="44" ry="2" fill="#fafaf0" opacity="0.7" />
      <ellipse cx="142" cy="173" rx="14" ry="1.5" fill="#fafaf0" opacity="0.6" />

      {/* sourdough starter jar on the right */}
      <rect x="148" y="132" width="22" height="32" rx="2" fill="#dde0e6" stroke={OUTLINE} strokeWidth="2.5" opacity="0.85" />
      {/* jar lid (rubber band marking the level) */}
      <rect x="146" y="126" width="26" height="8" rx="2" fill="#7a4a2a" stroke={OUTLINE} strokeWidth="2" />
      <rect x="146" y="146" width="26" height="2" fill="#e0344b" />
      {/* starter contents */}
      <rect x="150" y="148" width="18" height="14" fill="#dcc89a" />
      {/* bubbles */}
      <circle cx="155" cy="151" r="1.5" fill="rgba(255,255,255,0.7)" />
      <circle cx="162" cy="154" r="1.2" fill="rgba(255,255,255,0.7)" />
      <circle cx="158" cy="158" r="2" fill="rgba(255,255,255,0.7)" />
      <circle cx="164" cy="160" r="1" fill="rgba(255,255,255,0.7)" />
      <line x1="148" y1="146" x2="170" y2="146" stroke={OUTLINE} strokeWidth="0.8" opacity="0.4" />

      {/* wooden board on counter */}
      <ellipse cx="78" cy="170" rx="36" ry="6" fill="#9a6e3e" stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="46" y1="170" x2="110" y2="170" stroke={OUTLINE} strokeWidth="0.8" opacity="0.4" />

      {/* Miranda body — apron */}
      <path d="M56,118 L102,118 L106,168 L50,168 Z" fill={APRON} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <line x1="64" y1="118" x2="66" y2="96" stroke={APRON} strokeWidth="3" strokeLinecap="round" />
      <line x1="92" y1="118" x2="90" y2="96" stroke={APRON} strokeWidth="3" strokeLinecap="round" />
      {/* apron pocket */}
      <rect x="62" y="138" width="30" height="14" rx="2" fill="none" stroke={OUTLINE} strokeWidth="2" opacity="0.55" />
      {/* shirt collar */}
      <path d="M66,118 L80,132 L94,118" fill={SHIRT} stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      {/* flour smudges */}
      <ellipse cx="76" cy="150" rx="6" ry="2" fill="#fafaf0" opacity="0.7" />
      <ellipse cx="92" cy="158" rx="4" ry="1.5" fill="#fafaf0" opacity="0.55" />

      {/* arms holding boule */}
      <ellipse cx="46" cy="128" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="110" cy="128" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* boule — round bread held in hands */}
      <ellipse cx="78" cy="146" rx="30" ry="20" fill={BREAD} stroke={OUTLINE} strokeWidth="3" />
      {/* crust shading */}
      <path d="M52,146 Q55,128 78,128 Q101,128 104,146" stroke={BREAD_CRUST} strokeWidth="3" fill="none" opacity="0.7" />
      {/* scored top */}
      <path d="M60,138 Q78,128 96,138" stroke={BREAD_CRUST} strokeWidth="2" fill="none" />
      <path d="M64,142 Q78,134 92,142" stroke={BREAD_CRUST} strokeWidth="2" fill="none" />
      <path d="M68,146 Q78,140 88,146" stroke={BREAD_CRUST} strokeWidth="2" fill="none" />
      {/* flour dust on top */}
      <circle cx="74" cy="132" r="1.5" fill="#fafaf0" opacity="0.7" />
      <circle cx="82" cy="130" r="1.5" fill="#fafaf0" opacity="0.7" />
      {/* hands gripping the boule */}
      <circle cx="50" cy="146" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <circle cx="106" cy="146" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

      {/* head */}
      <circle cx="78" cy="86" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* hair (low bun) */}
      <path d="M60,86 Q56,56 78,52 Q100,56 96,86 Q92,72 78,74 Q64,72 60,86 Z" fill="#3a2418" stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* bun behind */}
      <circle cx="96" cy="80" r="9" fill="#3a2418" stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="92" y1="76" x2="94" y2="84" stroke="#5a3a2a" strokeWidth="1" opacity="0.5" />
      {/* eyes */}
      <circle cx="72" cy="86" r="2" fill={OUTLINE} />
      <circle cx="84" cy="86" r="2" fill={OUTLINE} />
      {/* gentle smile */}
      <path d="M72,96 Q78,100 84,96" stroke={OUTLINE} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* eyebrows soft */}
      <path d="M68,80 L75,80 M81,80 L88,80" stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round" />
      {/* flour smudge on cheek */}
      <ellipse cx="66" cy="92" rx="3" ry="1.5" fill="#fafaf0" opacity="0.7" />
    </g>
  );
}

function CustomJames() {
  // Steel foreman in welder's gear with a torch, sparks flying off a beam.
  const APRON   = "#5a4030";    // leather apron
  const HELMET  = "#3a3a44";    // welder's helmet
  const VISOR   = "#1a1a26";
  const MOLTEN  = "#f7651a";    // hot steel orange
  const HOT     = "#ffc24a";
  const ANVIL   = "#3a3a44";
  return (
    <g>
      <ellipse cx="100" cy="186" rx="80" ry="4" fill="rgba(0,0,0,0.3)" />
      {/* heat glow on the ground */}
      <ellipse cx="140" cy="170" rx="40" ry="8" fill={MOLTEN} opacity="0.25" />

      {/* anvil + workbench on the right */}
      <rect x="118" y="150" width="60" height="18" rx="3" fill={ANVIL} stroke={OUTLINE} strokeWidth="2.5" />
      <rect x="128" y="168" width="12" height="14" fill="#1a1a26" stroke={OUTLINE} strokeWidth="2" />
      <rect x="158" y="168" width="12" height="14" fill="#1a1a26" stroke={OUTLINE} strokeWidth="2" />
      {/* hot steel beam on workbench */}
      <rect x="126" y="142" width="44" height="10" rx="2" fill={MOLTEN} stroke={OUTLINE} strokeWidth="2.5" />
      <rect x="128" y="143" width="40" height="4" fill={HOT} opacity="0.85" />
      {/* heat haze lines above the beam */}
      <path d="M130,138 Q132,134 130,130 M142,138 Q144,134 142,130 M156,138 Q158,134 156,130 M166,138 Q168,134 166,130"
        stroke={MOLTEN} strokeWidth="1.5" fill="none" opacity="0.6" />

      {/* James body — leather apron */}
      <path d="M40,108 L98,108 L104,168 L34,168 Z" fill={APRON} stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      {/* apron seams */}
      <line x1="44" y1="118" x2="100" y2="118" stroke={OUTLINE} strokeWidth="1.5" opacity="0.5" />
      <line x1="48" y1="148" x2="96" y2="148" stroke={OUTLINE} strokeWidth="1.5" opacity="0.5" />
      {/* apron strap */}
      <line x1="58" y1="108" x2="60" y2="86" stroke={APRON} strokeWidth="3" strokeLinecap="round" />
      <line x1="82" y1="108" x2="80" y2="86" stroke={APRON} strokeWidth="3" strokeLinecap="round" />
      {/* belt buckle */}
      <rect x="64" y="138" width="12" height="6" fill="#bba668" stroke={OUTLINE} strokeWidth="1.5" />
      {/* thick work boots */}
      <rect x="46" y="166" width="22" height="16" rx="3" fill="#1f1410" stroke={OUTLINE} strokeWidth="2.5" />
      <rect x="74" y="166" width="22" height="16" rx="3" fill="#1f1410" stroke={OUTLINE} strokeWidth="2.5" />

      {/* far arm holding welding torch */}
      <ellipse cx="106" cy="114" rx="5" ry="11" fill={APRON} stroke={OUTLINE} strokeWidth="2" />
      {/* gloved hand */}
      <circle cx="108" cy="126" r="6" fill={APRON} stroke={OUTLINE} strokeWidth="2" />
      {/* welding torch handle */}
      <rect x="110" y="124" width="20" height="6" rx="1.5" fill="#1a1a26" stroke={OUTLINE} strokeWidth="2" />
      <rect x="130" y="125" width="14" height="4" fill="#6a6a7a" stroke={OUTLINE} strokeWidth="1.5" />
      {/* torch flame / arc tip */}
      <path d="M142,123 L156,118 L154,128 L142,131 Z" fill={HOT} stroke={OUTLINE} strokeWidth="1.5" />
      <circle cx="146" cy="126" r="3" fill="#ffffff" />
      {/* sparks flying */}
      {[[156, 110], [160, 130], [148, 100], [164, 122], [152, 138]].map(([x, y], i) => (
        <path key={i} d={`M${x},${y} L${x + 4},${y + 4} M${x + 2},${y + 1} L${x - 1},${y + 5}`}
          stroke={HOT} strokeWidth="1.5" strokeLinecap="round" opacity="0.85" />
      ))}

      {/* near arm down */}
      <ellipse cx="34" cy="130" rx="5" ry="11" fill={APRON} stroke={OUTLINE} strokeWidth="2" />
      <circle cx="34" cy="142" r="6" fill={APRON} stroke={OUTLINE} strokeWidth="2" />

      {/* head */}
      <circle cx="70" cy="76" r="18" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* welder helmet (flipped up on top) */}
      <path d="M50,68 Q50,42 70,38 Q90,42 90,68 L90,52 Q70,46 50,52 Z"
        fill={HELMET} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="56" y="44" width="28" height="10" rx="2" fill={VISOR} stroke={OUTLINE} strokeWidth="2" />
      {/* helmet logo */}
      <text x="70" y="51.5" textAnchor="middle" fontSize="6" fontWeight="800" fill="#f7651a" fontFamily="Inter, sans-serif">FORGE</text>
      {/* short stubble / beard */}
      <path d="M56,82 Q70,98 84,82 Q82,92 70,94 Q58,92 56,82 Z" fill="#1f1410" stroke={OUTLINE} strokeWidth="2" />
      <path d="M62,86 Q70,90 78,86" stroke={OUTLINE} strokeWidth="1.2" fill="none" opacity="0.4" />
      {/* eyes squinting at the work */}
      <path d="M58,76 L66,76" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M74,76 L82,76" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" />
      {/* eyebrows */}
      <path d="M58,72 L66,71 M74,71 L82,72" stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round" />
      {/* hot reflection in eyes / on face from torch glow */}
      <ellipse cx="84" cy="84" rx="5" ry="3" fill={MOLTEN} opacity="0.18" />
    </g>
  );
}

const CUSTOM_SPRITES = [
  CustomMike, CustomDaniel, CustomAlfonso,
  CustomRo, CustomEevee, CustomJuana, CustomMarlo,
  CustomKayla, CustomMiranda, CustomJames,
];

export const CUSTOM_SPRITES_COUNT = CUSTOM_SPRITES.length;

// ============================================================
// Composer
// ============================================================

export interface SpriteIndices {
  bodyIdx: number;
  eyesIdx: number;
  mouthIdx: number;
  hatIdx: number;
  accessoryIdx: number;
  paletteIdx: number;
}

export const SPRITE_LAYER_COUNTS = {
  bodies: BODIES.length,
  eyes: EYES.length,
  mouths: MOUTHS.length,
  hats: HATS.length,
  accessories: ACCESSORIES.length,
};

interface SpriteProps {
  setId?: "origins" | "wc26";
  indices?: SpriteIndices;
  palette?: Palette;
  customIdx?: number | null;
  // wc26-only:
  teamIdx?: number;
  pose?: PoseId;
  jerseyNumber?: number;
  size?: number;
}

/** Render the right sprite system for the card's set. */
export function Sprite({ setId = "origins", indices, palette, customIdx, teamIdx, pose, jerseyNumber, size = 220 }: SpriteProps) {
  // wc26 — soccer player in team colors
  if (setId === "wc26") {
    const team = TEAMS[(teamIdx ?? 0) % TEAMS.length];
    return (
      <PlayerSprite
        pose={pose ?? "standing"}
        colors={{ primary: team.primary, secondary: team.secondary, accent: team.accent }}
        jerseyNumber={jerseyNumber}
        size={size}
      />
    );
  }

  // origins — easter egg sprite override
  if (customIdx !== null && customIdx !== undefined) {
    const Custom = CUSTOM_SPRITES[customIdx % CUSTOM_SPRITES.length];
    return (
      <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <Custom />
      </svg>
    );
  }

  // origins — procedural layered creature
  if (!indices || !palette) {
    return null;
  }

  const Body = BODIES[indices.bodyIdx % BODIES.length];
  const Eyes = EYES[indices.eyesIdx % EYES.length];
  const Mouth = MOUTHS[indices.mouthIdx % MOUTHS.length];
  const Hat = HATS[indices.hatIdx % HATS.length];
  const Accessory = ACCESSORIES[indices.accessoryIdx % ACCESSORIES.length];

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <Body p={palette} />
      <Eyes p={palette} />
      <Mouth p={palette} />
      <Hat p={palette} />
      <Accessory p={palette} />
    </svg>
  );
}
