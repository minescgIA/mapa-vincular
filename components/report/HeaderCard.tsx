import { Divider } from '@/components/ui/Divider'
import { Badge } from '@/components/ui/Badge'
import type { ReportData } from '@/lib/types'

export function HeaderCard({ report }: { report: ReportData }) {
  return (
    <div className="text-center mb-8">
      <p className="text-xs tracking-widest uppercase mb-3" style={{ color: 'var(--color-accent)', fontFamily: "'Lato', sans-serif" }}>
        ◈ Mapa Vincular
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontStyle: 'italic', color: 'var(--color-primary)' }}>
        {report.nombre_usuario} & {report.nombre_otro}
      </h1>
      <div className="mt-3">
        <Badge>{report.tipo_vinculo}</Badge>
      </div>
      <Divider />
    </div>
  )
}
