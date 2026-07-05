"use client";

import { useEffect, useState } from "react";
import { DROP } from "@/lib/site";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { diff, days, hours, minutes, seconds };
}

type DropCountdownProps = {
  variant?: "compact" | "hero";
};

export default function DropCountdown({ variant = "compact" }: DropCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(() =>
    getTimeLeft(new Date(DROP.date).getTime()),
  );

  useEffect(() => {
    if (!DROP.enabled) return;

    const target = new Date(DROP.date).getTime();
    const tick = () => setTimeLeft(getTimeLeft(target));
    tick();

    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (!DROP.enabled || timeLeft.diff <= 0) return null;

  const className =
    variant === "hero" ? "drop-countdown drop-countdown--hero" : "drop-countdown";

  return (
    <div className={className} aria-live="polite">
      <span className="drop-countdown-label">{DROP.label}</span>
      <div className="drop-countdown-digits">
        {timeLeft.days > 0 && (
          <span className="drop-countdown-unit">
            <strong>{timeLeft.days}</strong>
            <small>d</small>
          </span>
        )}
        <span className="drop-countdown-unit">
          <strong>{pad(timeLeft.hours)}</strong>
          <small>h</small>
        </span>
        <span className="drop-countdown-sep">:</span>
        <span className="drop-countdown-unit">
          <strong>{pad(timeLeft.minutes)}</strong>
          <small>m</small>
        </span>
        <span className="drop-countdown-sep">:</span>
        <span className="drop-countdown-unit">
          <strong>{pad(timeLeft.seconds)}</strong>
          <small>s</small>
        </span>
      </div>
    </div>
  );
}
