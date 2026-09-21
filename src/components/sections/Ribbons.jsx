import Reveal from '../ui/Reveal'
import { ribbons } from '../../data/site'

export default function Ribbons() {
  return (
    <div className="ribbons" aria-label="Destaques da barbearia">
      <ul className="ribbons__list">
        {ribbons.map((text, i) => (
          <Reveal as="li" key={text} variant="drop" delay={i * 140} className="ribbon" style={{ '--i': i }}>
            <span className="ribbon__tape ribbon__tape--left" aria-hidden="true" />
            <span className="ribbon__tape ribbon__tape--right" aria-hidden="true" />
            <span className="ribbon__text">{text}</span>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}
