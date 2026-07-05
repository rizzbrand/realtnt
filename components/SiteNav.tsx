"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavIcon from "@/components/NavIcon";
import { NAV_LINKS } from "@/lib/site";
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

  return (
    <nav className={open ? "nav nav--open" : "nav"}>
      <div className="nav-glass">
        <div className="nav-logo">
          <Link
            href="/"
            className="nav-logo-link"
            onClick={() => setOpen(false)}
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

        <div id="site-nav" className="nav-items">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={[
                  isActive ? "nav-link--active" : "",
                  link.highlight ? "nav-link--merch" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setOpen(false)}
                title={link.codename}
              >
                <span className="nav-link-icon" aria-hidden="true">
                  <NavIcon name={link.icon} />
                </span>
                <span className="nav-link-label">{link.label}</span>
              </Link>
            );
          })}
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
      </div>
    </nav>
  );
}
