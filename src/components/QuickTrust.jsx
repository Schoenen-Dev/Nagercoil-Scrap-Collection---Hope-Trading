import { TruckIcon, ScaleIcon, PhoneIcon, BuildingIcon } from "./Icons.jsx";

const TRUST_ITEMS = [
  {
    icon: TruckIcon,
    title: "Local Scrap Collection",
  },
  {
    icon: ScaleIcon,
    title: "Multiple Scrap Materials",
  },
  {
    icon: PhoneIcon,
    title: "Easy Enquiry",
  },
  {
    icon: BuildingIcon,
    title: "Home & Business Collection",
  },
];

export default function QuickTrust() {
  return (
    <section className="quick-trust">
      <div className="container">
        <div className="quick-trust__grid">
          {TRUST_ITEMS.map(({ icon: Icon, title }) => (
            <div className="quick-trust__item" key={title}>
              <span className="quick-trust__icon" aria-hidden="true">
                <Icon width={20} height={20} />
              </span>

              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}