import type {
  BrandContent,
  CallToActionContent,
  FooterContent,
  HeroContent,
  ProgramsContent,
  SuccessStoriesContent,
  NavItem,
} from '../types'

export const brandContent: BrandContent = {
  icon: 'eco',
  name: 'Mindful Eating',
  tagline: 'Nutrition is self care',
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Programs', href: '#programs' },
  { label: 'Diet Chat', href: '#cta' },
  { label: 'About', href: '#about' },
  { label: 'Success Stories', href: '#stories' },
  { label: 'Blog', href: '#blog' },
]

export const heroContent: HeroContent = {
  eyebrow: {
    icon: 'verified',
    text: 'Certified Nutritionists',
  },
  heading: {
    leading: 'Heal Your Body With',
    highlighted: 'Personalized Nutrition',
  },
  description:
    'Sustainable, science-based diet support designed for your unique physiology. Specialized care for PCOD, weight management & diabetes reversal.',
  primaryCta: {
    label: 'Start Diet Chat',
    href: '#cta',
    icon: 'chat_bubble',
  },
  secondaryCta: {
    label: 'View Programs',
    href: '#programs',
  },
  trust: {
    avatarUrls: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAd0-enw33Ad-c6_YTUeZc3-DgaDUATav8NuhdU-O2pjAiy3ddUx23h7fQdxvPrkkDtKG6iD5G1EoEuQ_pWijh0pphFbncVeKvy1oijHg8ctQZyoRD0gRfHAtBEZIogxYUQEsWzosweF0Q_gOnvNB_Ua6Nhw76siAq_ZPWTdiNFGOO4eBXlhNEGnULIszs0dm9v4DxhW5ZhmSuwv897TrSDhND9BgEXlFUsE9DG8OFfbJeOcdaImLNUQ_mNyrOL1ond9Eh-zPfWBw0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRNIBbv1Vn-2zBK13W5auBtgmYRyEE_95O5C2aE7ASeyTI4tppVKoVxTRBJnoPsMKU0AGwDbRo7Ex1jFmBjYFVnGxCWVho5MIgPlg8lQopbvaEHSktTHjkQ3H_rqKJMCHWciI3e-kfOmUi5vOE2Spr3VfU0LQOjsipnqZ7w3jnF1nIxLyq8P79NwKMlZUztzPUli_0sFbwERi9kOynHcCZs0AZtU9Fb-fxzMDO4VDlr-0L-QvQ1sxHab3r0AoXcKWPG5EjFMVsi6Q',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRWNnuDhsHKQ-Y-lZhFRVSNuBG_nFTJsglwD5HGuGDNGxSqUy8EwgPOQI3tope3fETK_i5RM0mcu6yKhpv9QN_qhMZMEdr2BWFJBYmSpQYzmYwTULxNNff602nJ4mda7WNkCZSTg6LaR8dLcwGfFUJ1fLSFHASG9HH1dzzSK52YxmtRjHM7Ohfph1T1AJ1Xdl5YFoG8UyC6iqP5_a1u1Nk3rlC_LUE-yhimk1boio_x-XeLgN556SSwQ8XMO704GrPgYiytXoT7fM',
    ],
    totalLabel: '500+',
    caption: 'Happy clients healing naturally',
  },
  quote: {
    badge: {
      icon: 'spa',
      text: 'Mindful Choice',
    },
    text: '“Changing what you eat changes how you feel. Start small, feel big.”',
  },
  image: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBY05j0KqfBD_FyukBJ1z71qOkqGV_6b6rGOsH4MuMvtC0xu_0IIw6olzahe0ocGgGxHEe61ACBMN5-tTeCDckSBqvyC70CuSqd8x0bdQgvQTVKdj5EBgS1m3d8cYEJe7Q8AavFwFnyDBCSCwpSA_a71nEqFzwpc_J2JbH6_F2VR--xzhcnOf5v5WKoURLzOxtBPp_i23tA8JslY6dUfCKcfRjy6tI0zMfDCfpeA5nPbXL_j8Ypjpl1Fwn-RFyPSQxK_OsG0arGs0',
    alt: 'Healthy bowl with fresh vegetables, avocado, and greens',
  },
  floatingBadges: [
    {
      icon: 'nutrition',
      label: 'Calories',
      value: 'Smart Tracking',
      position: 'top-right',
    },
    {
      icon: 'vital_signs',
      label: 'Health Score',
      value: '98% Excellent',
      position: 'bottom-left',
    },
  ],
}

export const programsContent: ProgramsContent = {
  heading: 'Our Core Programs',
  description:
    "Specialized nutrition plans designed for your unique physiology and lifestyle needs. We don't believe in one-size-fits-all.",
  link: {
    label: 'Explore All Programs',
    href: '#programs',
    icon: 'arrow_forward',
  },
  items: [
    {
      icon: 'female',
      title: 'PCOD Management',
      description:
        'Holistic, hormone-balancing diets to manage symptoms naturally. Focus on insulin resistance and gut health.',
      ctaLabel: 'Learn more',
    },
    {
      icon: 'monitor_weight',
      title: 'Weight Loss',
      description:
        'Sustainable calorie deficits without starvation. We focus on nutrient density and metabolic flexibility.',
      ctaLabel: 'Learn more',
    },
    {
      icon: 'blood_pressure',
      title: 'Diabetes Reversal',
      description:
        'Scientific blood sugar management through low glycemic index foods and lifestyle modifications.',
      ctaLabel: 'Learn more',
    },
  ],
}

export const successStoriesContent: SuccessStoriesContent = {
  eyebrow: 'Real Results',
  heading: 'Success Stories From Our Community',
  items: [
    {
      name: 'Sarah Jenkins',
      headline: 'Lost 12kg in 4 months',
      quote:
        '“I never thought I could manage my PCOD without heavy medication. Mindful Eating changed my relationship with food entirely.”',
      outcome: 'PCOD Management',
      image: {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzNgTHf2EHdQnXkMTG1yG99y4icHTHhjgaEqr3fCt2tF4uyWTU6zwkxXAeVb4m-Ra4hefNDrqcfJ0T0Ne2xxz9B-5Jyyg6-mMHjbZ7_CrLbWNL0gDwyfcaN4hjK_II8QsdUlYGlPx6VcSQNsGVaycRC8VohEp7PiA0X-osbPJw947Th2lHBVeDIktiDszYowVsm_I_xjG5D71ELhYtnIRZpBoaieqSRUvY3qbUtUWme6-x0EIY6uwasTk3VTT2XYR8mKttsO4NBDs',
        alt: 'Portrait of a happy young woman',
      },
    },
    {
      name: 'David Chen',
      headline: 'Reversed Type 2 Diabetes',
      quote:
        '“The diabetes reversal program is legitimate science. My levels are stable, and I feel more energetic than I did in my 30s.”',
      outcome: 'Diabetes Reversal',
      image: {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaubD2fApJw-LEzmbUT1w-7oAhrkAK0HvxpXdPgr9Ck5ROeSRenxUen5AZ0UZhv9Ibv1dCoqmIzLL23Yk6CQr9zXsK1bv06K8rBaiJnQBHWtRzEbOx-sdLAuFW8lE8fYPto591Hw5HwHtXm6sJUlro4BR3w9nJfMewzD5AnU5GhwmIfaFvr6kHaPRFOADkiq3cUgZxPyQTeW0D1BSXMFXcoNghAtOm_5VtlGdmCiAgGt9e1U25iz7TMoPUlfRkPWO-Dphx-Ci2F1g',
        alt: 'Portrait of a fit middle-aged man',
      },
    },
  ],
}

export const callToActionContent: CallToActionContent = {
  heading: 'Ready to prioritize your health?',
  description:
    'Join over 5,000 members who have transformed their lives through mindful nutrition. Your journey starts with a simple chat.',
  primaryCta: {
    label: 'Start Free Assessment',
    href: '#diet-chat',
  },
  secondaryCta: {
    label: 'Contact Support',
    href: '#contact',
  },
  image: {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQfcBj4lZhTaChkiGM-U10tJvSG9kLgrO_FLKqjqs_qq2BGLYv9xN-8mQXelXLSSQIAN2_cYuMqsiJYOldCdjopsDu00AkpmrSk5JuNjokduatGXlzgxifduiPo7SbeAPBqRNQWo6s4sO9l3vG1vqwzuTHlLszRnFILSN0zXQdULqX57TA7TXEb2NQE7q8xtYjiylwz_lSbCqwxERKE_UTzOehrSQr5dmmo_OcToLntsbXG7Khcbq8z1DTDSKGfKZn4BYT2SlLJH4',
    alt: 'Top down view of a healthy salad bowl',
  },
}

export const footerContent: FooterContent = {
  brand: {
    icon: brandContent.icon,
    name: brandContent.name,
    description:
      'Reconnecting you with the healing power of food. Science-backed, soul-approved nutrition.',
  },
  social: [
    { label: 'Website', href: '#', icon: 'public' },
    { label: 'Email', href: '#', icon: 'alternate_email' },
  ],
  groups: [
    {
      title: 'Programs',
      links: [
        { label: 'Weight Loss', href: '#programs' },
        { label: 'PCOD/PCOS', href: '#programs' },
        { label: 'Diabetes Reversal', href: '#programs' },
        { label: 'Gut Health', href: '#programs' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Success Stories', href: '#stories' },
        { label: 'Our Nutritionists', href: '#about' },
        { label: 'Careers', href: '#careers' },
      ],
    },
  ],
  newsletter: {
    description: 'Get weekly nutrition tips and healthy recipes.',
    placeholder: 'Your email',
    buttonIcon: 'arrow_forward',
  },
  legal: {
    copyright: '© 2023 Mindful Eating Inc. All rights reserved.',
    links: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
    ],
  },
}
