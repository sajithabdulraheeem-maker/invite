import { useState } from 'react'

export default function Intro({ opening, onOpen }) {
  const [cracking, setCracking] = useState(false)

  function handleTap() {
    if (cracking) return
    setCracking(true)
    // let the crack animation play briefly before revealing the page
    setTimeout(onOpen, 320)
  }

  return (
    <div className={`intro${opening ? ' opening' : ''}`}>
      <div className="intro-content">
        <p className="intro-eyebrow">The Nikkah Of</p>
        <h1 className="intro-names">
          Aazeez &amp; Fasleena
        </h1>

        <button
          className={`seal-button${cracking ? ' cracking' : ''}`}
          onClick={handleTap}
          aria-label="Open the invitation"
        >
          <span className="seal-flash" />
          <span className="seal-ring" />
          <span className="seal">
            <span className="seal-initials">A&nbsp;&amp;&nbsp;F</span>
          </span>
        </button>

        <p className="intro-cta">Tap the Seal to Open</p>
        <p className="intro-date">05 September 2026 · Trincomalee</p>
      </div>
    </div>
  )
}
