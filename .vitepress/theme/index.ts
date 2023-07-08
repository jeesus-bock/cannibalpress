// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import Theme from 'vitepress/theme-without-fonts';
import './colors.css';
import './style.css';
import './fonts.css';
export default {
  extends: Theme,
  /*Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },*/
  enhanceApp({ app, router, siteData }) {
    // ...
  },
};
