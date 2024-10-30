import Image from 'next/image';
import Link from 'next/link';
import { PAGES } from '../../constants/pages';

export default function Header() {
  return (
    <header>
      <div className="fixed z-50 m-0 w-full bg-secondary p-4">
        <div className="flex items-center">
        <Link href={PAGES.top.root} passHref>
            <Image
              className="hover:opacity-70"
              src="/insatsukoubou-w.svg"
              alt="株式会社印刷工房"
              width={220}
              height={90}
            />
          </Link>
          <ol className="ml-auto flex list-none items-center justify-end space-x-2 pr-1 text-xs text-white md:space-x-4 md:pr-4 md:text-base">
            <li className="hover:text-danger hover:opacity-50">会社案内</li>
            <li className="hover:text-danger hover:opacity-50">
              製品・サービス
            </li>
            <li className="hover:text-danger hover:opacity-50">アクセス</li>
          </ol>
        </div>
      </div>
    </header>
  );
}
