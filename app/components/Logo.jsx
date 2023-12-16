import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function Logo({ className, ...props }) {
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
