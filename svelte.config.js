import adapter from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Create a separate mdsvex preprocessor
const mdsvexPreprocessor = mdsvex({
  extensions: ['.md', '.svx'],
  layout: {
    _: '$lib/layouts/post.svelte' // Put your layout file here
  }
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    warningFilter: (warning) => {
      const ignore = [
        'a11y_media_has_caption',
        'a11y_no_redundant_roles',
        'a11y_consider_explicit_label',
        'a11y_no_noninteractive_tabindex',
        'a11y_click_events_have_key_events',
        'a11y_no_static_element_interactions',
        'a11y_no_noninteractive_element_interactions',
      ]
      return !ignore.includes(warning.code)
    },
  },
  
  // Define which preprocessors apply to which file extensions
  extensions: ['.svelte', '.md', '.svx'],
  
  preprocess: {
    // Only apply vitePreprocess to .svelte files
    '.svelte': [vitePreprocess()],
    // Only apply mdsvex to .md and .svx files
    '.md': [mdsvexPreprocessor],
    '.svx': [mdsvexPreprocessor]
  },
  
  kit: {
    adapter: adapter({
    out: 'build',
    precompress: true,
    envPrefix: 'VITE_'
    })
  }
};

export default config;
