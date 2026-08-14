import { MATERIAL_ICONS } from "./Icons.jsx";
import MaterialCard from "./MaterialCard.jsx";

export default function MaterialCategory({ category }) {
  const CategoryIcon = MATERIAL_ICONS[category.items[0]?.icon];

  return (
    <div className="category-block" id={category.id}>
      <div className="category-block__head">
        {CategoryIcon && (
          <span className="category-block__icon" aria-hidden="true">
            <CategoryIcon width={20} height={20} />
          </span>
        )}
        <div>
          <h3>{category.title}</h3>
          {category.description && <p>{category.description}</p>}
        </div>
      </div>
      <div className="material-grid">
        {category.items.map((item) => (
          <MaterialCard key={item.code} item={item} tone={category.tone} />
        ))}
      </div>
    </div>
  );
}
