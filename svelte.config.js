import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Create a separate mdsvex preprocessor
/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
 
  kit: {
    adapter: adapter({
		prerender: {
			entries: [
				"*",
				"/blog/*",
			],
		},
    })
  },
	preprocess: [
		mdsvex({
			extensions: [".md"],
		}),
	],
};

export default config;
