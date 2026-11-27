export const EMAIL = "info@troyshaytravel.com";
export const SITE = "troyshaytravel.com";

export default function Footer() {
  return (
    <footer className="footer">
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <p className="footer-credentials">
        <span>Virtuoso Member</span>
      </p>
      <p>© {new Date().getFullYear()} Troy Shay Travel</p>
    </footer>
  );
}
