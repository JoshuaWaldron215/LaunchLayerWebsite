import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpAnimationProps {
  targetNumber: string;
  duration?: number;
  delay?: number;
}

const CountUpAnimation = ({ 
  targetNumber, 
  duration = 2000, 
  delay = 0 
}: CountUpAnimationProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Parse the targetNumber which might include symbols
  const numericPart = parseInt(targetNumber.replace(/[^0-9]/g, ''));
  const prefix = targetNumber.match(/^[^0-9]*/)?.[0] || '';
  const suffix = targetNumber.match(/[^0-9]*$/)?.[0] || '';
  
  useEffect(() => {
    if (isInView && !hasAnimated) {
      // Delay the animation if specified
      const delayTimeout = setTimeout(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setCount(Math.floor(progress * numericPart));
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setHasAnimated(true);
          }
        };
        
        window.requestAnimationFrame(step);
      }, delay);
      
      return () => clearTimeout(delayTimeout);
    }
  }, [isInView, numericPart, duration, delay, hasAnimated]);
  
  return (
    <div ref={ref} className="inline-block">
      <span className="font-bold">
        {isInView ? `${prefix}${count}${suffix}` : `${prefix}0${suffix}`}
      </span>
    </div>
  );
};

export default CountUpAnimation;