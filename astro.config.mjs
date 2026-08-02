import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.assurance-immeuble.fr',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/merci') &&
        !page.includes('/mentions-legales') &&
        !page.includes('/politique-confidentialite') &&
        !page.includes('/404'),
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        const url = item.url.replace(/\/$/, '');
        if (url === 'https://www.assurance-immeuble.fr') {
          return { ...item, priority: 1.0, changefreq: 'weekly' };
        }
        if (/\/(multirisque-immeuble|pno|garanties|sinistres|demande-devis)$/.test(url)) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        if (url.includes('/blog/')) {
          return { ...item, priority: 0.7, changefreq: 'yearly' };
        }
        return item;
      },
    }),
  ],
});
