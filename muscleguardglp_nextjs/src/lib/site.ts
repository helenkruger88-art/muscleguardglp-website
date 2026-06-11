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
    appStore: '#download',
    playStore: '#download',
  },
  pricing: {
    default: 'ZAR',
    plans: {
      ZAR: { monthly: 'R99', yearly: 'R899', monthlyAmount: '99', yearlyAmount: '899', currency: 'ZAR', saving: '24%' },
      USD: { monthly: '$5.99', yearly: '$59.99', monthlyAmount: '5.99', yearlyAmount: '59.99', currency: 'USD', saving: '17%' },
      EUR: { monthly: '€5.99', yearly: '€59.99', monthlyAmount: '5.99', yearlyAmount: '59.99', currency: 'EUR', saving: '17%' },
      GBP: { monthly: '£4.99', yearly: '£49.99', monthlyAmount: '4.99', yearlyAmount: '49.99', currency: 'GBP', saving: '17%' },
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
    priceLine: 'Free to start · R99/month · 7-day Pro trial, no card needed',
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
