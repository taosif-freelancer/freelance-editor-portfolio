import { useState } from 'react'
import { ArrowUpRight, Mail, CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { siteConfig } from '../data/siteConfig'

const projectTypes = [
  'Editing & Proofreading',
  'AI Text Humanization',
  'Academic Editing',
  'APA & MLA Formatting',
  'General Content Editing',
  'Professional Document Editing',
  'Other',
]

const initialForm = { name: '', email: '', projectType: '', message: '' }

export default function Contact() {
  const revealRef = useScrollReveal()
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate(values) {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.projectType) next.projectType = 'Please select a project type.'
    if (!values.message.trim()) next.message = 'Please add a short message.'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    const subject = `New inquiry: ${form.projectType}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\n\n${form.message}`
    window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
    setForm(initialForm)
  }

  return (
    <section id="contact" ref={revealRef} className="py-24 sm:py-32 border-t border-line">
      <div className="container-custom grid lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20">
        <div data-reveal className="reveal">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl text-ink">
            Get in touch
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed max-w-sm">
            Fiverr is the preferred and fastest way to reach me — it keeps
            requirements, files, and payment in one place.
          </p>

          <a
            href={siteConfig.fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6"
          >
            Message Me on Fiverr
            <ArrowUpRight size={16} />
          </a>

          <div className="mt-8 flex items-center gap-2 text-sm text-ink-soft">
            <Mail size={16} className="text-ink-faint" />
            <a href={`mailto:${siteConfig.email}`} className="hover:text-redline transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div data-reveal className="reveal" style={{ transitionDelay: '0.1s' }}>
          <form onSubmit={handleSubmit} noValidate className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="section-label">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus-visible:border-redline rounded-[2px]"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-redline">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email" className="section-label">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus-visible:border-redline rounded-[2px]"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-redline">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="projectType" className="section-label">
                Project type
              </label>
              <select
                id="projectType"
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                aria-invalid={Boolean(errors.projectType)}
                aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus-visible:border-redline rounded-[2px]"
              >
                <option value="">Select a project type&hellip;</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p id="projectType-error" className="mt-1.5 text-xs text-redline">
                  {errors.projectType}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="message" className="section-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink focus-visible:border-redline rounded-[2px] resize-none"
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-redline">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="btn-accent">
                Send Message
              </button>
              <p className="mt-3 text-xs text-ink-faint leading-relaxed">
                This form has no backend — submitting opens your email client
                with the details filled in. Fiverr is the fastest way to
                reach me.
              </p>
              {sent && (
                <p className="mt-3 flex items-center gap-1.5 text-sm text-redline">
                  <CheckCircle2 size={16} />
                  Your email client should now be open with the message ready to send.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
