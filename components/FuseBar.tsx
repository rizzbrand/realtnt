"use client";

import { useEffect } from "react";
import DropCountdown from "@/components/DropCountdown";
import { SITE } from "@/lib/site";

const MIN_BURN = 12;
const MAX_BURN = 100;

export default function FuseBar() {
  useEffect(() => {
    const updateFuse = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollHeight > 0 ? Math.min(1, scrollTop / scrollHeight) : 0;
      const burn = MIN_BURN + progress * (MAX_BURN - MIN_BURN);

      document.documentElement.style.setProperty("--fuse-burn", `${burn}%`);
    };

    updateFuse();
    window.addEventListener("scroll", updateFuse, { passive: true });
    window.addEventListener("resize", updateFuse);

    return () => {
      window.removeEventListener("scroll", updateFuse);
      window.removeEventListener("resize", updateFuse);
    };
  }, []);

  return (
    <div className="fuse-bar">
      <span className="fuse-bar-label">{SITE.name}</span>
      <div className="fuse-bar-track">
        <div className="fuse-bar-burn" />
        <span className="fuse-bar-spark">✦</span>
      </div>
      <DropCountdown variant="compact" />
    </div>
  );
}
