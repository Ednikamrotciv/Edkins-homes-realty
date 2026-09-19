import React, { useEffect, useState } from "react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  const t = TESTIMONIALS[index];

  return (
    <section className="section section--navy testimonials">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Client stories</p>
          <h2 className="section__title section__title--light">
            Trusted by families and investors alike
          </h2>
        </div>

        <div className="testimonial" key={index}>
          <span className="testimonial__mark" aria-hidden="true">
            “
          </span>
          <p className="testimonial__quote">{t.quote}</p>
          <div className="testimonial__who">
            <span className="testimonial__avatar">{t.initials}</span>
            <span>
              <strong>{t.name}</strong>
              <em>{t.role}</em>
            </span>
          </div>
        </div>

        <div className="testimonial__dots" role="tablist" aria-label="Testimonials">
          {TESTIMONIALS.map((item, i) => (
            <button
              key={item.name}
              role="tab"
              aria-selected={i === index}
              className={i === index ? "dot dot--active" : "dot"}
              onClick={() => setIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
