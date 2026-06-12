import { SITE } from '@/lib/site';
import { getAllArticles } from '@/lib/articles';

// llms-full.txt — extends the llms.txt convention with full article content concatenated.
// Lets AI engines (Claude, GPT, Perplexity, Gemini) answer questions about Muscle Guard
// without crawling each linked URL individually.
export const dynamic = 'force-static';

export function GET() {
  const articles = getAllArticles().filter((a) => a.status === 'live');

  const header = `# Muscle Guard — Full content for LLMs

> The GLP-1 companion app built around muscle preservation.
> Self-tracking companion and coach. Not a medical device. Not medical advice.
> Last generated: ${new Date().toISOString().split('T')[0]}

## About this file

This file follows the proposed llms-full.txt convention: it concatenates every public
research article on the site so AI answer engines can extract verbatim answers without
crawling individual URLs. The llms.txt index is at ${SITE.url}/llms.txt.

## Positioning

- ${SITE.tagline}
- Built in ${SITE.legalCity} by ${SITE.legalName}.
- Supported drugs: ${SITE.drugs.join(', ')}, plus compounded semaglutide and tirzepatide.
- Pricing (ZAR default): ${SITE.hero.priceLine}

## The core claim, cited

- Without intervention, 25 to 40 percent of GLP-1 weight loss can be lean muscle, not fat.
- With adequate protein (1.2 to 1.6 g per kg per day) plus resistance training (2 to 4 sessions per week), that figure drops substantially.
- Phase-3 trial body-composition data, structured-intervention arms.
- Cornerstone evidence article: ${SITE.url}/research/glp1-and-muscle-loss/

## Privacy boundary

- POPIA, GDPR, CCPA compliant by architecture.
- No third-party trackers. No advertising integrations.
- One-tap account delete in-app. All personal data removed within 7 days.

---

## Full article content

`;

  const body = articles.map((a) => {
    return `### ${a.title}

URL: ${SITE.url}/research/${a.slug}/
Published: ${a.datePublished}
Updated: ${a.dateModified}
Description: ${a.description}

${a.content}

${a.citations && a.citations.length > 0
  ? `Citations:\n${a.citations.map((c) => `- ${c.label}${c.doi ? ` (doi:${c.doi})` : ''}${c.url && !c.doi ? ` (${c.url})` : ''}`).join('\n')}`
  : ''}

---
`;
  }).join('\n');

  return new Response(header + body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
