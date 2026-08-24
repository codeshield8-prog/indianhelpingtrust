import { org } from '../data/site'
import Icon from './Icon'

// Fixed click-to-chat button. wa.me opens the app on mobile / WhatsApp Web on desktop.
export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${org.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/10 transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  )
}
