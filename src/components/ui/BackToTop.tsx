import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handle = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', handle, { passive: true });
    handle();
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="fixed z-40 right-5 bottom-28 md:right-6 md:bottom-6 w-11 h-11 flex items-center justify-center rounded-full frosted border border-warmgray-200/70 text-warmgray-700 shadow-[0_8px_24px_-8px_rgba(61,53,51,0.35)] hover:text-blush-600 hover:border-blush-300 transition-colors duration-280"
        >
          <ArrowUp size={18} strokeWidth={1.6} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
