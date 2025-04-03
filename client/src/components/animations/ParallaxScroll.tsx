import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  offsetMultiplier?: number;
}

const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
  offsetMultiplier = 1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate the transform based on direction
  const getTransform = () => {
    const multiplier = speed * 100 * offsetMultiplier;
    
    switch (direction) {
      case "up":
        return useTransform(scrollYProgress, [0, 1], ["0%", `-${multiplier}%`]);
      case "down":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${multiplier}%`]);
      case "left":
        return useTransform(scrollYProgress, [0, 1], ["0%", `-${multiplier}%`]);
      case "right":
        return useTransform(scrollYProgress, [0, 1], ["0%", `${multiplier}%`]);
      default:
        return useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
    }
  };

  const transform = getTransform();
  const property = direction === "up" || direction === "down" ? "y" : "x";

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ [property]: transform }}>
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxScroll;