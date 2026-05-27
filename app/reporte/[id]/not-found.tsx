import { Divider } from '@/components/ui/Divider'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: 'var(--color-bg)' }}>
      <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--color-accent)' }}>◈ Mapa Vincular</p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
        Este mapa no existe
      </h1>
      <p className="text-center text-sm max-w-xs" style={{ color: 'var(--color-muted)', lineHeight: 1.7 }}>
        El link que usaste no corresponde a ningún análisis. Si creés que es un error, escribinos por WhatsApp.
      </p>
      <Divider />
    </main>
  )
}
