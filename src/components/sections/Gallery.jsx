import { useRef, useState, useEffect } from 'react'
import Reveal from '../ui/Reveal'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import SectionHeading from '../ui/SectionHeading'
import { IconStar } from '../icons/Icons'
import { gallery } from '../../data/gallery'

/**
 * GALERIA / MURAL DA CASA
 * - Tesoura decorativa "cortando" a linha tracejada no topo.
 * - Selo "5.0 estrelas no Google".
 * - Desktop: mural de polaroids sobrepostas e inclinadas (grid-template-areas).
 * - Mobile : carrossel de scroll-snap com polaroid centralizada + indicadores (bolinhas).
 */
export default function Gallery() {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)

  // Atualiza o indicador do carrossel mobile conforme o scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = () => {
      const card = track.querySelector('.polaroid')
      if (!card) return
      const step = card.offsetWidth + 16
      setCurrent(Math.round(track.scrollLeft / step))
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (i) => {
    const track = trackRef.current
    const card = track?.querySelector('.polaroid')
    if (!track || !card) return
    track.scrollTo({ left: i * (card.offsetWidth + 16), behavior: 'smooth' })
  }

  return (
    <section className="gallery" id="galeria" aria-labelledby="gallery-title">
      <div className="gallery__cut" aria-hidden="true">
        <span className="gallery__cut-line" />
        <img
          className="gallery__scissors"
          src="/images/brand/tesoura.png"
          alt=""
          width="1076"
          height="544"
          decoding="async"
        />
      </div>

      <div className="container">
        <div className="gallery__head">
          <Reveal>
            <SectionHeading
              id="gallery-title"
              eyebrow="Mural da casa"
              title={<>Clientes que confiam{' '}<br />o próprio visual.</>}
              subtitle="Um recorte do mural de fotos de quem atendemos e vivemos, pois cada cliente tem uma história, e depositar sua confiança e seu visual em nossas mãos torna o trabalho uma motivação cotidiana."
            />
          </Reveal>

          <Reveal variant="right" delay={150} className="gallery__rating">
            <IconStar size={26} />
            <span className="gallery__rating-num">4.9</span>
            <span className="gallery__rating-text">Estrelas no Google</span>
          </Reveal>
        </div>

        <ul className="gallery__wall" ref={trackRef}>
          {gallery.map((p, i) => (
            <Reveal
              as="li"
              key={p.id}
              variant="zoom"
              delay={i * 110}
              className={`polaroid polaroid--${p.area}`}
              style={{ '--rot': `${p.rotate}deg` }}
            >
              <figure>
                <span className={`polaroid__deco polaroid__deco--${p.deco}`} aria-hidden="true" />
                <div className="polaroid__photo">
                  <ImagePlaceholder src={p.src} alt={p.alt} ratio={p.ratio} label={`Foto ${p.id}`} />
                </div>
                <figcaption>{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <div className="gallery__dots" role="tablist" aria-label="Fotos do mural">
          {gallery.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              aria-selected={current === i}
              aria-label={`Ir para foto ${i + 1}`}
              className={current === i ? 'is-active' : ''}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
