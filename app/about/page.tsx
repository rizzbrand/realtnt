import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import NavIcon from "@/components/NavIcon";
import {
  ABOUT_MANIFESTO,
  ABOUT_PILLARS,
  ABOUT_STATS,
  SITE,
  SPOTIFY_ARTIST_URL,
} from "@/lib/site";
import "./about.css";

export const metadata = {
  title: "About — realtnt",
  description: SITE.description,
};

const ABOUT_LINKS = [
  { href: "/music", label: "Ignition", sub: "Stream the charges", icon: "music" as const },
  { href: "/vault", label: "Vault", sub: "Insider exclusives", icon: "vault" as const },
  {
    href: SPOTIFY_ARTIST_URL,
    label: "Spotify",
    sub: "Full profile",
    icon: "music" as const,
    external: true,
  },
];

export default function AboutPage() {
  return (
    <main className="page page--video-bg page--about">
      <div className="page-video-bg" aria-hidden="true">
        <HeroVideo />
        <div className="page-video-overlay page-video-overlay--about" />
      </div>

      <div className="about-shell">
        <header className="about-hero">
          <div className="about-hero-badge">
            <img
              src="/Rockstarrrr.jpeg"
              alt=""
              className="about-hero-logo"
              width={48}
              height={48}
            />
            <p className="about-hero-eyebrow">
              <span className="about-hero-eyebrow-mark" aria-hidden="true" />
              Transmission log
            </p>
          </div>

          <h1 className="about-hero-title">
            Transmitting
            <br />
            from the future.
          </h1>

          <p className="about-hero-desc">{SITE.description}</p>

          <div className="about-stats">
            {ABOUT_STATS.map((stat) => (
              <dl key={stat.label} className="about-stat">
                <dt>{stat.label}</dt>
                <dd>{stat.value}</dd>
              </dl>
            ))}
          </div>
        </header>

        <section className="about-pillars" aria-labelledby="about-pillars-heading">
          <div className="about-section-head">
            <p className="about-section-eyebrow" id="about-pillars-heading">
              Protocol
            </p>
            <h2 className="about-section-title">How the transmission works</h2>
          </div>

          <div className="about-pillars-grid">
            {ABOUT_PILLARS.map((pillar) => (
              <article key={pillar.index} className="about-pillar-card">
                <span className="about-pillar-index">{pillar.index}</span>
                <h3 className="about-pillar-title">{pillar.title}</h3>
                <p className="about-pillar-body">{pillar.body}</p>
                {pillar.href && pillar.cta && (
                  <Link href={pillar.href} className="about-pillar-cta">
                    {pillar.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="about-manifesto" aria-label="Manifesto">
          <p className="about-manifesto-quote">&ldquo;{ABOUT_MANIFESTO}&rdquo;</p>
          <p className="about-manifesto-tag">{SITE.tagline}</p>
        </section>

        <section className="about-links" aria-labelledby="about-links-heading">
          <div className="about-section-head">
            <p className="about-section-eyebrow" id="about-links-heading">
              Continue
            </p>
            <h2 className="about-section-title">Enter the blast radius</h2>
          </div>

          <ul className="about-link-list">
            {ABOUT_LINKS.map((link) => (
              <li key={link.label}>
                {link.external ? (
                  <a
                    href={link.href}
                    className="about-link-card"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AboutLinkContent {...link} />
                  </a>
                ) : (
                  <Link href={link.href} className="about-link-card">
                    <AboutLinkContent {...link} />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function AboutLinkContent({
  label,
  sub,
  icon,
}: {
  label: string;
  sub: string;
  icon: "music" | "vault";
}) {
  return (
    <>
      <span className="about-link-icon" aria-hidden="true">
        <NavIcon name={icon} />
      </span>
      <span className="about-link-copy">
        <span className="about-link-label">{label}</span>
        <span className="about-link-sub">{sub}</span>
      </span>
      <span className="about-link-arrow" aria-hidden="true">
        →
      </span>
    </>
  );
}
