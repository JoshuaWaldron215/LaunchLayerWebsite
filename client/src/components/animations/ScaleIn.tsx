import { motion } from "framer-motion";
import React from "react";

interface ScaleInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
  viewport?: boolean;
  once?: boolean;
}

const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.9,
  className = "",
  viewport = true,
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: initialScale,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      }}
      viewport={viewport ? { once } : undefined}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;