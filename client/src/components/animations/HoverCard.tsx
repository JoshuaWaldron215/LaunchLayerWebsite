import { motion } from "framer-motion";
import React from "react";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  whileHoverScale?: number;
  whileHoverRotate?: number;
  whileHoverElevate?: number;
  duration?: number;
}

const HoverCard: React.FC<HoverCardProps> = ({
  children,
  className = "",
  whileHoverScale = 1.05,
  whileHoverRotate = 0,
  whileHoverElevate = 15,
  duration = 0.3,
}) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{
        scale: whileHoverScale,
        rotate: whileHoverRotate,
        y: -whileHoverElevate,
        zIndex: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 15,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
};

export default HoverCard;