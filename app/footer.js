import Link from "next/link";

export const PHONE_DISPLAY = "+1 858 449 0335";
export const PHONE_HREF = "tel:+18584490335";
export const EMAIL = "info@travelbyshay.com";

export default function Footer() {
  return (
    <footer className="footer">
      <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
      <span aria-hidden="true">·</span>
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <p className="footer-credentials">
        <span>Virtuoso Member</span>
      </p>
      <p className="footer-links">
        <Link href="/partnerships">Partnerships</Link>
      </p>
      <p>© {new Date().getFullYear()} Troy Shay</p>
    </footer>
  );
}
