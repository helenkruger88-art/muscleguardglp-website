import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';

// Per build brief §3.2: explicitly allow AI answer engines and link the sitemap.
// Owner decision §7: allowing Google-Extended / Applebot-Extended opts into AI training/answers.
// Recommended for a GEO strategy.

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'PerplexityBot',
    'Perplexity-User',
    'ClaudeBot',
    'Claude-Web',
    'Google-Extended',
    'Applebot-Extended',
    'meta-externalagent',
    'cohere-ai',
    'CCBot', // Common Crawl — corpus used to train many LLMs
  ];

  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
