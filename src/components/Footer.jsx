import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="footer-section">
      <Reveal>
        <span className="seal small">
          <span className="seal-initials" style={{ fontSize: '0.7rem' }}>A&F</span>
        </span>

        <p className="footer-copy">
          With hearts full of gratitude, we look forward to beginning this
          new chapter surrounded by the people we love most. Thank you for
          being part of our story.
        </p>

        <p className="footer-signoff">05 . 09 . 2026 &nbsp;·&nbsp; Trincomalee</p>
        <p className="footer-credit">Made with love, for our forever</p>
      </Reveal>
    </footer>
  )
}
