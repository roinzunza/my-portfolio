/** Recoloring palettes applied to all sprite layers. */
export interface Palette {
  name: string;
  primary: string;   // main body fill
  secondary: string; // highlight / inner detail
  accent: string;    // brightest highlight / cap of detail
  eyes: string;      // glowing eyes / magic accent
  outline: string;   // hard outline / shadow
}

export const PALETTES: Palette[] = [
  { name: "Ember",   primary: "#c44a2e", secondary: "#f5a052", accent: "#ffe1a0", eyes: "#ffea54", outline: "#1a0a0a" },
  { name: "Frost",   primary: "#3a6ea8", secondary: "#7cb4d8", accent: "#d6f0fa", eyes: "#a8e0ff", outline: "#0a1a2e" },
  { name: "Verdant", primary: "#3a8a4e", secondary: "#7cc88a", accent: "#dcf5d2", eyes: "#a8ff6a", outline: "#0a1e0c" },
  { name: "Arcane",  primary: "#7a3aa0", secondary: "#b46bdc", accent: "#e8d4ff", eyes: "#e6a8ff", outline: "#160a2e" },
  { name: "Bone",    primary: "#d4d0c8", secondary: "#a09c94", accent: "#f0ecd8", eyes: "#fff3a0", outline: "#1a1612" },
  { name: "Void",    primary: "#1a1a2e", secondary: "#4a4a6e", accent: "#8a8aae", eyes: "#ff5ada", outline: "#08081a" },
];
