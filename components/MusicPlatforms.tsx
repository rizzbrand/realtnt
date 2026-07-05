import type { MusicPlatform } from "@/lib/site";

type MusicPlatformsProps = {
  platforms: MusicPlatform[];
};

export default function MusicPlatforms({ platforms }: MusicPlatformsProps) {
  return (
    <section className="music-platforms">
      <h2 className="content-heading">Stream everywhere</h2>
      <ul className="platform-list">
        {platforms.map((platform) => (
          <li key={platform.id}>
            <a
              href={platform.href}
              className="platform-card"
              target={platform.href.startsWith("#") ? undefined : "_blank"}
              rel={
                platform.href.startsWith("#")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={`Stream on ${platform.name}`}
            >
              <span className="platform-logo-wrap">
                <img
                  src={platform.logo}
                  alt=""
                  className="platform-logo"
                  width={44}
                  height={44}
                  loading="lazy"
                  decoding="async"
                />
              </span>
              <span className="platform-copy">
                <span className="platform-name">{platform.name}</span>
                <span className="platform-tag">Stream now</span>
              </span>
              <span className="platform-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
