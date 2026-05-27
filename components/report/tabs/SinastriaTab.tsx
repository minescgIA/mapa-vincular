import type { SinastriaData, SinastriaSection } from '@/lib/types'

function SectionIntro({ label, text }: { label: string; text: string }) {
  return (
    <div
      style={{
        background:
          'linear-gradient(135deg, rgba(61,28,122,0.05), rgba(201,123,156,0.09))',
        borderLeft: '3px solid var(--accent)',
        borderRadius: '0 10px 10px 0',
        padding: '1.2rem 1.4rem',
        marginBottom: '1.8rem',
      }}
    >
      <div
        style={{
          fontSize: '0.62rem',
          letterSpacing: '0.28em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          fontWeight: 700,
          marginBottom: '0.4rem',
        }}
      >
        {label}
      </div>
      <p
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.08rem',
          fontStyle: 'italic',
          color: 'var(--primary)',
          lineHeight: 1.65,
        }}
      >
        {text}
      </p>
    </div>
  )
}

function PersonHeader({
  nombreUsuario,
  nombreOtro,
}: {
  nombreUsuario: string
  nombreOtro: string
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '0.9rem',
        marginBottom: '1.6rem',
      }}
    >
      {[nombreUsuario, nombreOtro].map((nombre) => (
        <div
          key={nombre}
          style={{
            background: 'white',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            padding: '1rem',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.12rem',
              fontWeight: 600,
              color: 'var(--primary)',
            }}
          >
            {nombre}
          </div>
        </div>
      ))}
    </div>
  )
}

const SECTION_ICONS = ['◎', '⚭', '⚷', '⚡', '◐', '◈']

function SectionBlock({
  index,
  section,
}: {
  index: number
  section: SinastriaSection
}) {
  const icon = SECTION_ICONS[index] ?? '◈'

  return (
    <div
      style={{
        background: 'white',
        borderRadius: '14px',
        border: '1px solid var(--border)',
        padding: '1.5rem 1.4rem',
        marginBottom: '1.15rem',
        boxShadow: '0 2px 14px rgba(61,28,122,0.04)',
      }}
    >
      {/* Icon + label */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.85rem',
          marginBottom: '1rem',
        }}
      >
        <div
          style={{
            width: '38px',
            height: '38px',
            minWidth: '38px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary), #8B3A6E)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.05rem',
          }}
        >
          {icon}
        </div>
        <div
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            fontWeight: 700,
          }}
        >
          Sección {index + 1}
        </div>
      </div>

      {/* El otro */}
      <p
        style={{ fontSize: '0.93rem', lineHeight: 1.78, color: '#382018' }}
      >
        {section.describe_al_otro}
      </p>

      {/* Conexión */}
      <div
        style={{
          marginTop: '1rem',
          paddingTop: '1rem',
          borderTop: '1px dashed var(--border)',
          fontSize: '0.91rem',
          lineHeight: 1.75,
          color: '#382018',
          fontStyle: 'italic',
        }}
      >
        {section.conexion}
      </div>
    </div>
  )
}

export function SinastriaTab({
  data,
  nombreUsuario,
  nombreOtro,
}: {
  data: SinastriaData | null
  nombreUsuario: string
  nombreOtro: string
}) {
  if (!data) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.4rem',
            color: 'var(--primary)',
          }}
        >
          Contenido en preparación
        </p>
      </div>
    )
  }

  const SECTION_KEYS = ['s1', 's2', 's3', 's4', 's5', 's6'] as const

  return (
    <div>
      <SectionIntro
        label="Sinastría"
        text={`Este capítulo habla de ${nombreOtro} — de quién es en el amor, cómo se conectan, dónde se rozan y dónde se pierden.`}
      />

      <PersonHeader nombreUsuario={nombreUsuario} nombreOtro={nombreOtro} />

      {SECTION_KEYS.map((key, i) => {
        const section = data[key]
        if (!section) return null
        return <SectionBlock key={key} index={i} section={section} />
      })}
    </div>
  )
}
