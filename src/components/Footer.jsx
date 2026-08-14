import { Link } from "react-router-dom";
import { business } from "../config/business.js";
import { PhoneIcon, WhatsAppIcon, MailIcon, PinIcon } from "./Icons.jsx";
import { openWhatsApp, buildGeneralMessage } from "../utils/whatsapp.js";
import SocialIcons from "./SocialIcons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        
        

        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/Hope Trading Logo.webp" alt="Hope Trading - Scrap Buying & Selling" className="footer-logo"
  />
            <h4>{business.name}</h4>
            <p>{business.tagline}</p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/scrap-materials">Scrap Materials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4>Our Services</h4>
            <ul>
              <li><Link to="/services#doorstep-scrap-collection">Doorstep Scrap Collection</Link></li>
              <li><Link to="/services#office-scrap">Office Scrap</Link></li>
              <li><Link to="/services#industrial-scrap">Industrial Scrap</Link></li>
              <li><Link to="/services#government-account-scrap">Government Account Scrap</Link></li>
              <li><Link to="/services#scrap-tender">Scrap Tender</Link></li>
              <li><Link to="/services#bank-scrap-tender">Bank Scrap Tender</Link></li>
            </ul>
          </div>

          <div>
            <h4>Scrap Materials</h4>
            <ul>
              <li><Link to="/scrap-materials#metal">Copper</Link></li>
              <li><Link to="/scrap-materials#metal">Aluminium</Link></li>
              <li><Link to="/scrap-materials#metal">Iron</Link></li>
              <li><Link to="/scrap-materials#metal">Steel</Link></li>
              <li><Link to="/scrap-materials#ewaste">E-Waste</Link></li>
              <li><Link to="/scrap-materials#paper">Paper &amp; Plastics</Link></li>
              <li><Link to="/scrap-materials#vehicle">Scrap Vehicles</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-grid" style={{ borderBottom: "none", paddingTop: 30 }}>
          <div>
            <div className="footer-contact-item">
              <PhoneIcon width={16} height={16} />
              <a href={`tel:${business.phoneLink}`}>{business.phoneDisplay}</a>
            </div>
            <div className="footer-contact-item">
              <WhatsAppIcon width={16} height={16} />
              <button
                type="button"
                onClick={() => openWhatsApp(buildGeneralMessage())}
                style={{ background: "none", border: "none", padding: 0, color: "inherit", textAlign: "left" }}
              >
                {business.whatsappDisplay}
              </button>
            </div>
            <div className="footer-contact-item">
              <MailIcon width={16} height={16} />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
            <div className="footer-contact-item">
              <PinIcon width={16} height={16} />
              <span>{business.address}</span>
            </div>
          </div>

          <div>
            <h4>Follow Us</h4>
            <SocialIcons />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} {business.name}. All Rights Reserved.</span>
          <span>Scrap buying, selling &amp; doorstep collection services.</span>
        </div>
      </div>
    </footer>
  );
}
