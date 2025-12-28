import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Users,
  Camera,
  Heart,
  Palette,
  Star,
  Moon,
  LucideSlash,
  Eye,
} from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

const services = [
  {
    icon: Sparkles,
    title: 'Natural/Everyday Look',
    description:
      'Subtle, natural-looking makeup foa daily wear that enhances your features',
    price: 'From KSH 3,500',
  },
  {
    icon: Heart,
    title: 'Bridal Makeup',
    description:
      'Make your wedding day unforgettable with stunning bridal makeup.',
    price: 'From KSH 4,500 for Bridesmaids and 7,000 for Brides',
  },
  {
    icon: Camera,
    title: 'Lash Love',
    description:
      'Elevate your eyes with perfectly styled lashes. Choose from Semi-Classic, Classic and Hybrid/Volume set',
    price: 'From KSH 2,500',
  },
  {
    icon: Eye,
    title: 'Tinted Heena Eyebrows services',
    description:
      'Providing temporary color and shape to your eyebrows for 1 to 2 weeks',
    price: 'From KSH 500',
  },
  {
    icon: Palette,
    title: 'Professional and Personal Makeup Classes',
    description:
      'Learn professional techniques in one-on-one with video tutorials',
    price: 'Custom Quote',
  },
  {
    icon: Star,
    title: 'Graduation Makeup',
    description:
      'Long lasting and flawless makeup tailored for your graduation day',
    price: 'From KSH 3,500',
  },
];

export function FeaturedServices() {
  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Services & Pricing
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From natural beauty enhancement to dramatic transformations,
            discover the perfect service for your unique style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
