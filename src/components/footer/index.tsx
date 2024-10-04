import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary">
        <div className="h-5"></div>
        <div className="flex flex-wrap items-center justify-center">
          <Image
            className="my-2 mr-5"
            src="/insatsukoubou.svg"
            alt="株式会社印刷工房"
            width={220}
            height={90}
          />
          <div className="h-3 w-full md:hidden"></div>
          <div className="font-serif text-sm max-sm:text-center md:text-base">
            <p>〒501-0597 岐阜県揖斐郡大野町下磯750番地の1</p>
            <p>TEL. 0585-36-0201 / FAX. 0585-36-0201</p>
          </div>
        </div>

        <div className="my-3 flex items-center justify-center text-sm md:text-base md:tracking-wider">
          <p className="hover:opacity-70">プライバシーポリシー</p>
          <div className="w-3 md:hidden"></div>
          <div className="mx-4 hidden h-4 w-[1px] bg-gray-300 md:block"></div>
          <p className="hover:opacity-70">中核的労働における方針声明</p>
          <div className="w-3 md:hidden"></div>
          <div className="mx-4 hidden h-4 w-[1px] bg-gray-300 md:block"></div>
          <p className="text-red-500 hover:opacity-70">お問い合わせ</p>
        </div>

        <div className="pb-3 text-right font-serif text-xs">
          <p>
            &copy;Copyright 2024 INSATSU KOUBOU Co.,Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
