import Icon from './Icon'
import { iconBg } from './colorMap'

export default function FocusCard({ icon, title, text, color = 'blue' }) {
  return (
    <div className="group h-full rounded-2xl border border-brand-mist bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${iconBg[color]}`}>
        <Icon name={icon} className="h-7 w-7" />
      </div>
      <h3 className="mt-5 text-lg font-bold text-brand-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-slate">{text}</p>
    </div>
  )
}
