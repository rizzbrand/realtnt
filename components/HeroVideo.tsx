"use client";

import { useEffect, useRef } from "react";

const MOBILE_VIDEO = "/realtnt.mp4";
const DESKTOP_VIDEO = "/realtnt2.mp4";
const DESKTOP_BREAKPOINT = "(min-width: 1001px)";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia(DESKTOP_BREAKPOINT);
    let activeSrc = "";

    const syncVideo = () => {
      const nextSrc = mediaQuery.matches ? DESKTOP_VIDEO : MOBILE_VIDEO;

      if (activeSrc !== nextSrc) {
        activeSrc = nextSrc;
        video.src = nextSrc;
        video.load();
      }

      video.play().catch(() => {});
    };

    syncVideo();
    mediaQuery.addEventListener("change", syncVideo);

    return () => mediaQuery.removeEventListener("change", syncVideo);
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      src={MOBILE_VIDEO}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-label="Realtnt hero video"
    />
  );
}
