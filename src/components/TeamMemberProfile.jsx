const accentText = { green: 'text-brand-green', orange: 'text-brand-orange', blue: 'text-brand-blue' }
const accentBar = { green: 'bg-brand-green', orange: 'bg-brand-orange', blue: 'bg-brand-blue' }
const accentSoft = { green: 'bg-brand-green/15', orange: 'bg-brand-orange/15', blue: 'bg-brand-blue/15' }
const accentBorder = { green: 'border-brand-green', orange: 'border-brand-orange', blue: 'border-brand-blue' }

// Editorial member profile — alternating image/text. Never prefixes the name;
// profession(s) appear on their own line below the name.
export default function TeamMemberProfile({ member, index }) {
  const reverse = index % 2 === 1
  return (
    <div id={member.id} className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-2 lg:gap-16">
      {/* Portrait */}
      <div className={reverse ? 'lg:order-2' : ''}>
        <div className="relative mx-auto max-w-md lg:max-w-none">
          <div className={`absolute -bottom-4 ${reverse ? '-right-4' : '-left-4'} h-32 w-32 rounded-3xl ${accentSoft[member.accent]}`} aria-hidden="true" />
          <div className={`absolute -top-4 ${reverse ? '-left-4' : '-right-4'} h-20 w-20 rounded-2xl bg-brand-orange/15`} aria-hidden="true" />
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}, Indian Helping Trust`}
            loading="lazy"
            decoding="async"
            className={`relative aspect-[4/3] w-full rounded-3xl object-cover shadow-xl ring-1 ring-black/5 ${member.objectPos || 'object-center'}`}
          />
        </div>
      </div>

      {/* Text */}
      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3">
          <span className={`h-6 w-1.5 rounded-full ${accentBar[member.accent]}`} />
          <span className={`text-xs font-bold uppercase tracking-[0.16em] ${accentText[member.accent]}`}>
            {member.role}
          </span>
        </div>

        <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
          {member.name}
        </h3>

        <p className="mt-2 text-base font-semibold text-brand-slate">
          {member.profession.join(' · ')}
        </p>
        <p className="mt-1 text-sm text-brand-slate/80">{member.meta}</p>

        <div className="mt-5 space-y-4">
          {member.story.map((p, i) => (
            <p key={i} className="text-base leading-relaxed text-brand-slate">
              {p}
            </p>
          ))}
        </div>

        {member.highlight && (
          <figure className={`mt-6 rounded-2xl border-l-4 ${accentBorder[member.accent]} bg-brand-greentint p-5`}>
            <blockquote className="text-base font-medium italic leading-relaxed text-brand-ink">
              “{member.highlight}”
            </blockquote>
          </figure>
        )}
      </div>
    </div>
  )
}
