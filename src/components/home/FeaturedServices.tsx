import { motion } from 'framer-motion';
import {
  Sparkles,
  Camera,
  Heart,
  Palette,
  Star,
  Eye,
} from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const services = [
  {
    icon: Sparkles,
    title: 'Natural / Everyday Look',
    description:
      'Subtle, natural-looking makeup for daily wear that enhances your features.',
    price: 'From KSH 3,500',
  },
  {
    icon: Heart,
    title: 'Bridal Makeup',
    description:
      'Make your wedding day unforgettable with stunning bridal makeup.',
    price: 'From KSH 4,500',
  },
  {
    icon: Camera,
    title: 'Lash Love',
    description:
      'Elevate your eyes with perfectly styled lashes. Semi-Classic, Classic, and Hybrid/Volume sets.',
    price: 'From KSH 2,500',
  },
  {
    icon: Eye,
    title: 'Tinted Henna Eyebrows',
    description:
      'Providing temporary color and shape to your eyebrows for 1 to 2 weeks.',
    price: 'From KSH 500',
  },
  {
    icon: Palette,
    title: 'Makeup Classes',
    description:
      'Learn professional techniques in one-on-one sessions with video tutorials.',
    price: 'Custom Quote',
  },
  {
    icon: Star,
    title: 'Graduation Makeup',
    description:
      'Long-lasting, flawless makeup tailored for your graduation day.',
    price: 'From KSH 3,500',
  },
];

export function FeaturedServices() {
  return (
    <section className="py-20 lg:py-28 bg-blush-50">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[10px] font-sans font-normal tracking-[0.22em] uppercase text-blush-600 mb-3"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] mb-4"
          >
            Services & Pricing
          </motion.h2>
          <p className="text-warmgray-500 max-w-md mx-auto text-[13px] leading-[1.8]">
            From natural beauty enhancement to dramatic transformations,
            discover the perfect service for your unique style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
