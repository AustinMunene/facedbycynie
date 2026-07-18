import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function StickyBookButton() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();
  const isBookingPage = location.pathname === '/book';

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isBookingPage) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
        >
          <Link
            to="/book"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ce7690] text-white text-[13px] font-sans font-medium tracking-[0.12em] uppercase [text-shadow:0_1px_2px_rgba(74,26,40,0.4)] shadow-[0_10px_28px_-8px_rgba(206,118,144,0.6)] transition-all duration-280 hover:bg-[#b85f7b] active:scale-[0.97]"
          >
            <Calendar size={16} strokeWidth={1.5} />
            <span>Book Now</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
