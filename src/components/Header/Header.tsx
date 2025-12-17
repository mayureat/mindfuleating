import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import { brandContent, navigationItems } from '../../data/siteContent'
import { NAV_HEIGHT } from '../../utils/constants'

const Header = () => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-moss-200/40 bg-surface-light/80 backdrop-blur-md dark:border-moss-500/40 dark:bg-[#131811]/80"
      style={{ ['--nav-height' as string]: `${NAV_HEIGHT}px` }}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10">
        <a
          href="#hero"
          className="flex items-center gap-4"
          onClick={close}
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-primary shadow-[0_0_15px_rgba(70,236,19,0.25)]">
            <span className="material-symbols-outlined text-2xl">{brandContent.icon}</span>
          </span>
          <span className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
              {brandContent.name}
            </span>
            <span className="text-xs font-medium tracking-wide text-gray-500 dark:text-gray-400">
              {brandContent.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-gray-600 transition-colors hover:text-primary dark:text-gray-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#cta"
            className="flex h-11 cursor-pointer items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-background-dark shadow-[0_0_15px_rgba(70,236,19,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(70,236,19,0.5)]"
          >
            <span className="material-symbols-outlined mr-2 text-lg">chat_bubble</span>
            Start Diet Chat
          </a>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={toggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <span className="material-symbols-outlined text-3xl text-gray-900 dark:text-white">
            {open ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-moss-200/40 bg-surface-light/95 px-6 pb-6 pt-4 shadow-lg dark:border-moss-500/40 dark:bg-[#131811] md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className="text-base font-semibold text-gray-700 transition-colors hover:text-primary dark:text-gray-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={close}
                className={clsx(
                  'mt-2 flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-background-dark',
                  'shadow-[0_0_15px_rgba(70,236,19,0.3)] transition-all hover:shadow-[0_0_25px_rgba(70,236,19,0.45)]',
                )}
              >
                <span className="material-symbols-outlined mr-2 text-lg">chat_bubble</span>
                Start Diet Chat
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}

export default Header
