import { business } from "../config/business.js";

/**
 * Opens WhatsApp (web or app) with a pre-filled message.
 * Reused by every WhatsApp CTA in the site so the number and
 * link-building logic live in exactly one place.
 */
export function openWhatsApp(message) {
  const url = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/** Standard enquiry message for a specific service card. */
export function buildServiceMessage(serviceName) {
  return `Hello Hope Trading,

I am interested in your ${serviceName} service.

Please contact me with more details.

Thank you.`;
}

/** Standard enquiry message for a specific scrap material. */
export function buildMaterialMessage(materialName) {
  return `Hello Hope Trading,

I have ${materialName} to sell and would like a quote.

Please let me know the process and current rate.

Thank you.`;
}

/** General "just chat with us" message used by the header / floating button. */
export function buildGeneralMessage() {
  return `Hello Hope Trading,

I would like to enquire about scrap buying and collection services.

Please contact me with more details.

Thank you.`;
}

/** Full enquiry-form message, built from the contact form fields. */
export function buildFormMessage({ name, phone, email, scrapType, location, message }) {
  return `Hello Hope Trading,

I would like to enquire about scrap collection.

Name: ${name}
Phone: ${phone}
Email: ${email || "-"}
Scrap Type: ${scrapType}
Location: ${location}

Message:
${message || "-"}

Please contact me regarding this enquiry.

Thank you.`;
}
