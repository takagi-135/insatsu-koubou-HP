export default function TopText() {
  return (
    <>
      <div className="h-3/4 bg-gradient-to-t from-primary">
        <div className="px-16 pb-5 pt-96 font-serif text-4xl font-medium text-secondary drop-shadow-3xl">
          <div className="flex flex-wrap justify-end">
            <p className="p-3 tracking-wide">お客さまとの</p>
            <p className="p-3 tracking-tight">“つながり”を大切に、</p>
          </div>
          <div className="flex flex-wrap justify-end">
            <p className="p-3 tracking-wider">お客さまの</p>
            <p className="p-3 tracking-tighter">“想い”を「カタチ」にする</p>
          </div>
        </div>
      </div>
    </>
  );
}
