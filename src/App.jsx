const features = [
  {
    title: "Calm Visual Tone",
    copy: "A softer first impression with spacious layout, lighter surfaces, and a background that feels clean instead of heavy.",
  },
  {
    title: "Clear Product Focus",
    copy: "The homepage now leads with one product story first, then supports it with a short preview grid instead of many dense sections.",
  },
  {
    title: "Ready For Next Steps",
    copy: "This simplified direction works well as a base for detail pages, shopping links, and later campaign sections.",
  },
];

const previewCards = [
  {
    label: "Signature Blend",
    name: "Hallasan Morning Blend",
    note: "Dark chocolate, roasted almond, citrus finish",
  },
  {
    label: "Brand Mood",
    name: "Jeju Stone and Sea Light",
    note: "Warm neutrals, tactile copy, and a premium cafe feel",
  },
  {
    label: "Daily Experience",
    name: "Easy To Brew",
    note: "Approachable for drip, espresso, and gift-friendly bundles",
  },
];

function Header() {
  return (
    <header className="topbar">
      <div>
        <p className="brand-kicker">Hongs Coffee Roasters</p>
        <h1 className="brand-name">Simple coffee homepage prototype</h1>
      </div>
      <button type="button" className="outline-button">
        View concept
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-panel">
      <div className="hero-copy">
        <p className="eyebrow">Homepage Direction</p>
        <h2>Warm coffee branding with a lighter background and a calmer first screen.</h2>
        <p>
          This version is intentionally more minimal. It introduces the brand,
          gives one strong product impression, and leaves enough breathing room
          to feel premium from the first scroll.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-button">
            Explore blend
          </button>
          <button type="button" className="text-button">
            See all sections
          </button>
        </div>
      </div>

      <div className="hero-card">
        <p className="card-label">Featured Roast</p>
        <strong>Hallasan Morning Blend</strong>
        <span>Balanced sweetness, clean finish, gift-worthy packaging</span>
      </div>
    </section>
  );
}

function PreviewSection() {
  return (
    <section className="preview-section">
      <div className="section-heading">
        <p className="eyebrow">Preview</p>
        <h3>A simpler landing structure built to show tone before complexity.</h3>
      </div>

      <div className="preview-grid">
        {previewCards.map((card) => (
          <article key={card.name} className="preview-card">
            <p className="card-label">{card.label}</p>
            <h4>{card.name}</h4>
            <p>{card.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <section className="feature-strip">
      {features.map((feature) => (
        <article key={feature.title} className="feature-card">
          <h4>{feature.title}</h4>
          <p>{feature.copy}</p>
        </article>
      ))}
    </section>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <PreviewSection />
        <FeatureSection />
      </main>
    </div>
  );
}
