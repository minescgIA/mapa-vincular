'use client'
import { useState, useMemo } from 'react'
import type { ReportData, TuMapaData, SinastriaData, ExpansorItem, BloqueanteItem, QueHacerData } from '@/lib/types'
import { TuMapaTab } from './tabs/TuMapaTab'
import { SinastriaTab } from './tabs/SinastriaTab'
import { ExpansoresTab } from './tabs/ExpansoresTab'
import { BloqueantesTab } from './tabs/BloqueantesTab'
import { QueHacerTab } from './tabs/QueHacerTab'

const TABS = [
  { key: 'tab1_tu_mapa',     label: 'Tu Mapa' },
  { key: 'tab2_sinastria',   label: 'Sinastría' },
  { key: 'tab3_expansores',  label: 'Expansores' },
  { key: 'tab4_bloqueantes', label: 'Bloqueantes' },
  { key: 'tab5_que_hacer',   label: 'Qué Hacer' },
] as const

type TabKey = (typeof TABS)[number]['key']

function parseTab<T>(raw: string): T | null {
  if (!raw) return null
  try {
    return JSON.parse(raw) as T
  } catch {
    return null
  }
}

export function TabNav({ report }: { report: ReportData }) {
  const [active, setActive] = useState<TabKey>('tab1_tu_mapa')

  const content = useMemo(() => {
    switch (active) {
      case 'tab1_tu_mapa':
        return (
          <TuMapaTab
            data={parseTab<TuMapaData>(report.tab1_tu_mapa)}
          />
        )
      case 'tab2_sinastria':
        return (
          <SinastriaTab
            data={parseTab<SinastriaData>(report.tab2_sinastria)}
            nombreUsuario={report.nombre_usuario}
            nombreOtro={report.nombre_otro}
          />
        )
      case 'tab3_expansores':
        return (
          <ExpansoresTab
            data={parseTab<ExpansorItem[]>(report.tab3_expansores)}
          />
        )
      case 'tab4_bloqueantes':
        return (
          <BloqueantesTab
            data={parseTab<BloqueanteItem[]>(report.tab4_bloqueantes)}
          />
        )
      case 'tab5_que_hacer':
        return (
          <QueHacerTab
            data={parseTab<QueHacerData>(report.tab5_que_hacer)}
          />
        )
      default:
        return null
    }
  }, [active, report])

  return (
    <>
      {/* ── Sticky tab navigation ── */}
      <nav
        style={{
          background: 'white',
          borderBottom: '1px solid var(--border)',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 12px rgba(61,28,122,0.07)',
        }}
        className="no-scrollbar"
      >
        <div
          style={{
            display: 'flex',
            minWidth: 'max-content',
            padding: '0 0.75rem',
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              style={{
                padding: '1rem 1.1rem',
                fontFamily: "'Lato', sans-serif",
                fontSize: '0.72rem',
                fontWeight: active === tab.key ? 700 : 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:
                  active === tab.key ? 'var(--primary)' : 'var(--text-muted)',
                background: 'none',
                border: 'none',
                borderBottom:
                  active === tab.key
                    ? '3px solid var(--accent)'
                    : '3px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 0.2s, border-color 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Tab content ── */}
      <div
        style={{
          padding: '1.6rem 1.1rem 4rem',
          maxWidth: '740px',
          margin: '0 auto',
        }}
      >
        {content}
      </div>

      {/* ── Footer ── */}
      <footer
        style={{
          textAlign: 'center',
          padding: '1.6rem',
          fontSize: '0.7rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.08em',
          borderTop: '1px solid var(--border)',
        }}
      >
        Mapa Vincular · Análisis personalizado basado en carta natal y sinastría
      </footer>
    </>
  )
}
