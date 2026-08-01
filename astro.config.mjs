import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.assurance-immeuble.fr',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
