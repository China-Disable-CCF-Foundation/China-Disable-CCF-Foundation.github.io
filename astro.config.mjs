import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { isTemplateSpan } from 'typescript';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://china-disable-ccf-foundation.github.io',
			},
			sidebar: [
					//[label: 'CCF 的问题',items: { label: 'CCF', slug:'homepage',},],
			],
		}),
	],
});
