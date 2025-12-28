import React, { useState, useEffect } from 'react';
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

    window.addEventListener('scroll', handleScroll);
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden"
        >
          <Link
            to="/book"
            className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-script font-medium text-lg tracking-wide rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
          >
            <Calendar className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
            <span>Book Now</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
