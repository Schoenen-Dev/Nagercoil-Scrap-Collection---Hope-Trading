import { Link } from "react-router-dom";
import ArtTile from "./ArtTile.jsx";


export default function AboutSection() {
  return (
    <section className="section about-section">
      <div className="container about-section__grid">
        <div className="about-section__image">
          <ArtTile 
            image="/images/services/Industrial-Scrap.avif"
            tone="emerald" 
            size="about" 
            label="Industrial and metal scrap collection at Hope Traders" />
        </div>

        <div className="about-section__content">
          <span className="eyebrow">About Hope Traders</span>
          <h2>Reliable Scrap Buying &amp; Collection Services</h2>
          <p>
            Hope Traders is a scrap buying and selling business built around
            convenience and fair dealing. We buy and collect scrap directly from
            homes, offices and industrial sites — covering metal scrap, e-waste,
            office scrap, industrial scrap and tender scrap.
          </p>
          <p>
            Whether it's a doorstep pickup for a household appliance or an
            ongoing supply of industrial scrap, our team handles collection,
            on-site weighing and payment in one straightforward visit.
          </p>
          <Link to="/about" className="btn btn--outline">Learn More</Link>
        </div>
      </div>
    </section>
  );
}
