import { MetadataRoute } from 'next';

const BASE = 'https://shobhaengineeringworkshop.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/services', '/products', '/industries', '/contact'];
  return pages.map(path => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
