import { MusicIcon, MusicOffIcon } from './Icons'

export default function AudioToggle({ playing, onToggle }) {
  return (
    <button
      className={`audio-toggle${playing ? ' playing' : ''}`}
      onClick={onToggle}
      aria-label={playing ? 'Pause music' : 'Play music'}
    >
      {playing ? <MusicIcon /> : <MusicOffIcon />}
    </button>
  )
}
