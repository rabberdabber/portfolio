import Image, { type ImageProps } from "next/image";
import { dynamicBlurDataUrl } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ImagesWithBlur({ src, alt, ...props }: ImageProps) {
  const [blurDataUrl, setBlurDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      const generatedBlurDataUrl = await dynamicBlurDataUrl(src as string);
      setBlurDataUrl(generatedBlurDataUrl);
    };
    loadImage();
  }, [src]);

  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      blurDataURL={blurDataUrl ?? undefined}
      placeholder={blurDataUrl ? "blur" : undefined}
    />
  );
}
