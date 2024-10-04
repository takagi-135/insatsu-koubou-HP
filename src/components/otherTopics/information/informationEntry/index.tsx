import { INFORMATION_ENTRY } from '@/constants/informationEntry';

export default function InformationEntry() {
  return (
    <div className="m-0 h-[80px] w-[300px] bg-primary md:h-[100px] md:w-[380px]">
      {INFORMATION_ENTRY.map((informationEntry) => {
        return (
          <div key={informationEntry.id}>
            <p className="pl-2 pt-1 text-xs text-secondary md:text-sm">
              {informationEntry.date}
            </p>
            <p className="pb-1 pl-2 text-sm md:text-base">
              {informationEntry.title}
            </p>
          </div>
        );
      })}
    </div>
  );
}
