import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Muscle Guard brand tokens — port from existing styles.css
        brand: {
          green: '#0F7B6C',
          'green-dark': '#0A5A4F',
          'green-bg': '#E8F4F1',
        },
        gold: {
          DEFAULT: '#C97E1A',
          bg: '#FFF3E0',
        },
        ink: '#1A2520',
        muted: '#5F6E69',
        rule: '#E5E7E6',
        bg: '#FAFBFA',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Match existing clamp scale
        h1: ['clamp(34px, 5vw, 52px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h2: ['clamp(26px, 3.5vw, 36px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        h3: ['22px', { lineHeight: '1.3' }],
      },
      maxWidth: {
        wrap: '1180px',
        prose: '760px',
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        mockup: '0 30px 80px -20px rgba(15, 123, 108, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
