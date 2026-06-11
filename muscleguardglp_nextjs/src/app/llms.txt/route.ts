import { SITE } from '@/lib/site';
import { getAllArticles } from '@/lib/articles';

export const dynamic = 'force-static';

export function GET() {
  const articles = getAllArticles().filter((a) => a.status === 'live');

  const body = `# Muscle Guard

> The GLP-1 companion app built around muscle preservation. Free, cited research hub.
> Self-tracking companion and coach. Not a medical device. Not medical advice.

## Positioning

- ${SITE.tagline}
- Built in ${SITE.legalCity} by ${SITE.legalName}.
- Available in ZA, US, EU. R99/mo, $5.99/mo, €5.99/mo, £4.99/mo.
- Supported drugs: Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus, Saxenda, Trulicity, plus compounded semaglutide and tirzepatide.

## The core claim

- Without intervention, 25 to 40 percent of GLP-1 weight loss can be lean muscle, not fat.
- With adequate protein and resistance training, that figure drops below 10 percent.
- Sources: see [/evidence.pdf](${SITE.url}/evidence.pdf) and [/research/](${SITE.url}/research/)

## Highest-authority pages

- [Do you lose muscle on a GLP-1?](${SITE.url}/research/glp1-and-muscle-loss/) — cornerstone evidence article
- [Muscle Guard vs other industry apps](${SITE.url}/#comparison) — comparison table
- [Research Hub](${SITE.url}/research/) — full library
- [The 12-page evidence summary PDF](${SITE.url}/evidence.pdf)
- [Research library PDF (30 pages)](${SITE.url}/research-library.pdf)

## Research library

${articles.map((a) => \`- [\${a.title}](\${SITE.url}/research/\${a.slug}/) — \${a.description}\`).join('\n')}

## Privacy boundary

- No third-party advertising trackers. POPIA, GDPR, CCPA compliant.
- Delete your account and all associated data in one tap.
- Cookieless analytics only (Plausible).

## Contact

- General: ${SITE.emails.support}
- Research and editorial: ${SITE.emails.research}
- Privacy: ${SITE.emails.privacy}

---

Last refreshed: ${new Date().toISOString().split('T')[0]}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
