import InformationTitle from '@/components/otherTopics/information/informationTitle/';
import InformationEntry from '@/components/otherTopics/information/informationEntry/';
import Link from 'next/link';
import MenuCard from '../menuCard';
import { PAGES } from '@/constants/pages';

export default function OtherTopics() {
  return (
    <>
      <div className="flex">
        <div className="ml-auto mr-4">
          <InformationTitle />
        </div>
        <div className="mr-auto">
          <InformationEntry />
        </div>
      </div>

      <div className="mb-10"></div>
      <div className="flex">
        <div className="ml-auto">
          <Link
            href={PAGES.presidentMessage.root}
            aria-label="社長挨拶のページへ"
          >
            <MenuCard
              title="ごあいさつ"
              subTitle="社長挨拶"
              imageSrc="/greetingsFromPresident.jpg"
              imageAlt="会社の写真"
            />
          </Link>
        </div>
        <div className="mr-auto">
          <Link
            href={PAGES.companyHistory.root}
            aria-label="社長挨拶のページへ"
          >
            <MenuCard
              title="70年の歩み"
              subTitle="沿革"
              imageSrc="/companyHistory.jpg"
              imageAlt="歴史の写真"
            />
          </Link>
        </div>
      </div>
      <div className="mb-10"></div>
    </>
  );
}
