import { useEffect, useRef } from 'react'
export function useScrollReveal() {
  const containerRef = useRef(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const targets = container.querySelectorAll('[data-reveal]')
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') { targets.forEach((el) => el.classList.add('is-visible')); return }
    const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) } }) }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return containerRef
}
