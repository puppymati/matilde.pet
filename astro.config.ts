import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://matilde.pet',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		svgo: true,
	},
});
