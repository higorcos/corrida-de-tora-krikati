import { useRef, useState } from 'react'

export default function VideoEmbed({ youtubeId, titulo, autoplay = false, shot = false, className = '' }) {
  const iframeRef = useRef(null)
  const [playing, setPlaying] = useState(autoplay)

  const send = cmd =>
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: cmd, args: '' }), '*'
    )

  const toggle = () => {
    send(playing ? 'pauseVideo' : 'playVideo')
    setPlaying(p => !p)
  }

  const params = [
    'enablejsapi=1',
    'controls=0',
    'modestbranding=1',
    'rel=0',
    'iv_load_policy=3',
    'disablekb=1',
    'fs=0',
    autoplay ? 'autoplay=1' : '',
  ].filter(Boolean).join('&')

  const containerClass = `relative aspect-video bg-terra-900 overflow-hidden select-none ${className}`

  return (
    <div className={containerClass}>
      <iframe
        ref={iframeRef}
        src={`https://www.youtube.com/embed/${youtubeId}?${params}`}
        title={titulo}
        className="w-full h-full"
        style={{ pointerEvents: 'none' }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />

      {/* Overlay — bloqueia cliques no YouTube e controla play/pause */}
      <div
        className="absolute inset-0 z-20 cursor-pointer flex items-center justify-center"
        onClick={toggle}
      >
        {!playing && (
          <div className="w-16 h-16 rounded-full bg-urucum/90 hover:bg-urucum flex items-center justify-center shadow-xl transition-colors">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}
