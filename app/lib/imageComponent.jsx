import Image from "next/image";

export default function ImageComponent ({ src, alt, ...props }) {
    return <Image src={src} width={200} height={200} alt={"image"|| alt} {...props} />;
 } 