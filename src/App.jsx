import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
});

const UserContext = createContext({
  name: "Guest",
  role: "user",
});

const brandLogos = [
  "Dolby",
  "Logitech",
  "Cisco",
  "Sennheiser",
  "BandLab",
  "Buffer",
];

const figmaFeatures = [
  {
    title: "Foundational components",
    description:
      "Buttons, inputs, cards, and nav patterns mapped to conversion-ready layouts.",
  },
  {
    title: "Auto-layout ready",
    description:
      "Layouts that stretch with content, adapt to breakpoints, and keep spacing tidy.",
  },
  {
    title: "Variable support",
    description:
      "Design tokens and component variants organized for faster UI updates.",
  },
  {
    title: "Design blocks",
    description:
      "Hero, pricing, and testimonial blocks you can drop into any page.",
  },
  {
    title: "Dark mode ready",
    description:
      "Switch between dark and light palettes without rebuilding layouts.",
  },
  {
    title: "Typography system",
    description:
      "Scales, weights, and sizing built for crisp editorial hierarchy.",
  },
];

const framerHighlights = [
  {
    title: "Speedy prototypes",
    description:
      "Ship pixel-perfect landing pages with ready-made interactions.",
  },
  {
    title: "Production ready",
    description:
      "From concept to live site without swapping tools or stacks.",
  },
];

const testimonials = [
  {
    quote:
      "Cabana is the only UI kit I've used that feels premium from the first click.",
    name: "Ian Colby",
    title: "Product Designer",
  },
  {
    quote:
      "We shipped a full marketing site in two days. The blocks are unbelievably clean.",
    name: "Eleanor Park",
    title: "Founder, Rovera",
  },
  {
    quote:
      "Everything from typography to spacing feels deliberate. Our clients noticed.",
    name: "Marta Suarez",
    title: "Creative Director",
  },
  {
    quote:
      "The Figma + Framer combo saved us weeks. Cabana paid for itself instantly.",
    name: "Viktor Zsol",
    title: "Lead Engineer",
  },
];

const pricing = [
  {
    tier: "Starter",
    price: "$119",
    description: "Best for solo builders",
    items: [
      "Full Figma UI Kit",
      "50+ Sections",
      "Component variants",
      "Dark mode styles",
      "Free updates",
    ],
  },
  {
    tier: "Team",
    price: "$99",
    description: "Designed for agencies",
    items: [
      "Everything in Starter",
      "Framer library",
      "Unlimited seats",
      "Design tokens",
      "Priority support",
    ],
    featured: true,
  },
  {
    tier: "Studio",
    price: "$79",
    description: "For larger orgs",
    items: [
      "Everything in Team",
      "Dedicated onboarding",
      "Custom branding",
      "Team workspace",
      "Quarterly roadmap",
    ],
  },
];

const faqs = [
  {
    question: "What's the difference between the Figma and Framer products?",
    answer:
      "The Figma kit is for design systems and layout. Framer ships ready-to-publish components and interactions.",
  },
  {
    question: "Can I share Cabana with other team members?",
    answer:
      "Yes. Team and Studio tiers include unlimited seats so you can share internally.",
  },
  {
    question: "Do you include updates?",
    answer:
      "All tiers receive product updates, new sections, and component improvements.",
  },
  {
    question: "Is there a discount for students or nonprofits?",
    answer:
      "Reach out and we'll find a plan that works. We love supporting new builders.",
  },
  {
    question: "Does Cabana work for startups and agencies?",
    answer:
      "Absolutely. The kit is built for landing pages, marketing sites, and SaaS teams.",
  },
];

function ContextPill() {
  const { theme } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div className="context-pill">
      <span className="context-dot" />
      <span>
        {theme === "dark" ? "Dark" : "Light"} mode · {user.name}
      </span>
    </div>
  );
}

function Navbar({ sections, activeSection, onNavigate }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <span className="logo-mark" />
        Cabana
      </div>
      <nav className="navbar__links">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`nav-link ${
              activeSection === section.id ? "is-active" : ""
            }`}
            onClick={() => onNavigate(section.id)}
            aria-current={activeSection === section.id ? "page" : undefined}
            type="button"
          >
            {section.label}
          </button>
        ))}
      </nav>
      <div className="navbar__actions">
        <span className="navbar__user">
          {user.name} · {user.role}
        </span>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
        >
          {theme === "dark" ? "Light mode" : "Dark mode"}
        </button>
        <button className="cta-button" type="button">
          Get access
        </button>
      </div>
    </header>
  );
}

function HomeSection() {
  return (
    <div className="section__inner">
      <ContextPill />
      <div className="hero">
        <div className="hero__content">
          <p className="eyebrow">Cabana UI</p>
          <h1>
            Design <span>faster</span>
            <br />
            Launch <span>sooner</span>
          </h1>
          <p className="hero__subtitle">
            Ship conversion-ready landing pages, marketing sites, and product
            launches in days with a premium design system.
          </p>
          <div className="hero__actions">
            <button className="cta-button" type="button">
              Watch intro video
            </button>
            <button className="secondary-button" type="button">
              Get Cabana UI kit
            </button>
          </div>
        </div>
        <div className="hero__glow" aria-hidden="true">
          <div className="glow-ring" />
          <div className="glow-card">
            <div className="glow-card__line" />
            <div className="glow-card__line short" />
            <div className="glow-card__line" />
          </div>
        </div>
      </div>
      <div className="brand-row">
        {brandLogos.map((brand) => (
          <span key={brand}>{brand}</span>
        ))}
      </div>
    </div>
  );
}

function MenuSection() {
  return (
    <div className="section__inner">
      <ContextPill />
      <div className="section-heading">
        <h2>Designing in Figma? We've got you covered.</h2>
        <p>
          Everything you need to craft high-converting experiences, from
          foundational components to ready-made blocks.
        </p>
      </div>
      <div className="feature-grid">
        {figmaFeatures.map((feature) => (
          <div key={feature.title} className="feature-card">
            <div className="feature-card__icon" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="section__inner">
      <ContextPill />
      <div className="section-heading">
        <h2>Building in Framer? We're there too.</h2>
        <p>
          From prototype to production, Cabana ships with Framer components that
          match the Figma kit.
        </p>
      </div>
      <div className="framer-layout">
        <div className="framer-preview">
          <div className="preview-pane">
            <div className="preview-line" />
            <div className="preview-line short" />
            <div className="preview-line" />
          </div>
          <div className="preview-pane">
            <div className="preview-line short" />
            <div className="preview-line" />
            <div className="preview-line short" />
          </div>
        </div>
        <div className="framer-copy">
          {framerHighlights.map((highlight) => (
            <div key={highlight.title} className="highlight-card">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="section-heading">
        <h2>
          Trusted by <span>20,000+</span> Designers & Developers.
        </h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <div key={item.name} className="testimonial-card">
            <p>"{item.quote}"</p>
            <div className="testimonial-card__author">
              <div className="avatar">{item.name[0]}</div>
              <div>
                <strong>{item.name}</strong>
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        className="faq-question"
        onClick={() => setOpen((prev) => !prev)}
        type="button"
      >
        <span>{question}</span>
        <span className="faq-icon">{open ? "−" : "+"}</span>
      </button>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

function ContactSection() {
  return (
    <div className="section__inner">
      <ContextPill />
      <div className="section-heading">
        <h2>Choose the product that fits your needs.</h2>
        <p>
          Simple, transparent pricing built for designers, developers, and fast
          moving teams.
        </p>
      </div>
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <div
            key={plan.tier}
            className={`pricing-card ${plan.featured ? "is-featured" : ""}`}
          >
            <div className="pricing-card__header">
              <span>{plan.tier}</span>
              <h3>{plan.price}</h3>
              <p>{plan.description}</p>
            </div>
            <ul>
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <button className="cta-button" type="button">
              Buy {plan.tier}
            </button>
          </div>
        ))}
      </div>
      <div className="section-heading">
        <h2>Oh, and if you have any questions...</h2>
      </div>
      <div className="faq-grid">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} {...faq} />
        ))}
      </div>
      <footer className="footer">
        <div className="footer__brand">
          <span className="logo-mark" />
          Cabana
        </div>
        <div className="footer__links">
          <span>Home</span>
          <span>Menu</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <p>© 2026 Cabana UI. Built for speed.</p>
      </footer>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState("dark");
  const user = useMemo(() => ({ name: "Guest", role: "user" }), []);

  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    document.title = "Cabana Clone";
    console.log("Cabana clone loaded");
  }, []);

  useEffect(() => {
    console.log("Active section changed:", activeSection);
  }, [activeSection]);

  useEffect(() => {
    const sections = [
      { id: "home", ref: homeRef },
      { id: "menu", ref: menuRef },
      { id: "about", ref: aboutRef },
      { id: "contact", ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        visibleEntries.forEach((entry) => {
          entry.target.classList.add("is-visible");
        });

        if (visibleEntries.length === 0) {
          return;
        }

        const mostVisible = visibleEntries.reduce((prev, current) =>
          prev.intersectionRatio > current.intersectionRatio ? prev : current
        );
        const nextSection = mostVisible.target.dataset.section;
        if (nextSection) {
          setActiveSection(nextSection);
        }
      },
      {
        threshold: 0.35,
        rootMargin: "-25% 0px -45% 0px",
      }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const sectionRef = {
      home: homeRef,
      menu: menuRef,
      about: aboutRef,
      contact: contactRef,
    }[sectionId];
    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const sections = [
    { id: "home", label: "Home", ref: homeRef },
    { id: "menu", label: "Menu", ref: menuRef },
    { id: "about", label: "About", ref: aboutRef },
    { id: "contact", label: "Contact", ref: contactRef },
  ];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContext.Provider value={user}>
        <div className={`app theme-${theme}`}>
          <Navbar
            sections={sections}
            activeSection={activeSection}
            onNavigate={handleNavigate}
          />
          <main>
            <section
              ref={homeRef}
              className="section section--hero"
              data-section="home"
            >
              <HomeSection />
            </section>
            <section
              ref={menuRef}
              className="section section--menu"
              data-section="menu"
            >
              <MenuSection />
            </section>
            <section
              ref={aboutRef}
              className="section section--about"
              data-section="about"
            >
              <AboutSection />
            </section>
            <section
              ref={contactRef}
              className="section section--contact"
              data-section="contact"
            >
              <ContactSection />
            </section>
          </main>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
