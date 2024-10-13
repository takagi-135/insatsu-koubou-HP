import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

type CustomImageProps = NextImageProps & {
  className?: string;
};

export default function Image({
  src,
  alt,
  className = 'object-cover',
  ...props
}: CustomImageProps): JSX.Element {
  const defaultClassName = 'object-cover';
  const combinedClassName = twMerge(defaultClassName, className);

  return (
    <div className={`relative h-full w-full`}>
      <NextImage
        src={src}
        alt={alt}
        className={combinedClassName}
        layout="fill"
        objectFit="cover"
        {...props}
      />
    </div>
  );
}
