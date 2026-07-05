export const SITE = {
  name: "realtnt",
  tagline: "The Fuse Is Lit.",
  description:
    "RealTNT — transmitting from a world where sound, culture and future collide.",
};

/** Update this when your pre-save / drop goes live */
export const DROP = {
  enabled: true,
  date: "2026-08-01T17:00:00.000Z",
  label: "Next detonation",
};

export const EASTER_EGG = {
  clicksRequired: 5,
  storageKey: "realtnt-vault-unlocked",
};

export const VAULT_SECRETS = {
  snippetTitle: "Unreleased transmission",
  snippetDescription:
    "A fragment from the vault — not yet detonated. Full charge incoming.",
  rewardCode: "FUSE-LIT-20",
  rewardLabel: "20% off first merch drop",
};

export type NavIconName =
  | "home"
  | "music"
  | "world"
  | "vault"
  | "live"
  | "about"
  | "merch";

export type NavLink = {
  href: string;
  label: string;
  codename: string;
  icon: NavIconName;
  highlight?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home", codename: "Fuse Lit", icon: "home" },
  { href: "/music", label: "Music", codename: "Ignition", icon: "music" },
  { href: "/world", label: "World", codename: "Shockwave", icon: "world" },
  { href: "/vault", label: "Vault", codename: "Exclusives", icon: "vault" },
  { href: "/live", label: "Live", codename: "Detonation", icon: "live" },
  { href: "/about", label: "About", codename: "Transmission", icon: "about" },
  {
    href: "/merch",
    label: "Merch",
    codename: "Arsenal",
    icon: "merch",
    highlight: true,
  },
];

export type MusicPlatform = {
  id: string;
  name: string;
  logo: string;
  href: string;
};

export const MUSIC_PLATFORMS: MusicPlatform[] = [
  {
    id: "spotify",
    name: "Spotify",
    logo: "/spotify.png",
    href: "https://open.spotify.com/artist/52gRpNZ055weWM8VzrOA6c",
  },
  {
    id: "apple-music",
    name: "Apple Music",
    logo: "/apple-music.png",
    href: "#",
  },
  {
    id: "youtube",
    name: "YouTube",
    logo: "/youtube.png",
    href: "#",
  },
];

export const SPOTIFY_ARTIST_URL =
  "https://open.spotify.com/artist/52gRpNZ055weWM8VzrOA6c";

export type AboutPillar = {
  index: string;
  title: string;
  body: string;
  href?: string;
  cta?: string;
};

export const ABOUT_PILLARS: AboutPillar[] = [
  {
    index: "01",
    title: "The signal",
    body: "This isn't a musician's website from today. It's the headquarters of an artist from twenty years in the future — chrome, culture, and controlled chaos wired into every transmission.",
  },
  {
    index: "02",
    title: "The fuse is lit",
    body: `Every visitor enters while the fuse is burning. Every song, video, show, and announcement is another step toward the next explosion. Not "welcome to my website." Not "stream my music." Just one message: ${SITE.tagline}`,
  },
  {
    index: "03",
    title: "Hidden vault",
    body: "Insiders get more — unreleased snippets, behind-the-scenes footage, early merch drops, and fan rewards. The vault is where fans stop feeling like spectators and start feeling like they're inside the blast radius.",
    href: "/vault",
    cta: "Enter the vault",
  },
];

export const ABOUT_STATS = [
  { label: "Origin", value: "Future" },
  { label: "Transmission", value: "Active" },
  { label: "Status", value: "Fuse lit" },
] as const;

export const ABOUT_MANIFESTO =
  "A futuristic chrome-powered digital world — not a portfolio. A transmission.";
