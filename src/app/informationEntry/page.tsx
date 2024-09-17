import { INFORMATION_ENTRY } from '@/constants/informationEntry';

export default function InformationEntry() {
  return (
    <div className="m-0 bg-primary">
      {INFORMATION_ENTRY.map((informationEntry) => {
        return (
          <>
            <p className="text-md pl-2 pt-1 text-secondary">
              {informationEntry.date}
            </p>
            <p className="text-md pb-1 pl-2">{informationEntry.title}</p>
          </>
        );
      })}
    </div>
  );
}
