import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{
      maxWidth: 600,
      margin: "120px auto",
      textAlign: "center",
      padding: "0 24px",
      fontFamily: "Helvetica, Arial, sans-serif",
    }}>
      <h1 style={{ fontSize: 48, fontWeight: 400, marginBottom: 16 }}>404</h1>
      <p style={{ fontSize: 18, color: "rgba(18,18,18,0.7)", marginBottom: 32 }}>
        This page doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary">← Back to All Books</Link>
    </main>
  );
}
