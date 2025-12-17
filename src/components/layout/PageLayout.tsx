import type { PropsWithChildren } from 'react'

const PageLayout = ({ children }: PropsWithChildren) => (
  <div className="min-h-screen bg-gradient-to-br from-ink-50 via-white to-ink-100 text-ink-900">
    <div className="pointer-events-none fixed inset-0 bg-grid [background-size:32px_32px] opacity-30"></div>
    <div className="relative">
      {children}
    </div>
  </div>
)

export default PageLayout
