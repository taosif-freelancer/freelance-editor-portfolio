import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { siteConfig, navLinks } from '../data/siteConfig'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Refine the navbar's appearance once the page has scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape, and lock background scroll while open.
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-line shadow-[0_1px_0_0_rgba(30,27,22,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="container-custom flex h-16 sm:h-20 items-center justify-between"
      >
        <a
          href="#home"
          className="font-display italic text-lg sm:text-xl text-ink tracking-tight"
        >
          {siteConfig.name}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-soft hover:text-redline transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={siteConfig.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View My Fiverr
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 text-ink"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <ul className="container-custom flex flex-col gap-1 pt-6">
          {navLinks.map((link) => (
            <li key={link.href} className="border-b border-line-soft">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-lg font-display text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="container-custom mt-6">
          <a
            href={siteConfig.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-primary w-full"
          >
            View My Fiverr
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </header>
  )
}
