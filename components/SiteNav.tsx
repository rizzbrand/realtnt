"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavIcon from "@/components/NavIcon";
import { NAV_LINKS, SITE } from "@/lib/site";
import { playSpark } from "@/lib/sparkSound";

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={open ? "nav nav--open" : "nav"}>
      <div className="nav-glass">
        <div className="nav-logo">
          <Link
            href="/"
            className="nav-logo-link"
            onClick={closeMenu}
            aria-label="realtnt home"
          >
            <Image
              src="/Rockstarrrr.png"
              alt="realtnt"
              width={64}
              height={64}
              className="nav-logo-img"
              priority
            />
          </Link>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => {
            setOpen((value) => !value);
            playSpark("soft");
          }}
        >
          <span />
          <span />
        </button>

        <button
          type="button"
          className="nav-backdrop"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={closeMenu}
        />

        <div id="site-nav" className="nav-items">
          <div className="nav-menu-header">
            <span className="nav-menu-handle" aria-hidden="true" />
            <p className="nav-menu-eyebrow">Navigate</p>
            <p className="nav-menu-tagline">{SITE.tagline}</p>
          </div>

          <ul className="nav-menu-list">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      isActive ? "nav-link--active" : "",
                      link.highlight ? "nav-link--merch" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => {
                      closeMenu();
                      playSpark("soft");
                    }}
                    title={link.codename}
                  >
                    <span className="nav-link-icon" aria-hidden="true">
                      <NavIcon name={link.icon} />
                    </span>
                    <span className="nav-link-copy">
                      <span className="nav-link-label">{link.label}</span>
                      <span className="nav-link-codename">{link.codename}</span>
                    </span>
                    <span className="nav-link-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
