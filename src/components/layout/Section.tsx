import type { PropsWithChildren } from 'react'
import clsx from 'clsx'

import { NAV_HEIGHT } from '../../utils/constants'

type SectionProps = PropsWithChildren<{
  id: string
  className?: string
}>

const Section = ({ id, className, children }: SectionProps) => (
  <section
    id={id}
    className={clsx(
      'scroll-mt-[var(--nav-height)] py-24 sm:py-28 lg:py-32',
      className,
    )}
    style={{
      // Tailwind cannot compute calc with CSS custom properties, so we set via inline style.
      ['--nav-height' as string]: `${NAV_HEIGHT}px`,
    }}
  >
    <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
      {children}
    </div>
  </section>
)

export default Section
