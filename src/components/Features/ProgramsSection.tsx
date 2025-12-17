import { motion } from 'framer-motion'

import { programsContent } from '../../data/siteContent'
import { SECTION_IDS } from '../../utils/constants'
import Section from '../layout/Section'

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: index * 0.1 },
  }),
}

const ProgramsSection = () => (
  <Section
    id={SECTION_IDS.programs}
    className="bg-surface-light dark:bg-surface-dark/50"
  >
    <div className="rounded-[2.5rem] border border-moss-200/40 bg-white/90 p-8 shadow-lg dark:border-moss-500/30 dark:bg-surface-dark/80 sm:p-12">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {programsContent.heading}
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400 sm:text-lg">
            {programsContent.description}
          </p>
        </div>
        <a
          href={programsContent.link.href}
          className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-colors hover:underline"
        >
          {programsContent.link.label}
          {programsContent.link.icon ? (
            <span className="material-symbols-outlined text-sm">
              {programsContent.link.icon}
            </span>
          ) : null}
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {programsContent.items.map((program, index) => (
          <motion.article
            key={program.title}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="group flex h-full flex-col gap-6 rounded-[2rem] border border-moss-200/50 bg-background-light/80 p-8 transition-all hover:border-primary/60 hover:shadow-xl dark:border-moss-500/40 dark:bg-[#1e271c] dark:hover:shadow-[0_0_24px_rgba(70,236,19,0.2)]"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-green-100 text-3xl text-green-700 transition-transform duration-300 group-hover:scale-110 dark:bg-primary/15 dark:text-primary">
              <span className="material-symbols-outlined text-3xl">{program.icon}</span>
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {program.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-moss-300">
                {program.description}
              </p>
            </div>
            <span className="mt-auto flex items-center gap-1 text-sm font-bold text-gray-900 transition-colors group-hover:text-primary dark:text-white">
              {program.ctaLabel}
              <span className="material-symbols-outlined text-base">chevron_right</span>
            </span>
          </motion.article>
        ))}
      </div>
    </div>
  </Section>
)

export default ProgramsSection
