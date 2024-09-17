export default function GreetingFromPresident() {
  return (
    <>
      <div className="relative h-[146px] w-[290px] shrink-0 items-center bg-[url('/greetingsFromPresident.jpg')] hover:opacity-70">
        <div className="absolute left-2/4 top-2/4 mx-auto translate-x-[-50%] translate-y-[-50%] text-center text-white">
          <p className="text-2xl font-semibold">ごあいさつ</p>
          <p className="text-xl font-medium">社長挨拶</p>
        </div>
      </div>
    </>
  );
}
