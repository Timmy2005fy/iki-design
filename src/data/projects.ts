export interface GalleryImage {
  src: string;
  title: string;
  note?: string;
  accent?: string;
}

export interface Project {
  id: string;
  title: string;
  type: "Client Project" | "Concept Design" | "Interactive Demo";
  service: "UI/UX Design" | "Web Development" | "UI/UX & Web Development";
  year: string;
  image: string;
  description: string;
  deliverables?: string[];
  liveUrl?: string;
  demoUrl?: string;
  gallery?: GalleryImage[];
}

export const PROJECTS: Project[] = [
  {
    id: "jans-hair",
    title: "Jan's Hair / Luxury E-Commerce Flagship",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/janshair/janshair-hero.jpg",
    liveUrl: "https://www.janshair.store/",
    description: "Bespoke digital storefront and custom frontend engineering, operating live in production at janshair.store.",
    deliverables: [
      "Custom E-Commerce UI/UX",
      "Full Web Development",
      "Mobile-First Responsive Architecture",
      "Live Production Deployment",
    ],
  },
  {
    id: "ronava",
    title: "Ronova / Curated Journeys & Bespoke Travel",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/ronava.webp",
    liveUrl: "https://ronava.vercel.app/",
    demoUrl: "https://ronava.vercel.app/",
    description: "Handcrafted sanctuaries, private villas, and bespoke global travel logistics tailored for the discerning traveler.",
  },
  {
    id: "obe-kitchen",
    title: "Obe Kitchen / Charcoal Cuisine in Lagos",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/obe-kitchen.webp",
    liveUrl: "https://obe-kitchen-w-a-eight.vercel.app/",
    demoUrl: "https://obe-kitchen-w-a-eight.vercel.app/",
    description: "Authentic Nigerian culinary storefront and digital menu experience cooked over charcoal in Ikoyi, Lagos.",
  },
  {
    id: "comfort-clean",
    title: "Comfort Clean / Professional Cleaning Services",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/comfort-clean.webp",
    liveUrl: "https://comfort-clean.vercel.app/",
    demoUrl: "https://comfort-clean.vercel.app/",
    description: "Modern residential, move-in, and commercial cleaning booking interface with instant quote requests.",
  },
  {
    id: "estara",
    title: "Estara / Minimalist Living in Lagos",
    type: "Interactive Demo",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/estara.webp",
    demoUrl: "/demos/estara/index.html",
    description: "Editorial real estate experience with clean spatial hierarchy, dynamic property filtering, and tactile typography.",
    deliverables: [
      "Interactive Hero & Showcase",
      "Editorial Typography System",
      "Responsive Property Grid",
    ],
  },
  {
    id: "apex-hoops",
    title: "Apex Hoops / Basketball Academy",
    type: "Interactive Demo",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/apex-hoops.webp",
    demoUrl: "/demos/apex-hoops/index.html",
    description: "Kinetic sports academy landing page featuring sunset chromatic palette, athlete rosters, and training schedules.",
    deliverables: [
      "Kinetic Layout",
      "Interactive Program Schedule",
      "High-Performance Frontend",
    ],
  },
  {
    id: "aura-dental",
    title: "Aura Dental / Modern Precision Dental Care",
    type: "Interactive Demo",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/aura-dental.webp",
    demoUrl: "/demos/aura-dental/index.html",
    description: "High-trust clinical web interface featuring precision medical typography, treatment calculators, and online booking.",
    deliverables: [
      "Clinical UI/UX System",
      "Appointment Booking Flow",
      "Mobile Responsive Architecture",
    ],
  },
  {
    id: "mi-kafetal",
    title: "Mi Kafetal / Artisanal Coffee",
    type: "Concept Design",
    service: "UI/UX Design",
    year: "2026",
    image: "/work/mi-kafetal/golden-honey.jpg",
    description: "Flavor-adaptive digital menu and storefront for a specialty coffee roaster, featuring dynamic roast themes.",
    deliverables: [
      "UI/UX Design System",
      "Flavor-Adaptive Themes",
      "Interactive Menu Flow",
    ],
    gallery: [
      {
        src: "/work/mi-kafetal/golden-honey.jpg",
        title: "Golden Honey Roast",
        note: "Light-roast Ethiopian Yirgacheffe and toasted hazelnut warmth.",
        accent: "#B8860B",
      },
      {
        src: "/work/mi-kafetal/nordic-sea-salt.jpg",
        title: "Nordic Sea Salt Mocha",
        note: "Cold brew with 72% dark chocolate and Atlantic sea salt.",
        accent: "#1A365D",
      },
      {
        src: "/work/mi-kafetal/spiced-caramel.jpg",
        title: "Spiced Caramel Toffee",
        note: "Espresso swirled with brown butter caramel.",
        accent: "#C05621",
      },
      {
        src: "/work/mi-kafetal/matcha-cardamom.jpg",
        title: "Matcha Cardamom Crema",
        note: "Organic Uji matcha balanced with delicate espresso.",
        accent: "#22543D",
      },
    ],
  },
];