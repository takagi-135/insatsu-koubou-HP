import InformationTitle from '@/components/otherTopics/information/informationTitle/';
import GreetingFromPresident from '@/components/otherTopics/greetingFromPresident/';
import CompanyHistory from '@/components/otherTopics/companyHistory/';
import InformationEntry from '@/components/otherTopics/information/informationEntry/';

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
          <GreetingFromPresident />
        </div>
        <div className="mr-auto">
          <CompanyHistory />
        </div>
      </div>
      <div className="mb-10"></div>
    </>
  );
}
