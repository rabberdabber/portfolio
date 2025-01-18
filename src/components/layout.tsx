import { useEffect, useRef } from "react";
import { useSection } from "@/context/section-context";
import { Section } from "@/types/nav";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
  id,
  addPadding = true,
}: {
  children: React.ReactNode;
  id?: Section;
  addPadding?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { setActiveSection } = useSection();

  useEffect(() => {
    if (!ref.current || !id) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [id, setActiveSection]);

  return (
    <main
      ref={ref}
      className={cn(
        "snap-y snap-mandatory min-h-screen",
        addPadding ? "pt-16" : ""
      )}
    >
      <div className="container mx-auto pt-24 px-4 md:px-6">{children}</div>
    </main>
  );
}
