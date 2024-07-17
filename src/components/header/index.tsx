export default function Header() {
  return (
    <header>
      <div className="grid grid-cols-2 m-0 w-full bg-secondary p-4">
        <h1 className="text-white">株式会社 印刷工房</h1>
        <ol className="list-none flex space-x-3 justify-end items-center pr-5 text-white">
          <li>会社案内</li>
          <li>製品・サービス</li>
          <li>アクセス</li>
        </ol>
      </div>
    </header>
  );
}
