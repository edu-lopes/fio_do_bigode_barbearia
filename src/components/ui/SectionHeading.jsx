export default function SectionHeading({ eyebrow, title, subtitle, id, className = '' }) {
  return (
    <header className={`section-heading ${className}`}>
      {eyebrow && <p className="section-heading__eyebrow">{eyebrow}</p>}
      <h2 id={id} className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  )
}
