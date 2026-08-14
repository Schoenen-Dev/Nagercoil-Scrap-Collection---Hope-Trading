// Small, original line-icon set. Kept in one file so every component
// references the same visual language instead of mixing icon styles.
const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 4.5c0-1 .8-1.5 1.6-1.5h2.2c.6 0 1.1.4 1.3 1l1 3c.2.6 0 1.2-.5 1.6L8 9.8a13 13 0 0 0 6.2 6.2l1.2-1.6c.4-.5 1-.7 1.6-.5l3 1c.6.2 1 .7 1 1.3v2.2c0 .8-.7 1.6-1.6 1.6C11.7 20 4 12.3 4 4.5Z" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 2.5A9.5 9.5 0 0 0 3.2 16.6L2 22l5.6-1.2A9.5 9.5 0 1 0 12 2.5Zm0 1.8a7.7 7.7 0 1 1 0 15.4c-1.4 0-2.7-.4-3.8-1l-.3-.2-3.1.7.7-3-.2-.3A7.7 7.7 0 0 1 12 4.3Zm-2.6 3.4c-.2 0-.5 0-.7.3-.2.3-.9.9-.9 2.1s1 2.4 1.1 2.6c.1.1 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.4l-2-1c-.3-.1-.5-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.6-.7c.2-.2.2-.4.1-.6l-1-2.3c-.1-.3-.3-.3-.6-.3Z"
      />
    </svg>
  );
}

export function TruckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M2 6h10v9H2z" />
      <path d="M12 10h4l4 3v2h-8z" />
      <circle cx="6.5" cy="17.5" r="1.7" />
      <circle cx="16.5" cy="17.5" r="1.7" />
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16" />
      <path d="M13 21v-9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9" />
      <path d="M8 8h1M8 11h1M8 14h1M2 21h20" />
    </svg>
  );
}

export function FactoryIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 21V11l6 4v-4l6 4V7l6 4v10z" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.5 4.5 5.5V11c0 5 3.2 8.4 7.5 10.5 4.3-2.1 7.5-5.5 7.5-10.5V5.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function DocumentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 2h9l4 4v16H6z" />
      <path d="M14.5 2v4.5H19M9 12h6M9 15.5h6M9 8.5h2" />
    </svg>
  );
}

export function BankIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 10 12 4l9 6" />
      <path d="M4.5 10.5h15V20h-15z" />
      <path d="M4 20h16M8 13.5v4M12 13.5v4M16 13.5v4" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3.5 5.5h17v13h-17z" />
      <path d="m4 6 8 6.5L20 6" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m5 5 14 14M19 5 5 19" />
    </svg>
  );
}

export function BoltIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
    </svg>
  );
}

export function ScaleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3v18M7 21h10" />
      <path d="M12 6 4 8l4 6 4-6-4-2ZM20 8l-4 6 4 6 4-6-4-6ZM4 8 0 8" />
    </svg>
  );
}

export function AwardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.5-1.5 8 5-2.5 5 2.5-1.5-8" />
    </svg>
  );
}

export function RecycleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m9 3.5 3-1.5 3 1.5-1.7 3M15 20.5l-3 1.5-3-1.5 1.7-3M4 14l-1.5-3L4 8l3.4.5M20 14l1.5-3L20 8l-3.4.5" />
      <path d="M12 2v6M12 22v-6M4 8l6 4M20 8l-6 4" />
    </svg>
  );
}

export function LeafIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M20 4C10 4 4 10 4 18c8 0 14-6 14-14Z" />
      <path d="M8 18c2-4 5-7 10-11" />
    </svg>
  );
}

export function CopperIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 6c4 3 4 9 0 12M9 4c4 3 4 13 0 16M14 6c3 2.2 3 9.8 0 12" />
      <circle cx="19" cy="12" r="2.2" />
    </svg>
  );
}

export function BronzeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function AluminiumIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 8h18M3 12h18M3 16h18" />
      <path d="M3 8v8M21 8v8" />
    </svg>
  );
}

export function SteelIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 17V9l4.5-4h9L21 9v8" />
      <path d="M3 17h18M8 17V11h8v6" />
    </svg>
  );
}

export function IronIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="2.5" />
      <path d="M4 9h16M9 4v16" />
    </svg>
  );
}

export function EwasteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="12" rx="1.6" />
      <circle cx="9" cy="11" r="1.6" />
      <path d="M13 8.5h4M13 11h4M13 13.5h2.5M7 17v2.5M17 17v2.5" />
    </svg>
  );
}

export function EboardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4" y="4" width="16" height="16" rx="1.6" />
      <circle cx="9" cy="9" r="1.4" />
      <path d="M9 10.4V13h6V9h-2.5M13 13v3.5M9 16h4" />
    </svg>
  );
}

export function ComputerIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="4.5" width="17" height="11" rx="1.4" />
      <path d="M9 19.5h6M12 15.5v4" />
    </svg>
  );
}

export function TvIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3" y="5" width="18" height="12" rx="1.6" />
      <path d="M9 20.5h6M12 17v3.5M8 4l4 2.5L16 4" />
    </svg>
  );
}

export function MotorIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="11" cy="12" r="6.5" />
      <circle cx="11" cy="12" r="2" />
      <path d="M17.5 12h3.5M21 9.5v5" />
    </svg>
  );
}

export function FridgeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="6" y="2.5" width="12" height="19" rx="1.6" />
      <path d="M6 10h12M9 5.5v2.2M9 13v2.2" />
    </svg>
  );
}

export function ApplianceIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="4.5" y="3" width="15" height="18" rx="1.6" />
      <circle cx="12" cy="13" r="4" />
      <path d="M7.5 6.5h1M11 6.5h1" />
    </svg>
  );
}

export function PaperIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M6 3h9l4 4v14H6z" />
      <path d="M9 11h7M9 14.5h7M9 18h4.5" />
    </svg>
  );
}

export function CardboardIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 8.5 12 4l9 4.5-9 4.5-9-4.5Z" />
      <path d="M3 8.5V17l9 4.5 9-4.5V8.5M12 13v8.5" />
    </svg>
  );
}

export function CoconutIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 5c-1.4-1.6-3-2.2-4.5-2M12 5c1.4-1.6 3-2.2 4.5-2" />
      <circle cx="10" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="14" cy="15" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PlasticIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M8 3h8l1.5 4.5L14 10v9a2 2 0 0 1-4 0v-9L6.5 7.5Z" />
    </svg>
  );
}

export function VehicleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M3 15V11l2.5-5h9L17 11h4v4" />
      <path d="M3 15h18" />
      <circle cx="7.5" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  );
}

export function RailwayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="5" y="4" width="14" height="12" rx="2" />
      <path d="M5 10h14M9 4v12M15 4v12" />
      <path d="M6 19h1.5M16.5 19H18M4 22l3-3M20 22l-3-3" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M13.5 21.9v-8.4h2.8l.4-3.3h-3.2V8.1c0-1 .3-1.6 1.7-1.6h1.6V3.6C16.5 3.6 15.5 3.5 14.4 3.5c-2.3 0-3.9 1.4-3.9 4v2.7H7.7v3.3h2.8v8.4Z"
      />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M10.5 9.5v5l4.5-2.5Z" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M7.8 10v6.5M7.8 7.6v.02M12 16.5V12.6c0-1.4.9-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3v3.9" />
    </svg>
  );
}

export const SERVICE_ICONS = {
  truck: TruckIcon,
  building: BuildingIcon,
  factory: FactoryIcon,
  shield: ShieldIcon,
  document: DocumentIcon,
  bank: BankIcon,
};

export const MATERIAL_ICONS = {
  copper: CopperIcon,
  bronze: BronzeIcon,
  aluminium: AluminiumIcon,
  steel: SteelIcon,
  iron: IronIcon,
  ewaste: EwasteIcon,
  eboard: EboardIcon,
  computer: ComputerIcon,
  tv: TvIcon,
  motor: MotorIcon,
  fridge: FridgeIcon,
  appliance: ApplianceIcon,
  paper: PaperIcon,
  cardboard: CardboardIcon,
  coconut: CoconutIcon,
  plastic: PlasticIcon,
  vehicle: VehicleIcon,
  railway: RailwayIcon,
};

export const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsAppIcon,
};
