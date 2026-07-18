import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gift } from 'lucide-react';
import { SHOW_HOMEPAGE_TEASER } from './config';

const EASE = [0.23, 1, 0.32, 1] as const;
const MotionLink = motion(Link);

/**
 * Gentle, hard-to-miss invitation shown on the homepage that links to the
 * birthday surprise. Controlled by SHOW_HOMEPAGE_TEASER in config.ts.
 *
 * Centering is done with flexbox on the outer bar (not a translate) so the
 * inner entrance animation's transform can't knock it off-centre, and the
 * attention pulse uses box-shadow so it never causes horizontal scroll.
 */
export function BirthdayTeaser() {
  if (!SHOW_HOMEPAGE_TEASER) return null;

  return (
    <div className="fixed top-[76px] lg:top-[108px] inset-x-0 z-40 flex justify-center px-3 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: EASE }}
        className="pointer-events-auto max-w-full"
      >
        <MotionLink
          to="/birthday"
          aria-label="Open your birthday surprise"
          animate={{
            boxShadow: [
              '0 8px 22px -8px rgba(216,136,160,0.55)',
              '0 12px 32px -6px rgba(216,136,160,0.95)',
              '0 8px 22px -8px rgba(216,136,160,0.55)',
            ],
          }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="group flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full bg-[#d888a0] text-white hover:bg-[#c86e88] transition-colors duration-280"
        >
          <Gift
            size={15}
            strokeWidth={1.8}
            className="shrink-0 transition-transform duration-280 group-hover:rotate-12"
          />
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.12em] uppercase whitespace-nowrap">
            A birthday surprise for you
          </span>
        </MotionLink>
      </motion.div>
    </div>
  );
}
