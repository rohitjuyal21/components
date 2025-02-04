"use client";

import { animate } from "motion";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useEffect } from "react";

interface AnimateNumberProps {
  value: number;
  isHovered: boolean;
  index?: number;
  delay: number;
  className?: string;
}

export default function AnimateNumber({
  value,
  isHovered,
  index,
  delay,
  className,
}: AnimateNumberProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isHovered) {
      animate(count, value, {
        duration: 0.5,
        delay,
      });
    } else {
      animate(count, 0, { duration: 1 });
    }
  }, [isHovered, value]);

  return (
    <motion.span
      // initial={{ y: 10 }}
      // animate={{ y: 0 }}
      // transition={{ duration: 2 }}
      className={className}
    >
      {rounded}
    </motion.span>
  );
}
