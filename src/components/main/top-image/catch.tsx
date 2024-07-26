export default function TopText() {
  return (
    <>
      <div className="bg-gradient-to-t from-primary h-3/4">
        <div className="text-secondary font-serif font-medium text-4xl pt-96 pb-5 px-16 drop-shadow-3xl ">
          <div className="flex justify-end flex-wrap">
            <p className="tracking-wide p-3">お客さまとの</p>
            <p className="tracking-tight p-3">“つながり”を大切に、</p>
          </div>
          <div className="flex justify-end flex-wrap">
            <p className="tracking-wider p-3">お客さまの</p>
            <p className="tracking-tighter p-3">“想い”を「カタチ」にする</p>
          </div>
        </div>
      </div>
    </>
  );
}
