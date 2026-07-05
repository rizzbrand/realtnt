import Link from "next/link";
import DropCountdown from "@/components/DropCountdown";
import HeroLinks from "@/components/HeroLinks";
import HeroReveal from "@/components/HeroReveal";

export default function Home() {
  return (
    <>
      <HeroReveal />

      <div className="preloader-overlay">
        <div className="preloader" />
      </div>

      <section className="hero">
        <div className="hero-overlay" aria-hidden="true" />

        <div className="intro-img">
          <img src="/img-1.jpg" alt="Realtnt performance still" />
        </div>
        <div className="intro-img">
          <img src="/img-2.jpg" alt="Realtnt studio portrait" />
        </div>
        <div className="intro-img hero-img">
          <img src="/img-3.jpg" alt="Realtnt hero portrait" />
        </div>
        <div className="intro-img">
          <img src="/img-4.jpg" alt="Realtnt live show" />
        </div>
        <div className="intro-img">
          <img src="/img-5.jpg" alt="Realtnt creative session" />
        </div>

        <div className="hero-content">
          <div className="hero-header">
            <p className="hero-eyebrow">🧨 The Fuse Is Lit</p>
            <h1>
              Every song, video, and show is another step toward the next
              explosion.
            </h1>
          </div>

          <div className="hero-footer">
            <div className="hero-cta">
              <p>Enter the transmission</p>
              <HeroLinks />
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

      <section className="countdown-section">
        <div className="section-inner">
          <p className="section-eyebrow">⏳ The fuse is burning</p>
          <h2 className="section-title">Detonation incoming.</h2>
          <DropCountdown variant="hero" />
          <p className="section-desc">
            The slow burn continues. Pre-save when the signal goes live — every
            second brings the next explosion closer.
          </p>
        </div>
      </section>

      <section id="music" className="music-section">
        <div className="section-inner">
          <p className="section-eyebrow">💥 Ignition</p>
          <h2 className="section-title">The fuse is burning.</h2>
          <p className="section-desc">
            Stream the latest charges or enter the vault for what hasn&apos;t
            detonated yet.
          </p>
          <Link href="/music" className="page-btn">
            Launch charges →
          </Link>
        </div>
      </section>
    </>
  );
}
