import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Hokori Otaku',
  description:
    'Welcome to my world. I’m passionate about anime, manga, movies, music, and books. I love all kinds of pop culture and share my interests on Instagram. Join me if you’re interested!',
  href: 'https://www.hokoriotaku.space/',
  author: 'Gaurav',
  locale: 'en-US',
  featuredPostCount: 4,
  postsPerPage: 8,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/tags',
    label: 'tags',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://x.com/hokori_otakuu',
    label: 'Twitter',
  },
  {
    href: 'https://www.instagram.com/hokori.otaku/',
    label: 'Instagram',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
