import Image, { ImageProps } from "next/image";
import { ImgHTMLAttributes, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * All the props are passed to the img element.
 * Make sure to adjust the width and height of the container div
 * as per the design requirements/image aspect ratio.
 */
export default function DiscloseImage({
  className,
  doorClassName,
  vertical = false,
  ...props
}: ImageProps & {
  /**
   * Class name for the window on the left and right side of the image.
   */
  doorClassName?: string;

  /**
   * If true, the doors will slide vertically.
   */
  vertical?: boolean;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const baseClassName =
    "ease-slow duration-mid absolute bg-sky-500 transition-all animate-out fill-mode-forwards";

  return (
    <>
      <Image
        onLoad={() => setImageLoaded(true)}
        className={cn(className)}
        {...props}
        alt={props.alt || "Image that is disclosed"}
      />

      {imageLoaded && (
        <>
          <div
            className={cn(baseClassName, doorClassName, {
              "top-0 h-1/2 w-full slide-out-to-top-full": vertical,
              "bottom-0 left-0 top-0 w-1/2 slide-out-to-left-full": !vertical,
            })}
          />
          <div
            className={cn(baseClassName, doorClassName, {
              "bottom-0 h-1/2 w-full slide-out-to-bottom-full": vertical,
              "bottom-0 right-0 top-0 w-1/2 slide-out-to-right-full": !vertical,
            })}
          />
        </>
      )}
    </>
  );
}
