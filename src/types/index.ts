export type NavItem = {
  label: string
  href: string
}

export type BrandContent = {
  icon: string
  name: string
  tagline: string
}

export type ButtonLink = {
  label: string
  href: string
  icon?: string
}

export type HeroBadge = {
  icon: string
  text: string
}

export type HeroQuote = {
  badge: HeroBadge
  text: string
}

export type HeroTrustSignal = {
  avatarUrls: string[]
  totalLabel: string
  caption: string
}

export type HeroFloatingBadge = {
  icon: string
  label: string
  value: string
  position: 'top-right' | 'bottom-left'
}

export type HeroContent = {
  eyebrow: HeroBadge
  heading: {
    leading: string
    highlighted: string
  }
  description: string
  primaryCta: ButtonLink
  secondaryCta: ButtonLink
  trust: HeroTrustSignal
  quote: HeroQuote
  image: {
    src: string
    alt: string
  }
  floatingBadges: HeroFloatingBadge[]
}

export type Program = {
  icon: string
  title: string
  description: string
  ctaLabel: string
}

export type ProgramsContent = {
  heading: string
  description: string
  link: ButtonLink
  items: Program[]
}

export type SuccessStory = {
  name: string
  headline: string
  quote: string
  outcome: string
  image: {
    src: string
    alt: string
  }
}

export type SuccessStoriesContent = {
  eyebrow: string
  heading: string
  items: SuccessStory[]
}

export type CallToActionContent = {
  heading: string
  description: string
  primaryCta: ButtonLink
  secondaryCta: ButtonLink
  image: {
    src: string
    alt: string
  }
}

export type FooterLinkGroup = {
  title: string
  links: ButtonLink[]
}

export type FooterContent = {
  brand: {
    icon: string
    name: string
    description: string
  }
  social: ButtonLink[]
  groups: FooterLinkGroup[]
  newsletter: {
    description: string
    placeholder: string
    buttonIcon: string
  }
  legal: {
    copyright: string
    links: ButtonLink[]
  }
}
