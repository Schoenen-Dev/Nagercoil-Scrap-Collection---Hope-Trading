import { useState } from "react";
import { scrapTypeOptions } from "../data/materials.js";
import { openWhatsApp, buildFormMessage } from "../utils/whatsapp.js";
import { WhatsAppIcon } from "./Icons.jsx";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  scrapType: "",
  otherScrapType: "",
  location: "",
  message: "",
};

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.phone.trim() || !/^[+\d][\d\s-]{7,15}$/.test(form.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!form.scrapType) errors.scrapType = "Please select the type of scrap.";
  if (form.scrapType === "Other" && !form.otherScrapType.trim()) {
    errors.otherScrapType = "Please tell us the scrap type.";
  }
  if (!form.location.trim()) errors.location = "Please enter your location.";
  if (!form.message.trim()) errors.message = "Please enter your message.";
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "ready"

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setStatus(null);

    if (Object.keys(nextErrors).length > 0) return;

    const scrapType = form.scrapType === "Other" ? form.otherScrapType : form.scrapType;

    openWhatsApp(
      buildFormMessage({
        name: form.name,
        phone: form.phone,
        email: form.email,
        scrapType,
        location: form.location,
        message: form.message,
      })
    );

    setStatus("ready");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className={`field ${errors.name ? "field--invalid" : ""}`}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <span id="name-error" className="field-error">{errors.name}</span>}
        </div>

        <div className={`field ${errors.phone ? "field--invalid" : ""}`}>
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <span id="phone-error" className="field-error">{errors.phone}</span>}
        </div>

        <div className="field">
          <label htmlFor="email">Email (optional)</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
        </div>

        <div className={`field ${errors.location ? "field--invalid" : ""}`}>
          <label htmlFor="location">Location</label>
          <input
            id="location"
            type="text"
            value={form.location}
            onChange={(e) => update("location", e.target.value)}
            aria-invalid={!!errors.location}
            aria-describedby={errors.location ? "location-error" : undefined}
          />
          {errors.location && <span id="location-error" className="field-error">{errors.location}</span>}
        </div>

        <div className={`field field--full ${errors.scrapType ? "field--invalid" : ""}`}>
          <label htmlFor="scrapType">Scrap Type</label>
          <select
            id="scrapType"
            value={form.scrapType}
            onChange={(e) => update("scrapType", e.target.value)}
            aria-invalid={!!errors.scrapType}
            aria-describedby={errors.scrapType ? "scrapType-error" : undefined}
          >
            <option value="">Select Scrap Type</option>
            {scrapTypeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.scrapType && <span id="scrapType-error" className="field-error">{errors.scrapType}</span>}
        </div>

        {form.scrapType === "Other" && (
          <div className={`field field--full ${errors.otherScrapType ? "field--invalid" : ""}`}>
            <label htmlFor="otherScrapType">Please specify scrap type</label>
            <input
              id="otherScrapType"
              type="text"
              value={form.otherScrapType}
              onChange={(e) => update("otherScrapType", e.target.value)}
              aria-invalid={!!errors.otherScrapType}
            />
            {errors.otherScrapType && <span className="field-error">{errors.otherScrapType}</span>}
          </div>
        )}

        <div className={`field field--full ${errors.message ? "field--invalid" : ""}`}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && <span id="message-error" className="field-error">{errors.message}</span>}
        </div>
      </div>

      <button type="submit" className="btn btn--whatsapp btn--block">
        <WhatsAppIcon width={18} height={18} /> Send Enquiry on WhatsApp
      </button>

      {status === "ready" && (
        <p className="form-note" role="status">
          Your enquiry message is ready in WhatsApp. Please press Send there to complete your enquiry.
        </p>
      )}
    </form>
  );
}
