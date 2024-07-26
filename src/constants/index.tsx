import { SERVICE_MENUS } from "@/constants/serviceMenus";
import ServiceIntroduction from "@/constants/serviceIntroduction";
import Image from "next/image";

export default function CircleLists() {
  return (
    <>
      <div className="-z-49 bg-white">
        <div className="flex flex-wrap shrink-0 items-center">
          <div className="ml-auto"></div>
          {SERVICE_MENUS.map((service_menu) => {
            return (
              <div
                className="relative w-[240px] h-[240px] ml-[-30px]"
                key={service_menu.id}
              >
                <Image
                  className="absolute rounded-full border-white border-4 shadow-xl hover:opacity-70"
                  src={service_menu.img}
                  width={240}
                  height={240}
                  alt={service_menu.alt}
                />
                <p className="absolute text-center text-white text-3xl top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] drop-shadow-2xl">
                  {service_menu.title}
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
