// Central data source for all six services. Home uses the short fields,
// the Services page uses the longer detail/points/paragraphs fields.
export const services = [
  {
    slug: "doorstep-scrap-collection",
    icon: "truck",
    tone: "emerald",
    image: "/images/services/doorstep-scrap-collection.webp",
    alt: "Doorstep scrap collection service",
    title: "Doorstep Scrap Collection",
    summary:
      "Convenient scrap collection from homes, businesses and other locations, scheduled at a time that works for you.",
    paragraphs: [
      "Hope Trading picks up scrap directly from your doorstep, so you don't have to arrange transport or make a trip to a scrap yard. This is our most requested service among households and small businesses looking to clear out old metal, appliances and other scrap materials.",
      "Once you share the type and approximate quantity of scrap, our team will confirm a convenient collection slot, weigh the material on-site and settle payment on the spot.",
    ],
    points: [
      "Flexible pick-up scheduling for homes and offices",
      "On-site weighing and transparent pricing",
      "Suitable for mixed household and small commercial scrap",
      "No need to transport materials yourself",
    ],
  },
  {
    slug: "office-scrap",
    icon: "building",
    tone: "gold",
    image: "/images/services/office-scrap.webp",
    alt: "Office scrap collection and buying",
    title: "Office Scrap",
    summary:
      "Collection and buying of office equipment, paper, electronics and other office scrap.",
    paragraphs: [
      "Offices accumulate scrap steadily — old furniture, retired computers, printers, cabling and stacks of waste paper. Hope Trading offers a straightforward way to clear this out while recovering value from materials that would otherwise sit in storage.",
      "We work with facility and admin teams to plan collection around office hours, minimising disruption to daily operations.",
    ],
    points: [
      "Buying of retired computers, printers and office electronics",
      "Bulk paper and cardboard collection",
      "Furniture and fixture scrap handling",
      "Scheduled visits that fit around business hours",
    ],
  },
  {
    slug: "industrial-scrap",
    icon: "factory",
    tone: "graphite",
    image: "/images/services/Industrial-Scrap.avif",
    alt: "Industrial scrap and machinery",
    title: "Industrial Scrap",
    summary:
      "Industrial metal, machinery, equipment and production-related scrap, handled at scale.",
    paragraphs: [
      "Manufacturing units, workshops and production facilities generate scrap as a regular part of operations — offcuts, retired machinery, damaged components and process waste. Hope Trading buys and collects industrial scrap in the quantities these facilities produce.",
      "We coordinate with plant and procurement teams on collection frequency, load sizes and documentation required for industrial accounts.",
    ],
    points: [
      "Handling of ferrous and non-ferrous industrial metal",
      "Retired machinery and equipment buying",
      "Regular or scheduled collection for ongoing production scrap",
      "Support with documentation for industrial accounts",
    ],
  },
  {
    slug: "government-account-scrap",
    icon: "shield",
    tone: "steel",
    image: "/images/services/Government-Account-Scrap.avif",
    alt: "Government account scrap handling",
    title: "Government Account Scrap",
    summary: "Scrap buying and handling services for government account materials.",
    paragraphs: [
      "Government departments and public sector offices periodically dispose of decommissioned equipment, vehicles and materials through structured scrap disposal processes. Hope Trading is equipped to handle scrap buying for government accounts, working within the documentation and process requirements these accounts involve.",
      "Our team can discuss the specific requirements of a government account and confirm how we can support the disposal process.",
    ],
    points: [
      "Experience working within government disposal processes",
      "Structured documentation and record-keeping",
      "Handling of decommissioned equipment and materials",
      "Direct coordination with the concerned department",
    ],
  },
  {
    slug: "scrap-tender",
    icon: "document",
    tone: "emeraldLight",
    image: "/images/services/scrap-tender.webp",
    alt: "Scrap tender buying services",
    title: "Scrap Tender",
    summary: "Professional scrap buying services through tender opportunities.",
    paragraphs: [
      "Many organisations dispose of large scrap lots through a tender process. Hope Trading participates in scrap tenders professionally, submitting quotes and following the process required by the issuing organisation.",
      "If your organisation is planning to issue a scrap tender, get in touch and our team will guide you through the information we typically need to submit a quote.",
    ],
    points: [
      "Participation in scrap disposal tenders",
      "Clear, professional quoting process",
      "Handling of large, one-time scrap lots",
      "Reliable follow-through on awarded tenders",
    ],
  },
  {
    slug: "bank-scrap-tender",
    icon: "bank",
    tone: "copper",
    image: "/images/services/bank-scrap-tender.webp",
    alt: "Bank scrap tender materials and equipment",
    title: "Bank Scrap Tender",
    summary: "Services for bank-related scrap tender materials.",
    paragraphs: [
      "Banks and financial institutions periodically dispose of scrap through tenders — decommissioned IT equipment, furniture, security fixtures and branch fit-out materials. Hope Trading handles bank scrap tenders with the professionalism and documentation these accounts require.",
      "We're happy to share our process and past experience when a bank or financial institution is preparing a scrap tender.",
    ],
    points: [
      "Experience with bank and financial institution tenders",
      "Handling of decommissioned IT and branch equipment",
      "Compliant, well-documented process",
      "Point of contact for the full tender lifecycle",
    ],
  },
];

export default services;
