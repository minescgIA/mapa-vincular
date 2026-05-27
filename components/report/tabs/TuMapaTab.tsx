import type { TuMapaData, BlockContent, PreviewCard } from '@/lib/types'

// ── Shared primitives ─────────────────────────────────────────────────────────

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

const BLOCK_ICONS = ['↑', '☯', '⚤', '♥', '⚖', '✦', '⚷', '☊']

function BlockCard({
  index,
  content,
}: {
  index: number
  content: string | BlockContent
}) {
  const icon = BLOCK_ICONS[index] ?? '◈'
  const label = `Bloque ${index + 1}`

  const renderContent = () => {
    if (typeof content === 'string') {
      const paras = content.split('\n\n').filter(Boolean)
      return (
        <div
          style={{ fontSize: '0.93rem', lineHeight: 1.78, color: '#382018' }}
        >
          {paras.map((p, i) => (
            <p key={i} style={i > 0 ? { marginTop: '0.85rem' } : {}}>
              {p}
            </p>
          ))}
        </div>
      )
    }
    // Object {a, b, c} — three sequential paragraphs
    return (
      <div
        style={{ fontSize: '0.93rem', lineHeight: 1.78, color: '#382018' }}
      >
        <p>{content.a}</p>
        <p style={{ marginTop: '0.85rem' }}>{content.b}</p>
        <p style={{ marginTop: '0.85rem' }}>{content.c}</p>
      </div>
    )
  }

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
      {/* Header row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '0.85rem',
          marginBottom: '0.85rem',
        }}
      >
        <div
          style={{
            width: '38px',
            height: '38px',
            minWidth: '38px',
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, var(--primary), #8B3A6E)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '1.05rem',
            marginTop: '2px',
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              fontWeight: 700,
              marginBottom: '0.18rem',
            }}
          >
            {label}
          </div>
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  )
}

function PreviewCardGrid({
  cards,
}: {
  cards: NonNullable<TuMapaData['parte_2_preview_cards']>
}) {
  const list: Array<{ key: string; card: PreviewCard }> = [
    cards.card_identidad
      ? { key: 'identidad', card: cards.card_identidad }
      : null,
    cards.card_tension
      ? { key: 'tension', card: cards.card_tension }
      : null,
    cards.card_evolucion
      ? { key: 'evolucion', card: cards.card_evolucion }
      : null,
  ].filter((x): x is { key: string; card: PreviewCard } => x !== null)

  if (!list.length) return null

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0.75rem',
        marginBottom: '1.8rem',
      }}
    >
      {list.map(({ key, card }) => (
        <div
          key={key}
          style={{
            background: 'white',
            borderRadius: '12px',
            border: '1px solid var(--border)',
            padding: '1.1rem 1.2rem',
            boxShadow: '0 2px 10px rgba(61,28,122,0.04)',
          }}
        >
          <div
            style={{
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: 700,
              marginBottom: '0.35rem',
            }}
          >
            {card.etiqueta}
          </div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--primary)',
              lineHeight: 1.3,
              marginBottom: '0.35rem',
            }}
          >
            {card.titulo}
          </p>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 1.55,
            }}
          >
            {card.subtitulo}
          </p>
        </div>
      ))}
    </div>
  )
}

// ── Main component ────────────────────────────────────────────────────────────

export function TuMapaTab({ data }: { data: TuMapaData | null }) {
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

  const BLOQUE_KEYS = [
    'bloque_1',
    'bloque_2',
    'bloque_3',
    'bloque_4',
    'bloque_5',
    'bloque_6',
    'bloque_7',
    'bloque_8',
  ] as const

  return (
    <div>
      <SectionIntro
        label="Tu Mapa Personal"
        text="Antes de hablar del vínculo, hay que conocerte a vos. La manera en que amás, conflictuás y te desconectás está grabada en tu carta."
      />

      {data.parte_2_preview_cards && (
        <PreviewCardGrid cards={data.parte_2_preview_cards} />
      )}

      {BLOQUE_KEYS.map((key, i) => {
        const bloque = data.bloques[key]
        if (!bloque) return null
        return <BlockCard key={key} index={i} content={bloque} />
      })}

      {data.sintesis && (
        <SectionIntro label="Síntesis" text={data.sintesis} />
      )}
    </div>
  )
}
