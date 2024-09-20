import Image from 'next/image';

export default function TopPic() {
  return (
    <>
      <div className="fixed -z-50 w-max shrink-0 max-md:w-fit max-md:translate-y-[10%]">
        <Image
          src="/high-quality-printing.jpg"
          alt="高品質な印刷を提供。職人がお届けする、美しい製品。"
          width={1000}
          height={800}
          priority={true}
        />
      </div>
    </>
  );
}
