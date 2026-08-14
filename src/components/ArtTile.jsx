// Reusable "image" tile used across the hero, about, services and materials
// sections. The project has no photography asset pipeline, so every card
// gets a consistent, on-brand illustrated tile instead of a broken/generic
// stock photo — same layout slot an <img> would occupy, same object-fit
// behaviour, same lazy-loading rules, just rendered as an inline SVG scene.
const TONES = {
  emerald: ["#0e7c4a", "#0a5c38"],
  emeraldLight: ["#149a5c", "#0e7c4a"],
  gold: ["#c9971f", "#a4790f"],
  graphite: ["#2b3835", "#141b19"],
  steel: ["#5c6b6e", "#33403f"],
  copper: ["#b96a2c", "#8a4b1c"],
};

export default function ArtTile({
  icon: Icon,
   image,
  tone = "emerald",
  label,
  size = "md",
  className = "",
}) {
  const [c1, c2] = TONES[tone] || TONES.emerald;

  return (
    <div
      className={`art-tile art-tile--${size} ${className}`}
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
      role="img"
      aria-label={label}
    >
      <svg className="art-tile__pattern" aria-hidden="true" viewBox="0 0 200 200" preserveAspectRatio="none">
        <circle cx="170" cy="20" r="70" fill="rgba(255,255,255,0.06)" />
        <circle cx="15" cy="185" r="55" fill="rgba(255,255,255,0.05)" />
        <path d="M0 150 L200 90" stroke="rgba(255,255,255,0.08)" strokeWidth="18" />
      </svg>
      {image ? (
        <img
          src={image}
          alt={label}
          className="art-tile__image"/>
      ) : (
      <span className="art-tile__icon" aria-hidden="true">
        {Icon && <Icon width="100%" height="100%" strokeWidth={1.3} />}
      </span>
      )}
    </div>
  );
}
