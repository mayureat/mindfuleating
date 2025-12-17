import { motion } from 'framer-motion'

import { callToActionContent } from '../../data/siteContent'
import { SECTION_IDS } from '../../utils/constants'
import Section from '../layout/Section'

const CallToAction = () => (
  <Section id={SECTION_IDS.cta} className="pt-0">
    <div className="relative overflow-hidden rounded-[3rem] border border-moss-500/30 bg-[#1e271c] px-8 py-12 sm:px-12 sm:py-16">
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-36 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl text-center text-white lg:text-left"
        >
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            {callToActionContent.heading}
          </h2>
          <p className="mt-4 text-base text-moss-300 sm:text-lg">
            {callToActionContent.description}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={callToActionContent.primaryCta.href}
              className="flex h-14 items-center justify-center rounded-full bg-primary px-8 font-bold text-background-dark transition-colors hover:bg-[#3bdb0f]"
            >
              {callToActionContent.primaryCta.label}
            </a>
            <a
              href={callToActionContent.secondaryCta.href}
              className="flex h-14 items-center justify-center rounded-full border border-moss-500/60 px-8 font-bold text-white transition-colors hover:bg-[#2c3928]"
            >
              {callToActionContent.secondaryCta.label}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex shrink-0 items-center justify-center"
        >
          <div
            className="size-48 rounded-full border-4 border-primary/20 bg-cover bg-center shadow-2xl sm:size-56 md:size-64"
            style={{ backgroundImage: `url(${callToActionContent.image.src})` }}
            role="img"
            aria-label={callToActionContent.image.alt}
          />
          <div className="absolute -bottom-4 -right-4 flex size-14 items-center justify-center rounded-full bg-white shadow-xl dark:bg-[#2c3928]">
            <span className="material-symbols-outlined text-3xl text-primary">favorite</span>
          </div>
        </motion.div>
      </div>
    </div>
  </Section>
)

export default CallToAction
