"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * A component that animates its children when they scroll into view.
 * @param {object} props
 * @param {React.ReactNode} props.children - The content to animate.
 * @param {number} [props.delay=0] - The delay in seconds before the animation starts.
 * @param {string} [props.className] - Optional CSS classes to apply to the wrapper.
 */
export default function ScrollAnimation({ children, delay = 0, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"} transition={{ duration: 0.6, ease: "easeOut", delay }} className={className}>
      {children}
    </motion.div>
  );
}