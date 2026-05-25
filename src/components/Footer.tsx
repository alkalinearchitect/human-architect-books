"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <h4>Books</h4>
          <ul>
            <li><Link href="/body-os">Body OS™</Link></li>
            <li><Link href="/alkaline-awakening">Alkaline Awakening</Link></li>
            <li><Link href="/intelligent-design">Intelligent Design</Link></li>
            <li><Link href="/life-force-energy">Life Force Energy</Link></li>
            <li><Link href="/parasite-conspiracy">Parasite Conspiracy</Link></li>
            <li><Link href="/quit-prn-manual">Quit Prn Manual</Link></li>
          </ul>
        </div>
        <div>
          <h4>About</h4>
          <ul>
            <li><Link href="https://human-architect-site.vercel.app">The Manifesto</Link></li>
            <li><Link href="https://human-architect-site.vercel.app">The Author</Link></li>
            <li><Link href="mailto:hello@humanarchitect.com">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Stay Updated</h4>
          <p style={{ fontSize: 14, color: "rgba(18,18,18,0.7)", marginBottom: 12, lineHeight: 1.6 }}>
            Get new protocols, book launches, and exclusive content. No spam. Unsubscribe anytime.
          </p>
          {subscribed ? (
            <p style={{ fontSize: 14, color: "#2e8b57", fontWeight: 600 }}>✓ You&apos;re in. Welcome to the rebuild.</p>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8 }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                style={{
                  flex: 1,
                  padding: "10px 14px",
                  border: "1px solid rgba(18,18,18,0.12)",
                  borderRadius: 4,
                  fontSize: 14,
                  fontFamily: "Helvetica, Arial, sans-serif",
                  color: "#121212",
                }}
              />
              <button type="submit" className="btn-primary" style={{ height: 40, padding: "0 16px", fontSize: 12 }}>
                Join
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="site-footer__bottom">
        © {new Date().getFullYear()} Human Architect. All rights reserved. Built by Tyson Architect.
      </div>
    </footer>
  );
}
