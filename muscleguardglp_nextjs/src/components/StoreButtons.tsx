import Link from 'next/link';
import { SITE } from '@/lib/site';

type Props = { variant?: 'default' | 'light' };

export function StoreButtons({ variant = 'default' }: Props) {
  const buttonClass =
    variant === 'light'
      ? 'inline-flex items-center gap-2.5 rounded-[10px] bg-white px-5 py-3 text-ink no-underline hover:bg-gray-100'
      : 'store-btn';

  return (
    <div className="flex flex-wrap gap-3">
      <Link href={SITE.stores.appStore} className={buttonClass}>
        <span>
          <span className="block text-[10px] uppercase tracking-[1px] opacity-70">Download on the</span>
          <span className="text-[15px] font-medium">App Store</span>
        </span>
      </Link>
      <Link href={SITE.stores.playStore} className={buttonClass}>
        <span>
          <span className="block text-[10px] uppercase tracking-[1px] opacity-70">Get it on</span>
          <span className="text-[15px] font-medium">Google Play</span>
        </span>
      </Link>
    </div>
  );
}
