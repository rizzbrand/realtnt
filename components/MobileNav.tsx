"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#music", label: "Music" },
  { href: "#visuals", label: "Visuals" },
  { href: "#merch", label: "Merch", highlight: true },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={open ? "nav nav--open" : "nav"}>
      <div className="nav-logo">
        <a href="#" onClick={() => setOpen(false)}>
          realtnt 🥀
        </a>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div id="site-nav" className="nav-items">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.highlight ? "nav-link--merch" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
