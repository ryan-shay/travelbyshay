import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-content">
        <Image
          src="https://placehold.co/400x250/png"
          alt="Placeholder"
          width={400}
          height={250}
          priority
        />
        <p className="about-description">
          This is placeholder text for the About page. Add your story and
          details here.
        </p>
      </div>
    </main>
  );
}
