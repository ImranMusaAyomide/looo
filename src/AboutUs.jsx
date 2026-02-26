import "./AboutUs.css";

const values = [
  {
    title: "Simple by design",
    text: "We believe the best landing pages feel effortless. No clutter, no confusion—just clear value and one clear next step.",
  },
  {
    title: "Built to convert",
    text: "Every section serves a purpose. From hero to CTA, we optimize for trust and action, not just pretty pixels.",
  },
  {
    title: "Always improving",
    text: "We ship, learn, and iterate. Our own landing pages are living experiments we’re not afraid to change.",
  },
];

function AboutUs() {
  return (
    <main className="about-us">
      <section className="about-hero">
        <p className="about-kicker">About Us</p>
        <h1 className="about-title">
          We help teams turn visitors into customers.
        </h1>
        <p className="about-subtitle">
          We’re a small team obsessed with landing pages that look simple and
          convert like crazy. No fluff, no jargon—just clear design and
          copy that gets people to take the next step.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-inner">
          <h2 className="about-story-title">Our story</h2>
          <p className="about-story-text">
            We started out frustrated by landing pages that looked great but
            didn’t move the needle. So we built a system: templates, patterns,
            and principles that actually drive sign-ups and sales. Today we
            help startups and teams ship pages that feel human and perform.
          </p>
        </div>
      </section>

      <section className="about-values">
        <h2 className="about-values-heading">What we stand for</h2>
        <div className="about-values-grid">
          {values.map((item, i) => (
            <article key={i} className="about-value-card">
              <h3 className="about-value-title">{item.title}</h3>
              <p className="about-value-text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Ready to build a page that converts?</h2>
          <p>
            Start with our templates or get in touch if you want to go deeper.
          </p>
          <div className="about-cta-buttons">
            <button type="button" className="about-cta-primary">
              Get started
            </button>
            <button type="button" className="about-cta-secondary">
              Contact us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
