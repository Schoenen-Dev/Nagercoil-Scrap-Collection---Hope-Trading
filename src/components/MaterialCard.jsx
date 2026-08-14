
import ArtTile from "./ArtTile.jsx";
import { openWhatsApp, buildMaterialMessage } from "../utils/whatsapp.js";

export default function MaterialCard({ item, tone = "emerald" }) {
  

  return (
    <article className="material-card">
      <ArtTile
        image={item.image}
        label={item.alt}
        size="sm"
        className="material-card__media"/>
      <div className="material-card__body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <button
          type="button"
          className="btn btn--sm btn--outline btn--block"
          onClick={() => openWhatsApp(buildMaterialMessage(item.name))}
        >
          Enquire Now
        </button>
      </div>
    </article>
  );
}
