import React from "react";
import { TEAM } from "../data";

export default function Team() {
  return (
    <section id="team" className="section section--cream">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Our people</p>
          <h2 className="section__title">The planners behind the plan</h2>
          <p className="section__lead">
            A team of brokers, analysts, and advisors who treat your move as
            their own.
          </p>
        </div>

        <div className="team-grid">
          {TEAM.map((m) => (
            <article key={m.name} className="member">
              <div className="member__avatar">{m.initials}</div>
              <h3 className="member__name">{m.name}</h3>
              <p className="member__title">{m.title}</p>
              <div className="member__contact">
                <a href={`mailto:${m.email}`}>{m.email}</a>
                <a href={`tel:${m.phone.replace(/[^+\d]/g, "")}`}>{m.phone}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
