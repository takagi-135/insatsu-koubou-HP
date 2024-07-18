import Image from "next/image";

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
          <ol className="list-none flex space-x-3 justify-end items-center pr-4 ml-auto text-white">
            <li className="hover:opacity-50 hover:text-danger">会社案内</li>
            <li className="hover:opacity-50 hover:text-danger">
              製品・サービス
            </li>
            <li className="hover:opacity-50 hover:text-danger">アクセス</li>
          </ol>
        </div>
      </div>
    </header>
  );
}
