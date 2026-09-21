import Button from '../ui/Button'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import { IconArrowDown } from '../icons/Icons'
import DashedRing from '../ui/DashedRing'
import { heroStats } from '../../data/site'

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true">
        <ImagePlaceholder
          src="/images/hero/hero.jpg"
          alt=""
          ratio="auto"
          eager
          label="Foto do hero (barbeiro atendendo)"
          className="hero__img"
        />
        <div className="hero__shade" />
      </div>

      <div className="hero__content">
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--1">Um corte, mil</span>
          <span className="hero__line hero__line--2">
            <em>Histórias</em>.
          </span>
        </h1>

        <p className="hero__text anim-in" style={{ '--d': '520ms' }}>
          Atendimento sem pressa, preço justo e um resultado que você leva com orgulho pra rua.
          Sem hora marcada obrigatória - é só chegar.
        </p>

        <div className="hero__actions anim-in" style={{ '--d': '680ms' }}>
          <Button href="#agendar" variant="solid">Agendar Horário</Button>
          <Button href="#servicos" variant="outline">Ver Serviços</Button>
        </div>

        <dl className="hero__stats anim-in" style={{ '--d': '840ms' }}>
          {heroStats.map((s) => (
            <div key={s.value} className="hero__stat">
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#servicos" className="hero__scroll" aria-label="Rolar para os serviços">
        <span>Explore sobre!</span>
        <span className="hero__scroll-icon">
          <DashedRing width={5} dash={10} gap={8} speed={12} />
          <IconArrowDown size={20} />
        </span>
      </a>

      <svg className="hero__wave" viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 90V38C180 8 340 6 560 34c230 30 420 40 620 6 100-17 190-28 260-30v80Z" fill="var(--c-cream)" />
      </svg>
    </section>
  )
}
