/**
 * Soccer player sprites for the 26 World Cup card set. One generic
 * humanoid silhouette in 3 poses, recolored per team's jersey/shorts/socks
 * palette. Same 200x200 viewBox as the Origins sprites so the card art
 * panel can render either set interchangeably.
 */

const OUTLINE = "#1a1612";
const SKIN = "#e6b58a";

export interface PlayerColors {
  primary: string;    // jersey
  secondary: string;  // shorts
  accent: string;     // socks / trim
}

interface PoseProps extends PlayerColors {
  jerseyNumber?: number;
}

// === Pose 0: standing / dribbling ===
function PoseStanding({ primary, secondary, accent, jerseyNumber = 9 }: PoseProps) {
  return (
    <g>
      <ellipse cx="100" cy="184" rx="42" ry="5" fill="rgba(0,0,0,0.35)" />
      {/* boots */}
      <ellipse cx="86" cy="174" rx="12" ry="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="114" cy="174" rx="12" ry="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      {/* socks */}
      <rect x="80" y="152" width="14" height="22" fill={accent} stroke={OUTLINE} strokeWidth="2" />
      <rect x="106" y="152" width="14" height="22" fill={accent} stroke={OUTLINE} strokeWidth="2" />
      {/* legs */}
      <rect x="83" y="132" width="8" height="22" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <rect x="109" y="132" width="8" height="22" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      {/* shorts */}
      <path d="M74,118 L126,118 L122,138 L78,138 Z" fill={secondary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="78" y1="120" x2="122" y2="120" stroke={OUTLINE} strokeWidth="1" opacity="0.4" />
      {/* jersey */}
      <path d="M66,82 L134,82 L130,122 L70,122 Z" fill={primary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* sleeves */}
      <rect x="56" y="86" width="14" height="22" rx="2" fill={primary} stroke={OUTLINE} strokeWidth="2" />
      <rect x="130" y="86" width="14" height="22" rx="2" fill={primary} stroke={OUTLINE} strokeWidth="2" />
      {/* collar */}
      <path d="M92,82 L100,90 L108,82" stroke={OUTLINE} strokeWidth="2" fill="none" />
      {/* arms */}
      <ellipse cx="53" cy="116" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="147" cy="116" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      {/* jersey number */}
      <text
        x="100" y="110" textAnchor="middle"
        fill={accent} fontSize="18" fontWeight="900"
        fontFamily="Inter, sans-serif" stroke={OUTLINE} strokeWidth="0.8"
      >
        {jerseyNumber}
      </text>
      {/* head */}
      <circle cx="100" cy="60" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      <path d="M82,56 Q88,40 100,44 Q112,40 118,56 Q110,50 100,52 Q90,50 82,56 Z" fill="#1f1410" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="93" cy="60" r="2" fill={OUTLINE} />
      <circle cx="107" cy="60" r="2" fill={OUTLINE} />
      <path d="M94,68 Q100,71 106,68" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* ball at right foot */}
      <circle cx="138" cy="172" r="10" fill="#ffffff" stroke={OUTLINE} strokeWidth="2" />
      <path d="M138,164 L144,168 L142,176 L134,176 L132,168 Z" fill={OUTLINE} opacity="0.55" />
    </g>
  );
}

// === Pose 1: kicking (Striker / Winger) ===
function PoseKicking({ primary, secondary, accent, jerseyNumber = 10 }: PoseProps) {
  return (
    <g>
      <ellipse cx="100" cy="184" rx="46" ry="5" fill="rgba(0,0,0,0.35)" />
      {/* planted boot (left) */}
      <ellipse cx="78" cy="174" rx="12" ry="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      {/* planted sock + leg */}
      <rect x="72" y="148" width="14" height="26" fill={accent} stroke={OUTLINE} strokeWidth="2" />
      <rect x="76" y="128" width="8" height="22" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      {/* kicking leg (right, extended forward) */}
      <path d="M108,128 L150,150 L162,158 L168,166 L160,170 L150,166 L132,150 L112,142 Z"
        fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <rect x="152" y="156" width="14" height="10" fill={accent} stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="166" cy="166" rx="10" ry="5" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      {/* shorts (twisted) */}
      <path d="M74,118 L126,118 L122,140 L78,140 Z" fill={secondary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* jersey */}
      <path d="M66,82 L134,82 L130,122 L70,122 Z" fill={primary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* sleeves (slightly extended) */}
      <rect x="54" y="90" width="14" height="22" rx="2" fill={primary} stroke={OUTLINE} strokeWidth="2" />
      <rect x="132" y="86" width="14" height="22" rx="2" fill={primary} stroke={OUTLINE} strokeWidth="2" />
      <path d="M92,82 L100,90 L108,82" stroke={OUTLINE} strokeWidth="2" fill="none" />
      <ellipse cx="50" cy="118" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="148" cy="115" rx="5" ry="10" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <text
        x="100" y="110" textAnchor="middle"
        fill={accent} fontSize="18" fontWeight="900"
        fontFamily="Inter, sans-serif" stroke={OUTLINE} strokeWidth="0.8"
      >
        {jerseyNumber}
      </text>
      {/* head (slight tilt) */}
      <circle cx="100" cy="60" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      <path d="M82,56 Q88,40 100,44 Q112,40 118,56 Q110,50 100,52 Q90,50 82,56 Z" fill="#1f1410" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M91,62 L96,62 M104,62 L109,62" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M94,68 Q100,72 106,68" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* ball just leaving foot — speed lines */}
      <circle cx="180" cy="148" r="9" fill="#ffffff" stroke={OUTLINE} strokeWidth="2" />
      <path d="M180,140 L186,144 L184,152 L176,152 L174,144 Z" fill={OUTLINE} opacity="0.55" />
      <path d="M158,160 L172,154 M152,154 L168,148 M156,168 L168,164"
        stroke={OUTLINE} strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </g>
  );
}

// === Pose 2: Goalkeeper (diving save) ===
function PoseKeeper({ primary, secondary, accent, jerseyNumber = 1 }: PoseProps) {
  // GK kit usually contrasts the rest of the team; here we lean on
  // the primary color but the gloves are a fluorescent accent.
  return (
    <g>
      <ellipse cx="100" cy="186" rx="55" ry="5" fill="rgba(0,0,0,0.35)" />
      {/* diving body — horizontal */}
      {/* far leg trailing */}
      <rect x="46" y="148" width="36" height="14" rx="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      <rect x="40" y="148" width="12" height="14" fill={accent} stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="40" cy="155" rx="8" ry="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      {/* near leg */}
      <rect x="78" y="148" width="36" height="14" rx="6" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* shorts */}
      <path d="M108,140 L154,144 L150,168 L106,160 Z" fill={secondary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* jersey horizontal */}
      <path d="M108,98 L172,108 L168,148 L106,138 Z" fill={primary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* trailing sleeve */}
      <ellipse cx="174" cy="125" rx="12" ry="8" fill={primary} stroke={OUTLINE} strokeWidth="2" />
      {/* head + ball: head is on the LEFT, arms outstretched toward right (the ball) */}
      <circle cx="80" cy="118" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      <path d="M62,116 Q66,98 80,102 Q94,98 98,116 Q88,108 80,110 Q72,108 62,116 Z" fill="#1f1410" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M70,118 L76,118 M84,118 L90,118" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M76,128 Q80,124 84,128" stroke={OUTLINE} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* leading arm (toward ball) */}
      <path d="M62,118 Q40,108 22,112 L18,124 Q34,128 60,128 Z" fill={primary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* GK glove */}
      <ellipse cx="18" cy="120" rx="10" ry="9" fill="#f9e74c" stroke={OUTLINE} strokeWidth="2.5" />
      <line x1="12" y1="122" x2="22" y2="122" stroke={OUTLINE} strokeWidth="1.5" />
      {/* ball */}
      <circle cx="8" cy="132" r="9" fill="#ffffff" stroke={OUTLINE} strokeWidth="2" />
      <path d="M8,124 L14,128 L12,136 L4,136 L2,128 Z" fill={OUTLINE} opacity="0.6" />
      {/* jersey number on horizontal back */}
      <text
        x="135" y="128" textAnchor="middle"
        fill={accent} fontSize="14" fontWeight="900"
        fontFamily="Inter, sans-serif" stroke={OUTLINE} strokeWidth="0.6"
        transform="rotate(8 135 128)"
      >
        {jerseyNumber}
      </text>
    </g>
  );
}

// === Pose 3: Celebrating (arms raised) ===
function PoseCelebrate({ primary, secondary, accent, jerseyNumber = 7 }: PoseProps) {
  return (
    <g>
      <ellipse cx="100" cy="184" rx="42" ry="5" fill="rgba(0,0,0,0.35)" />
      <ellipse cx="86" cy="174" rx="12" ry="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      <ellipse cx="114" cy="174" rx="12" ry="6" fill="#1a1612" stroke={OUTLINE} strokeWidth="2" />
      <rect x="80" y="152" width="14" height="22" fill={accent} stroke={OUTLINE} strokeWidth="2" />
      <rect x="106" y="152" width="14" height="22" fill={accent} stroke={OUTLINE} strokeWidth="2" />
      <rect x="83" y="132" width="8" height="22" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <rect x="109" y="132" width="8" height="22" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
      <path d="M74,118 L126,118 L122,138 L78,138 Z" fill={secondary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M66,82 L134,82 L130,122 L70,122 Z" fill={primary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* arms raised */}
      <path d="M68,84 L48,40 L42,28 L48,24 L56,38 L78,82 Z" fill={primary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M132,84 L152,40 L158,28 L152,24 L144,38 L122,82 Z" fill={primary} stroke={OUTLINE} strokeWidth="2.5" strokeLinejoin="round" />
      {/* fists */}
      <circle cx="44" cy="20" r="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      <circle cx="156" cy="20" r="7" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      {/* number */}
      <text
        x="100" y="110" textAnchor="middle"
        fill={accent} fontSize="18" fontWeight="900"
        fontFamily="Inter, sans-serif" stroke={OUTLINE} strokeWidth="0.8"
      >
        {jerseyNumber}
      </text>
      {/* head shouting */}
      <circle cx="100" cy="60" r="20" fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      <path d="M82,56 Q88,40 100,44 Q112,40 118,56 Q110,50 100,52 Q90,50 82,56 Z" fill="#1f1410" stroke={OUTLINE} strokeWidth="2" strokeLinejoin="round" />
      <path d="M88,58 L94,58 M106,58 L112,58" stroke={OUTLINE} strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="100" cy="70" rx="6" ry="5" fill={OUTLINE} />
      {/* sparkle */}
      <path d="M40,60 L42,54 L44,60 L42,66 Z M156,80 L158,74 L160,80 L158,86 Z"
        fill="#fff3a0" opacity="0.9" />
    </g>
  );
}

export type PoseId = "standing" | "kicking" | "keeper" | "celebrate";

const POSES = {
  standing: PoseStanding,
  kicking: PoseKicking,
  keeper: PoseKeeper,
  celebrate: PoseCelebrate,
} as const;

interface PlayerSpriteProps {
  pose: PoseId;
  colors: PlayerColors;
  jerseyNumber?: number;
  size?: number;
}

/** Render a soccer player SVG in the requested pose with team colors. */
export function PlayerSprite({ pose, colors, jerseyNumber, size = 220 }: PlayerSpriteProps) {
  const Pose = POSES[pose];
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <Pose {...colors} jerseyNumber={jerseyNumber} />
    </svg>
  );
}
