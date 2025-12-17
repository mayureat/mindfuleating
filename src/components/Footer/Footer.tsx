import { footerContent } from '../../data/siteContent'

const Footer = () => (
  <footer className="border-t border-moss-200/40 bg-white py-16 dark:border-moss-500/40 dark:bg-background-dark">
    <div className="mx-auto w-full max-w-7xl px-6 sm:px-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-3xl text-primary">
              {footerContent.brand.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {footerContent.brand.name}
              </span>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm text-gray-500 dark:text-gray-400">
            {footerContent.brand.description}
          </p>
          <div className="mt-6 flex gap-4">
            {footerContent.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-400 transition-colors hover:text-primary"
                aria-label={item.label}
              >
                <span className="material-symbols-outlined text-2xl">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {footerContent.groups.map((group) => (
          <div key={group.title}>
            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
              {group.title}
            </h4>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white">Newsletter</h4>
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            {footerContent.newsletter.description}
          </p>
          <form className="mt-6 flex gap-2">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder={footerContent.newsletter.placeholder}
              className="h-11 flex-1 rounded-full border-none bg-gray-100 px-4 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-primary dark:bg-[#1e271c] dark:text-white"
            />
            <button
              type="submit"
              className="flex size-11 items-center justify-center rounded-full bg-primary text-background-dark transition-colors hover:bg-[#3bdb0f]"
            >
              <span className="material-symbols-outlined text-2xl">
                {footerContent.newsletter.buttonIcon}
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-moss-200/40 pt-6 text-xs text-gray-400 dark:border-moss-500/40 md:flex-row">
        <p>{footerContent.legal.copyright}</p>
        <div className="flex gap-6">
          {footerContent.legal.links.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
