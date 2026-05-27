import { notFound } from 'next/navigation'
import { getReport } from '@/lib/airtable'
import { HeaderCard } from '@/components/report/HeaderCard'
import { TabNav } from '@/components/report/TabNav'
import { StatusGate } from '@/components/report/StatusGate'
import type { Metadata } from 'next'

interface Props { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const report = await getReport(id)
  if (!report) return { title: 'Mapa Vincular' }
  return {
    title: `Mapa Vincular — ${report.nombre_usuario} & ${report.nombre_otro}`,
    description: `Análisis vincular personalizado · ${report.tipo_vinculo}`,
    openGraph: {
      images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png` }],
    },
  }
}

export default async function ReportePage({ params }: Props) {
  const { id } = await params
  const report = await getReport(id)
  if (!report) notFound()
  if (report.estado_pago === 'pending_payment' || report.estado_pago === 'paid') {
    return <StatusGate status={report.estado_pago} nombre={report.nombre_usuario} />
  }
  return (
    <main className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <HeaderCard report={report} />
      <TabNav report={report} />
    </main>
  )
}
