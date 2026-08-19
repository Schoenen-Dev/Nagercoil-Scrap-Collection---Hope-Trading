import { Link } from "react-router-dom";
import { PinIcon } from "./Icons.jsx";
import { business } from "../config/business.js";


export default function AreasWeServe() {
  const areas = business.serviceAreas || [];

  // Nothing to show yet — don't render an empty section.
  if (areas.length === 0) return null;

  return (
    <section className="section section--tight" style={{ background: "var(--bg)" }}>
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">Coverage</span>
          <h2>Areas We Serve</h2>
          <p>We provide scrap buying and collection services in Nagercoil and selected nearby areas.</p>
        </div>

        <div className="location-pills">
          {areas.map((area) => (
            <span className="location-pill" key={area}>
              <PinIcon width={14} height={14} />
              {area}
            </span>
          ))}
        </div>

        <div className="areas-we-serve__footer">
          <p>Looking for scrap collection in your area?</p>
          <Link to="/contact" className="btn btn--copper">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
