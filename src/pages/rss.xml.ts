import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { site } from '@/config';

export async function GET(context: APIContext) {
	const blog = (await getCollection('blog')).toSorted(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
	return rss({
		title: site.rssTitle,
		description: site.rssDescription,
		site: context.site!,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id}/`,
		})),
	});
}
