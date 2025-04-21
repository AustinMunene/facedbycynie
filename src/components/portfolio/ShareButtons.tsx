import React from 'react';
import { Facebook, Twitter, Link as LinkIcon } from 'lucide-react';
import { ShareOptions } from '../../types/portfolio';

interface ShareButtonsProps {
  options: ShareOptions;
}

export function ShareButtons({ options }: ShareButtonsProps) {
  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(options.url)}`,
      '_blank'
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        options.url
      )}&text=${encodeURIComponent(options.title)}`,
      '_blank'
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(options.url);
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={shareOnFacebook}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook size={20} />
      </button>
      <button
        onClick={shareOnTwitter}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Share on Twitter"
      >
        <Twitter size={20} />
      </button>
      <button
        onClick={copyToClipboard}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        aria-label="Copy link"
      >
        <LinkIcon size={20} />
      </button>
    </div>
  );
}