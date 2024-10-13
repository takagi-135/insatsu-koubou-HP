import Image from '../image';

interface Props {
  title: string;
  subTitle: string;
  imageSrc: string;
  imageAlt: string;
  imageClass?: string;
}

export default function MenuCard({
  title,
  subTitle,
  imageSrc,
  imageAlt,
  imageClass,
}: Props) {
  return (
    <article className="relative h-[120px] w-[225px] shrink-0 hover:opacity-70 md:h-[146px] md:w-[290px]">
      <Image src={imageSrc} alt={imageAlt} className={imageClass} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h2 className="text-xl font-semibold md:text-2xl">{title}</h2>
        <h3 className="text-base font-medium md:text-xl">{subTitle}</h3>
      </div>
    </article>
  );
}
