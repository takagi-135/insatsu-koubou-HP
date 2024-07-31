import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary p-5">
        <div className="flex items-center">
          <Image
            className="ml-auto mr-5"
            src="/insatsukoubou.svg"
            alt="株式会社印刷工房"
            width={220}
            height={90}
          />
          <p className="text-s mr-auto font-serif">
            〒501-0597 岐阜県揖斐郡大野町下磯750番地の1
            <br />
            TEL. 0585-36-0201 / FAX. 0585-36-0201
          </p>
        </div>

        <div className="my-3 flex items-center tracking-wider">
          <p className="ml-auto hover:opacity-70">プライバシーポリシー</p>
          <div className="mx-4 h-4 w-[1px] bg-gray-300"></div>
          <p className="hover:opacity-70">中核的労働における方針声明</p>
          <div className="mx-4 h-4 w-[1px] bg-gray-300"></div>
          <p className="text-red mr-auto hover:opacity-70">お問い合わせ</p>
        </div>

        <div className="text-right font-serif text-xs">
          <p>
            &copy;Copyright 2024 INSATSU KOUBOU Co.,Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
