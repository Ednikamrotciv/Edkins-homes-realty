import React, { useState } from "react";
import { LAND_LISTINGS, LandListing } from "../data";

const FILTERS = [
  { key: "all", label: "All Plots" },
  { key: "urban", label: "Urban Areas" },
  { key: "local", label: "Local Areas" },
] as const;

const POINTS = [
  "Verified titles — C of O & Governor's Consent",
  "Urban cities & local communities across Nigeria",
  "Site inspection & full due diligence included",
];

function LandCard({ listing }: { listing: LandListing }) {
  return (
    <article className="land">
      <div className="land__media">
        <img src={listing.image} alt={listing.title} loading="lazy" />
        <span className={`land__badge land__badge--${listing.area}`}>
          {listing.area === "urban" ? "Urban" : "Local"}
        </span>
        <span className="land__price">{listing.price}</span>
      </div>
      <div className="land__body">
        <h3 className="land__title">{listing.title}</h3>
        <p className="land__loc">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-7-5.1-7-11a7 7 0 0114 0c0 5.9-7 11-7 11z" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="12" cy="10" r="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          {listing.location}
        </p>
        <div className="land__meta">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v2h2V6H5zm4 0v2h2V6H9zm4 0v2h2V6h-2zm4 0v2h2V6h-2zm-11 4v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-12 4v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-12 4v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2z" />
            </svg>
            {listing.size}
          </span>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1zm3 11l3 3 6-7 2 2.5V9H8v6z" />
            </svg>
            {listing.titleStatus}
          </span>
        </div>
        <a href="#contact" className="land__link">
          Buy land
        </a>
      </div>
    </article>
  );
}

export default function Land() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");

  const visible = LAND_LISTINGS.filter((l) =>
    filter === "all" ? true : l.area === filter
  );

  return (
    <section id="land" className="section section--gold-tint">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Land &amp; Plots · Nigeria</p>
          <h2 className="section__title">
            Own a piece of <em>Nigeria's</em> future
          </h2>
          <p className="section__lead">
            From prime urban plots in Lagos and Abuja to family land in local
            communities, we source and sell verified land across Nigeria — every
            parcel planned, surveyed, and titled with our signature diligence.
          </p>
        </div>

        <div className="filters" role="tablist" aria-label="Filter land plots">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              className={`filters__btn ${filter === f.key ? "filters__btn--active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              <span>{f.label}</span>
            </button>
          ))}
        </div>

        <div className="land__grid">
          {visible.map((l) => (
            <LandCard key={l.id} listing={l} />
          ))}
        </div>

        <ul className="land__points">
          {POINTS.map((p) => (
            <li key={p}>
              <span className="land__check">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {p}
            </li>
          ))}
        </ul>

        <div className="section__more">
          <a href="#contact" className="btn btn--outline">
            Enquire about land
          </a>
        </div>
      </div>
    </section>
  );
}
