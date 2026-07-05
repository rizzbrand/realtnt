import Link from "next/link";
import MusicPlatforms from "@/components/MusicPlatforms";
import PageHeader from "@/components/PageHeader";
import SpotifyEmbed from "@/components/SpotifyEmbed";
import { MUSIC_PLATFORMS, SPOTIFY_ARTIST_URL } from "@/lib/site";

export const metadata = {
  title: "Music — realtnt | Ignition",
  description: "Stream RealTNT on Spotify, Apple Music, YouTube, and more.",
};

export default function MusicPage() {
  return (
    <main className="page">
      <div className="page-inner">
        <PageHeader
          emoji="💥"
          eyebrow="Ignition"
          title="Launch charges."
          description="Not new singles — detonations. Stream the arsenal on every platform."
        />

        <MusicPlatforms platforms={MUSIC_PLATFORMS} />

        <section className="content-block">
          <h2 className="content-heading">Listen now</h2>
          <div className="spotify-embed">
            <SpotifyEmbed />
          </div>
          <a
            href={SPOTIFY_ARTIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="section-link"
          >
            Open full profile on Spotify →
          </a>
        </section>

        <div className="page-actions">
          <Link href="/vault" className="page-btn page-btn--ghost">
            🔒 Vault — Exclusives
          </Link>
        </div>
      </div>
    </main>
  );
}
