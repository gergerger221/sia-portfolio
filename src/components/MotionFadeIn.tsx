"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionFadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export default function MotionFadeIn({
  children,
  delay = 0,
  className = "",
  yOffset = 16,
}: MotionFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,      // only animate once — prevents re-trigger when scrolling back up
        amount: 0.15,    // element must be 15% visible before triggering (no premature fires)
        margin: "0px",   // no negative margin that can cause off-screen triggers
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // smooth ease-out-quart
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
