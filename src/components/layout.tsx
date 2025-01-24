import { useEffect, useRef } from "react";
import { useSection } from "@/context/section-context";
import { Section } from "@/types/nav";
import { cn } from "@/lib/utils";
import { useIntersection } from "@mantine/hooks";

export default function Layout({
  children,
  id,
  addPadding = true,
}: {
  children: React.ReactNode;
  id?: Section;
  addPadding?: boolean;
}) {
  const { ref, entry } = useIntersection({
    threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
    rootMargin: "-10% 0px -10% 0px",
  });

  const { setActiveSection } = useSection();

  useEffect(() => {
    if (entry?.isIntersecting && id && entry.intersectionRatio >= 0.2) {
      setActiveSection(id);
    }
  }, [entry, id, setActiveSection]);

  return (
    <main
      ref={ref}
      className={cn(
        "snap-y snap-mandatory scroll-smooth relative min-h-screen",
        addPadding ? "pt-20 px-4 md:px-6 pb-4" : ""
      )}
      id={id}
    >
      {children}
    </main>
  );
}
