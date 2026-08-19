import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import MaterialCard from "../components/MaterialCard.jsx";
import CTA from "../components/CTA.jsx";
import QuickTrust from "../components/QuickTrust.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import AreasWeServe from "../components/AreasWeServe.jsx";
import Reviews from "../components/Reviews.jsx";
import FAQ from "../components/FAQ.jsx";
import { generalFaqs } from "../data/faqSections.js";
import { services } from "../data/services.js";
import { materialCategories } from "../data/materials.js";
import { business } from "../config/business.js";
import {
  TruckIcon, ScaleIcon, ShieldIcon, BoltIcon, AwardIcon, PhoneIcon,
} from "../components/Icons.jsx";

const whyChooseUs = [
  { icon: ShieldIcon, title: "Reliable Scrap Buying", text: "Fair, consistent pricing and dependable service every time you sell scrap." },
  { icon: TruckIcon, title: "Doorstep Collection", text: "We come to you — home, office or industrial site, at a time that suits you." },
  { icon: ScaleIcon, title: "Wide Range of Materials", text: "From copper and steel to e-waste and vehicles, we buy across categories." },
  { icon: AwardIcon, title: "Professional Service", text: "Transparent weighing, clear communication and proper documentation." },
  { icon: BoltIcon, title: "Convenient Collection", text: "Flexible scheduling built around your home or business hours." },
  { icon: PhoneIcon, title: "Quick Enquiry Response", text: "Call or WhatsApp us and get a prompt response to your scrap enquiry." },
];

const previewMaterials = materialCategories.map((cat) => ({ cat, item: cat.items[0] }));

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: "Scrap buying, selling and doorstep collection services.",
    telephone: business.phoneLink,
    email: business.email,
    address: business.address,
    url: business.siteUrl,
    image: `${business.siteUrl}${business.logo}`,
    openingHours: business.hours,
  };

  return (
    <>
      <SEO
        title="Scrap Buying & Selling Services | Hope Traders"
        description="Hope Traders provides scrap buying, selling and doorstep scrap collection services for office, industrial, metal, e-waste and other scrap materials."
        path="/"
        jsonLd={jsonLd}
      />

      <Hero />

      {/* NEW: Quick Trust ---------------------------------------------------*/}
      <QuickTrust />

      {/* About ------------------------------------------------------------*/}
      <AboutSection />

      {/* Services ----------------------------------------------------------*/}
      <section className="section section--graphite">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What We Do</span>
            <h2>Our Scrap Buying &amp; Collection Services</h2>
            <p>Six focused services covering homes, offices, industry, government and tender accounts.</p>
          </div>
          <div className="grid grid--3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Materials preview ---------------------------------------------------*/}
      <section className="section section--materials">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">What We Buy</span>
            <h2>Scrap Materials We Buy</h2>
            <p>We accept a wide range of scrap materials — a sample from each category below.</p>
          </div>
          <div className="material-grid">
            {previewMaterials.map(({ cat, item }) => (
              <MaterialCard key={item.code} item={item} tone={cat.tone} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 32 }}>
            <Link to="/scrap-materials" className="btn btn--copper">View All Scrap Materials</Link>
          </div>
        </div>
      </section>

      {/* NEW: How It Works ---------------------------------------------------*/}
      <HowItWorks />

      {/* Why choose us --------------------------------------------------------*/}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Why Hope Traders</span>
            <h2>Why Choose Hope Traders?</h2>
          </div>
          <div className="grid grid--3">
            {whyChooseUs.map(({ icon: Icon, title, text }) => (
              <div className="feature" key={title}>
                <span className="feature__icon" aria-hidden="true"><Icon width={20} height={20} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Areas We Serve --------------------------------------------------*/}
      <AreasWeServe />

      {/* NEW: Reviews -----------------------------------------------------*/}
      <Reviews />

      {/* NEW: FAQ -----------------------------------------------------------*/}
      <FAQ title="Quick Answers" questions={generalFaqs} idPrefix="home-faq" />

      {/* CTA --------------------------------------------------------------*/}
      <section className="section section--tight">
        <div className="container">
          <CTA />
        </div>
      </section>
    </>
  );
}
