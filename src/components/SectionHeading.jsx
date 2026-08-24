export default function SectionHeading({ eyebrow, title, text, center = true, light = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-brand-ink'
        }`}
      >
        {title}
      </h2>
      {text && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-white/80' : 'text-brand-slate'}`}>
          {text}
        </p>
      )}
    </div>
  )
}
