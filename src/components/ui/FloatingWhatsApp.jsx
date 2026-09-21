import { IconWhatsapp } from '../icons/Icons'
import useSectionVisible from '../../hooks/useSectionVisible'
import { site } from '../../data/site'

export default function FloatingWhatsApp() {
  const hidden = useSectionVisible(['inicio', 'agendar'])

  return (
    <a
      href={`https://wa.me/${site.phoneRaw}?text=${encodeURIComponent('Olá! Vim pelo site da Fio do Bigode.')}`}
      className={`fab ${hidden ? 'is-hidden' : ''}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      tabIndex={hidden ? -1 : 0}
    >
      <IconWhatsapp size={26} />
    </a>
  )
}
