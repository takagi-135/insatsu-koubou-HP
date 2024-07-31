import { SERVICE_MENUS } from '@/constants/serviceMenus';
import ServiceIntroduction from '@/components/nav/serviceIntroduction';
import Image from 'next/image';

export default function CircleLists() {
  return (
    <>
      <div className="-z-49 bg-white">
        <div className="flex shrink-0 flex-wrap items-center">
          <div className="ml-auto"></div>
          {SERVICE_MENUS.map((serviceMenu) => {
            return (
              <div
                className="relative ml-[-30px] h-[240px] w-[240px]"
                key={serviceMenu.id}
              >
                <Image
                  className="absolute rounded-full border-4 border-white shadow-xl hover:opacity-70"
                  src={serviceMenu.img}
                  width={240}
                  height={240}
                  alt={serviceMenu.alt}
                />
                <p className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-center text-3xl text-white drop-shadow-2xl">
                  {serviceMenu.title}
                </p>
              </div>
            );
          })}
          <div className="ml-5 mr-auto w-32 text-sm">
            <ServiceIntroduction />
          </div>
        </div>
      </div>
    </>
  );
}
