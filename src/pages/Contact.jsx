import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { business } from "../config/business.js";
import { PhoneIcon, WhatsAppIcon, MailIcon, PinIcon, ClockIcon } from "../components/Icons.jsx";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    telephone: business.phoneLink,
    email: business.email,
    address: business.address,
    url: `${business.siteUrl}/contact`,
  };

  return (
    <>
      <SEO
        title="Contact Hope Trading | Scrap Buying & Collection Services"
        description="Contact Hope Trading for scrap buying, selling and collection services. Call or WhatsApp us for a scrap enquiry."
        path="/contact"
        jsonLd={jsonLd}
      />

      <section className="page-hero">
        <div className="container">
          <span className="breadcrumbs"><Link to="/">Home</Link> / Contact Us</span>
          <h1>Contact Hope Trading</h1>
          <p>Call, WhatsApp, or send an enquiry below to schedule a scrap collection.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="info-card">
                <div className="info-row">
                  <span className="info-row__icon" aria-hidden="true"><PhoneIcon width={18} height={18} /></span>
                  <div>
                    <h4>Phone</h4>
                    <a href={`tel:${business.phoneLink}`}>{business.phoneDisplay}</a>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-row__icon" aria-hidden="true"><WhatsAppIcon width={18} height={18} /></span>
                  <div>
                    <h4>WhatsApp</h4>
                    <button
                      type="button"
                      onClick={() => openWhatsApp(buildGeneralMessage())}
                      style={{ background: "none", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" }}
                    >
                      {business.whatsappDisplay}
                    </button>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-row__icon" aria-hidden="true"><MailIcon width={18} height={18} /></span>
                  <div>
                    <h4>Email</h4>
                    <a href={`mailto:${business.email}`}>{business.email}</a>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-row__icon" aria-hidden="true"><PinIcon width={18} height={18} /></span>
                  <div>
                    <h4>Address</h4>
                    <span>{business.address}</span>
                  </div>
                </div>
                <div className="info-row">
                  <span className="info-row__icon" aria-hidden="true"><ClockIcon width={18} height={18} /></span>
                  <div>
                    <h4>Business Hours</h4>
                    <span>{business.hours}</span>
                  </div>
                </div>
              </div>

              <div className="map-frame" role="img" aria-label="Map placeholder — business location to be added">
                {business.mapEmbedSrc ? (
                  <iframe
                    title="Hope Trading location"
                    src={business.mapEmbedSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <span>
                    Map will appear here once Hope Trading's exact business
                    location is confirmed.
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="section-head">
                <span className="eyebrow">Scrap Enquiry</span>
                <h2>Request Scrap Collection</h2>
                <p>Fill in the details below and we'll open a ready-made WhatsApp message for you to send us.</p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
