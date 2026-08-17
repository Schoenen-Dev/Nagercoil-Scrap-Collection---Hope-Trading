import { Link } from "react-router-dom";
import SEO from "../seo/SEO.jsx";
import CTA from "../components/CTA.jsx";
import MaterialCategory from "../components/MaterialCategory.jsx";
import { materialCategories } from "../data/materials.js";

export default function ScrapMaterials() {
  return (
    <>
      <SEO
        title="Scrap Materials We Buy | Copper, Aluminium, Iron & E-Waste"
        description="We buy a wide range of scrap materials including copper, bronze, aluminium, iron, steel, e-waste, paper, plastics, motors and vehicles."
        path="/scrap-materials"
      />

      <section className="page-hero">
        <div className="container">
          <span className="breadcrumbs"><Link to="/">Home</Link> / Scrap Materials</span>
          <h1>Scrap Materials We Buy</h1>
          <p>
            From metal scrap to e-waste, paper and vehicles — browse the categories
            Hope Traders buys and get a quote on WhatsApp.
          </p>
        </div>
      </section>

      <section className="section section--materials">
        <div className="container">
          {materialCategories.map((cat) => (
            <MaterialCategory key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <CTA
            heading="Have Scrap Materials to Sell?"
            text="Tell us what you have and Hope Traders will schedule a collection and quote."
          />
        </div>
      </section>
    </>
  );
}
