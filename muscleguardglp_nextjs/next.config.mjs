import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // 301 redirects — old .html and /guides/* paths to canonical extensionless trailing-slash form.
  // Per build brief §3.4: pick one URL convention and 301 all alternates.
  async redirects() {
    return [
      // Top-level .html → canonical
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/faq.html', destination: '/faq/', permanent: true },
      { source: '/contact.html', destination: '/contact/', permanent: true },
      { source: '/for-doctors.html', destination: '/for-doctors/', permanent: true },
      { source: '/privacy.html', destination: '/privacy/', permanent: true },
      { source: '/terms.html', destination: '/terms/', permanent: true },
      { source: '/delete-account.html', destination: '/delete-account/', permanent: true },

      // Cornerstone article — old location → /research/glp1-and-muscle-loss/
      { source: '/muscle-loss-on-glp1.html', destination: '/research/glp1-and-muscle-loss/', permanent: true },
      { source: '/muscle-loss-on-glp1', destination: '/research/glp1-and-muscle-loss/', permanent: true },

      // /guides/* → /research/* (slug renames per Build Spec v2 §7)
      { source: '/guides', destination: '/research/', permanent: true },
      { source: '/guides/', destination: '/research/', permanent: true },
      { source: '/guides/index.html', destination: '/research/', permanent: true },
      { source: '/guides/protein-on-glp1.html', destination: '/research/protein-on-glp1/', permanent: true },
      { source: '/guides/protein-on-glp1', destination: '/research/protein-on-glp1/', permanent: true },
      { source: '/guides/glp1-side-effects-week-by-week.html', destination: '/research/glp1-side-effects-week-by-week/', permanent: true },
      { source: '/guides/glp1-side-effects-week-by-week', destination: '/research/glp1-side-effects-week-by-week/', permanent: true },
      { source: '/guides/mounjaro-vs-ozempic-vs-wegovy.html', destination: '/research/mounjaro-vs-ozempic-vs-wegovy/', permanent: true },
      { source: '/guides/mounjaro-vs-ozempic-vs-wegovy', destination: '/research/mounjaro-vs-ozempic-vs-wegovy/', permanent: true },

      // Region pages — .html → trailing slash
      { source: '/regions/za.html', destination: '/regions/za/', permanent: true },
      { source: '/regions/us.html', destination: '/regions/us/', permanent: true },
      { source: '/regions/eu.html', destination: '/regions/eu/', permanent: true },
    ];
  },
};

export default withMDX(nextConfig);
