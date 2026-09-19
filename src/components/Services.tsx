import React from "react";

const SERVICES = [
  {
    title: "Buying",
    text: "A tailored acquisition plan built on your goals, budget, and timeline — with exclusive early access to off-market homes.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z" />
      </svg>
    ),
  },
  {
    title: "Selling",
    text: "From strategic pricing and professional staging to a choreographed marketing campaign that maximizes your return.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 17l6-6 4 4 8-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 7h7v7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Property Management",
    text: "Full-service care for your investment — vetting tenants, maintaining the property, and protecting your returns year-round.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-7-5.1-7-11a7 7 0 0114 0c0 5.9-7 11-7 11z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Investment Advisory",
    text: "Data-driven market analysis and long-range planning for builders, investors, and families growing their wealth.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Land & Plots — Nigeria",
    text: "Prime urban plots and family land across Nigeria — Lagos to local communities — with verified titles and full due diligence.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 21V5a1 1 0 011-1h14a1 1 0 011 1v16H4zm3-5h10M7 10h10" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M12 5v11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="section section--cream">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">What we do</p>
          <h2 className="section__title">Every chapter of your journey</h2>
          <p className="section__lead">
            Four disciplines, one standard: rigorous planning applied to every
            decision along the way.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <article key={s.title} className="service">
              <div className="service__icon">{s.icon}</div>
              <h3 className="service__title">{s.title}</h3>
              <p className="service__text">{s.text}</p>
              <a href="#contact" className="service__link">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
