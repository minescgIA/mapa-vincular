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
  // Cada campo almacena el JSON string de la sección correspondiente del output de Claude v6.
  // Parsear con JSON.parse() antes de renderizar.
  tab1_tu_mapa: string
  tab2_sinastria: string
  tab3_expansores: string
  tab4_bloqueantes: string
  tab5_que_hacer: string
  fecha_entrega: string | null
}
