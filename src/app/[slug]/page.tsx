"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getBook, books } from "@/data/books";

function Stars({ rating }: { rating: number }) {
  return (
    <span style={{ letterSpacing: 2, fontSize: 14, color: "#121212" }}>
      {"★".repeat(Math.round(rating))}
    </span>
  );
}

export default function BookPage() {
  const params = useParams();
  const slug = params.slug as string;
  const book = getBook(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedFormat, setSelectedFormat] = useState("hardcover");
  const [upsellChecked, setUpsellChecked] = useState(true);

  if (!book) {
    return (
      <main style={{ maxWidth: 1400, margin: "0 auto", padding: "40px" }}>
        <p>Book not found. <Link href="/">← Back to all books</Link></p>
      </main>
    );
  }

  const galleryImages = [book.coverImage, ...book.previewImages];
  const otherBooks = books.filter((b) => b.slug !== slug).slice(0, 3);
  const formatPrice = selectedFormat === "ebook" ? book.ebookPrice : book.price;
  const formatCompare = selectedFormat === "ebook" ? book.ebookComparePrice : book.comparePrice;

  return (
    <main>
      {/* ── Product Section ── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "55% 45%", gap: 48 }}>

          {/* ── LEFT: Gallery ── */}
          <div>
            {/* Main Image */}
            <div style={{ position: "relative", overflow: "hidden", borderRadius: 12, background: "#fafafa" }}>
              <Image
                src={galleryImages[selectedImage]}
                alt={`${book.title} by Human Architect`}
                width={928}
                height={928}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
            {/* Thumbnails — horizontal below */}
            <div style={{
              display: "flex",
              gap: 8,
              marginTop: 12,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              paddingBottom: 4,
            }}>
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  style={{
                    flex: "0 0 80px",
                    width: 80,
                    height: 80,
                    border: i === selectedImage ? "2px solid #121212" : "1px solid transparent",
                    borderRadius: 4,
                    overflow: "hidden",
                    cursor: "pointer",
                    scrollSnapAlign: "start",
                    opacity: i === selectedImage ? 1 : 0.6,
                    transition: "opacity 0.2s, border-color 0.2s",
                    padding: 0,
                    background: "none",
                  }}
                >
                  <Image src={img} alt="" width={160} height={160} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Buy Box ── */}
          <div style={{ paddingTop: 8, position: "sticky", top: 100, alignSelf: "start" }}>
            {/* Rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: 14 }}>
              <Stars rating={book.rating} />
              <span style={{ color: "rgba(18,18,18,0.7)", fontSize: 13 }}>
                Excellent {book.rating} │ {book.reviewCount} Reviews
              </span>
            </div>

            {/* Title */}
            <h1 style={{
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 31,
              fontWeight: 400,
              letterSpacing: "0.78px",
              lineHeight: 1.3,
              margin: "0 0 8px",
              color: "#121212",
            }}>
              {book.title}
            </h1>

            {/* Tagline */}
            <p style={{
              fontSize: 15,
              color: "rgba(18,18,18,0.7)",
              fontStyle: "italic",
              marginBottom: 20,
              lineHeight: 1.6,
            }}>
              {book.tagline}
            </p>

            {/* Value Stack */}
            <div style={{ marginBottom: 20 }}>
              {book.valueStack.map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  color: "rgba(18,18,18,0.7)",
                  padding: "4px 0",
                }}>
                  <span style={{ color: "#2e8b57", fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            {/* Stock Notice */}
            <div style={{
              background: "#fff8f0",
              border: "1px solid #f0d9b5",
              borderRadius: 4,
              padding: "12px 16px",
              fontSize: 13,
              marginBottom: 20,
              lineHeight: 1.5,
            }}>
              <strong style={{ display: "block", marginBottom: 2 }}>Limited Release Notice</strong>
              {book.stockNotice}
            </div>

            {/* Price Block — Arno Beaumont style */}
            <div style={{ marginBottom: 20 }}>
              <div style={{
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                color: "rgba(18,18,18,0.7)",
                marginBottom: 4,
              }}>
                {book.discountPercent > 0 ? `${book.discountPercent}% Off + Free Gifts!` : "Price"}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span style={{ fontSize: 28, fontWeight: 400, letterSpacing: "0.5px" }}>
                  £{formatPrice.toFixed(2)}
                </span>
                {formatCompare > formatPrice && (
                  <>
                    <span style={{ fontSize: 20, color: "rgba(18,18,18,0.5)", textDecoration: "line-through" }}>
                      £{formatCompare.toFixed(2)}
                    </span>
                    <span style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: "#be4b4b",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}>
                      SAVE {book.discountPercent}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Format Selector */}
            <div style={{ marginBottom: 16 }}>
              <label style={{
                display: "block",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                marginBottom: 8,
                color: "rgba(18,18,18,0.7)",
              }}>
                Format
              </label>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "1px solid rgba(18,18,18,0.12)",
                  borderRadius: 4,
                  fontFamily: "Helvetica, Arial, sans-serif",
                  fontSize: 14,
                  color: "#121212",
                  background: "#fff",
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23121212' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 16px center",
                  cursor: "pointer",
                }}
              >
                <option value="hardcover">Hardcover</option>
                <option value="ebook">eBook (Instant Download)</option>
              </select>
            </div>

            {/* Upsell / Bundle */}
            {book.upsell && (
              <label style={{
                border: "1px solid rgba(18,18,18,0.12)",
                borderRadius: 4,
                padding: 16,
                marginBottom: 20,
                display: "flex",
                gap: 12,
                alignItems: "center",
                cursor: "pointer",
              }}>
                <input
                  type="checkbox"
                  checked={upsellChecked}
                  onChange={(e) => setUpsellChecked(e.target.checked)}
                  style={{ width: 18, height: 18, accentColor: "#121212", flexShrink: 0 }}
                />
                <Image
                  src={book.upsell.image}
                  alt={book.upsell.title}
                  width={70}
                  height={70}
                  style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 4, flexShrink: 0 }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>
                    {book.upsell.title}
                    <span style={{
                      display: "inline-block",
                      fontSize: 10,
                      textTransform: "uppercase",
                      letterSpacing: 1,
                      background: "#121212",
                      color: "#fff",
                      padding: "2px 8px",
                      borderRadius: 2,
                      marginLeft: 6,
                    }}>
                      Free Gift
                    </span>
                  </div>
                  <div style={{ fontSize: 14, color: "rgba(18,18,18,0.7)" }}>
                    <span style={{ textDecoration: "line-through", color: "rgba(18,18,18,0.4)" }}>
                      £{book.upsell.originalPrice.toFixed(2)}
                    </span>{" "}
                    <span style={{ color: "#2e8b57", fontWeight: 600 }}>FREE</span>
                  </div>
                </div>
              </label>
            )}

            {/* Total */}
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 0",
              borderTop: "1px solid rgba(18,18,18,0.12)",
              marginBottom: 16,
            }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase" }}>
                Total
              </span>
              <span style={{ fontSize: 22, fontWeight: 400 }}>£{formatPrice.toFixed(2)}</span>
            </div>

            {/* CTA Button — solid black like Arno Beaumont */}
            <button style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: 49,
              minHeight: 49,
              padding: "0 30px",
              background: "#121212",
              color: "#fff",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              border: "2px solid #121212",
              borderRadius: 6,
              cursor: "pointer",
              transition: "background 0.2s, color 0.2s",
              textAlign: "center",
              lineHeight: 1,
            }}>
              Add to Cart
            </button>

            {/* Stock Left */}
            <p style={{
              textAlign: "center",
              fontSize: 13,
              color: "#be4b4b",
              fontWeight: 600,
              marginTop: 10,
            }}>
              Only {book.stockLeft} left in stock!
            </p>

            {/* Risk Reversal */}
            <p style={{
              textAlign: "center",
              fontSize: 13,
              color: "rgba(18,18,18,0.7)",
              marginTop: 12,
              lineHeight: 1.5,
            }}>
              Try it risk-free for 30 days. With fewer than 1% of customers ever asking for
              their money back, chances are you won&apos;t either.
            </p>

            {/* Trust Badges */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              marginTop: 20,
              paddingTop: 20,
              borderTop: "1px solid rgba(18,18,18,0.12)",
            }}>
              {[
                { icon: "M3 11a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4H7a4 4 0 01-4-4v-6z M7 11V7a5 5 0 0110 0v4", label: "Secure Checkout" },
                { icon: "M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z", label: "Free Shipping" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "2 Year Warranty" },
                { icon: "M22 11.08V12a10 10 0 11-5.93-9.14 M22 4L12 14.01l-3-3", label: "30-Day Returns" },
              ].map((badge, i) => (
                <div key={i} style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 12,
                  color: "rgba(18,18,18,0.7)",
                  letterSpacing: "0.3px",
                }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: 16, height: 16, flexShrink: 0 }}>
                    <path d={badge.icon} />
                  </svg>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BELOW THE FOLD ── */}
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px 60px" }}>

        {/* Inside This Book */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 16,
            color: "#121212",
          }}>
            Inside This Book
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {book.insideThisBook.map((item, i) => (
              <li key={i} style={{
                padding: "10px 0",
                borderBottom: "1px solid rgba(18,18,18,0.12)",
                fontSize: 14,
                color: "rgba(18,18,18,0.7)",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}>
                <span style={{ color: "#2e8b57", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Description */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 16,
            color: "#121212",
          }}>
            About This Book
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(18,18,18,0.7)" }}>
            {book.fullDescription}
          </p>
        </div>

        {/* Preview Pages */}
        {book.previewImages.length > 0 && (
          <div style={{ marginBottom: 40 }}>
            <h2 style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 16,
              color: "#121212",
            }}>
              Preview Pages
            </h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
            }}>
              {book.previewImages.map((img, i) => (
                <Image key={i} src={img} alt={`Preview page ${i + 1}`} width={300} height={400} style={{ width: "100%", height: "auto", borderRadius: 4, display: "block" }} />
              ))}
            </div>
          </div>
        )}

        {/* Accordion Sections */}
        <div style={{ marginBottom: 40 }}>
          {[
            { title: "What's Included", content: "Every copy includes: Premium hardcover binding, instant eBook download (PDF + EPUB), exclusive bonus protocols, and free shipping worldwide." },
            { title: "Shipping & Delivery", content: "Processing (2–4 business days): Each order is carefully packaged. Delivery (5–10 business days): Express worldwide shipping. All customs duties are included — no hidden fees, ever." },
            { title: "Why Human Architect?", content: "Other companies charge 10x the price because they spend millions on marketing and middlemen. We do things differently. Every book is written, designed, and shipped directly by Tyson Architect. By cutting out unnecessary costs, we deliver premium content at a fraction of the price." },
            { title: "Returns & Refunds", content: "If you're not completely satisfied, return your book within 30 days for a full refund. No questions asked. Fewer than 1% of customers ever ask for their money back." },
          ].map((section, i) => (
            <details key={i} style={{ borderTop: "1px solid rgba(18,18,18,0.12)" }}>
              <summary style={{
                padding: "18px 0",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: 1.5,
                textTransform: "uppercase",
                cursor: "pointer",
                listStyle: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "#121212",
              }}>
                {section.title}
                <span style={{ fontSize: 18, fontWeight: 300 }}>+</span>
              </summary>
              <div style={{ padding: "0 0 20px", fontSize: 15, lineHeight: 1.8, color: "rgba(18,18,18,0.7)" }}>
                {section.content}
              </div>
            </details>
          ))}
        </div>

        {/* Reviews Carousel */}
        <div style={{ marginBottom: 48 }}>
          <div style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            marginBottom: 20,
            color: "#121212",
          }}>
            What Readers Say
          </div>
          <div style={{
            display: "flex",
            gap: 16,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            paddingBottom: 12,
          }}>
            {book.reviews.map((review, i) => (
              <div key={i} style={{
                flex: "0 0 320px",
                scrollSnapAlign: "start",
                border: "1px solid rgba(18,18,18,0.12)",
                borderRadius: 4,
                padding: 20,
              }}>
                <div style={{ color: "#121212", letterSpacing: 2, marginBottom: 12, fontSize: 14 }}>
                  {"★".repeat(review.rating)}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(18,18,18,0.7)", marginBottom: 12 }}>
                  &ldquo;{review.text}&rdquo;
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "#121212" }}>
                  {review.author}
                  {review.verified && (
                    <span style={{ fontSize: 11, color: "#2e8b57", fontWeight: 400 }}> ✓ Verified Purchase</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cross Sell */}
        {otherBooks.length > 0 && (
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(18,18,18,0.12)" }}>
            <div style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              marginBottom: 20,
              color: "#121212",
            }}>
              Complete Your Library
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {otherBooks.map((b) => (
                <Link key={b.slug} href={`/${b.slug}`} style={{ textAlign: "center", textDecoration: "none", color: "#121212" }}>
                  <Image src={b.coverImage} alt={b.title} width={200} height={260} style={{ width: "100%", height: "auto", borderRadius: 4, marginBottom: 8 }} />
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{b.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(18,18,18,0.7)" }}>£{b.price.toFixed(2)}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
