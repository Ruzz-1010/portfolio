/**
 * ---------------------------------------------------------------------------
 * Portfolio content — edit everything here.
 * ---------------------------------------------------------------------------
 * All copy, links, projects, and experience on the site come from this file,
 * so you can personalize the site without touching any component code.
 */

export const profile = {
  name: 'Ruzz',
  role: 'Full-Stack Developer',
  location: 'Remote · Worldwide',
  email: 'hello@ruzz.dev',
  resumeUrl: '/resume.pdf',
  availability: 'Open to new opportunities',
  currentlyBuilding: 'Nimbus 2.0',
  // Used in the hero + meta description copy.
  tagline:
    'I build fast, accessible products with React, TypeScript, and Node.js — and I care about the details that make software feel effortless.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/ruzz', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ruzz', icon: 'linkedin' },
    { label: 'X', href: 'https://x.com/ruzz', icon: 'x' },
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
  { value: '4+', label: 'Years building for the web' },
  { value: '25+', label: 'Projects shipped' },
  { value: '8', label: 'Open-source repos' },
]

export const techMarquee = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'GraphQL',
  'Docker',
  'AWS',
  'Figma',
]

export const skillGroups = [
  {
    title: 'Frontend',
    icon: 'layout',
    description: 'Interfaces that are fast, accessible, and a joy to use.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Backend',
    icon: 'server',
    description: 'APIs and data models built to scale from day one.',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'GraphQL', 'Redis'],
  },
  {
    title: 'Tooling & DevOps',
    icon: 'wrench',
    description: 'The workflow behind shipping reliably, every day.',
    items: ['Git & GitHub', 'Docker', 'CI/CD', 'AWS', 'Playwright', 'Figma'],
  },
]

export const additionalSkills = [
  'Vitest',
  'Jest',
  'Supabase',
  'Vercel',
  'Linux',
  'Postman',
  'Sentry',
  'Stripe',
]

export const projects = [
  {
    title: 'Nimbus',
    tagline: 'Analytics for SaaS teams',
    description:
      'A realtime analytics platform that turns product events into clear, actionable insights. Built for speed with streaming data and a keyboard-first UI.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    year: '2025',
    visual: 'dashboard',
    accent: '#ff6b35',
    featured: true,
    wide: true,
    live: 'https://github.com/ruzz',
    source: 'https://github.com/ruzz',
  },
  {
    title: 'Pulse',
    tagline: 'Realtime infrastructure, simplified',
    description:
      'A developer-friendly API for adding presence, live cursors, and collaborative state to any web app — with sub-50ms updates and a tiny client.',
    tags: ['Node.js', 'WebSockets', 'Redis', 'Docker'],
    year: '2024',
    visual: 'terminal',
    accent: '#7ce7c4',
    featured: false,
    live: 'https://github.com/ruzz',
    source: 'https://github.com/ruzz',
  },
  {
    title: 'Snippet Vault',
    tagline: 'Your code, one keystroke away',
    description:
      'A local-first snippet manager with fuzzy search, syntax highlighting, and AI-assisted tagging. Works offline and syncs when you want it to.',
    tags: ['React', 'Vite', 'SQLite', 'Tailwind CSS'],
    year: '2024',
    visual: 'snippets',
    accent: '#b9a7ff',
    featured: false,
    live: 'https://github.com/ruzz',
    source: 'https://github.com/ruzz',
  },
  {
    title: 'Orbit UI',
    tagline: 'An open-source design system',
    description:
      'A headless component library and design token system used across three production apps. Accessible by default and themeable in minutes.',
    tags: ['TypeScript', 'Radix UI', 'Storybook', 'Tailwind CSS'],
    year: '2023',
    visual: 'design',
    accent: '#ffd166',
    featured: false,
    live: 'https://github.com/ruzz',
    source: 'https://github.com/ruzz',
  },
]

export const experience = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    period: '2023 — Present',
    location: 'Remote',
    accent: '#ff6b35',
    description:
      'Lead frontend architecture for a B2B analytics suite used by 10k+ teams, partnering closely with design and product to raise the bar for craft.',
    highlights: [
      'Rebuilt the design system, cutting UI bugs by 40% and shipping velocity by 25%.',
      'Drove Core Web Vitals from “needs improvement” to green across all key routes.',
      'Mentored three engineers and introduced a lightweight RFC process for frontend changes.',
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Pixel Forge',
    period: '2021 — 2023',
    location: 'Hybrid',
    accent: '#7ce7c4',
    description:
      'Shipped end-to-end features for early-stage startups — from database schema and API design to production-ready interfaces.',
    highlights: [
      'Built a multi-tenant billing flow with Stripe that processed $2M+ in its first year.',
      'Reduced average API response time by 60% through query tuning and caching.',
      'Set up CI/CD pipelines that took deploys from 30 minutes to under 5.',
    ],
    tech: ['Node.js', 'PostgreSQL', 'React', 'Docker'],
  },
  {
    role: 'Frontend Developer',
    company: 'Brightside Studio',
    period: '2019 — 2021',
    location: 'On-site',
    accent: '#b9a7ff',
    description:
      'Turned polished designs into fast, responsive marketing sites and web apps for clients across publishing and e-commerce.',
    highlights: [
      'Delivered 15+ client sites, consistently hitting 90+ Lighthouse scores.',
      'Introduced a component-first workflow that halved new page build time.',
    ],
    tech: ['JavaScript', 'React', 'SCSS', 'Figma'],
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
  { label: 'Location', value: 'Remote · Worldwide', icon: 'pin' },
  { label: 'Experience', value: '4+ years', icon: 'briefcase' },
  { label: 'Focus', value: 'Product engineering', icon: 'target' },
  { label: 'Currently', value: 'Building Nimbus 2.0', icon: 'sparkles' },
]
