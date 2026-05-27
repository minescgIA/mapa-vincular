import type { ReportData } from './types'

const BASE_ID = process.env.AIRTABLE_BASE_ID!
const TABLE = 'Analisis'
const API_KEY = process.env.AIRTABLE_API_KEY!

export async function getReport(recordId: string): Promise<ReportData | null> {
  const res = await fetch(
    `https://api.airtable.com/v0/${BASE_ID}/${TABLE}/${recordId}`,
    {
      headers: { Authorization: `Bearer ${API_KEY}` },
      next: { revalidate: 300 },
    }
  )
  if (!res.ok) return null
  const data = await res.json()
  const f = data.fields
  return {
    id: data.id,
    nombre_usuario: f['Nombre_Usuario'] ?? '',
    nombre_otro: f['Nombre_Otro'] ?? '',
    tipo_vinculo: f['Tipo_Vinculo'] ?? '',
    arquetipo_emocional: f['Arquetipo_Emocional'] ?? '',
    estado_pago: f['Estado_Pago'] ?? 'pending_payment',
    tab1_tu_mapa: f['Tab1_TuMapa'] ?? '',
    tab2_sinastria: f['Tab2_Sinastria'] ?? '',
    tab3_expansores: f['Tab3_Expansores'] ?? '',
    tab4_bloqueantes: f['Tab4_Bloqueantes'] ?? '',
    tab5_que_hacer: f['Tab5_QueHacer'] ?? '',
    fecha_entrega: f['Fecha_Entrega'] ?? null,
  }
}
