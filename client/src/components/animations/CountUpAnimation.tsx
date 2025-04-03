import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpAnimationProps {
  targetNumber: string;
  duration?: number;
  delay?: number;
}

// Helper to extract numeric part of a string like "50+" or "99%"
const extractNumber = (numString: string): { number: number, suffix: string } => {
  const match = numString.match(/(\d+)([%+])?/);
  if (match) {
    return {
      number: parseInt(match[1], 10),
      suffix: match[2] || ""
    };
  }
  return { number: 0, suffix: "" };
};

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
  targetNumber,
  duration = 2,
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { number, suffix } = extractNumber(targetNumber);
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * number));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    // Add delay before starting animation
    const timeoutId = setTimeout(() => {
      animationFrameId = requestAnimationFrame(updateCount);
    }, delay * 1000);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, [isInView, number, duration, delay]);
  
  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export default CountUpAnimation;