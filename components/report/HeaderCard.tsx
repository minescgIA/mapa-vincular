import type { ReportData } from '@/lib/types'

export function HeaderCard({ report }: { report: ReportData }) {
  return (
    <header
      style={{
        background:
          'linear-gradient(145deg, #2A0F5E 0%, #4B1D8A 45%, #8B3A6E 80%, #C97B9C 100%)',
        padding: '2.8rem 1.5rem 2.2rem',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Stars decoration */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.6rem',
          letterSpacing: '1.5em',
          opacity: 0.35,
          whiteSpace: 'nowrap',
        }}
      >
        ✦ ✦ ✦
      </div>

      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "'Lato', sans-serif",
          fontSize: '0.65rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          opacity: 0.65,
          marginBottom: '0.7rem',
        }}
      >
        Mapa Vincular Personalizado
      </p>

      {/* Names */}
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(2rem, 6vw, 2.6rem)',
          fontWeight: 300,
          letterSpacing: '0.06em',
          marginBottom: '0.25rem',
          lineHeight: 1.2,
        }}
      >
        {report.nombre_usuario} &amp; {report.nombre_otro}
      </h1>

      {/* Subtitle */}
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.05rem',
          fontStyle: 'italic',
          opacity: 0.8,
          marginBottom: '1.4rem',
        }}
      >
        Tu análisis astrológico y vincular
      </p>

      {/* Badges */}
      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {report.tipo_vinculo && (
          <span
            style={{
              background: 'rgba(255,255,255,0.13)',
              border: '1px solid rgba(255,255,255,0.28)',
              borderRadius: '20px',
              padding: '0.28rem 0.9rem',
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
            }}
          >
            {report.tipo_vinculo}
          </span>
        )}
        {report.arquetipo_emocional && (
          <span
            style={{
              background: 'rgba(255,255,255,0.13)',
              border: '1px solid rgba(255,255,255,0.28)',
              borderRadius: '20px',
              padding: '0.28rem 0.9rem',
              fontSize: '0.72rem',
              letterSpacing: '0.05em',
            }}
          >
            {report.arquetipo_emocional}
          </span>
        )}
      </div>
    </header>
  )
}
