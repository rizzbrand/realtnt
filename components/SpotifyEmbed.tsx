const SPOTIFY_ARTIST_EMBED =
  "https://open.spotify.com/embed/artist/52gRpNZ055weWM8VzrOA6c?utm_source=generator";

export default function SpotifyEmbed() {
  return (
    <iframe
      data-testid="embed-iframe"
      className="spotify-iframe"
      src={SPOTIFY_ARTIST_EMBED}
      width="100%"
      height={352}
      frameBorder={0}
      allowFullScreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="Realtnt on Spotify"
    />
  );
}
