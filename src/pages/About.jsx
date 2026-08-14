import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import CTA from "../components/CTA.jsx";
import ArtTile from "../components/ArtTile.jsx";
import { ShieldIcon, TruckIcon, ScaleIcon, AwardIcon, BoltIcon, PhoneIcon } from "../components/Icons.jsx";

const whyCustomers = [
  { icon: ShieldIcon, title: "Trustworthy Dealing", text: "Fair pricing and transparent weighing on every collection." },
  { icon: TruckIcon, title: "Convenient Collection", text: "We collect scrap from your doorstep — no need to arrange transport." },
  { icon: ScaleIcon, title: "Wide Material Range", text: "Metal, e-waste, paper, appliance and vehicle scrap, all in one place." },
  { icon: AwardIcon, title: "Professional Handling", text: "Proper documentation for office, industrial and tender accounts." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Hope Trading | Scrap Buying & Selling"
        description="Learn about Hope Trading, a scrap buying and selling business providing doorstep collection, industrial scrap and e-waste services."
        path="/about"
      />

      <section className="page-hero">
        <div className="container">
          <span className="breadcrumbs"><Link to="/">Home</Link> / About Us</span>
          <h1>About Hope Trading</h1>
          <p>A scrap buying and selling business built on reliable service and convenient collection.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <span className="eyebrow">Who We Are</span>
              <h2>A Dedicated Scrap Buying &amp; Selling Business</h2>
              <p>
                Hope Trading buys and sells all kinds of scrap, working with
                households, offices, industrial units and organizations that
                need a reliable way to dispose of and monetize scrap
                materials. Our focus is straightforward: fair pricing,
                convenient collection and professional handling from
                enquiry to payment.
              </p>
              <p>
                We've built our process around what customers actually need —
                a quick response, a scheduled pickup, transparent weighing
                and no unnecessary back-and-forth.
              </p>
            </div>
            <div className="service-block__art" style={{ padding: 30 }}>
              <ArtTile
    image="/images/materials/e-waste.webp"
    size="about"
    label="Hope Trading scrap buying and collection"
  />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Scrap Buying, Selling &amp; Doorstep Collection</h2>
          </div>
          <div className="grid grid--2">
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
              {[
                "Scrap buying and selling for individuals and businesses",
                "Doorstep scrap collection at a scheduled time",
                "Office scrap — furniture, electronics and paper",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10 }}>
                  <ShieldIcon width={18} height={18} color="#0e7c4a" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
              {[
                "Industrial scrap from production and manufacturing units",
                "E-waste, metal scrap and appliance scrap",
                "Scrap tender and government/bank account scrap",
              ].map((t) => (
                <li key={t} style={{ display: "flex", gap: 10 }}>
                  <ShieldIcon width={18} height={18} color="#0e7c4a" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid--2" style={{ gap: 48, alignItems: "center" }}>
            <div className="service-block__art" style={{ padding: 30, order: 0 }}>
              <ArtTile
    image="/images/materials/iron-scrap.webp"
    size="about"
    label="Professional scrap collection service"
  />
            </div>
            <div>
              <span className="eyebrow">Our Approach</span>
              <h2>Reliable Service, Every Collection</h2>
              <p>
                Our approach centres on making scrap disposal easy for the
                customer. That means responding quickly to enquiries,
                confirming a convenient collection time, weighing materials
                transparently on-site, and settling payment before we leave.
              </p>
              <p>
                For office, industrial, government and bank accounts, we
                adapt our process to the documentation and scheduling those
                accounts require, while keeping the same standard of
                professional handling throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">Why Customers Choose Us</span>
            <h2>What Sets Hope Trading Apart</h2>
          </div>
          <div className="grid grid--4">
            {whyCustomers.map(({ icon: Icon, title, text }) => (
              <div className="card" key={title}>
                <div className="card__icon" aria-hidden="true"><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTA
            heading="Contact Us for Scrap Collection"
            text="Get in touch with Hope Trading to schedule a scrap collection or ask about our services."
          />
        </div>
      </section>
    </>
  );
}
