import Image from "next/image";

export default function TopPic() {
  return (
    <>
      <div className="fixed w-fit shrink-0 -z-50 translatey-[100px]">
        <Image
          src="/high-quality-printing.jpg"
          alt="高品質な印刷を提供。職人がお届けする、美しい製品。"
          width={1200}
          height={700}
          priority={true}
        />
      </div>
    </>
  );
}
