import React from "react";
import Logo from "./Logo";

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="cta__emblem">
          <Logo size={104} />
        </div>
        <h2 className="cta__title">
          Ready to see your future through the lens of planning?
        </h2>
        <p className="cta__text">
          Book a complimentary consultation and receive a personalized plan for
          your next move — no strings attached.
        </p>
        <div className="cta__actions">
          <a href="#contact" className="btn btn--gold">
            Schedule a consultation
          </a>
          <a href="#listings" className="btn btn--ghost">
            Browse listings
          </a>
        </div>
      </div>
    </section>
  );
}
