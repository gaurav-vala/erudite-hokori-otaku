import { SITE } from '@/consts'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'
import { getCollection } from 'astro:content'

export async function GET(context: APIContext) {
  try {
    const blog = (await getCollection('blog')).filter(
      (post) => !post.data.draft,
    )

    // Sort posts by date
    const items = [...blog].sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    )

    // Return RSS feed
    return rss({
      title: SITE.title,
      description: SITE.description,
      site: context.site ?? SITE.href,
      items: items.map((item) => ({
        title: item.data.title,
        description: item.data.description,
        pubDate: item.data.date,
        link: `/${item.collection}/${item.id}/`,
      })),
    })
  } catch (error) {
    console.error('Error generating RSS feed:', error)
    return new Response('Error generating RSS feed', { status: 500 })
  }
}
