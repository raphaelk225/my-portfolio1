import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://ton-site.vercel.app' });

const links = [
  { url: '/', changefreq: 'monthly' },
  { url: '/Projets', changefreq: 'monthly' },
  { url: '/Compétences', changefreq: 'monthly' },
  { url: '/Parcours', changefreq: 'monthly' },
  { url: '/Contacts', changefreq: 'monthly' },
];

streamToPromise(sitemap)
  .then((sm) => {
    createWriteStream('./public/sitemap.xml').write(sm);
  })
  .catch(console.error);

links.forEach((link) => sitemap.write(link));
sitemap.end();
