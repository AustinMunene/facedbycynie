import React, { useState, useCallback } from 'react';
import { normalizeImageUrl } from '../../utils/imgur';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

/**
 * SafeImage component with automatic fallback handling
 * 
 * Features:
 * - Automatic fallback to placeholder on error
 * - Prevents infinite error loops
 * - Maintains all standard img attributes
 */
export function SafeImage({ 
  src, 
  alt, 
  fallbackSrc = 'https://i.imgur.com/CoYtKpy.jpeg',
  onError,
  ...props 
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(normalizeImageUrl(src));
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Prevent infinite loops by checking if we're already showing the fallback
    if (hasError || imgSrc === fallbackSrc) {
      return;
    }

    setHasError(true);
    setImgSrc(fallbackSrc);
    
    // Call original onError handler if provided
    if (onError) {
      onError(e);
    }
  }, [hasError, imgSrc, fallbackSrc, onError]);

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}

