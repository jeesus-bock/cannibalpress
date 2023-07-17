import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Cannibal Press',
  description: 'A VitePress Experiment',
  base: '/cannibalpress/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Philistines', link: '/philistines' },
    ],

    sidebar: [
      {
        text: 'For all we know',
        items: [
          { text: 'Sebastian work', link: '/sebastian-work' },
          { text: 'Philistines', link: '/philistines' },
          { text: 'Subventure', link: '/subventure/' },
          { items: [{ text: 'Kalashnikov', link: '/subventure/kalashnikov' }] },
        ],
      },
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/jeesus-bock/cannibalpress' }],
  },
});
