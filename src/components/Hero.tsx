import React, { useState } from "react";
import { IMAGES } from "../data";

export default function Hero() {
  const [type, setType] = useState("Buy");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById("listings");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="top" className="hero">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
        aria-hidden="true"
      />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__motto">
          <span className="hero__rule" />
          Transforming the world through the lens of planning
          <span className="hero__rule" />
        </p>
        <h1 className="hero__title">
          Find the place your <em>future</em> is built on
        </h1>
        <p className="hero__sub">
          From first viewing to final signature, Edkins Homes Realty pairs
          architectural vision with meticulous planning — so every move is
          deliberate, every home is the right one.
        </p>

        <form className="hero__search" onSubmit={onSubmit}>
          <label className="hero__field">
            <span>I want to</span>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option>Buy</option>
              <option>Sell</option>
              <option>Rent</option>
            </select>
          </label>
          <label className="hero__field">
            <span>Location</span>
            <input
              type="text"
              placeholder="City, neighborhood, or ZIP"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label className="hero__field">
            <span>Budget</span>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              <option value="">Any price</option>
              <option>$500k – $1M</option>
              <option>$1M – $3M</option>
              <option>$3M – $7M</option>
              <option>$7M+</option>
            </select>
          </label>
          <button type="submit" className="btn btn--gold hero__submit">
            Search homes
          </button>
        </form>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
