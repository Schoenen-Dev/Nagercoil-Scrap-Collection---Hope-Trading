import { business } from "../config/business.js";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";
import { PhoneIcon, WhatsAppIcon } from "./Icons.jsx";

export default function StickyMobileBar() {
  return (
    <div className="sticky-bar" role="navigation" aria-label="Quick contact">
      <div className="sticky-bar__inner">
        <a href={`tel:${business.phoneLink}`} aria-label={`Call ${business.name} now`}>
          <PhoneIcon width={17} height={17} /> Call Now
        </a>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openWhatsApp(buildGeneralMessage());
          }}
          aria-label={`Chat with ${business.name} on WhatsApp`}
        >
          <WhatsAppIcon width={17} height={17} /> WhatsApp
        </a>
      </div>
    </div>
  );
}
