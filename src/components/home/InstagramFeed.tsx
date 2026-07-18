import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';

const instagramPosts = [
  'https://imgur.com/Pec1CUd.jpeg',
  'https://imgur.com/QHJRUCc.jpeg',
  'https://imgur.com/HX9iBXu.jpeg',
  'https://imgur.com/eiRYbvk.jpeg',
];

export function InstagramFeed() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[10px] font-sans font-normal tracking-[0.22em] uppercase text-blush-600 mb-3"
          >
            Social
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] mb-4"
          >
            Follow Along
          </motion.h2>
          <div className="flex justify-center gap-5">
            <a
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warmgray-500 hover:text-blush-600 transition-colors duration-280"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warmgray-500 hover:text-blush-600 transition-colors duration-280"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-[18px] h-[18px]"
                fill="currentColor"
              >
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="md:grid md:grid-cols-4 gap-3 flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post}
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true, margin: '-40px' }}
              className="hce-card hce-float group aspect-square bg-warmgray-100 flex-shrink-0 w-[68vw] md:w-auto snap-center"
            >
              <SafeImage
                src={post}
                alt="Instagram post"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.02]"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
