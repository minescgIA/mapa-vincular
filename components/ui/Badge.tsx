export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
      style={{ background: 'var(--color-secondary)', color: 'var(--color-accent)', border: '1px solid var(--color-border)' }}
    >
      {children}
    </span>
  )
}
