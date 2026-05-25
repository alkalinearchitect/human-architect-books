"use client";

import Image from "next/image";
import Link from "next/link";
import { books } from "@/data/books";

export default function Home() {
  const featured = books[3]; // Body OS — flagship
  const rest = books.filter((b) => b.slug !== featured.slug);

  return (
    <main>
      {/* ── Hero ── */}
      <section className="landing-hero">
        <h1>Your Best Years Are Being Drained in Private.</h1>
        <p>
          Every session costs you focus, drive, and the man you were supposed to become.
          Six protocols. One mission: rebuild from the inside out.
        </p>
        <div className="landing-hero__actions">
          <a href="#books" className="btn-primary">Shop All Books</a>
          <a href={`/${featured.slug}`} className="btn-secondary">Flagship: {featured.title}</a>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className="stats-bar">
        <div className="stat">
          <div className="stat__number">6</div>
          <div className="stat__label">Protocols</div>
        </div>
        <div className="stat">
          <div className="stat__number">4.9★</div>
          <div className="stat__label">Avg Rating</div>
        </div>
        <div className="stat">
          <div className="stat__number">500+</div>
          <div className="stat__label">Reviews</div>
        </div>
        <div className="stat">
          <div className="stat__number">100%</div>
          <div className="stat__label">Free Shipping</div>
        </div>
      </div>

      {/* ── Featured Book ── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "60px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "45% 55%",
          gap: 48,
          alignItems: "center",
        }}>
          <Link href={`/${featured.slug}`}>
            <Image
              src={featured.coverImage}
              alt={`${featured.title} by Human Architect`}
              width={600}
              height={780}
              style={{ width: "100%", height: "auto", borderRadius: 4, boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}
              priority
            />
          </Link>
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1.5, color: "#be4b4b", marginBottom: 8 }}>
              Flagship Protocol
            </div>
            <h2 style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 36,
              fontWeight: 400,
              letterSpacing: "0.5px",
              lineHeight: 1.2,
              marginBottom: 12,
              color: "#121212",
            }}>
              {featured.title}
            </h2>
            <p style={{ fontSize: 15, color: "rgba(18,18,18,0.7)", fontStyle: "italic", marginBottom: 16 }}>
              {featured.tagline}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ letterSpacing: 2, fontSize: 14, color: "#121212" }}>{"★".repeat(Math.round(featured.rating))}</span>
              <span style={{ fontSize: 13, color: "rgba(18,18,18,0.7)" }}>
                {featured.rating} │ {featured.reviewCount} Reviews
              </span>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "rgba(18,18,18,0.7)", marginBottom: 20 }}>
              {featured.shortDescription}
            </p>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 24 }}>
              <span style={{ fontSize: 28, fontWeight: 400 }}>£{featured.price.toFixed(2)}</span>
              {featured.comparePrice > featured.price && (
                <>
                  <span style={{ fontSize: 18, color: "rgba(18,18,18,0.5)", textDecoration: "line-through" }}>
                    £{featured.comparePrice.toFixed(2)}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#be4b4b", textTransform: "uppercase", letterSpacing: 1 }}>
                    SAVE {featured.discountPercent}%
                  </span>
                </>
              )}
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <Link href={`/${featured.slug}`} className="btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── All Books Grid ── */}
      <section id="books" className="books-section">
        <h2 className="books-section__title">The Complete Library</h2>
        <p className="books-section__subtitle">
          Six protocols. Every man weakens in the same six areas. These books fix all of them.
        </p>
        <div className="books-grid">
          {rest.map((book) => (
            <Link key={book.slug} href={`/${book.slug}`} className="book-card">
              <Image
                src={book.coverImage}
                alt={`${book.title} by Human Architect`}
                width={400}
                height={520}
                className="book-card__cover"
              />
              <div className="book-card__category">{book.category}</div>
              <div className="book-card__title">{book.title}</div>
              <span className="book-card__rating">
                {"★".repeat(Math.round(book.rating))} <span style={{ color: "rgba(18,18,18,0.5)", fontSize: 12 }}>({book.reviewCount})</span>
              </span>
              <p className="book-card__desc">{book.shortDescription}</p>
              <div className="book-card__cta">View Details →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why Human Architect ── */}
      <section className="feature-section">
        <h2>Why These Books Exist</h2>
        <p>
          Sick people are profitable. Distracted people are profitable. Weak people are profitable.
          The system is working exactly as designed. These books are the counter-attack.
          Written by Tyson Architect — not a guru, not an influencer.
          A man who rebuilt himself and built the protocol so you can too.
        </p>
        <a href="#books" className="btn-primary">Start Your Rebuild</a>
      </section>
    </main>
  );
}
