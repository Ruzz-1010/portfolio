/**
 * ---------------------------------------------------------------------------
 * Portfolio content — edit everything here.
 * ---------------------------------------------------------------------------
 * All copy, links, projects, and experience on the site come from this file,
 * so you can personalize the site without touching any component code.
 */

// Keeps public assets working from the repo root in dev and /portfolio/ on GitHub Pages.
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

export const profile = {
  name: 'Ruzz',
  role: 'Full-Stack Developer',
  location: 'Puerto Princesa City, PH',
  email: 'johnruzzelcorrea8@gmail.com',
  resumeUrl: asset('resume.pdf'),
  availability: 'Open to internships & junior roles',
  currentlyBuilding: 'FALCON-01',
  // Used in the hero + meta description copy.
  tagline:
    'Student developer from Palawan building full-stack products with React, Laravel, Flutter, and Python — and caring about the details that make software feel effortless.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Ruzz-1010', icon: 'github' },
    {
      label: 'Email',
      href: 'mailto:johnruzzelcorrea8@gmail.com',
      icon: 'mail',
    },
  ],
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '5', label: 'Public repos on GitHub' },
  { value: '2', label: 'Thesis projects' },
  { value: '4', label: 'Full-stack builds' },
]

export const techMarquee = [
  'React',
  'TypeScript',
  'Python',
  'Laravel',
  'Flutter',
  'Dart',
  'Tailwind CSS',
  'Node.js',
  'MongoDB',
  'PostgreSQL',
  'ESP32',
  'Docker',
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    description: 'Responsive interfaces in React and Flutter, with Tailwind and Material 3.',
    items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Flutter', 'Framer Motion'],
  },
  {
    title: 'Backend',
    icon: 'server',
    description: 'APIs, auth, and data models with Laravel, Express, and SQL/NoSQL.',
    items: ['Laravel', 'PHP', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Tooling & DevOps',
    icon: 'wrench',
    description: 'A Linux-first workflow — Git, Docker, Vercel, and a lot of terminal.',
    items: ['Git & GitHub', 'Docker', 'Vercel', 'Linux', 'Figma', 'Postman'],
  },
]

export const additionalSkills = [
  'Python',
  'SQLite',
  'Socket.IO',
  'Supabase',
  'Alpine.js',
  'PayMongo',
  'Leaflet',
  'Arduino',
]

export const projects = [
  {
    title: 'FALCON-01',
    tagline: 'AI-assisted coastal observation buoy',
    description:
      'A thesis-stage IoT buoy that tracks wave pressure, wind, GPS drift, and solar power, streaming live telemetry into a React dashboard with short-term wave-height prediction.',
    tags: ['Python', 'React', 'TypeScript', 'ESP32', 'SQLite'],
    year: '2026',
    image: asset('projects/falcon-01.webp'),
    imageAlt:
      'FALCON-01 home page — solar-powered coastal observation buoy presentation',
    accent: '#cbf65f',
    featured: true,
    wide: true,
    source: 'https://github.com/Ruzz-1010/Project-FALCON-01',
  },
  {
    title: 'PuertoScanCare',
    tagline: 'Prescription-to-pharmacy decision support',
    description:
      'An AI-assisted thesis app that turns verified prescriptions into quantity-aware pharmacy comparisons — factoring in stock, cost, distance, and inventory freshness. Built in Flutter with Material 3.',
    tags: ['Flutter', 'Dart', 'Riverpod', 'Material 3'],
    year: '2026',
    image: asset('projects/puertoscancare.webp'),
    imageAlt:
      'PuertoScanCare welcome screen — prescription-to-pharmacy decision support app',
    accent: '#9fd8a8',
    featured: false,
    private: true,
  },
  {
    title: 'Pickleball Reservation',
    tagline: 'Bookings, payments & court ops',
    description:
      'A Laravel reservation platform for a private pickleball facility — court availability, PayMongo QRPh checkout, receipts, email confirmations, and admin reporting.',
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'Tailwind CSS', 'Alpine.js'],
    year: '2026',
    image: asset('projects/pickleball.webp'),
    imageAlt:
      'San Jose Pickleball home page — court reservation hero with live availability',
    accent: '#cbf65f',
    featured: false,
    source: 'https://github.com/Ruzz-1010/Private-Sports-Court-Reservation-System',
  },
  {
    title: 'Food Ordering Platform',
    tagline: 'Multi-role delivery, live tracking',
    description:
      'A full-stack food ordering platform with customer, restaurant, rider, and admin dashboards — role-based auth, live order tracking, restaurant analytics, and map-based delivery.',
    tags: ['React', 'Express', 'MongoDB', 'Tailwind CSS', 'Leaflet'],
    year: '2026',
    image: asset('projects/food-ordering.webp'),
    imageAlt:
      'FoodExpress home page — food delivery storefront with featured restaurants',
    accent: '#e8e2cf',
    featured: false,
    source: 'https://github.com/Ruzz-1010/food-ordering-app',
  },
]

export const experience = [
  {
    role: 'Thesis Developer — IoT & AI',
    company: 'Project FALCON-01',
    icon: 'cpu',
    period: '2026 — Present',
    location: 'Fullbright College',
    accent: '#cbf65f',
    description:
      'Building the software stack for a coastal monitoring buoy that turns marine sensor data into live, decision-ready telemetry.',
    highlights: [
      'Developed the React + TypeScript dashboard for live wave, wind, GPS, and power telemetry.',
      'Connected an ESP32 edge service with SQLite history, event-driven alerts, and a local fallback UI.',
      'Built a short-term wave-height forecasting pipeline with presentation-ready scenarios and backtests.',
    ],
    tech: ['Python', 'React', 'TypeScript', 'ESP32'],
  },
  {
    role: 'Full-Stack Developer — Capstone',
    company: 'PuertoScanCare',
    icon: 'smartphone',
    period: '2026 — Present',
    location: 'Fullbright College',
    accent: '#9fd8a8',
    description:
      'Designing an AI-assisted prescription-to-pharmacy decision-support app for patients in Puerto Princesa City.',
    highlights: [
      'Built responsive Patient, Pharmacy Staff, and Administrator shells in Flutter with Material 3.',
      'Set up Riverpod state management and go_router navigation foundations for the app.',
      'Documented the Supabase, OCR, pharmacy comparison, and notification implementation roadmap.',
    ],
    tech: ['Flutter', 'Dart', 'Riverpod', 'Material 3'],
  },
  {
    role: 'Full-Stack Developer — Academic & Freelance',
    company: 'Selected projects',
    icon: 'layers',
    period: '2025 — Present',
    location: 'Puerto Princesa City',
    accent: '#e8e2cf',
    description:
      'Shipped reservation, ordering, and booking systems end to end — from schema and API design to production UI.',
    highlights: [
      'Built a Laravel + PostgreSQL pickleball court reservation system with PayMongo checkout.',
      'Shipped a React + Express + MongoDB food ordering platform with four role-based dashboards.',
      'Deployed full-stack apps on Vercel with live demos and documented setup guides.',
    ],
    tech: ['Laravel', 'React', 'Express', 'MongoDB'],
  },
]

export const principles = [
  {
    title: 'Product-minded',
    description: 'I ask why before how, and care about the outcome, not just the output.',
    icon: 'compass',
  },
  {
    title: 'Performance-first',
    description: 'Fast is a feature. I measure, profile, and optimize the critical path.',
    icon: 'gauge',
  },
  {
    title: 'Accessible by default',
    description: 'Semantic markup, keyboard support, and thoughtful states — not an afterthought.',
    icon: 'accessibility',
  },
]

export const quickFacts = [
  { label: 'Location', value: 'Puerto Princesa City, PH', icon: 'pin' },
  { label: 'School', value: 'Fullbright College', icon: 'briefcase' },
  { label: 'Focus', value: 'Full-stack & IoT', icon: 'target' },
  { label: 'Currently', value: 'Building FALCON-01', icon: 'sparkles' },
]
