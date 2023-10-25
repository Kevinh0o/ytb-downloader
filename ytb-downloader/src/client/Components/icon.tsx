import Image from "next/image";

type Props = {
    src: string;
    size: number;
    alt: string;
}

export default function Icon({ src, size, alt }: Props) {
    return (
        <Image
            src={src}
            width={size}
            height={size}
            alt={alt}
        />
    );
}