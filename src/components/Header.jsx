import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { business } from "../config/business.js";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";
import { PhoneIcon, WhatsAppIcon, MenuIcon, CloseIcon } from "./Icons.jsx";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/scrap-materials", label: "Scrap Materials" },
  { to: "/contact", label: "Contact Us" },
  { to: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change / resize back to desktop.
  useEffect(() => {
    const onResize = () => window.innerWidth > 840 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="brand" aria-label={`${business.name} — home`}>
          <span className="brand__mark" aria-hidden="true">
            <img
              src="/images/hope-traders-logo.webp"
              alt="Hope Traders"
              className="brandmark__logo"/>
          </span>
          <span className="brand__text">
            <span className="brand__name">{business.name}</span>
            <span className="brand__tag">Scrap Buying &amp; Selling</span>
          </span>
        </NavLink>

        <nav className="main-nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={`tel:${business.phoneLink}`}
            className="btn btn--copper btn--sm"
            aria-label={`Call ${business.name} now`}
          >
            <PhoneIcon width={16} height={16} />
            Call Now
          </a>
          <button
            type="button"
            className="hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
          
        </nav>
      )}
    </header>
  );
}
