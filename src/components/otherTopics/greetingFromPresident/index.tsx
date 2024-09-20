export default function GreetingFromPresident() {
  return (
    <>
      <div className="relative h-[120px] w-[225px] shrink-0 items-center bg-[url('/greetingsFromPresident.jpg')] hover:opacity-70 md:h-[146px] md:w-[290px]">
        <div className="absolute left-2/4 top-2/4 mx-auto translate-x-[-50%] translate-y-[-50%] text-center text-white">
          <p className="text-xl font-semibold md:text-2xl">ごあいさつ</p>
          <p className="text-base font-medium md:text-xl">社長挨拶</p>
        </div>
      </div>
    </>
  );
}
