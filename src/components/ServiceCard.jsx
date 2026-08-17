import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICE_ICONS } from "./Icons.jsx";
import ArtTile from "./ArtTile.jsx";
import { openWhatsApp, buildServiceMessage } from "../utils/whatsapp.js";

export default function ServiceCard({ service }) {
  const Icon = SERVICE_ICONS[service.icon];
  // Falls back to the illustrated tile if the real photo hasn't been added
  // yet to /public/images/services — keeps the card looking finished either
  // way instead of showing a broken image icon.
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <article className="service-card" id={service.slug}>
      <Link to={`/services#${service.slug}`} className="service-card__media" aria-label={`${service.title} — learn more`}>
        {service.image && !imgFailed ? (
          <img
            src={service.image}
            alt={service.alt}
            loading="lazy"
            width={480}
            height={300}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <ArtTile icon={Icon} tone={service.tone} size="card" label={service.alt} />
        )}
      </Link>
      <div className="service-card__body">
        <h3>
          <Link to={`/services#${service.slug}`}>{service.title}</Link>
        </h3>
        <p>{service.summary}</p>
        <div className="service-card__footer">
          <Link className="link-arrow" to={`/services#${service.slug}`}>
            Learn More →
          </Link>
          {/* <button
            type="button"
            className="btn btn--sm btn--whatsapp"
            style={{ backgroundColor: '#16A34A', color: '#FFFFFF' }}
            onClick={() => openWhatsApp(buildServiceMessage(service.title))}
          >
            Enquire Now
          </button> */}
        </div>
      </div>
    </article>
  );
}
