import hennaHands from '../assets/henna-hands.jpg'
import portrait from '../assets/portrait.jpg'
import Reveal from './Reveal'

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <Reveal className="center">
        <p className="eyebrow">A Few Moments</p>
        <h2 className="section-title">Our Story, in Frames</h2>

        <div className="gallery-grid">
          <div>
            <Reveal as="div" variant="photo" className="medallion gallery-item alt">
              <img src={portrait} alt="Aazeez and Fasleena standing together in traditional wedding attire" />
            </Reveal>
            <p className="gallery-caption">Two families, one blessing</p>
          </div>

          <div>
            <Reveal as="div" variant="photo" className="medallion gallery-item alt2">
              <img src={hennaHands} alt="Close up of the bride's henna-adorned hand resting in the groom's" />
            </Reveal>
            <p className="gallery-caption">Hand in hand, henna and all</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
