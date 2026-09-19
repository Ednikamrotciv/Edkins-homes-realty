import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
      <div className="nav__inner container">
        <a href="#top" className="nav__brand" aria-label="Edkins Homes Realty home">
          <Logo size={60} />
        </a>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`} aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn--gold nav__cta" onClick={() => setOpen(false)}>
            Book Consultation
          </a>
        </nav>

        <button
          className={`nav__toggle ${open ? "nav__toggle--open" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
