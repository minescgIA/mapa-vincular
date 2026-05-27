export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse" style={{ background: 'var(--bg)' }}>
      {/* Header skeleton */}
      <div
        style={{
          background:
            'linear-gradient(145deg, #2A0F5E 0%, #4B1D8A 45%, #8B3A6E 80%, #C97B9C 100%)',
          padding: '2.8rem 1.5rem 2.2rem',
          textAlign: 'center',
        }}
      >
        <div className="h-3 w-40 rounded mx-auto mb-4" style={{ background: 'rgba(255,255,255,0.2)' }} />
        <div className="h-8 w-56 rounded mx-auto mb-3" style={{ background: 'rgba(255,255,255,0.2)' }} />
        <div className="h-4 w-44 rounded mx-auto mb-5" style={{ background: 'rgba(255,255,255,0.15)' }} />
        <div className="flex gap-2 justify-center">
          <div className="h-6 w-28 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
          <div className="h-6 w-36 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
        </div>
      </div>

      {/* Tab nav skeleton */}
      <div
        style={{
          background: 'white',
          borderBottom: '1px solid var(--border)',
          padding: '0 0.75rem',
        }}
      >
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="h-12 w-20 rounded-sm"
              style={{ background: 'var(--border)' }}
            />
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div style={{ padding: '1.6rem 1.1rem', maxWidth: '740px', margin: '0 auto' }}>
        <div className="h-20 rounded-lg mb-6" style={{ background: 'var(--border)' }} />
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-32 rounded-2xl mb-4" style={{ background: 'var(--border)' }} />
        ))}
      </div>
    </main>
  )
}
