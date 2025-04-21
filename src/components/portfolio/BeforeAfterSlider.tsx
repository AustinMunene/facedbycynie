import React, { useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useMeasure } from 'react-use';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
  const [ref, bounds] = useMeasure<HTMLDivElement>();
  const [sliderPosition, setSliderPosition] = useState(50);
  const dragX = useMotionValue(0);

  const handleDrag = (event: any, info: any) => {
    const newPosition = (info.point.x / bounds.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div ref={ref} className="relative w-full aspect-square overflow-hidden rounded-lg">
      <div className="absolute inset-0">
        <img src={afterImage} alt={`${alt} - After`} className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img src={beforeImage} alt={`${alt} - Before`} className="w-full h-full object-cover" />
      </div>
      <motion.div
        drag="x"
        dragConstraints={ref}
        dragElastic={0}
        dragMomentum={false}
        onDrag={handleDrag}
        style={{ x: dragX, left: `${sliderPosition}%` }}
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-6 h-1 bg-purple-600 rounded-full" />
        </div>
      </motion.div>
    </div>
  );
}