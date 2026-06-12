import Link from 'next/link';
import { SITE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="bg-ink text-white/70" style={{ padding: '64px 0 32px', fontSize: 14 }}>
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]" style={{ marginBottom: 40 }}>
          <div className="text-[13px] leading-[1.7]">
            <span className="mb-3 block font-bold tracking-[1.4px] text-brand-green">MUSCLE GUARD</span>
            A GLP-1 companion built around muscle preservation. Track injections and tablets, scan plates with AI, log
            training, monitor body composition, and protect your lean mass.
            <div className="mt-4 rounded-lg bg-white/5 px-4 py-3 text-[12px] text-white/50">
              {SITE.disclaimer}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] uppercase tracking-[1.5px] text-white">Product</h4>
            <Link href="/#features" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Features</Link>
            <Link href="/#pricing" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Pricing</Link>
            <Link href="/#download" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Download</Link>
            <Link href="/story/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Our story</Link>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] uppercase tracking-[1.5px] text-white">Research</h4>
            <Link href="/research/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Research hub</Link>
            <Link href="/research/glp1-and-muscle-loss/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">GLP-1 and muscle loss</Link>
            <Link href="/evidence.pdf" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Evidence PDF</Link>
            <Link href="/research-library.pdf" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Research library PDF</Link>
            <Link href="/faq/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">FAQ</Link>
          </div>

          <div>
            <h4 className="mb-4 text-[12px] uppercase tracking-[1.5px] text-white">More</h4>
            <Link href="/contact/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Contact</Link>
            <Link href="/for-doctors/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">For doctors</Link>
            <Link href="/privacy/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Privacy</Link>
            <Link href="/terms/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Terms</Link>
            <Link href="/delete-account/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">Delete account</Link>
            <Link href="/regions/za/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">South Africa</Link>
            <Link href="/regions/us/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">United States</Link>
            <Link href="/regions/eu/" className="block py-1 text-[14px] text-white/70 no-underline hover:text-white">European Union</Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/50">
          <span>© {SITE.copyrightYear} {SITE.legalName} · {SITE.legalCity}</span>
          <span>Made with care in Johannesburg.</span>
        </div>
      </div>
    </footer>
  );
}
