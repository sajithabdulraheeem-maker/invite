import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', variant = 'up', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant}${visible ? ' in-view' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
