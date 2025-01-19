import { motion, useInView } from "motion/react";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id: string;
}

export function AnimatedSection({ children, id }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-45% 0px -45% 0px",
    once: false,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      id={id}
    >
      {children}
    </motion.section>
  );
}
