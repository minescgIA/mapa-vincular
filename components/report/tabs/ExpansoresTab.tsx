import type { ExpansorItem } from '@/lib/types'

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

function AspectCard({
  item,
  index,
}: {
  item: ExpansorItem
  index: number
}) {
  return (
    <div
      style={{
        background: 'white',
        borderRadius: '12px',
        border: '1px solid var(--border)',
        borderLeft: '4px solid var(--green)',
        padding: '1.35rem 1.4rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 10px rgba(61,28,122,0.04)',
      }}
    >
      {/* Type label */}
      <div
        style={{
          fontSize: '0.6rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          fontWeight: 700,
          color: 'var(--green)',
          marginBottom: '0.25rem',
        }}
      >
        ✦ Expansor {index + 1}
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.15rem',
          fontWeight: 600,
          color: 'var(--primary)',
          marginBottom: '0.18rem',
        }}
      >
        {item.titulo}
      </div>

      {/* Astrological data */}
      <div
        style={{
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          fontStyle: 'italic',
          marginBottom: '0.75rem',
          paddingBottom: '0.75rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {item.etiqueta}
      </div>

      {/* Content */}
      <div style={{ fontSize: '0.92rem', lineHeight: 1.76, color: '#382018' }}>
        <p>{item.que_abre}</p>

        <div style={{ marginTop: '0.9rem' }}>
          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontWeight: 700,
            }}
          >
            Cuándo aparece
          </span>
          <p style={{ marginTop: '0.2rem' }}>{item.cuando_aparece}</p>
        </div>

        <div style={{ marginTop: '0.9rem' }}>
          <span
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              fontWeight: 700,
            }}
          >
            Cuándo se duerme
          </span>
          <p style={{ marginTop: '0.2rem' }}>{item.cuando_se_duerme}</p>
        </div>
      </div>
    </div>
  )
}

export function ExpansoresTab({ data }: { data: ExpansorItem[] | null }) {
  if (!data || !Array.isArray(data) || data.length === 0) {
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

  return (
    <div>
      <SectionIntro
        label="Expansores del Vínculo"
        text="Son los aspectos interplanares que generan apertura, posibilidad y crecimiento entre ustedes. La materia prima de lo que puede crecer — si deciden activarlo."
      />

      {data.map((item, i) => (
        <AspectCard key={i} item={item} index={i} />
      ))}
    </div>
  )
}
