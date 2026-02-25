import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    tag: "Productivity",
    title: "Designing a Landing Page That Actually Converts",
    excerpt:
      "From hero copy to social proof, learn the building blocks of a high-converting landing experience.",
    readTime: "5 min read",
  },
  {
    id: 2,
    tag: "Design",
    title: "How to Tell a Story With Your UI",
    excerpt:
      "Use layout, typography, and motion to guide visitors from curiosity to action in seconds.",
    readTime: "7 min read",
  },
  {
    id: 3,
    tag: "Strategy",
    title: "Mapping Your Customer Journey Before You Ship",
    excerpt:
      "Great landing pages reflect real user journeys. Here’s a simple framework to map and validate yours.",
    readTime: "6 min read",
  },
];

function Blog() {
  return (
    <main className="blog">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <p className="blog-kicker">Blog</p>
          <h1 className="blog-title">Insights behind the landing page.</h1>
          <p className="blog-subtitle">
            Deep dives, design decisions, and growth experiments from building
            landing pages that feel simple but convert like crazy.
          </p>
        </div>
        <div className="blog-hero-card">
          <p className="blog-hero-tag">Featured story</p>
          <h2 className="blog-hero-heading">
            Turning first impressions into lasting relationships.
          </h2>
          <p className="blog-hero-text">
            See how we structure hero sections, social proof, and calls-to-action
            to move visitors from “just looking” to “let&apos;s talk”.
          </p>
          <button className="blog-hero-button">Read the case study</button>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="blog-grid-header">
          <h2>Latest from the team</h2>
          <p>
            Short, focused reads on landing page strategy, UX, and conversion
            optimization.
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <p className="blog-card-tag">{post.tag}</p>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span className="blog-read-time">{post.readTime}</span>
                <button className="blog-read-link">Read article</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="blog-cta">
        <div className="blog-cta-inner">
          <div>
            <h2>Stay in the loop.</h2>
            <p>
              One thoughtful email a month with our latest landing page ideas,
              patterns, and experiments.
            </p>
          </div>
          <form
            className="blog-cta-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="blog-cta-input"
            />
            <button type="submit" className="blog-cta-button">
              Get updates
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Blog;

