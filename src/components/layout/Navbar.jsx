import { useEffect, useRef, useState } from 'react'
import Logo from '../icons/Logo'
import Button from '../ui/Button'
import { navLinks } from '../../data/site'

export default function Navbar({ activeId }) {
  const [scrolled, setScrolled] = useState(false)
  const [logoHidden, setLogoHidden] = useState(false)
  const logoRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 899px)')
    let raf = 0

    const check = () => {
      raf = 0
      const footer = document.querySelector('footer')
      const logo = logoRef.current
      if (!mobile.matches || !footer || !logo) return setLogoHidden(false)
      setLogoHidden(footer.getBoundingClientRect().top < logo.getBoundingClientRect().bottom)
    }
    const onChange = () => {
      if (!raf) raf = requestAnimationFrame(check)
    }

    check()
    window.addEventListener('scroll', onChange, { passive: true })
    window.addEventListener('resize', onChange)
    return () => {
      window.removeEventListener('scroll', onChange)
      window.removeEventListener('resize', onChange)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          ref={logoRef}
          href="#inicio"
          className="navbar__logo"
          aria-label="Fio do Bigode - voltar ao início"
          aria-hidden={logoHidden || undefined}
          tabIndex={logoHidden ? -1 : undefined}
          style={{
            opacity: logoHidden ? 0 : 1,
            pointerEvents: logoHidden ? 'none' : 'auto',
            transition: 'transform 300ms var(--ease), opacity 300ms ease',
          }}
        >
          <Logo />
        </a>

        <nav className="navbar__pill" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`navbar__link ${activeId === link.id ? 'is-active' : ''}`}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href="#agendar" variant="ghost" className="navbar__cta">
          Agendar Horário
        </Button>
      </div>
    </header>
  )
}