import { business } from "../config/business.js";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";
import { PhoneIcon, WhatsAppIcon } from "./Icons.jsx";

export default function CTA({
  heading = "Have Scrap to Sell?",
  text = "Contact Hope Traders for reliable scrap buying, selling and collection services.",
}) {
  return (
    <div className="cta-band">
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-band__actions">
        <a href={`tel:${business.phoneLink}`} className="btn btn--copper">
          <PhoneIcon width={17} height={17} /> Call Now
        </a>
        <button
          type="button"
          className="btn btn--outline-light"
          onClick={() => openWhatsApp(buildGeneralMessage())}
        >
          <WhatsAppIcon width={17} height={17} /> WhatsApp Us
        </button>
      </div>
    </div>
  );
}
