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
    title: "Jan's Hair / Online Store & Wigs",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/janshair/janshair-hero.jpg",
    liveUrl: "https://www.janshair.store/",
    description: "Online store and checkout for raw hair bundles and wigs, live in production at janshair.store.",
    deliverables: [
      "Custom E-Commerce Store",
      "Full Web Development",
      "Mobile-First Responsive Design",
      "Live Production Deployment",
    ],
  },
  {
    id: "ronava",
    title: "Ronova / Travel Planning & Booking",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/ronava-hero.webp",
    liveUrl: "https://ronava.vercel.app/",
    demoUrl: "https://ronava.vercel.app/",
    description: "Travel planning and booking website for flights, vacation stays, and custom trips.",
    deliverables: [
      "Travel Brand Identity",
      "Trip Planning Interface",
      "Stays & Flights Showcase",
      "Mobile-First Responsive Layout",
    ],
  },
  {
    id: "obe-kitchen",
    title: "Obe Kitchen / Charcoal Food in Lagos",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/obe-kitchen.webp",
    liveUrl: "https://obe-kitchen-w-a-eight.vercel.app/",
    demoUrl: "https://obe-kitchen-w-a-eight.vercel.app/",
    description: "Online food menu and ordering for a charcoal kitchen in Ikoyi, Lagos.",
    deliverables: [
      "Restaurant Brand System",
      "Charcoal Kitchen Menu",
      "Direct WhatsApp Ordering",
      "Fast-Loading Mobile Site",
    ],
  },
  {
    id: "comfort-clean",
    title: "Comfort Clean / Cleaning Services",
    type: "Client Project",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/comfort-clean.webp",
    liveUrl: "https://comfort-clean.vercel.app/",
    demoUrl: "https://comfort-clean.vercel.app/",
    description: "Home, office, and student room cleaning service with quick price quotes.",
    deliverables: [
      "Service Catalog Layout",
      "Quote Request Architecture",
      "Local Areas Coverage View",
      "Mobile-First Responsive Design",
    ],
  },
  {
    id: "estara",
    title: "Estara / Modern Homes in Lagos",
    type: "Interactive Demo",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/estara.webp",
    demoUrl: "/demos/estara/index.html",
    description: "Real estate directory for finding modern homes and apartments in Lagos.",
    deliverables: [
      "Property Showcase Layout",
      "Clean Typography System",
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
    description: "Basketball academy website with training schedules, coach profiles, and sign-ups.",
    deliverables: [
      "High-Energy Layout",
      "Interactive Training Schedule",
      "Fast-Loading Frontend",
    ],
  },
  {
    id: "aura-dental",
    title: "Aura Dental / Dental Clinic & Booking",
    type: "Interactive Demo",
    service: "UI/UX & Web Development",
    year: "2026",
    image: "/work/demos/aura-dental.webp",
    demoUrl: "/demos/aura-dental/index.html",
    description: "Dental clinic website with treatment prices and online appointment booking.",
    deliverables: [
      "Clean Healthcare Layout",
      "Appointment Booking Flow",
      "Mobile-Friendly Design",
    ],
  },
  {
    id: "mi-kafetal",
    title: "Mi Kafetal / Coffee Shop & Menu",
    type: "Concept Design",
    service: "UI/UX Design",
    year: "2026",
    image: "/work/mi-kafetal/golden-honey.jpg",
    description: "Coffee shop menu and order flow that changes color with each coffee roast.",
    deliverables: [
      "Coffee Store UI/UX",
      "Roast-Adaptive Colors",
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