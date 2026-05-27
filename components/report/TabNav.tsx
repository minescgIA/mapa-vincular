'use client'
import { useState } from 'react'
import { TabContent } from './TabContent'
import type { ReportData } from '@/lib/types'

const TABS = [
  { key: 'tab1_tu_mapa',      label: 'Tu Mapa' },
  { key: 'tab2_sinastria',    label: 'Sinastría' },
  { key: 'tab3_expansores',   label: 'Expansores' },
  { key: 'tab4_bloqueantes',  label: 'Bloqueantes' },
  { key: 'tab5_que_hacer',    label: 'Qué Hacer' },
] as const

type TabKey = typeof TABS[number]['key']

export function TabNav({ report }: { report: ReportData }) {
  const [active, setActive] = useState<TabKey>('tab1_tu_mapa')
  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6 no-scrollbar">
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200"
            style={active === tab.key
              ? { background: 'var(--color-primary)', color: 'var(--color-secondary)', borderColor: 'var(--color-primary)' }
              : { background: 'var(--color-surface)', color: 'var(--color-muted)', borderColor: 'var(--color-border)' }
            }
          >
            {tab.label}
          </button>
        ))}
      </div>
      <TabContent content={report[active]} />
    </div>
  )
}
