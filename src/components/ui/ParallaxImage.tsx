import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  overlayClass?: string;
}

export function ParallaxImage({ src, alt, overlayClass }: ParallaxImageProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="absolute inset-0 h-[120%] -top-[10%]"
        style={{ y }}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
      </motion.div>
      <div className={`absolute inset-0 bg-gradient-to-r ${overlayClass || 'from-black/50 to-black/50'}`} />
    </div>
  );
}