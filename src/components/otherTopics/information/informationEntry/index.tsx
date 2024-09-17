import { INFORMATION_ENTRY } from '@/constants/informationEntry';

export default function InformationEntry() {
  return (
    <div className="m-0 h-[140px] w-[380px] bg-primary">
      {INFORMATION_ENTRY.map((informationEntry) => {
        return (
          <div key={informationEntry.id}>
            <p className="pl-2 pt-1 text-sm text-secondary">
              {informationEntry.date}
            </p>
            <p className="text-md pb-1 pl-2">{informationEntry.title}</p>
          </div>
        );
      })}
    </div>
  );
}
