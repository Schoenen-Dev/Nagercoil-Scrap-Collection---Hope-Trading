import { business } from "../config/business.js";
import { SOCIAL_ICONS, WhatsAppIcon } from "./Icons.jsx";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";

const LABELS = {
  facebook: "Facebook",
  instagram: "Instagram",
  youtube: "YouTube",
  linkedin: "LinkedIn",
};

export default function SocialIcons() {
  const links = Object.entries(business.social || {}).filter(([, url]) => url);

  return (
    <div className="social-icons">
      {links.map(([key, url]) => {
        const Icon = SOCIAL_ICONS[key];
        return (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icons__link"
            aria-label={`${business.name} on ${LABELS[key] || key}`}
          >
            {Icon && <Icon width={18} height={18} />}
          </a>
        );
      })}
      <button
        type="button"
        className="social-icons__link"
        aria-label={`Chat with ${business.name} on WhatsApp`}
        onClick={() => openWhatsApp(buildGeneralMessage())}
      >
        <WhatsAppIcon width={18} height={18} />
      </button>
    </div>
  );
}
