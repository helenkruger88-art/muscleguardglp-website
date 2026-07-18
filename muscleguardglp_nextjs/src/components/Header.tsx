import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-white/95 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 text-ink no-underline">
          <Image
            src="/logo.png"
            alt="Muscle Guard"
            width={32}
            height={32}
            priority
            className="h-8 w-8 rounded-md"
          />
          <span>
            <span className="block text-[14px] font-bold tracking-[1.4px] text-brand-green">MUSCLE GUARD</span>
            <span className="-mt-0.5 block text-[10px] uppercase tracking-[1px] text-muted">GLP-1 Companion</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {/* Per build brief §0: /research is hero, /for-doctors stays footer-only */}
          <Link href="/research/" className="font-medium text-ink no-underline hover:text-brand-green">
            Research
          </Link>
          <Link href="/#features" className="font-medium text-ink no-underline hover:text-brand-green">
            How it works
          </Link>
          <Link href="/#pricing" className="font-medium text-ink no-underline hover:text-brand-green">
            Pricing
          </Link>
          <Link href="/faq/" className="font-medium text-ink no-underline hover:text-brand-green">
            FAQ
          </Link>
          <Link
            href="/#download"
            className="rounded-lg bg-brand-green px-4 py-2 font-medium text-white no-underline hover:bg-brand-green-dark hover:text-white hover:no-underline"
          >
            Get the app
          </Link>
        </nav>
      </div>
    </header>
  );
}
