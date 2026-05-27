import type { QueHacerData } from '@/lib/types'

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

function ContentBlock({
  label,
  icon,
  text,
}: {
  label: string
  icon: string
  text: string
}) {
  // Split into paragraphs — handles both \n\n and numbered items
  const paragraphs = text.split('\n\n').filter(Boolean)

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
          {label}
        </div>
      </div>

      <div style={{ fontSize: '0.93rem', lineHeight: 1.78, color: '#382018' }}>
        {paragraphs.map((para, i) => (
          <p key={i} style={i > 0 ? { marginTop: '0.85rem' } : {}}>
            {para}
          </p>
        ))}
      </div>
    </div>
  )
}

export function QueHacerTab({ data }: { data: QueHacerData | null }) {
  if (!data) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1.5rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1.2rem' }}>🌱</div>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '1.6rem',
            color: 'var(--primary)',
            marginBottom: '0.6rem',
          }}
        >
          Qué Hacer con Todo Esto
        </p>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.9rem',
            lineHeight: 1.7,
          }}
        >
          Esta sección está en desarrollo.
          <br />
          Pronto vas a encontrar aquí acciones concretas.
        </p>
      </div>
    )
  }

  return (
    <div>
      {data.intro && (
        <SectionIntro label="Qué Hacer con Todo Esto" text={data.intro} />
      )}

      {data.bloque_1_por_que && (
        <ContentBlock
          label="Por qué cuesta moverse"
          icon="◎"
          text={data.bloque_1_por_que}
        />
      )}

      {data.bloque_2_lo_que_es_tuyo && (
        <ContentBlock
          label="Lo que es tuyo"
          icon="◐"
          text={data.bloque_2_lo_que_es_tuyo}
        />
      )}

      {data.bloque_3_lo_que_involucra_al_otro && (
        <ContentBlock
          label="Lo que involucra al otro"
          icon="⚭"
          text={data.bloque_3_lo_que_involucra_al_otro}
        />
      )}
    </div>
  )
}
