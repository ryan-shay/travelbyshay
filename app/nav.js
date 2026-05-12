"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className="site-nav">
        {/* Desktop: text links | Mobile: hamburger */}
        <div className="nav-left">
          <div className="nav-links-desktop">
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/blog" className="nav-link">Blog</Link>
          </div>
          <button
            className="nav-menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`hamburger ${open ? "open" : ""}`}>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <Link href="/" className="nav-brand" onClick={close}>SHAY</Link>

        <div className="nav-actions">
          <Link href="/contact" className="nav-contact-btn" onClick={close}>Contact</Link>
        </div>
      </nav>

      {/* Mobile dropdown only */}
      <div className={`nav-drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="nav-drawer-inner">
          <Link href="/about" className="nav-drawer-link" onClick={close}>About</Link>
          <Link href="/blog" className="nav-drawer-link" onClick={close}>Blog</Link>
          <Link href="/contact" className="nav-drawer-link" onClick={close}>Contact</Link>
        </div>
      </div>

      {open && <div className="nav-backdrop" onClick={close} aria-hidden="true" />}
    </>
  );
}
