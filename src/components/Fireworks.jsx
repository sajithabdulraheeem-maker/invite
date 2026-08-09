import { useEffect, useState } from 'react'

const COLORS = ['var(--brass)', 'var(--brass-light)', 'var(--emerald)']

function makeBurst(cx, cy, count, key) {
  return Array.from({ length: count }).map((_, i) => {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4
    const distance = 34 + Math.random() * 46
    return {
      id: `${key}-${i}`,
      cx,
      cy,
      tx: Math.cos(angle) * distance,
      ty: Math.sin(angle) * distance,
      delay: Math.random() * 0.15,
      color: COLORS[i % COLORS.length],
    }
  })
}

// three small, staggered bursts near the centre of the card —
// brief and gold-toned, closer to sparklers than a fireworks show
export default function Fireworks({ active }) {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    if (!active) return

    setParticles([
      ...makeBurst(50, 40, 14, 'a'),
      ...makeBurst(30, 56, 9, 'b'),
      ...makeBurst(70, 58, 9, 'c'),
    ])

    const timer = setTimeout(() => setParticles([]), 1400)
    return () => clearTimeout(timer)
  }, [active])

  if (particles.length === 0) return null

  return (
    <div className="fireworks" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="spark"
          style={{
            left: `${p.cx}%`,
            top: `${p.cy}%`,
            background: p.color,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--delay': `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
