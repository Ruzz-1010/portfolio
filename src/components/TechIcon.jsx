import {
  SiDocker,
  SiDockerHex,
  SiExpress,
  SiFigma,
  SiFigmaHex,
  SiFramer,
  SiFramerHex,
  SiGithub,
  SiGraphql,
  SiGraphqlHex,
  SiJest,
  SiJestHex,
  SiLinux,
  SiLinuxHex,
  SiNextdotjs,
  SiNodedotjs,
  SiNodedotjsHex,
  SiPostgresql,
  SiPostgresqlHex,
  SiPostman,
  SiPostmanHex,
  SiPrisma,
  SiReact,
  SiReactHex,
  SiRedis,
  SiRedisHex,
  SiSentry,
  SiStripe,
  SiStripeHex,
  SiSupabase,
  SiSupabaseHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiVercel,
  SiVite,
  SiViteHex,
  SiVitest,
  SiVitestHex,
} from '@icons-pack/react-simple-icons'
import { Cloud, FlaskConical, Workflow } from 'lucide-react'

const techMap = {
  react: { Icon: SiReact, color: SiReactHex },
  'next.js': { Icon: SiNextdotjs, color: '#f5efe6' },
  typescript: { Icon: SiTypescript, color: SiTypescriptHex },
  'tailwind css': { Icon: SiTailwindcss, color: SiTailwindcssHex },
  'framer motion': { Icon: SiFramer, color: SiFramerHex },
  vite: { Icon: SiVite, color: SiViteHex },
  'node.js': { Icon: SiNodedotjs, color: SiNodedotjsHex },
  express: { Icon: SiExpress, color: '#e7e2db' },
  postgresql: { Icon: SiPostgresql, color: SiPostgresqlHex },
  prisma: { Icon: SiPrisma, color: '#a5b4fc' },
  graphql: { Icon: SiGraphql, color: SiGraphqlHex },
  redis: { Icon: SiRedis, color: SiRedisHex },
  'git & github': { Icon: SiGithub, color: '#f5efe6' },
  docker: { Icon: SiDocker, color: SiDockerHex },
  'ci/cd': { Icon: Workflow, color: '#ffd166' },
  aws: { Icon: Cloud, color: '#ffb84d' },
  playwright: { Icon: FlaskConical, color: '#7ce7c4' },
  figma: { Icon: SiFigma, color: SiFigmaHex },
  vitest: { Icon: SiVitest, color: SiVitestHex },
  jest: { Icon: SiJest, color: SiJestHex },
  supabase: { Icon: SiSupabase, color: SiSupabaseHex },
  vercel: { Icon: SiVercel, color: '#f5efe6' },
  linux: { Icon: SiLinux, color: SiLinuxHex },
  postman: { Icon: SiPostman, color: SiPostmanHex },
  sentry: { Icon: SiSentry, color: '#a78bfa' },
  stripe: { Icon: SiStripe, color: SiStripeHex },
}

export function getTech(name) {
  return techMap[name.toLowerCase().trim()]
}

export default function TechIcon({ name, size = 15, className = '' }) {
  const entry = getTech(name)
  if (!entry) {
    return <span className={`inline-block size-1.5 rounded-full bg-muted ${className}`} aria-hidden="true" />
  }

  const { Icon, color } = entry
  return <Icon size={size} color={color} className={className} aria-hidden="true" />
}
