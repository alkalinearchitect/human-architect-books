"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function CountdownTimer() {
  const [time, setTime] = useState({ h: 2, m: 0, s: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 2; m = 0; s = 0; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <span style={{ fontWeight: 700, marginLeft: 8 }}>
      {pad(time.h)}:{pad(time.m)}:{pad(time.s)}
    </span>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        First Edition Print Run — 200 Copies Per Title&nbsp;&nbsp;·&nbsp;&nbsp;Selling Fast
        <CountdownTimer />
        &nbsp;&nbsp;·&nbsp;&nbsp;Free Shipping Worldwide
      </div>

      {/* Payment Icons */}
      <div className="payment-icons">
        <span>Visa</span>
        <span>Mastercard</span>
        <span>Amex</span>
        <span>PayPal</span>
        <span>Apple Pay</span>
        <span>Secure Checkout</span>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-header__logo">
            Human Architect Books
          </Link>
          <nav className="site-header__nav">
            <Link href="/">All Books</Link>
            <Link href="/body-os">Body OS</Link>
            <Link href="/alkaline-awakening">Health</Link>
            <Link href="/quit-prn-manual">Discipline</Link>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              fontSize: 24,
              cursor: "pointer",
            }}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </header>
    </>
  );
}
