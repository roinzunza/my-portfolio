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
  return (
    <g>
      {/* hammer */}
      <rect x="158" y="60" width="6" height="60" fill="#7a5230" stroke={OUTLINE} strokeWidth="2" />
      <rect x="150" y="55" width="22" height="14" rx="2" fill="#888" stroke={OUTLINE} strokeWidth="2.5" />
      <rect x="170" y="58" width="4" height="8" fill="#aaa" />
      {/* hard hat */}
      <path d="M60,68 Q60,40 100,38 Q140,40 140,68 Z" fill="#f5b820" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <path d="M82,46 Q100,42 118,46" stroke={OUTLINE} strokeWidth="2.5" fill="none" />
      <rect x="52" y="66" width="96" height="6" rx="2" fill="#d49810" stroke={OUTLINE} strokeWidth="2.5" />
      {/* head */}
      <circle cx="100" cy="92" r="22" fill={SKIN} stroke={OUTLINE} strokeWidth="3" />
      <circle cx="91" cy="90" r="2.5" fill={OUTLINE} />
      <circle cx="109" cy="90" r="2.5" fill={OUTLINE} />
      {/* mustache */}
      <path d="M86,104 Q92,108 100,106 Q108,108 114,104 Q108,110 100,110 Q92,110 86,104 Z"
        fill="#3a2418" stroke={OUTLINE} strokeWidth="1.5" />
      {/* body shirt */}
      <rect x="68" y="118" width="64" height="62" rx="6" fill="#2a3a5a" stroke={OUTLINE} strokeWidth="3" />
      {/* hi-vis vest panels */}
      <path d="M70,120 L92,120 L92,178 L70,178 Z" fill="#f06a1e" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <path d="M130,120 L108,120 L108,178 L130,178 Z" fill="#f06a1e" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <rect x="68" y="138" width="64" height="3" fill="#e8e8e8" opacity="0.8" />
      <rect x="68" y="156" width="64" height="3" fill="#e8e8e8" opacity="0.8" />
      <circle cx="160" cy="80" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
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
  return (
    <g>
      {/* coffee cup */}
      <path d="M40,108 L40,138 Q40,148 50,148 L66,148 Q76,148 76,138 L76,108 Z"
        fill="#f5ede0" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <path d="M44,114 L72,114 L70,124 L46,124 Z" fill="#4a2818" />
      <path d="M76,116 Q88,116 88,128 Q88,140 76,140" fill="none" stroke={OUTLINE} strokeWidth="3" />
      {/* steam */}
      <path d="M50,98 Q46,90 52,82 Q56,90 50,98 Z" fill="#e0e0e0" opacity="0.7" />
      <path d="M62,98 Q58,88 64,78 Q68,88 62,98 Z" fill="#e0e0e0" opacity="0.7" />
      {/* hair */}
      <path d="M76,80 Q72,52 100,52 Q128,52 124,80 Q120,72 100,72 Q80,72 76,80 Z"
        fill="#1f1410" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <circle cx="100" cy="92" r="22" fill={SKIN} stroke={OUTLINE} strokeWidth="3" />
      {/* round glasses */}
      <circle cx="91" cy="91" r="7" fill="rgba(255,255,255,0.18)" stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="109" cy="91" r="7" fill="rgba(255,255,255,0.18)" stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="98" y1="91" x2="102" y2="91" stroke={OUTLINE} strokeWidth="2" />
      <circle cx="91" cy="91" r="1.5" fill={OUTLINE} />
      <circle cx="109" cy="91" r="1.5" fill={OUTLINE} />
      {/* beard */}
      <path d="M82,100 Q100,116 118,100 Q116,112 100,116 Q84,112 82,100 Z" fill="#3a2418" stroke={OUTLINE} strokeWidth="2" />
      <path d="M93,104 Q100,108 107,104" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* apron */}
      <path d="M76,118 L124,118 L132,178 L68,178 Z" fill="#7a4a2a" stroke={OUTLINE} strokeWidth="3" strokeLinejoin="round" />
      <line x1="80" y1="115" x2="78" y2="92" stroke="#7a4a2a" strokeWidth="3" strokeLinecap="round" />
      <line x1="120" y1="115" x2="122" y2="92" stroke="#7a4a2a" strokeWidth="3" strokeLinecap="round" />
      <path d="M88,118 L100,128 L112,118" stroke={OUTLINE} strokeWidth="2.5" fill="none" />
      <circle cx="62" cy="142" r="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
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

const CUSTOM_SPRITES = [
  CustomMike, CustomDaniel, CustomAlfonso,
  CustomRo, CustomEevee, CustomJuana, CustomMarlo,
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
