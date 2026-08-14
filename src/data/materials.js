// Materials are grouped into categories; each item carries a short "lot
// code" (a design device used on the ticket-style cards), an `icon` key
// (see MATERIAL_ICONS in components/Icons.jsx) and an `alt` string used as
// the accessible label / SEO-style description for its image tile.
export const materialCategories = [
  {
    id: "metal",
    title: "Metal Scrap",
    code: "MTL",
    tone: "copper",
    description: "Non-ferrous and ferrous metal scrap bought by weight.",
    items: [
      { name: "Copper", code: "CU-01", image: "/images/materials/copper-scrap.webp", alt: "Copper scrap materials", description: "Copper wires, pipes and fittings." },
      { name: "Bronze", code: "BR-02", image: "/images/materials/bronze-scrap.webp", alt: "Bronze scrap materials", description: "Bronze fittings, castings and machine parts." },
      { name: "Aluminium", code: "AL-03", image: "/images/materials/aluminium-scrap.webp", alt: "Aluminium scrap materials", description: "Aluminium sheet, extrusion, cable and utensils." },
      { name: "Steel", code: "ST-04", image: "/images/materials/steel-scrap.webp", alt: "Steel scrap materials", description: "Steel pipes, beams and structural offcuts." },
      { name: "Iron", code: "FE-05", image: "/images/materials/iron-scrap.webp", alt: "Iron scrap materials", description: "Cast and wrought iron, rods and mixed iron scrap." },
    ],
  },
  {
    id: "ewaste",
    title: "E-Waste & Electronics",
    code: "EWE",
    tone: "graphite",
    description: "Electronic and electrical waste, boards and devices.",
    items: [
      { name: "E-Waste", code: "EW-06", image: "/images/materials/e-waste.webp", alt: "Electronic waste scrap", description: "Mixed electronic waste from homes and offices." },
      { name: "E-Boards", code: "PCB-07", image: "/images/materials/e-boards.webp", alt: "Electronic circuit board scrap", description: "Circuit boards from appliances and equipment." },
      { name: "Computer", code: "PC-08", image: "/images/materials/office-scrap.webp", alt: "Computer scrap materials", description: "Desktops, laptops and computer peripherals." },
      { name: "TV", code: "TV-09", image: "/images/materials/tv-scrap.webp", alt: "Television scrap materials", description: "CRT, LCD and LED television scrap." },
      { name: "Motors", code: "MOT-10", image: "/images/materials/motor-scrap.webp", alt: "Electric motor scrap", description: "Electric motors from appliances and machinery." },
    ],
  },
  {
    id: "appliance",
    title: "Appliance Scrap",
    code: "APP",
    tone: "steel",
    description: "Household and commercial appliance scrap.",
    items: [
      { name: "Fridge", code: "FR-11", image: "/images/materials/fridge-scrap.webp", alt: "Refrigerator scrap materials", description: "Refrigerators and cooling appliance scrap." },
      { name: "Electrical Appliances", code: "EA-12", image: "/images/materials/tv-scrap.webp", alt: "Electrical appliance scrap", description: "Washing machines, ACs and other appliances." },
    ],
  },
  {
    id: "paper",
    title: "Paper & Packaging Scrap",
    code: "PPR",
    tone: "gold",
    description: "Paper, cardboard and packaging material scrap.",
    items: [
      { name: "Paper", code: "PPR-13", image: "/images/materials/paper-scrap.webp", alt: "Paper scrap materials", description: "Office paper, newsprint and mixed paper waste." },
      { name: "Coconut Shell", code: "CCS-15", image: "/images/materials/copper-scrap.webp", alt: "Coconut shell scrap", description: "Coconut shell waste from commercial kitchens." },
      { name: "Cardboard", code: "CBD-14", image: "/images/materials/cardboard-scrap.webp", alt: "Cardboard recycling materials", description: "Cartons and corrugated cardboard scrap." },
      { name: "Plastics", code: "PLS-16", image: "/images/materials/steel-scrap.webp", alt: "Plastic scrap materials", description: "Rigid and mixed plastic scrap." },
    ],
  },
  {
    id: "vehicle",
    title: "Vehicle & Heavy Scrap",
    code: "VHC",
    tone: "emerald",
    description: "End-of-life vehicles and heavy transport scrap.",
    items: [
      { name: "Scrap Vehicles", code: "VEH-17", image: "/images/materials/scrap-vehicles.webp", alt: "Scrap vehicle recycling", description: "End-of-life cars, vans and commercial vehicles." },
      { name: "Railway Vehicles", code: "RLY-18", image: "/images/materials/railway-vehicles.webp", alt: "Railway vehicle scrap materials", description: "Decommissioned railway rolling stock scrap." },
    ],
  },
];

export const scrapTypeOptions = [
  "Copper", "Bronze", "Aluminium", "Steel", "Iron", "E-Waste", "E-Board",
  "Computer", "TV", "Fridge", "Paper", "Coconut Shell", "Cardboard",
  "Plastics", "Motors", "Scrap Vehicles", "Railway Vehicles",
  "Office Scrap", "Industrial Scrap", "Other",
];

export default materialCategories;
