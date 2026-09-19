import React, { useState } from "react";
import { LISTINGS, Listing } from "../data";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "sale", label: "For Sale" },
  { key: "new", label: "New" },
  { key: "rent", label: "For Rent" },
] as const;

function PropertyCard({ listing }: { listing: Listing }) {
  return (
    <article className="prop">
      <div className="prop__media">
        <img src={listing.image} alt={listing.title} loading="lazy" />
        <span className="prop__badge">{listing.badge}</span>
        <span className="prop__price">{listing.price}</span>
      </div>
      <div className="prop__body">
        <h3 className="prop__title">{listing.title}</h3>
        <p className="prop__loc">{listing.location}</p>
        <div className="prop__meta">
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z" />
            </svg>
            {listing.beds} Beds
          </span>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12h16a1 1 0 011 1v6a1 1 0 01-1 1h-2v-2H6v2H4a1 1 0 01-1-1v-6a1 1 0 011-1zm0-1V7a1 1 0 011-1h14a1 1 0 011 1v4H4zm4-5V4a1 1 0 011-1h6a1 1 0 011 1v2H8z" />
            </svg>
            {listing.baths} Baths
          </span>
          <span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 21V8l7-5 7 5v13h-5v-6H9v6H3zm12 0v-2h6v2h-6z" />
            </svg>
            {listing.sqft.toLocaleString()} sqft
          </span>
        </div>
        <a href="#contact" className="prop__link">
          View details
        </a>
      </div>
    </article>
  );
}

export default function Properties() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");

  const visible = LISTINGS.filter((l) =>
    filter === "all" ? true : l.category === filter
  );

  return (
    <section id="listings" className="section section--cream">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Featured Properties</p>
          <h2 className="section__title">Homes planned with intention</h2>
          <p className="section__lead">
            A curated selection of residences we've researched, valued, and
            toured — every one backed by our signature planning process.
          </p>
        </div>

        <div className="filters" role="tablist" aria-label="Filter properties">
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

        <div className="props-grid">
          {visible.map((l) => (
            <PropertyCard key={l.id} listing={l} />
          ))}
        </div>

        <div className="section__more">
          <a href="#contact" className="btn btn--outline">
            View all properties
          </a>
        </div>
      </div>
    </section>
  );
}
