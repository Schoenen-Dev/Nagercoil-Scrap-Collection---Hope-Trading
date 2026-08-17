import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import CTA from "../components/CTA.jsx";

const FAQS = [
  {
    question: "What types of scrap does Hope Traders buy?",
    answer:
      "Hope Traders buys various types of scrap including metal scrap, paper scrap, plastic scrap, e-waste, machinery, old appliances, vehicles and other recyclable scrap materials.",
  },
  {
    question: "Does Hope Traders provide doorstep scrap collection?",
    answer:
      "Yes. Hope Traders provides convenient doorstep scrap collection for homes, offices, businesses and industrial locations in and around Nagercoil.",
  },
  {
    question: "How can I sell my scrap to Hope Traders?",
    answer:
      "You can call or WhatsApp Hope Traders with details about the type and approximate quantity of scrap you have. Our team will guide you through the collection process.",
  },
  {
    question: "Does Hope Traders buy industrial scrap?",
    answer:
      "Yes. Hope Traders buys and collects industrial scrap including metal scrap, machinery, equipment, components and other industrial materials.",
  },
  {
    question: "Do you collect scrap from offices and businesses?",
    answer:
      "Yes. We collect office and commercial scrap such as old furniture, computers, printers, cables, paper waste and other recyclable materials.",
  },
  {
    question: "Does Hope Traders buy e-waste?",
    answer:
      "Yes. Hope Traders accepts various types of e-waste and electronic scrap. Contact us with details about the materials you want to dispose of.",
  },
  {
    question: "How do I request a scrap collection?",
    answer:
      "You can call or WhatsApp us, or use the Request Scrap Collection form on our Contact page.",
  },
  {
    question: "Where does Hope Traders provide scrap collection services?",
    answer:
      "Hope Traders provides scrap collection services in Nagercoil and the surrounding areas that we officially serve.",
  },
  {
    question: "How is the price of scrap determined?",
    answer:
      "Scrap prices depend on factors such as material type, quality, quantity and current market conditions. Contact our team to discuss your scrap and receive a quote.",
  },
  {
    question: "How can I contact Hope Traders?",
    answer:
      "You can contact Hope Traders by phone, WhatsApp or through the enquiry form on our Contact page.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Hope Traders"
        description="Find answers to common questions about scrap buying, selling, doorstep scrap collection, industrial scrap and e-waste services from Hope Traders in Nagercoil."
        path="/faq"
        jsonLd={jsonLd}
      />

      <section className="page-hero">
        <div className="container">
          <span className="breadcrumbs">
            <Link to="/">Home</Link> / FAQ
          </span>

          <h1>Frequently Asked Questions</h1>

          <p>
            Find answers to common questions about scrap buying, selling and
            collection services from Hope Traders.
          </p>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-head section-head--center">
            <span className="eyebrow">FAQ</span>

            <h2>Common Questions About Our Scrap Services</h2>

            <p>
              Learn more about our scrap collection, buying and selling
              services before getting in touch with our team.
            </p>
          </div>

          <div className="faq-list">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
                  key={faq.question}
                >
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{faq.question}</span>

                    <span
                      className="faq-icon"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="faq-answer"
                    hidden={!isOpen}
                  >
                    <p>{faq.answer}</p>

                    {index === 0 && (
                      <Link to="/scrap-materials">
                        View Scrap Materials →
                      </Link>
                    )}

                    {index === 1 && (
                      <Link to="/services">
                        View Our Services →
                      </Link>
                    )}

                    {index === 6 && (
                      <Link to="/contact">
                        Request Scrap Collection →
                      </Link>
                    )}

                    {index === 9 && (
                      <Link to="/contact">
                        Contact Hope Traders →
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      
      <section className="section section--tight">
              <div className="container">
                <CTA
                  heading="Have Questions About Your Scrap?"
                  text="Contact Hope Traders to discuss your scrap materials and collection requirements."
                />
              </div>
            </section>
    </>
  );
}