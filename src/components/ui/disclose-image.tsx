import { ImgHTMLAttributes, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { breakpoints } from "@/hooks/useMediaQuery";

/**
 * All the props are passed to the img element.
 * Make sure to adjust the width and height of the container div
 * as per the design requirements/image aspect ratio.
 */
export default function DiscloseImage({
  className,
  doorClassName,
  vertical = false,
  src,
  alt,
  width,
  height,
  priority,
  ...props
}: ImgHTMLAttributes<HTMLImageElement> & {
  /**
   * Class name for the window on the left and right side of the image.
   */
  doorClassName?: string;

  /**
   * If true, the doors will slide vertically.
   */
  vertical?: boolean;
  priority?: boolean;
}) {
  const isMobile = useMediaQuery(breakpoints.sm);

  const [imageLoaded, setImageLoaded] = useState(false);
  const baseClassName =
    "ease-[cubic-bezier(.405,_0,_.025,_1)] duration-[5000ms] absolute bg-sky-500 transition-all animate-out fill-mode-forwards";

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{
        width: width,
        height: height,
        maxWidth: isMobile ? "300px" : "100%",
      }}
    >
      <Image
        onLoad={() => setImageLoaded(true)}
        {...props}
        className={cn("h-full w-full object-cover rounded-xl", className)}
        src={src as string}
        alt={alt as string}
        width={width as number}
        height={height as number}
        priority={priority}
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
    </div>
  );
}
