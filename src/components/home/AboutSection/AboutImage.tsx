import { motion } from 'framer-motion';
import { SafeImage } from '../../ui/SafeImage';

export function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: '-80px' }}
      className="relative"
    >
      <div className="w-full aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-3xl shadow-[var(--shadow-float-lg)]">
        <SafeImage
          src="/faced-by-cyniee-logo.jpg"
          alt="Faced by Cyniee"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}
