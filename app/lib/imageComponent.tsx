import Image from "next/image";
import { HTMLAttributes, ReactElement, ReactHTMLElement } from "react";
import { twMerge } from "tailwind-merge";

type ImageComponentProps =HTMLAttributes<HTMLImageElement> & {
  alt?: string;
  src: string;
};

export default function ImageComponent({
  className,
  alt,
  src,
  ...props
}: ImageComponentProps): ReactElement {
    return (
      <Image
        src={src}
        alt={alt || "image"}
        fill
        className={twMerge("object-cover object-center ", className)}
        {...props}
      />
    );
}

// interface ImageComponent extends ReactHTMLElement<HTMLImageElement>{
//     disabled?: boolean
// }
// type ImageComponentProps={
//     src: string
//     alt: string
// }
// export default function ImageComponent({ src, alt, ...props }: ImageComponentProps) {
//   return (
//     <Image src={src} width={200} height={200} alt={"image" || alt} {...props} />
//   );
// } 