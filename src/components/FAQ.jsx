import { useState } from "react";
import { Link } from "react-router-dom";
import { generalFaqs } from "../data/faqSections.js";

// Reuses the same accordion markup and CSS classes
// (.faq-item / .faq-question / .faq-answer / .faq-icon) already defined in
// index.css — no new styles needed here. Pass a `questions` array + `title`
// so each page can show its own relevant set instead of duplicating the
// main /faq page. See src/data/faqSections.js for the per-page sets.
export default function FAQ({
  title = "Frequently Asked Questions",
  questions = generalFaqs,
  idPrefix = "faq",
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">FAQ</span>
          <h2>{title}</h2>
        </div>

        <div className="faq-list">
          {questions.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`} key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`${idPrefix}-answer-${index}`}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                <div id={`${idPrefix}-answer-${index}`} className="faq-answer" hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 28 }}>
          <Link to="/faq" className="link-arrow">View All FAQs →</Link>
        </div>
      </div>
    </section>
  );
}
