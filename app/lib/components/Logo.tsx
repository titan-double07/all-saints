import Image from "next/image";
import { HTMLAttributes, ReactElement, ReactHTMLElement } from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = HTMLAttributes<HTMLImageElement> & {
  className?: string;
  priority?: boolean;
};
export default function Logo({ className, ...props }:LogoProps) {
  return (
    <Image
      src="/images/logo.png"
          alt="dioscese-logo"
      height={32}
      width={32}
      className={twMerge("h-10 w-10", className)}
      {...props}
    />
  );
}
