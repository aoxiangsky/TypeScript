import { defineConfig,squooshImageService  } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'TypeScript',
			social: {
				github: 'https://github.com/aoxiangsky/TypeScript',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
		}),
	],
	image: {
		service: squooshImageService(),
	},
});
