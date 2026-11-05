import { profile } from '../data/portfolio'
import { socialIcons } from './icons'

const hoverStyles = {
  github: 'hover:border-cream/30 hover:bg-cream/10 hover:text-cream',
  linkedin: 'hover:border-[#0a66c2]/50 hover:bg-[#0a66c2]/15 hover:text-[#8cc8ff]',
  x: 'hover:border-cream/30 hover:bg-cream/10 hover:text-cream',
  mail: 'hover:border-accent/40 hover:bg-accent/10 hover:text-accent',
}

export default function SocialLinks({
  size = 17,
  className = '',
  itemClassName = '',
  iconClassName = '',
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {profile.socials.map((social) => {
        const Icon = socialIcons[social.icon]
        if (!Icon) return null

        const isExternal = social.href.startsWith('http')

        return (
          <a
            key={social.label}
            href={social.href}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            aria-label={social.label}
            title={social.label}
            className={`group grid size-10 place-items-center rounded-full border border-transparent text-muted transition-all duration-200 hover:-translate-y-0.5 ${hoverStyles[social.icon] ?? 'hover:bg-cream/[0.05] hover:text-cream'} ${itemClassName}`}
          >
            <Icon
              size={size}
              className={`transition-transform duration-200 group-hover:scale-110 ${iconClassName}`}
            />
          </a>
        )
      })}
    </div>
  )
}
