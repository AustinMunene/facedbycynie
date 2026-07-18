import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SafeImage } from '../ui/SafeImage';

const featuredImages = [
  {
    url: 'https://imgur.com/GXavDU3.jpeg',
    category: 'Editorial',
  },
  {
    url: 'https://imgur.com/YvwrvVW.jpeg',
    category: 'Natural Glam',
  },
  {
    url: 'https://imgur.com/C0wE8sm.jpeg',
    category: 'Beauty',
  },
];

export function FeaturedWork() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="container mx-auto px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10"
        >
          <div>
            <p className="text-[10px] font-sans font-normal tracking-[0.22em] uppercase text-blush-600 mb-3">
              Portfolio
            </p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1]">
              Featured Work
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 mt-5 md:mt-0 text-[11px] font-sans font-normal tracking-[0.12em] uppercase text-warmgray-600 hover:text-blush-600 transition-colors duration-280"
          >
            View All
            <ArrowRight
              size={12}
              strokeWidth={1.5}
              className="group-hover:translate-x-1 transition-transform duration-280"
            />
          </Link>
        </motion.div>

        <div className="md:grid md:grid-cols-3 gap-4 flex overflow-x-auto snap-x snap-mandatory pb-4 -mx-5 px-5 md:mx-0 md:px-0 scrollbar-hide">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true, margin: '-60px' }}
              className="group flex-shrink-0 w-[78vw] md:w-auto snap-center"
            >
              <div className="hce-card hce-float aspect-[3/4] bg-warmgray-100">
                <SafeImage
                  src={image.url}
                  alt={`Featured ${image.category} work`}
                  fallbackSrc="https://i.imgur.com/CoYtKpy.jpeg"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[var(--ease-out)] group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-4 text-[11px] font-sans font-normal tracking-[0.14em] uppercase text-warmgray-500">
                {image.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
