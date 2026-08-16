import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { categories, portfolioProjects } from '../data/portfolio'
import PortfolioModal from '../components/PortfolioModal'

export default function Portfolio() {
  const revealRef = useScrollReveal()
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects =
    activeCategory === 'All'
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory)

  return (
    <section id="portfolio" ref={revealRef} className="py-24 sm:py-32 border-t border-line">
      <div className="container-custom">
        <div data-reveal className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">
              A sample of the kind of work I do
            </h2>
          </div>
        </div>

        {/* Category filters */}
        <div
          data-reveal
          className="reveal mt-10 flex gap-2 overflow-x-auto pb-2 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-4 py-2 text-sm font-mono rounded-[2px] border transition-colors duration-200 ${
                activeCategory === category
                  ? 'border-redline text-redline bg-redline-tint'
                  : 'border-line text-ink-soft hover:border-ink/40 hover:text-ink'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              data-reveal
              className="reveal group text-left border border-line bg-paper rounded-[3px] p-6 sm:p-7 transition-all duration-300 hover:border-redline/60 hover:shadow-[0_18px_40px_-24px_rgba(30,27,22,0.35)] focus-visible:outline-2 focus-visible:outline-redline"
              style={{ transitionDelay: `${0.05 * (index % 3)}s` }}
            >
              <span className="section-label text-redline">{project.category}</span>
              <h3 className="mt-3 font-display text-xl text-ink">{project.title}</h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.services.slice(0, 2).map((service) => (
                  <span
                    key={service}
                    className="text-[11px] font-mono text-ink-faint border border-line-soft px-2 py-1 rounded-[2px]"
                  >
                    {service}
                  </span>
                ))}
              </div>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink group-hover:text-redline transition-colors">
                View Project
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          ))}
        </div>

        <p data-reveal className="reveal mt-10 text-xs text-ink-faint max-w-xl leading-relaxed">
          Portfolio samples are shown for demonstration. Client materials are
          displayed only with appropriate permission.
        </p>
      </div>

      <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
