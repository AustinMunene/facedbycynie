import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Heart } from 'lucide-react';

interface VideoPortfolioCardProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  onClick: () => void;
}

export function VideoPortfolioCard({
  videoUrl,
  thumbnailUrl,
  title,
  description,
  onClick,
}: VideoPortfolioCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer to handle autoplay
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
            setIsPlaying(true);
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.7 } // 70% visibility threshold for autoplay
    );

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative snap-start"
      onClick={onClick}
    >
      <div className="aspect-[9/16] overflow-hidden relative bg-black">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={thumbnailUrl}
          className="w-full h-full object-cover"
          loop
          muted={isMuted}
          playsInline
          onClick={(e) => e.stopPropagation()}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

        {/* Video info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-200">{description}</p>
        </div>

        {/* Control buttons */}
        <div className="absolute right-4 bottom-20 flex flex-col gap-4">
          <button
            onClick={togglePlay}
            className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            {isMuted ? <VolumeX size={24} className="text-white" /> : <Volume2 size={24} className="text-white" />}
          </button>
          <button
            onClick={toggleLike}
            className="p-3 bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <Heart
              size={24}
              className={`${isLiked ? 'text-red-500 fill-current' : 'text-white'}`}
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}