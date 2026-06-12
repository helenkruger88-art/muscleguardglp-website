import { JsonLd } from './JsonLd';

type Step = { name: string; text: string };

type Props = {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration, e.g. "PT1W"
  steps: Step[];
};

/**
 * HowTo schema — the format AI engines and Google rich results extract step-by-step answers from.
 * Apply to articles that describe an actionable protocol (e.g. the muscle preservation prevention plan).
 */
export function HowToSchema({ name, description, totalTime, steps }: Props) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        ...(totalTime ? { totalTime } : {}),
        step: steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }}
    />
  );
}
