export type TipoVinculo =
  | 'Todavía no es nada, pero algo hay'
  | 'Recién empieza y ya tengo dudas'
  | 'Terminamos y volvemos, siempre'
  | 'Ya no estamos, pero no lo pude soltar'
  | 'Desapareció sin explicación'
  | 'Estamos juntos pero algo no está bien'

export type ArquetipoEmocional =
  | 'Todo bien en papel, pero algo falta'
  | 'Es fuego, pero también es guerra'
  | 'Me fallaron y no sé cómo procesarlo'
  | 'Sé que tengo que irme y no puedo'
  | 'No sé si esto es amor, miedo o costumbre'

export interface ReportData {
  id: string
  nombre_usuario: string
  nombre_otro: string
  tipo_vinculo: TipoVinculo | string
  arquetipo_emocional: ArquetipoEmocional | string
  estado_pago: 'pending_payment' | 'paid' | 'generated' | 'delivered'
  tab1_tu_mapa: string
  tab2_sinastria: string
  tab3_expansores: string
  tab4_bloqueantes: string
  tab5_que_hacer: string
  fecha_entrega: string | null
}

// ── Tab 1: Tu Mapa ───────────────────────────────────────────────────────────

export interface PreviewCard {
  titulo: string
  subtitulo: string
  etiqueta: string
}

export interface BlockContent {
  a: string
  b: string
  c: string
}

export interface TuMapaData {
  parte_2_preview_cards?: {
    card_identidad?: PreviewCard
    card_tension?: PreviewCard
    card_evolucion?: PreviewCard
  }
  bloques: {
    bloque_1: string | BlockContent
    bloque_2: string | BlockContent
    bloque_3: string | BlockContent
    bloque_4: string | BlockContent
    bloque_5: string | BlockContent
    bloque_6: string | BlockContent
    bloque_7: string | BlockContent
    bloque_8: string | BlockContent
  }
  sintesis?: string
  cta?: string
}

// ── Tab 2: Sinastría ─────────────────────────────────────────────────────────

export interface SinastriaSection {
  describe_al_otro: string
  conexion: string
}

export interface SinastriaData {
  s1?: SinastriaSection
  s2?: SinastriaSection
  s3?: SinastriaSection
  s4?: SinastriaSection
  s5?: SinastriaSection
  s6?: SinastriaSection
  cta?: string
}

// ── Tab 3: Expansores ────────────────────────────────────────────────────────

export interface ExpansorItem {
  titulo: string
  etiqueta: string
  que_abre: string
  cuando_aparece: string
  cuando_se_duerme: string
}

// ── Tab 4: Bloqueantes ───────────────────────────────────────────────────────

export interface BloqueanteItem {
  titulo: string
  etiqueta: string
  que_genera: string
  cuando_aparece: string
  contrapeso: string
}

// ── Tab 5: Qué Hacer ─────────────────────────────────────────────────────────

export interface QueHacerData {
  intro?: string
  bloque_1_por_que?: string
  bloque_2_lo_que_es_tuyo?: string
  bloque_3_lo_que_involucra_al_otro?: string
}
