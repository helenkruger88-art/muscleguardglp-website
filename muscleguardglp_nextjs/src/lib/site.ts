// Site-wide constants. Edit prices here to update the schema + visible price together.
export const SITE = {
  url: 'https://muscleguardglp.com',
  name: 'Muscle Guard',
  tagline: 'Track your GLP-1 journey. Protect your muscle.',
  description:
    'The GLP-1 companion app built around muscle preservation. Track your GLP-1 journey, protect your lean mass, export a clinician-ready report.',
  legalName: 'HK Brand Expert (Pty) Ltd',
  legalCity: 'Johannesburg',
  legalCountry: 'ZA',
  copyrightYear: 2026,
  emails: {
    support: 'support@muscleguardglp.com',
    research: 'research@muscleguardglp.com',
    privacy: 'privacy@muscleguardglp.com',
  },
  social: {},
  stores: {
    // Default (global) store URLs. Swap for real listings once the app ships.
    appStore: '#download',
    playStore: 'https://play.google.com/store/apps/details?id=com.muscleguard.app',
    // Per-region store URLs. Used by region pages (e.g. /regions/za) and pricing
    // toggle to send users to the right App Store / Play Store country listing.
    // When you ship to the App Store, the URL format is:
    //   https://apps.apple.com/{country}/app/muscle-guard/id{appId}
    //   https://play.google.com/store/apps/details?id={packageId}&hl={lang}&gl={country}
    regions: {
      za: { appStore: '#download', playStore: 'https://play.google.com/store/apps/details?id=com.muscleguard.app' },
      us: { appStore: '#download', playStore: 'https://play.google.com/store/apps/details?id=com.muscleguard.app' },
      eu: { appStore: '#download', playStore: 'https://play.google.com/store/apps/details?id=com.muscleguard.app' },
      gb: { appStore: '#download', playStore: 'https://play.google.com/store/apps/details?id=com.muscleguard.app' },
    },
  },
  pricing: {
    default: 'ZAR',
    plans: {
      ZAR: { monthly: 'R99', yearly: 'R899', monthlyAmount: '99', yearlyAmount: '899', currency: 'ZAR', saving: '24%' },
      USD: { monthly: '$5.99', yearly: '$54.99', monthlyAmount: '5.99', yearlyAmount: '54.99', currency: 'USD', saving: '23%' },
      EUR: { monthly: '€5.99', yearly: '€54.99', monthlyAmount: '5.99', yearlyAmount: '54.99', currency: 'EUR', saving: '23%' },
      GBP: { monthly: '£5.49', yearly: '£49.49', monthlyAmount: '5.49', yearlyAmount: '49.49', currency: 'GBP', saving: '25%' },
    },
  },
  drugs: ['Ozempic', 'Wegovy', 'Mounjaro', 'Zepbound', 'Rybelsus', 'Saxenda', 'Trulicity'],
  hero: {
    h1Part1: 'Track your GLP-1 journey.',
    h1Part2: 'Protect your muscle.',
    body:
      'GLP-1 medications burn fat. Without intervention, 25 to 40 percent of what you lose can be lean muscle, not fat. Muscle Guard tracks the protein-and-training playbook that drops that figure substantially — across every GLP-1 South Africans actually take, including compounded semaglutide and tirzepatide.',
    builtFor:
      'Compounded semaglutide and tirzepatide, plus Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus, Saxenda and Trulicity.',
    priceLine: 'Free forever · Pro R99/month · 7-day trial, no card needed',
  },
  disclaimer:
    'Muscle Guard is a self-tracking companion and coach. Not a medical device. Not medical advice. Always consult your healthcare provider for personal decisions.',
};

export const RESEARCH_BRANCHES = [
  {
    slug: 'what-glp1s-do',
    title: 'What GLP-1s do to your body',
    summary:
      'GLP-1 receptor agonists suppress appetite and slow gastric emptying. The result is significant weight loss — and, without intervention, significant lean mass loss alongside the fat. Here is what the studies show, drug by drug.',
  },
  {
    slug: 'how-to-protect-muscle',
    title: 'How to protect your muscle on a GLP-1',
    summary:
      'Lean mass loss on a GLP-1 is largely preventable. Three levers — protein, resistance training, and avoiding extreme calorie deficits — drop muscle-loss share from 25 to 40 percent to under 10. Here are the protocols, the evidence, and what Muscle Guard tracks for you.',
  },
  {
    slug: 'research-updated',
    title: 'The research, updated',
    summary:
      "A chronological log of every study, paper, and clinical analysis factored into the Research Hub. Updated monthly. If a new paper changes what we publish, we say so here first.",
  },
] as const;
