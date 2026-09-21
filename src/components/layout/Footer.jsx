import Logo from '../icons/Logo'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import Reveal from '../ui/Reveal'
import { IconInstagram, IconX, IconMail, IconGlobe, IconWhatsapp, IconPin } from '../icons/Icons'
import { site, footerColumns } from '../../data/site'

const socials = [
  { label: 'Instagram', href: site.instagramUrl, Icon: IconInstagram },
  { label: 'X (Twitter)', href: '#', Icon: IconX },
  { label: 'E-mail', href: `mailto:${site.email}`, Icon: IconMail },
  { label: 'Site', href: '#inicio', Icon: IconGlobe },
  { label: 'WhatsApp', href: `https://wa.me/${site.phoneRaw}`, Icon: IconWhatsapp },
]

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="footer__inner">
        <Reveal variant="up" className="footer__brand">
          <Logo />
          <p>{site.tagline}</p>
          <ul className="footer__socials">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="up" delay={120} className="footer__cols">
          {footerColumns.map((col) => (
            <div key={col.title} className="footer__col">
              <h3>{col.title}</h3>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>

        <Reveal variant="up" delay={240} className="footer__map">
          <div className="footer__map-frame">
            {site.mapEmbedUrl ? (
              <iframe
                title="Mapa da localização da barbearia"
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <ImagePlaceholder
                src="/images/map/mapa.png"
                alt="Mapa com a localização da Fio do Bigode"
                ratio="16 / 8"
                label="Mapa (imagem ou iframe do Google Maps)"
              />
            )}
          </div>
          <a
            className="footer__address"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
            target="_blank"
            rel="noreferrer"
          >
            <IconPin size={18} />
            <span>{site.address}</span>
          </a>
        </Reveal>
      </div>
    </footer>
  )
}
