"use client";

import Link from "next/link";
import { playSpark } from "@/lib/sparkSound";
import { SPOTIFY_ARTIST_URL } from "@/lib/site";

export default function HeroLinks() {
  return (
    <div className="hero-links">
      <Link href="/music" onClick={() => playSpark("soft")}>
        Ignition
      </Link>
      <Link href="/vault" onClick={() => playSpark("soft")}>
        Vault
      </Link>
      <a
        href={SPOTIFY_ARTIST_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => playSpark("soft")}
      >
        Spotify
      </a>
    </div>
  );
}
