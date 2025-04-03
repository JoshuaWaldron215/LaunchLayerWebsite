import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface GradientMeshBackgroundProps {
  className?: string;
  colors?: string[];
  speed?: number;
  opacity?: number;
  blur?: number;
  children?: React.ReactNode;
}

const GradientMeshBackground: React.FC<GradientMeshBackgroundProps> = ({
  className = '',
  colors = ['#2B6CB0', '#4299E1', '#90CDF4', '#3182CE'],
  speed = 4,
  opacity = 0.6,
  blur = 100,
  children
}) => {
  const blobsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = blobsRef.current;
    if (!container) return;
    
    // Clean up any existing blobs
    container.innerHTML = '';
    
    // Create blobs
    for (let i = 0; i < 4; i++) {
      const colorIndex = i % colors.length;
      const blob = document.createElement('div');
      
      blob.classList.add('gradient-blob');
      blob.style.backgroundColor = colors[colorIndex];
      blob.style.position = 'absolute';
      blob.style.borderRadius = '50%';
      blob.style.filter = `blur(${blur}px)`;
      blob.style.opacity = `${opacity}`;
      
      // Random sizes
      const size = Math.floor(Math.random() * 300) + 200;
      blob.style.width = `${size}px`;
      blob.style.height = `${size}px`;
      
      // Random positions
      blob.style.left = `${Math.random() * 80}%`;
      blob.style.top = `${Math.random() * 80}%`;
      
      // Random starting transforms
      const startX = (Math.random() * 10) - 5;
      const startY = (Math.random() * 10) - 5;
      const startScale = 0.8 + (Math.random() * 0.4);
      
      blob.style.transform = `translate(${startX}%, ${startY}%) scale(${startScale})`;
      
      // Animation with randomized durations and slight delays
      blob.animate(
        [
          { 
            transform: `translate(${startX}%, ${startY}%) scale(${startScale})`,
          },
          {
            transform: `translate(${(Math.random() * 10) - 5}%, ${(Math.random() * 10) - 5}%) scale(${0.8 + (Math.random() * 0.4)})`,
          },
          {
            transform: `translate(${(Math.random() * 10) - 5}%, ${(Math.random() * 10) - 5}%) scale(${0.8 + (Math.random() * 0.4)})`,
          },
          {
            transform: `translate(${startX}%, ${startY}%) scale(${startScale})`,
          }
        ],
        {
          duration: (10 - speed) * 10000, // Convert speed to proper duration
          iterations: Infinity,
          easing: 'ease-in-out'
        }
      );
      
      container.appendChild(blob);
    }
    
    // Clean up blobs on unmount
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [colors, speed, opacity, blur]);
  
  return (
    <div className={`gradient-mesh-container relative overflow-hidden ${className}`}>
      <div 
        ref={blobsRef} 
        className="gradient-mesh absolute inset-0 overflow-hidden"
        style={{ 
          mixBlendMode: 'normal', 
          zIndex: 0 
        }}
      />
      {children && (
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  );
};

export default GradientMeshBackground;