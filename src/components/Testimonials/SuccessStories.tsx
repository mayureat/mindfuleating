import { motion } from 'framer-motion'

import { successStoriesContent } from '../../data/siteContent'
import { SECTION_IDS } from '../../utils/constants'
import Section from '../layout/Section'

const SuccessStories = () => (
  <Section id={SECTION_IDS.stories}>
    <div className="flex flex-col items-center text-center">
      <span className="text-sm font-bold uppercase tracking-wide text-primary">
        {successStoriesContent.eyebrow}
      </span>
      <h2 className="mt-3 max-w-2xl text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        {successStoriesContent.heading}
      </h2>
    </div>

    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
      {successStoriesContent.items.map((story, index) => (
        <motion.article
          key={story.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex flex-col gap-6 rounded-[2rem] border border-moss-200/50 bg-white/90 p-6 shadow-lg transition-colors hover:bg-gray-50 dark:border-white/5 dark:bg-surface-dark/70 dark:hover:bg-surface-dark"
        >
          <div className="flex flex-col gap-6 sm:flex-row">
            <div
              className="h-48 w-full shrink-0 rounded-2xl bg-cover bg-center sm:h-auto sm:w-32"
              style={{ backgroundImage: `url(${story.image.src})` }}
              role="img"
              aria-label={story.image.alt}
            />
            <div className="flex flex-col justify-center">
              <div className="mb-3 flex text-primary">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex} className="material-symbols-outlined text-sm">
                    star
                  </span>
                ))}
              </div>
              <blockquote className="text-left text-lg font-medium text-gray-800 dark:text-gray-200">
                {story.quote}
              </blockquote>
              <div className="mt-4 text-left">
                <p className="font-bold text-gray-900 dark:text-white">{story.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{story.headline}</p>
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </Section>
)

export default SuccessStories
