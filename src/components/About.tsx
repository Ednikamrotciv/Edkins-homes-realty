import React from "react";
import { IMAGES } from "../data";

const PILLARS = [
  {
    title: "Market intelligence",
    text: "Every neighborhood, every comp, every trend — analyzed before a single showing.",
  },
  {
    title: "Architectural insight",
    text: "We see a home the way a builder does, so nothing is overlooked in the details.",
  },
  {
    title: "A plan for every step",
    text: "Timelines, budgets, contingencies, and closings — mapped out before we begin.",
  },
];

export default function About() {
  return (
    <section id="about" className="section section--navy">
      <div className="container about">
        <div className="about__media">
          <div className="about__frame" />
          <img src={IMAGES.about} alt="Edkins Homes agents with happy clients" loading="lazy" />
          <div className="about__card">
            <span className="about__card-num">25+</span>
            <span className="about__card-label">Years of planned, deliberate excellence</span>
          </div>
        </div>

        <div className="about__body">
          <p className="section__eyebrow">About Edkins Homes Realty</p>
          <h2 className="section__title section__title--light">
            Transforming the world through the lens of planning
          </h2>
          <p className="about__text">
            Edkins Homes Realty was founded on a simple conviction: the best
            real estate decisions are not made — they are <em>planned</em>. We
            combine deep market intelligence, architectural understanding, and a
            disciplined, step-by-step methodology so that whether you're buying
            your first home or building a portfolio, you move with confidence.
          </p>
          <p className="about__text">
            Our motto isn't a slogan. It's the way we run every transaction — a
            lens of planning that turns the chaos of real estate into a clear,
            predictable path forward.
          </p>
          <p className="about__text">
            That lens now reaches across the Atlantic. We buy and sell{" "}
            <em>land in Nigeria</em> — from prime urban plots in Lagos and Abuja
            to family land in local communities — every parcel verified, titled,
            and inspected before it ever reaches you.
          </p>

          <ul className="about__pillars">
            {PILLARS.map((p) => (
              <li key={p.title}>
                <span className="about__pillar-title">{p.title}</span>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>

          <a href="#team" className="btn btn--gold">
            Meet the team
          </a>
        </div>
      </div>
    </section>
  );
}
