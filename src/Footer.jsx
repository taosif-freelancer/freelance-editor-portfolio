import { Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'
import { siteConfig, navLinks } from '../data/siteConfig'

const socialIcons = {
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
}

export default function Footer() {
  const year = new Date().getFullYear()
  const socialEntries = Object.entries(siteConfig.social).filter(([, url]) => url)

  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-custom py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display italic text-xl text-ink">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-ink-soft">{siteConfig.tagline}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-ink-soft hover:text-redline transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.fiverrUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-redline transition-colors"
            >
              Fiverr
            </a>
          </nav>

          {socialEntries.length > 0 && (
            <div className="flex gap-4">
              {socialEntries.map(([key, url]) => {
                const Icon = socialIcons[key]
                if (!Icon) return null
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={key}
                    className="text-ink-soft hover:text-redline transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          )}
        </div>

        <div className="rule mt-10 mb-6" />

        <p className="text-xs text-ink-faint">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
