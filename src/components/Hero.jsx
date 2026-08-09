import heroCouple from '../assets/hero-couple.jpg'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <Reveal className="center">
        <Reveal as="div" variant="photo" className="medallion hero-medallion">
          <img src={heroCouple} alt="Aazeez and Fasleena smiling together on their wedding day" />
        </Reveal>

        <p className="hero-kicker">With the Blessings of Allah</p>
        <h1 className="hero-names">
          Aazeez <em>&amp;</em> Fasleena
        </h1>
        <p className="hero-copy">
          With the blessings of Allah and the love of our families, we are
          delighted to invite you to celebrate the beginning of our forever.
        </p>
      </Reveal>
    </section>
  )
}
