import { useRef, useState } from 'react'
import Intro from './components/Intro'
import Hero from './components/Hero'
import Verse from './components/Verse'
import Details from './components/Details'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import AudioToggle from './components/AudioToggle'
import Fireworks from './components/Fireworks'
import audioTrack from './assets/nikkah-audio.mp3'
import './App.css'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [playing, setPlaying] = useState(false)
  const [celebrate, setCelebrate] = useState(false)
  const audioRef = useRef(null)

  function handleOpen() {
    setOpened(true)
    setCelebrate(true)
    setTimeout(() => setShowIntro(false), 700)

    // tapping the seal is a genuine user gesture, so the browser
    // will allow audio to start playing right here
    const audio = audioRef.current
    if (audio) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false))
    }
  }

  function toggleAudio() {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <div className={`app${!opened ? ' locked' : ''}`}>
      <audio ref={audioRef} src={audioTrack} loop preload="none" />

      {showIntro && <Intro opening={opened} onOpen={handleOpen} />}

      <Fireworks active={celebrate} />

      {opened && <AudioToggle playing={playing} onToggle={toggleAudio} />}

      <Hero />
      <Verse />
      <Details />
      <Gallery />
      <Footer />
    </div>
  )
}
