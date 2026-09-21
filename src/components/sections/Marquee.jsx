import Reveal from '../ui/Reveal'
import { marqueeItems } from '../../data/site'

export default function Marquee() {
  const renderItems = (hidden = false) => (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {marqueeItems.map((item) => (
        <li key={item}>
          <span>{item}</span>
          <i className="marquee__dot" aria-hidden="true" />
        </li>
      ))}
    </ul>
  )

  return (
    <Reveal variant="up" className="marquee" aria-label="O que você encontra aqui">
      <div className="marquee__track">
        {renderItems()}
        {renderItems(true)}
      </div>
    </Reveal>
  )
}
