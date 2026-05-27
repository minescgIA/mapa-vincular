import { redirect } from 'next/navigation'

export default function Home() {
  // Reemplazar [NUMERO_MANYCHAT] con el número real en formato internacional (ej: 5491112345678)
  redirect('https://wa.me/[NUMERO_MANYCHAT]?text=Quiero+mi+Mapa+Vincular')
}
