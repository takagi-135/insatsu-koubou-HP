import Image from "next/image";

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
          <p className="mr-auto font-serif text-s">
            〒501-0597 岐阜県揖斐郡大野町下磯750番地の1
            <br />
            TEL. 0585-36-0201 / FAX. 0585-36-0201
          </p>
        </div>

        <div className="flex items-center my-3 tracking-wider">
          <p className="ml-auto hover:opacity-70">プライバシーポリシー</p>
          <div className="bg-gray-300 w-[1px] h-4 mx-4"></div>
          <p className=" hover:opacity-70">中核的労働における方針声明</p>
          <div className="bg-gray-300 w-[1px] h-4 mx-4"></div>
          <p className="mr-auto  hover:opacity-70">お問い合わせ</p>
        </div>

        <div className="font-serif text-xs text-right">
          <p>
            &copy;Copyright 2024 INSATSU KOUBOU Co.,Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
