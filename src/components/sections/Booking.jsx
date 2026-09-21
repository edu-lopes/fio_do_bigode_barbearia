import { useState } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import DashedRing from '../ui/DashedRing'
import BookingForm from '../ui/BookingForm'
import { IconPhoneRing, IconMail, IconInstagram } from '../icons/Icons'
import { site } from '../../data/site'

const contacts = [
  { Icon: IconPhoneRing, text: site.phone, href: `tel:+${site.phoneRaw}`, label: 'Ligar' },
  { Icon: IconMail, text: site.email, href: `mailto:${site.email}`, label: 'Enviar e-mail' },
  { Icon: IconInstagram, text: site.instagram, href: site.instagramUrl, label: 'Abrir Instagram' },
]

export default function Booking() {
  return (
    <section className="booking" id="agendar" aria-labelledby="booking-title">
      <div className="booking__pole" aria-hidden="true">
        <span className="booking__pole-cap" />
        <span className="booking__pole-body" />
        <span className="booking__pole-cap booking__pole-cap--bottom" />
      </div>

      <div className="container booking__grid">
        <Reveal variant="left" className="booking__intro">
          <SectionHeading
            id="booking-title"
            eyebrow="Bora marcar?"
            title={
              <>
                Chega, senta <span className="lower">e</span>
                <br />
                <em>deixa</em> com <em>a gente.</em>
              </>
            }
            subtitle="Um recorte do mural de fotos de quem atendemos e vivemos, pois cada cliente tem uma história, e depositar sua confiança e seu visual em nossas mãos torna o trabalho uma motivação cotidiana."
          />

          <ul className="booking__contacts">
            {contacts.map(({ Icon, text, href, label }) => (
              <li key={text}>
                <a href={href} aria-label={`${label}: ${text}`} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span className="booking__contact-icon">
                    <DashedRing color="var(--c-yellow)" width={3.6} dash={8} gap={6.5} speed={16} />
                    <Icon size={20} />
                  </span>
                  <span>{text}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="right" delay={140} className="booking__card">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  )
}
