export default function TopText() {
  return (
    <>
      <div className="bg-gradient-to-t from-primary">
        <div className="px-6 pb-5 pt-56 font-serif text-3xl font-medium text-secondary drop-shadow-3xl md:pt-96 lg:px-16 lg:text-4xl">
          <div className="flex flex-wrap justify-end">
            <p className="p-1 tracking-wide md:p-3">お客さまとの</p>
            <div className="w-full md:hidden"></div>
            <p className="p-1 tracking-tight md:p-3">“つながり”を大切に、</p>
          </div>
          <div className="flex flex-wrap justify-end">
            <p className="p-1 tracking-widest md:p-3">お客さまの</p>
            <div className="w-full md:hidden"></div>
            <p className="p-1 tracking-tighter md:p-3">
              “想い”を「カタチ」にする
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
