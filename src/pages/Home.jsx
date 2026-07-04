import { Link } from 'react-router-dom'
import { videos } from '../data/videos'
import { longform } from '../data/longform'
import { galeria } from '../data/galeria'
import VideoCard from '../components/VideoCard'
import VideoEmbed from '../components/VideoEmbed'
import CronicaCard from '../components/CronicaCard'
import treeImg from '../../img/galeria/img07.jpeg'
//import autor from '../../img/autor1.png'
import autor from '../../img/autor.jpeg'
import { useState } from 'react'

function VideoModal({ video, onClose }) {
  if (!video) return null
  return (
    <div className="fixed inset-0 z-50 bg-terra-900/95 flex items-center justify-center p-4" onClick={onClose}>
      <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="mb-4 text-terra-300 hover:text-terra-50 transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <VideoEmbed youtubeId={video.youtubeId} titulo={video.titulo} autoplay />
        <p className="mt-3 font-display text-terra-50 text-xl">{video.titulo}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
        <img
          src={treeImg}
          alt="Povo Krikati"
          className="absolute inset-0 w-full h-full object-cover"
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-terra-900 via-terra-900/60 to-terra-900/20" />

        {/* Padrão geométrico lateral */}
        <div className="absolute left-0 top-0 bottom-0 w-2 geo-line opacity-60" />
        <div className="absolute right-0 top-0 bottom-0 w-2 geo-line opacity-60" />

        <div className="relative max-w-6xl mx-auto px-6 w-full animate-fade-in">
        
          <h1 className="font-display text-5xl lg:text-1xl text-terra-50 leading-none mb-6">
            {/*<br />
            <span className="text-urucum"> Paulo Ferraz</span>*/}
          </h1>
          <p className="font-display text-3xl lg:text-7xl text-terra-50 leading-none mb-6">
            "Não é só uma brincadeira ou competição"
          </p>
          <p className="font-serif text-xl md:text-2xl text-terra-200 max-w-2xl leading-relaxed mb-8">
            União e resistência na tradição da Corrida de Tora dos povos indígenas Krikati no Maranhão
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/longform" className="btn-primary">Ler CAPÍTULOS</Link>
            <Link to="/galeria" className="btn-ghost">Ver Galeria</Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-terra-400 text-xs uppercase tracking-widest font-sans">Rolar</span>
          <svg className="w-5 h-5 text-terra-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-20 bg-terra-600">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="section-title mb-6 text-center">Passado, presente e futuro</h2>
            <span className="section-label text-terra-200 mb-4 text-center">Por PAULO FERRAZ</span>
          <div className="w-16 h-px bg-urucum mx-auto mb-8" />
          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            A Corrida de Tora é uma das mais importantes expressões culturais do povo Krikati, pertencente ao conjunto dos povos Timbira, no Maranhão. Mais do que uma corrida, ela reúne memória, espiritualidade, identidade e conhecimentos transmitidos entre gerações.
          </p>
          <br></br>

          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            Preservada principalmente pela tradição oral, a prática continua ocupando um papel central na vida da comunidade, conectando passado, presente e futuro.
          </p>
          <br></br>

          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            Este trabalho apresenta um mergulho na Corrida de Tora a partir da convivência com os moradores da Aldeia São José e do acompanhamento de um ritual de encerramento de luto.
          </p>
          <br></br>
          <p className="font-serif text-lg text-terra-100 leading-relaxed">

            Ao longo dos quatro capítulos, o leitor conhecerá como era a tradição antigamente, os significados e símbolos que envolvem o ritual, a vivência dos três dias da corrida e os desafios enfrentados para manter viva uma das mais importantes expressões culturais do povo Krikati.
          </p>
        
          
        </div>
      </section>


      {/* Faixa decorativa */}
      <div className="h-2 geo-line" />

      {/* longformS */}
      <section className="py-20 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-label">Capítulos</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {longform.map(c => (
              <CronicaCard key={c.id} cronica={c} />
            ))}
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section className="py-16 bg-urucum">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-serif text-lg md:text-xl text-white leading-relaxed italic">
            "Está no nosso sangue, está na nossa vida, esses rituais que nos mantêm, que nos informam, que nos identificam, nós nos identificamos com os rituais, sem ritual somos nada, sem cantoria somos nada."
          </p>
        </div>
      </section>

     

      {/* GALERIA TEASER */}
      <section className="py-20 bg-terra-600">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3 className="section-label">Fotografias e Vídeos</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galeria.slice(19, 23).map(img => (
              <div key={img.id} className="aspect-square overflow-hidden bg-terra-900">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/galeria" className="btn-primary">Ver galeria completa</Link>
          </div>
        </div>
      </section>

 {/* SOBRE O AUTOR */}
      <section className="py-20 bg-terra-800">
        <div className="max-w-3xl mx-auto px-6">
          <span className="section-label block mb-8">Sobre o autor</span>
          <div className="flex flex-col sm:flex-row gap-10 items-start">
            <div className="w-36 h-36 rounded-full bg-terra-600 flex-shrink-0 overflow-hidden self-center sm:self-start">
            <img 
              src={autor} 
              alt="Paulo Rayan" 
              className="w-full h-full object-cover" 
            />
          </div>
            <div className="flex-1">
              <p className="font-serif text-terra-300 text-sm leading-relaxed mb-4">
                Sou Paulo Rayan Nascimento Ferraz, graduando em Jornalismo pela Universidade Federal do Maranhão (UFMA/CCIM) e apaixonado por culturas.
              </p>
              <p className="font-serif text-terra-300 text-sm leading-relaxed mb-4">
                Durante minha trajetória acadêmica, desenvolvi reportagens e vivências culturais, o que ampliou meu interesse pelo tema.
              </p>
              <p className="font-serif text-terra-300 text-sm leading-relaxed">
                Este Trabalho de Conclusão de Curso resulta em um longform sobre a Corrida de Tora do povo Krikati. Para sua produção, vivi uma imersão nos rituais tradicionais da Aldeia São José, experiência que conduziu a construção desta narrativa, combinando pesquisa detalhada, apuração jornalística e uma linguagem acessível ao longo dos capítulos.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* VÍDEOS EM DESTAQUE */}
      {/*
      <section className="py-20 bg-terra-700">
        <div className="max-w-6xl mx-auto px-6">
           <div className="text-center mb-10">
            <span className="section-label">Vídeos</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.slice(0, 3).map(v => (
              <VideoCard key={v.id} video={v} onClick={setActiveVideo} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link to="/videos" className="btn-ghost">Ver todos os vídeos</Link>
          </div>
        </div>
      </section>
*/}
      {activeVideo && <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />}
    </>
  )
}
