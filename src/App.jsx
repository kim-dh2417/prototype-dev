const products = [
  {
    name: "Hallasan Morning Blend",
    subtitle: "Signature Whole Bean",
    note: "Dark chocolate, roasted almond, citrus finish",
    description:
      "Our flagship blend built for a dense crema, rounded sweetness, and a clean finish that stays bright even with milk.",
  },
  {
    name: "Jeju Wind Drip Bag",
    subtitle: "Easy Daily Brew",
    note: "Brown sugar, cacao nib, soft berry",
    description:
      "A travel-ready drip bag set designed for steady extraction and a balanced cup without extra equipment.",
  },
  {
    name: "Volcanic Decaf",
    subtitle: "Evening Roast",
    note: "Toffee, black tea, mellow cocoa",
    description:
      "Low-stress decaf with body and sweetness intact, ideal for late-night cups and dessert pairings.",
  },
];

const highlights = [
  "100% roasted in small weekly batches",
  "Designed for both espresso and hand-drip brewing",
  "Gift-ready packaging with bold product storytelling",
];

const tasteNotes = [
  {
    title: "Balanced Roast",
    copy: "Roasted to hold sweetness first, then finish with enough structure for a richer cup.",
  },
  {
    title: "Jeju Mood",
    copy: "Brand direction inspired by volcanic stone, coastal light, and warm cafe interiors.",
  },
  {
    title: "Daily Friendly",
    copy: "Approachable enough for everyday drinking, distinct enough to feel premium on first sip.",
  },
];

function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-dot" />
        <div>
          <p className="brand-name">Hongs Coffee Roasters</p>
          <p className="brand-sub">Jeju-inspired specialty coffee</p>
        </div>
      </div>
      <nav className="nav">
        <a href="#products">Products</a>
        <a href="#story">Story</a>
        <a href="#notes">Taste</a>
        <a href="#order">Order</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Signature Coffee Brand</p>
        <h1>Bold coffee made to feel warm, grounded, and gift-worthy.</h1>
        <p className="hero-text">
          Crafted for people who want a richer daily cup, our coffee line blends
          Jeju-inspired mood with dependable flavor, premium packaging, and an
          easy brewing experience.
        </p>
        <div className="hero-actions">
          <button type="button" className="primary-button">
            Shop signature blends
          </button>
          <button type="button" className="secondary-button">
            View product details
          </button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="visual-main">
          <span>Season Roast</span>
          <strong>Hallasan Morning Blend</strong>
        </div>
        <div className="visual-side">
          <p>Small batch roasted</p>
          <p>Whole bean / drip bag / decaf</p>
        </div>
      </div>
    </section>
  );
}

function ProductSection() {
  return (
    <section id="products" className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Products</p>
        <h2>Three signature coffees for everyday rituals and thoughtful gifting.</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.name} className="product-card">
            <div className="product-badge">{product.subtitle}</div>
            <h3>{product.name}</h3>
            <p className="product-note">{product.note}</p>
            <p className="product-copy">{product.description}</p>
            <button type="button" className="ghost-button">
              Learn more
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section id="story" className="story-strip">
      <div className="story-copy">
        <p className="eyebrow">Brand Story</p>
        <h2>Coffee designed with the calm density of stone, sea breeze, and slow mornings.</h2>
        <p>
          Hongs Coffee Roasters is imagined as a premium yet approachable coffee
          brand. The identity leans warm and tactile, with product descriptions
          that feel grounded, sensory, and easy to trust.
        </p>
      </div>
      <div className="highlight-card">
        <p className="eyebrow">Why it works</p>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function NotesSection() {
  return (
    <section id="notes" className="section-block">
      <div className="section-heading">
        <p className="eyebrow">Taste Notes</p>
        <h2>Simple product language that helps customers imagine the cup before they buy.</h2>
      </div>
      <div className="notes-grid">
        {tasteNotes.map((note) => (
          <article key={note.title} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function OrderSection() {
  return (
    <section id="order" className="cta-panel">
      <div>
        <p className="eyebrow">Order</p>
        <h2>Build a homepage that sells the product and the feeling behind it.</h2>
      </div>
      <div className="cta-side">
        <button type="button" className="primary-button">
          Start with the signature blend
        </button>
        <p>Ideal for smart store links, detail pages, and seasonal campaign banners.</p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <Hero />
        <ProductSection />
        <StorySection />
        <NotesSection />
        <OrderSection />
      </main>
    </div>
  );
}
