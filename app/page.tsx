import HeroReveal from "@/components/HeroReveal";
import HeroVideo from "@/components/HeroVideo";
import MobileNav from "@/components/MobileNav";
import PreloaderBrand from "@/components/PreloaderBrand";
import SpotifyEmbed from "@/components/SpotifyEmbed";

const SPOTIFY_ARTIST_URL =
  "https://open.spotify.com/artist/52gRpNZ055weWM8VzrOA6c";

export default function Home() {
  return (
    <>
      <HeroReveal />

      <div className="preloader-overlay">
        <div className="preloader" />
        <PreloaderBrand />
      </div>

      <MobileNav />

      <section className="hero">
        <div className="hero-overlay" aria-hidden="true" />

        <div className="intro-img">
          <img src="/img-1.jpg" alt="Realtnt performance still" />
        </div>
        <div className="intro-img">
          <img src="/img-2.jpg" alt="Realtnt studio portrait" />
        </div>
        <div className="intro-img hero-img">
          <HeroVideo />
        </div>
        <div className="intro-img">
          <img src="/img-4.jpg" alt="Realtnt live show" />
        </div>
        <div className="intro-img">
          <img src="/img-5.jpg" alt="Realtnt creative session" />
        </div>

        <div className="hero-content">
          <div className="hero-header">
            <p className="hero-eyebrow">Singer · Songwriter · Artist</p>
            <h1>
              Sound shaped in intimacy, carried with intention — every note a
              confession, every silence part of the song.
            </h1>
          </div>

          <div className="hero-footer">
            <div className="hero-cta">
              <p>Listen Now</p>
              <div className="hero-links">
                <a
                  href={SPOTIFY_ARTIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Spotify
                </a>
                <a href="#">Apple Music</a>
                <a href="#">YouTube</a>
              </div>
            </div>

            <div className="hero-scroll">
              <span>Scroll</span>
              <div className="scroll-line" />
            </div>
            <div className="hero-scroll-mobile" aria-hidden="true">
              <div className="scroll-line-h" />
              <span>Scroll</span>
            </div>
          </div>
        </div>
      </section>

      <section id="music" className="music-section">
        <div className="section-inner">
          <p className="section-eyebrow">Music</p>
          <h2 className="section-title">Stream on Spotify</h2>
          <p className="section-desc">
            Listen to Realtnt&apos;s latest releases, singles, and discography.
          </p>
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
        </div>
      </section>
    </>
  );
}
