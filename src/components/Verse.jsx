import Reveal from './Reveal'

export default function Verse() {
  return (
    <section className="verse-section">
      <Reveal className="center">
        <div className="divider">
          <span className="dot" />
        </div>
        <p className="verse-text">&ldquo;And We created you in pairs.&rdquo;</p>
        <p className="verse-source">Quran 78:8</p>
        <div className="divider">
          <span className="dot" />
        </div>
      </Reveal>
    </section>
  )
}
