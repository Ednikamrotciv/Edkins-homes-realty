import React from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "../data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo size={84} />
          <p className="footer__motto">
            Transforming the world through the lens of planning.
          </p>
          <div className="footer__social" aria-label="Social media">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13 22v-8h3l.5-3.5H13V8.5c0-1 .3-1.7 1.8-1.7H17V3.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.4H7V14h3v8h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.5 8.5v12H3v-12h3.5zM6.8 4.8a2 2 0 11-4 0 2 2 0 014 0zM21 14v6.5h-3.5V14.5c0-1.6-.7-2.6-2.1-2.6-1.2 0-1.9.8-2.2 1.6-.1.3-.1.6-.1 1v4H9.6v-12H14v1.7c.5-.8 1.5-2 3.7-2 2.6 0 4.3 1.6 4.3 4.8z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Footer">
          <h4>Explore</h4>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <nav className="footer__col" aria-label="Footer services">
          <h4>Services</h4>
          <a href="#services">Buying</a>
          <a href="#services">Selling</a>
          <a href="#services">Property Management</a>
          <a href="#services">Investment Advisory</a>
          <a href="#land">Land &amp; Plots — Nigeria</a>
        </nav>

        <div className="footer__col">
          <h4>Stay in the loop</h4>
          <p className="footer__newsletter-text">
            Monthly market briefs and off-market previews, straight to your inbox.
          </p>
          <form
            className="footer__newsletter"
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.querySelector("input");
              if (input) {
                input.value = "";
                input.placeholder = "Subscribed — welcome aboard!";
              }
            }}
          >
            <input type="email" required placeholder="Your email address" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>© {year} Edkins Homes Realty. All rights reserved.</span>
        <span>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
        </span>
      </div>
    </footer>
  );
}
