import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { getAllArticles } from '@/lib/articles';

// Per build brief §3.3: include every indexable URL with accurate lastmod.
// Submit to Google Search Console + Bing once deployed.

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0];
  const articles = getAllArticles();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: today, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE.url}/research/`, lastModified: articles[0]?.dateModified ?? today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE.url}/faq/`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/story/`, lastModified: today, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE.url}/for-doctors/`, lastModified: today, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE.url}/contact/`, lastModified: today, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE.url}/privacy/`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/terms/`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/delete-account/`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE.url}/regions/za/`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/regions/us/`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/regions/eu/`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const articlePages: MetadataRoute.Sitemap = articles
    .filter((a) => a.status === 'live')
    .map((a) => ({
      url: `${SITE.url}/research/${a.slug}/`,
      lastModified: a.dateModified,
      changeFrequency: 'monthly' as const,
      priority: a.slug === 'glp1-and-muscle-loss' ? 0.95 : 0.8,
    }));

  return [...staticPages, ...articlePages];
}
