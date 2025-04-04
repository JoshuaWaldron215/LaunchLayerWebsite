import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImages: string[];
  afterImages: string[];
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider = ({
  beforeImages,
  afterImages,
  beforeLabel = 'Before',
  afterLabel = 'After'
}: BeforeAfterSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);
  
  // Auto-switch between before/after every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setShowBefore(prev => !prev);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Navigate to next image
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.min(beforeImages.length, afterImages.length));
  };
  
  // Navigate to previous image
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.min(beforeImages.length, afterImages.length)) % Math.min(beforeImages.length, afterImages.length));
  };
  
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Top control bar */}
        <div className="flex justify-between p-4 bg-gray-50 border-b">
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${showBefore ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setShowBefore(true)}
            >
              {beforeLabel}
            </button>
            <button 
              className={`px-4 py-2 rounded-md transition-colors ${!showBefore ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              onClick={() => setShowBefore(false)}
            >
              {afterLabel}
            </button>
          </div>
          
          <div className="text-gray-600">
            {currentIndex + 1} / {Math.min(beforeImages.length, afterImages.length)}
          </div>
        </div>
        
        {/* Image container */}
        <div className="relative aspect-video">
          {/* Before image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 1 }}
            animate={{ opacity: showBefore ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={beforeImages[currentIndex]} 
              alt={`Before screenshot ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
            {showBefore && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-md text-sm font-medium shadow-md">
                {beforeLabel}
              </div>
            )}
          </motion.div>
          
          {/* After image */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: showBefore ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={afterImages[currentIndex]} 
              alt={`After screenshot ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
            {!showBefore && (
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-md text-sm font-medium shadow-md">
                {afterLabel}
              </div>
            )}
          </motion.div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={prevImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            onClick={nextImage}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Description below the image */}
        <div className="p-4 text-center text-gray-700">
          Toggle between before and after views to see the design transformation.
          Use the arrows to navigate through different screens.
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;