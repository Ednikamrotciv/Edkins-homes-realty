import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Discover",
    text: "We listen first — your goals, your lifestyle, your numbers. A deep discovery call shapes everything that follows.",
  },
  {
    num: "02",
    title: "Plan",
    text: "A written, milestone-by-milestone plan: search criteria, budget scenarios, timeline, and contingencies. No guesswork.",
  },
  {
    num: "03",
    title: "Execute",
    text: "Tours, offers, negotiations, inspections, and financing — executed with precision, with you informed at every step.",
  },
  {
    num: "04",
    title: "Handover",
    text: "Keys, documents, and a full transition checklist. Our planning carries through to the day you move in — and beyond.",
  },
];

export default function Process() {
  return (
    <section className="section section--gold-tint">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Our process</p>
          <h2 className="section__title">The lens of planning, in four steps</h2>
          <p className="section__lead">
            A proven framework we've refined over 25 years — so nothing is left
            to chance.
          </p>
        </div>

        <div className="steps">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.num}>
              <div className="step">
                <span className="step__num">{s.num}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__text">{s.text}</p>
              </div>
              {i < STEPS.length - 1 && <div className="step__arrow" aria-hidden="true" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
