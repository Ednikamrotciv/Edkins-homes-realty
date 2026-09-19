import React, { useState } from "react";

const initial = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update =
    (k: keyof typeof initial) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section section--navy">
      <div className="container contact">
        <div className="contact__info">
          <p className="section__eyebrow">Get in touch</p>
          <h2 className="section__title section__title--light">
            Let's start planning together
          </h2>
          <p className="contact__text">
            Tell us a little about what you're looking for. A dedicated advisor
            will respond within one business day with the first steps of your
            plan.
          </p>

          <ul className="contact__list">
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 21s-7-5.1-7-11a7 7 0 0114 0c0 5.9-7 11-7 11z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span>
                <strong>Headquarters</strong>
                <br />
                4200 Meridian Avenue, Suite 900
                <br />
                Beverly Hills, CA 90210
              </span>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 4h4l2 5-2.5 1.5a12 12 0 005 5L14 13l5 2v4a2 2 0 01-2 2A16 16 0 012 6a2 2 0 012-2z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <strong>Call us</strong>
                <br />
                <a href="tel:+2348145250356">08145250356</a>
              </span>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm1.5 2L12 12l6.5-5H5.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <strong>Email</strong>
                <br />
                <a href="mailto:hello@edkinshomes.com">hello@edkinshomes.com</a>
              </span>
            </li>
            <li>
              <span className="contact__icon">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M12 2a7 7 0 017 7c0 5-7 13-7 13S5 14 5 9a7 7 0 017-7zm0 9.5A2.5 2.5 0 1012 6a2.5 2.5 0 000 5.5z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span>
                <strong>Office hours</strong>
                <br />
                Mon – Sat · 9:00am – 6:00pm
              </span>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-mark">✓</span>
              <h3>Thank you, {form.name || "friend"}!</h3>
              <p>
                Your message has been received. A member of our team will be in
                touch within one business day to begin your plan.
              </p>
              <button
                className="btn btn--gold"
                onClick={() => {
                  setForm(initial);
                  setSent(false);
                }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={onSubmit}>
              <div className="contact__row">
                <label>
                  <span>Full name</span>
                  <input
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Jane Smith"
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="jane@email.com"
                  />
                </label>
              </div>
              <div className="contact__row">
                <label>
                  <span>Phone</span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="(555) 000-0000"
                  />
                </label>
                <label>
                  <span>I'm interested in</span>
                  <select defaultValue="Buying a home">
                    <option>Buying a home</option>
                    <option>Selling a home</option>
                    <option>Renting</option>
                    <option>Investment advisory</option>
                    <option>Property management</option>
                    <option>Buying land / plot in Nigeria</option>
                  </select>
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us about the home you're dreaming of…"
                />
              </label>
              <button type="submit" className="btn btn--gold btn--block">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
