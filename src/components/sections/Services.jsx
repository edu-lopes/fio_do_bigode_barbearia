import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section className="services" id="servicos" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="O que fazemos"
            title={<>Serviço de barbeiro,{' '}<br />cliente vira amigo.</>}
            subtitle="Escolha o que precisa hoje!"
          />
        </Reveal>

        <ul className="services__grid">
          {services.map((s, i) => (
            <Reveal as="li" key={s.id} delay={i * 90} variant="up" className="service-card">
              <span className="service-card__num">{String(s.id).padStart(2, '0')}</span>
              <h3 className="service-card__title">
                {s.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h3>
              <p className="service-card__desc">{s.description}</p>
              <p className="service-card__price">
                {s.pricePrefix && <small>{s.pricePrefix} </small>}
                <strong>{s.price}</strong>
                {s.duration && <span>{s.duration}</span>}
              </p>
            </Reveal>
          ))}
        </ul>

        <p className="services__hint" aria-hidden="true">Deslize para ver todos →</p>
      </div>
    </section>
  )
}
