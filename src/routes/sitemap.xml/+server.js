// /src/routes/sitemap.xml/+server.js
import * as sitemap from 'super-sitemap';
export const prerender = true;
export const GET = async () => {
  return await sitemap.response({
    origin: 'https://ab-vakwerk.nl',
    excludeRoutePatterns: [
      '/blog/[post]',
      '/blog/category/[category]',
      '/blog/category/[category]/page/[page]',
      '/blog/category/page/[page]',
      '/blog/page/[page]',
      '/api'
    ],
  });
};
