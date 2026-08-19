import { useEffect, useState } from "react";
import { business } from "../config/business.js";
import { PhoneIcon, WhatsAppIcon } from "./Icons.jsx";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/images/services/doorstep-scrap-collection.webp",
    alt: "Doorstep scrap collection service in Nagercoil",
    kicker: "DOORSTEP SCRAP COLLECTION",
    title: "Trusted Scrap Dealers in Nagercoil",
    text: "We offer reliable doorstep scrap collection from homes, offices, businesses, and industrial locations across Nagercoil.",
  },
  {
    image: "/images/services/Government-Account-Scrap.avif",
    alt: "Scrap collection and recycling materials at Hope Traders",
    kicker: "HOPE TRADERS",
    title: "All Kinds of Scrap Buying & Selling",
    text: "Reliable scrap buying, selling and collection services for homes, offices, industries and organizations.",
  },
  {
    image: "/images/services/Industrial-Scrap.avif",
    alt: "Industrial scrap materials collected by Hope Traders",
    kicker: "INDUSTRIAL SCRAP",
    title: "Reliable Scrap Solutions for Industries",
    text: "We buy and collect metal scrap, machinery, e-waste and other industrial scrap materials.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="hero-slider">

      {/* Background Image */}
      <div className="hero-slider__background">
        <img
          src={slide.image}
          alt={slide.alt}
          width="1920"
          height="850"
          fetchPriority="high"
        />
      </div>

      {/* Dark Overlay */}
      <div className="hero-slider__overlay"></div>

      {/* Content */}
      <div className="container hero-slider__container">
        <div className="hero-slider__content">

          <span className="hero-slider__kicker">
            {slide.kicker}
          </span>

          {/* Keep only one H1 on the homepage */}
          {current === 0 ? (
            <h1>{slide.title}</h1>
          ) : (
            <h2>{slide.title}</h2>
          )}

          <p>
            {slide.text}
          </p>

          <div className="hero-slider__buttons">

            <a
              href={`tel:${business.phoneLink}`}
              className="btn btn--copper"
            >
              <PhoneIcon width={18} height={18} />
              Call Now
            </a>

            

            <Link
              to="/contact"
              className="btn btn--outline-light"
            >
              Request Scrap Collection
            </Link>

          </div>

        </div>
      </div>

      {/* Previous / Next */}
      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--prev"
        onClick={() =>
          setCurrent(
            (current - 1 + slides.length) % slides.length
          )
        }
        aria-label="Previous slide"
      >
        ‹
      </button>

      <button
        type="button"
        className="hero-slider__arrow hero-slider__arrow--next"
        onClick={() =>
          setCurrent((current + 1) % slides.length)
        }
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dots */}
      <div className="hero-slider__dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`hero-slider__dot ${
              current === index
                ? "hero-slider__dot--active"
                : ""
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}