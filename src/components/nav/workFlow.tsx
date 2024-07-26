import Image from "next/image";

export default function WorkFlow() {
  return (
    <>
      <div className="bg-[url('/workFlow.jpg')] bg-secondary mx-auto my-10 w-[583px] h-[100px] hover:opacity-70">
        <div className="px-5">
          <p className="text-white text-5xl pt-3 font-semibold">Work + Flow</p>
          <p className="text-white text-lg">印刷工房のモノづくり</p>
        </div>
      </div>
    </>
  );
}
