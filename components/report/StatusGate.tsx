import { Divider } from '@/components/ui/Divider'

interface Props {
  status: 'pending_payment' | 'paid'
  nombre: string
}

const MESSAGES = {
  pending_payment: (nombre: string) =>
    `Hola, ${nombre}. Tu análisis está siendo preparado. El link llegará a tu WhatsApp en los próximos minutos.`,
  paid: (nombre: string) =>
    `¡Pago confirmado, ${nombre}! Estamos generando tu mapa ahora mismo. Recibirás el link por WhatsApp en breve.`,
}

export function StatusGate({ status, nombre }: Props) {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: 'var(--color-bg)' }}>
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-accent)' }}>◈ Mapa Vincular</p>
      <p className="text-center text-base max-w-sm" style={{ color: 'var(--color-text)', lineHeight: 1.7 }}>
        {MESSAGES[status](nombre)}
      </p>
      <Divider />
    </main>
  )
}
