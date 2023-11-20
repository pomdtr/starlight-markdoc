import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'My Docs',
    social: {
      github: 'https://github.com/pomdtr/starlight-markdoc',
    },
    sidebar: [{
      label: 'Guides',
      items: [
        // Each item here is one entry in the navigation menu.
        {
          label: 'Example Guide',
          link: '/guides/example/'
        }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), markdoc({})]
});
