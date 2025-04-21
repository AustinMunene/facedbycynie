import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Camera, Heart } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'Special Occasion',
    description: 'Perfect makeup for your special events, parties, and celebrations.',
  },
  {
    icon: Heart,
    title: 'Bridal Makeup',
    description: 'Make your wedding day unforgettable with stunning bridal makeup.',
  },
  {
    icon: Camera,
    title: 'Editorial',
    description: 'Professional makeup for photoshoots, fashion shows, and media.',
  },
  {
    icon: Users,
    title: 'Group Sessions',
    description: 'Makeup services for bridal parties and special group events.',
  },
];

export function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional makeup services tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <service.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}