import { motion } from "framer-motion";
import React from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  revealClassName?: string;
  delay?: number;
  duration?: number;
  viewport?: boolean;
  once?: boolean;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className = "",
  revealClassName = "",
  delay = 0,
  duration = 0.5,
  viewport = true,
  once = true,
  tag = "div",
}) => {
  const words = text.split(" ");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  };

  const TagComponent = motion[tag] as any;

  return (
    <TagComponent
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewport ? { once } : undefined}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className={`inline-block mr-1 ${revealClassName}`}
          variants={child}
        >
          {word}
          {index !== words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </TagComponent>
  );
};

export default TextReveal;