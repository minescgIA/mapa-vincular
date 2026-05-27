export default function Loading() {
  return (
    <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto animate-pulse" style={{ background: 'var(--color-bg)' }}>
      <div className="h-6 rounded mb-4" style={{ background: 'var(--color-border)' }} />
      <div className="h-10 rounded mb-6" style={{ background: 'var(--color-border)' }} />
      <div className="flex gap-2 mb-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-8 w-20 rounded-full" style={{ background: 'var(--color-border)' }} />
        ))}
      </div>
      <div className="space-y-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-4 rounded" style={{ background: 'var(--color-border)' }} />
        ))}
      </div>
    </main>
  )
}
