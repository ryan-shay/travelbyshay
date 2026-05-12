export default function ContactPage() {
  return (
    <main className="contact-page">
      <div className="contact-content">
        <h1>Let&apos;s build your next trip.</h1>
        <p className="contact-intro">
          Every detail handled personally — reach out directly and we&apos;ll take it from there.
        </p>
        <div className="contact-rule" />
        <a
          href="https://cal.com/troyshay"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-book-btn"
        >
          Book a Call
        </a>
        <div className="contact-details">
          <a href="mailto:Troy.Shay@Fora.Travel" className="contact-line">
            <span className="contact-label">Email</span>
            <span>Troy.Shay@Fora.Travel</span>
          </a>
          <a href="tel:+18584490335" className="contact-line">
            <span className="contact-label">Tel</span>
            <span>+1 (858) 449 0335</span>
          </a>
          <a href="https://wa.me/18584490335" className="contact-line" target="_blank" rel="noopener noreferrer">
            <span className="contact-label">WhatsApp</span>
            <span>+1 (858) 449 0335</span>
          </a>
          <p className="contact-line contact-hours">
            <span className="contact-label">Hours</span>
            <span>Available 7 days a week</span>
          </p>
        </div>
      </div>
    </main>
  );
}
