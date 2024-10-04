import { SERVICE_MENUS } from '@/constants/serviceMenus';
import ServiceIntroduction from '@/components/nav/serviceIntroduction/index';
import Image from 'next/image';

export default function CircleLists() {
  return (
    <>
      <div className="-z-49 bg-white">
        <div className="flex shrink-0 flex-wrap items-center justify-center">
          zw
          {SERVICE_MENUS.map((serviceMenu) => {
            return (
              <div
                className="relative ml-[-40px] h-[160px] w-[160px] md:h-[200px] md:w-[200px] lg:ml-[-30px] lg:h-[240px] lg:w-[240px]"
                key={serviceMenu.id}
              >
                <Image
                  className="absolute rounded-full border-4 border-white shadow-xl hover:opacity-70"
                  src={serviceMenu.img}
                  width={240}
                  height={240}
                  alt={serviceMenu.alt}
                />
                <p className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] text-center text-xl text-white drop-shadow-md md:text-2xl lg:text-3xl lg:drop-shadow-2xl">
                  {serviceMenu.title}
                </p>
              </div>
            );
          })}
        </div>
        <ServiceIntroduction />
      </div>
    </>
  );
}
