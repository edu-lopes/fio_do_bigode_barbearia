import { IconScissors, IconInfo, IconImage, IconPin, IconCalendar } from '../icons/Icons'

const items = [
  { id: 'servicos', label: 'Serviços', Icon: IconScissors },
  { id: 'sobre', label: 'Sobre', Icon: IconInfo },
  { id: 'agendar', label: 'Agendar', Icon: IconCalendar, primary: true },
  { id: 'galeria', label: 'Galeria', Icon: IconImage },
  { id: 'contato', label: 'Local', Icon: IconPin },
]

export default function MobileNav({ activeId }) {
  return (
    <nav className="mobile-nav" aria-label="Navegação principal">
      <ul className="mobile-nav__list">
        {items.map(({ id, label, Icon, primary }) => {
          const active = activeId === id
          return (
            <li key={id} className={primary ? 'mobile-nav__item mobile-nav__item--primary' : 'mobile-nav__item'}>
              <a
                href={`#${id}`}
                className={`mobile-nav__link ${active ? 'is-active' : ''}`}
                aria-current={active ? 'true' : undefined}
              >
                <span className="mobile-nav__icon">
                  <Icon size={primary ? 26 : 22} />
                </span>
                <span className="mobile-nav__label">{label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
