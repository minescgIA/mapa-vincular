import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function TabContent({ content }: { content: string }) {
  return (
    <div
      className="prose prose-sm max-w-none leading-relaxed"
      style={{ color: 'var(--color-text)', fontFamily: "'Lato', sans-serif" }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          strong: ({ children }) => (
            <strong style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{children}</strong>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: '0.5rem' }}>{children}</li>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
