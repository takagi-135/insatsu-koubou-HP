import Main from '@/components/main';
import Nav from '@/components/nav';
import OtherTopics from '@/components/otherTopics';

export default function Home() {
  return (
    <>
      <Main />
      <div className="m-0 bg-white">
        <Nav />
        <OtherTopics />
      </div>
    </>
  );
}
