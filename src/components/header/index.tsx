import Image from 'next/image';

export default function Header() {
  return (
    <header>
      <div className="m-0 w-full bg-secondary p-4">
        <div className="flex items-center">
          <Image
            className="hover:opacity-70"
            src="/insatsukoubou-w.svg"
            alt="株式会社印刷工房"
            width={220}
            height={90}
          />
          <ol className="ml-auto flex list-none items-center justify-end space-x-3 pr-4 text-white">
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
