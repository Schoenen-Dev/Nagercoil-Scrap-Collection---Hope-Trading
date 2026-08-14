import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import CTA from "../components/CTA.jsx";
import { services } from "../data/services.js";
import { SERVICE_ICONS, CheckIcon } from "../components/Icons.jsx";
import { openWhatsApp, buildServiceMessage } from "../utils/whatsapp.js";
import ArtTile from "../components/ArtTile.jsx";

export default function Services() {
  return (
    <>
      <SEO
        title="Scrap Buying & Collection Services | Hope Trading"
        description="Explore scrap buying and collection services including doorstep, office, industrial, government account and tender scrap services."
        path="/services"
      />

      <section className="page-hero">
        <div className="container">
          <span className="breadcrumbs"><Link to="/">Home</Link> / Services</span>
          <h1>Scrap Buying &amp; Collection Services</h1>
          <p>
            As a dedicated scrap buyer and dealer, Hope Trading offers six focused
            scrap collection services covering homes, offices, industry and
            institutional accounts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {services.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`service-block ${i % 2 === 1 ? "service-block--reverse" : ""}`}
              >
                <div className="service-block__art">
                  <ArtTile image={service.image} label={service.alt || service.title} size="md"/>
                </div>
                <div>
                  <h2>{service.title}</h2>
                  {service.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <CheckIcon width={16} height={16} /> <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="service-block__actions">
                    <button
                      type="button"
                      className="btn btn--whatsapp"
                      onClick={() => openWhatsApp(buildServiceMessage(service.title))}
                    >
                      WhatsApp for {service.title.split(" ")[0]} Enquiry
                    </button>
                    <Link to="/contact" className="btn btn--outline">
                      Request Scrap Collection
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTA
            heading="Need a Scrap Buying Service?"
            text="Whether it's doorstep collection, office scrap or a tender enquiry, get in touch with Hope Trading."
          />
        </div>
      </section>
    </>
  );
}
