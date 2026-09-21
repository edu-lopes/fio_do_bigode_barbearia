import Reveal from '../ui/Reveal'
import ImagePlaceholder from '../ui/ImagePlaceholder'
import SectionHeading from '../ui/SectionHeading'
import DashedRing from '../ui/DashedRing'
import { aboutTags } from '../../data/site'

export default function About() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal variant="left" className="about__media">
          <div className="about__frame">
            <ImagePlaceholder
              src="/images/about/salao.jpg"
              alt="Interior da barbearia com cadeira, espelho e quadros na parede"
              ratio="4 / 5"
              label="Foto do salão"
            />
          </div>

          <div className="about__seal" aria-hidden="true">
            <span className="about__seal-ring">
              <DashedRing color="#fff" width={4.5} dash={10} gap={7} speed={18} />
            </span>
            <span className="about__seal-text">
              <strong>Salão</strong>
              <small>para te receber</small>
            </span>
          </div>
        </Reveal>

        <Reveal variant="right" delay={120} className="about__text">
          <SectionHeading
            id="about-title"
            eyebrow="Nossa história"
            title={<>Barbearia para<br />o <em>bairro inteiro</em>.</>}
          />
          <p>
            A Fio do Bigode nasceu numa garagem emprestada, com uma cadeira só e um espelho rachado.
            Três anos depois, viramos ponto de encontro - o lugar onde o corte é desculpa e a
            conversa é o motivo.
          </p>
          <p>
            Trabalhamos com hora marcada e encaixe pra quem chega sem avisar. Ninguém sai daqui sem
            se olhar no espelho e sorrir - essa é a única regra da casa.
          </p>

          <ul className="about__tags">
            {aboutTags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
