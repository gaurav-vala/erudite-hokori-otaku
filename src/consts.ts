export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Hokori Otaku',
  DESCRIPTION:
    'Welcome to my world. I’m passionate about anime, manga, movies, music, and books. I love all kinds of pop culture and share my interests on Instagram. Join me if you’re interested!',
  EMAIL: '',
  NUM_POSTS_ON_HOMEPAGE: 5,
  POSTS_PER_PAGE: 8,
  SITEURL: 'https://hokoriotaku.vercel.app/',
}

export const NAV_LINKS: Link[] = [
  { href: '/blog', label: 'posts' },
  { href: '/authors', label: 'authors' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://x.com/hokoriOtaku', label: 'Twitter' },
  { href: 'https://www.instagram.com/hokori.otaku', label: 'Instagram' },
  { href: '/rss.xml', label: 'RSS' },
]
