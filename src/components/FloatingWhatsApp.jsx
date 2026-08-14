import { business } from "../config/business.js";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";
import { WhatsAppIcon } from "./Icons.jsx";

export default function FloatingWhatsApp() {
  return (
    <button
      type="button"
      className="fab-whatsapp"
      aria-label={`Chat with ${business.name} on WhatsApp`}
      onClick={() => openWhatsApp(buildGeneralMessage())}
    >
      <WhatsAppIcon width={28} height={28} />
    </button>
  );
}
