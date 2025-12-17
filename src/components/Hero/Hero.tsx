import { motion } from 'framer-motion'

import { heroContent } from '../../data/siteContent'
import { SECTION_IDS } from '../../utils/constants'
import Section from '../layout/Section'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const floatingPositionClass: Record<typeof heroContent.floatingBadges[number]['position'], string> = {
  'top-right': 'right-0 top-10 md:right-8 md:top-20',
  'bottom-left': '-left-2 bottom-20 md:-left-12 md:bottom-28',
}

const Hero = () => {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <Section id={SECTION_IDS.hero} className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="order-2 flex flex-col items-center gap-8 text-center lg:order-1 lg:items-start lg:text-left"
        >
          <div className="flex flex-col gap-5">
            <span className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary lg:mx-0">
              <span className="material-symbols-outlined text-sm">{heroContent.eyebrow.icon}</span>
              {heroContent.eyebrow.text}
            </span>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              {heroContent.heading.leading}{' '}
              <span className="bg-gradient-to-r from-primary to-lime-300 bg-clip-text text-transparent">
                {heroContent.heading.highlighted}
              </span>
            </h1>
            <p className="mx-auto max-w-xl text-base font-medium text-gray-600 dark:text-gray-400 sm:text-lg lg:mx-0 lg:max-w-2xl lg:text-xl">
              {heroContent.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={heroContent.primaryCta.href}
              className="group flex h-14 min-w-[160px] items-center justify-center rounded-full bg-primary px-8 text-base font-bold text-background-dark transition-transform duration-200 hover:scale-105 hover:bg-[#3bdb0f]"
            >
              {heroContent.primaryCta.icon ? (
                <span className="material-symbols-outlined mr-2 text-lg">{heroContent.primaryCta.icon}</span>
              ) : null}
              <span>{heroContent.primaryCta.label}</span>
              <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <a
              href={heroContent.secondaryCta.href}
              className="flex h-14 min-w-[160px] items-center justify-center rounded-full border-2 border-gray-200 bg-transparent px-8 text-base font-bold text-gray-900 transition-all duration-200 hover:border-primary hover:text-primary dark:border-gray-700 dark:text-white"
            >
              {heroContent.secondaryCta.label}
            </a>
          </div>

          <div className="flex flex-col items-center gap-6 border-t border-gray-200 pt-6 dark:border-gray-800 lg:flex-row lg:items-center lg:justify-start">
            <div className="flex -space-x-3">
              {heroContent.trust.avatarUrls.map((url, index) => (
                <div
                  key={url}
                  className="size-10 rounded-full border-2 border-background-light bg-cover bg-center dark:border-background-dark"
                  style={{ backgroundImage: `url(${url})` }}
                  aria-label={`Client avatar ${index + 1}`}
                />
              ))}
              <div className="flex size-10 items-center justify-center rounded-full border-2 border-background-light bg-surface-dark text-xs font-bold text-white dark:border-background-dark">
                {heroContent.trust.totalLabel}
              </div>
            </div>
            <p className="max-w-xs text-sm font-medium text-gray-500 dark:text-moss-300">
              {heroContent.trust.caption}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="order-1 flex items-center justify-center lg:order-2"
        >
          <div className="relative w-full max-w-[480px] overflow-hidden rounded-[2.5rem] shadow-2xl">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md">
                <span className="material-symbols-outlined text-sm text-primary">
                  {heroContent.quote.badge.icon}
                </span>
                {heroContent.quote.badge.text}
              </span>
              <p className="text-lg font-medium leading-snug">
                {heroContent.quote.text}
              </p>
            </div>
            <div
              className="relative z-0 aspect-[4/5] w-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
              style={{ backgroundImage: `url(${heroContent.image.src})` }}
              role="img"
              aria-label={heroContent.image.alt}
            />

            {!reduceMotion && (
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="absolute inset-0 bg-primary/10 blur-[80px]" />
              </motion.div>
            )}
            {heroContent.floatingBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className={`absolute z-20 ${floatingPositionClass[badge.position]}`}
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -10, 0],
                      }
                }
                transition={
                  reduceMotion
                    ? undefined
                    : {
                        duration: badge.position === 'top-right' ? 3 : 3.8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                }
              >
                <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-800 dark:bg-surface-dark">
                  <span className="flex size-10 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-300">
                    <span className="material-symbols-outlined">{badge.icon}</span>
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {badge.label}
                    </p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{badge.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

export default Hero
