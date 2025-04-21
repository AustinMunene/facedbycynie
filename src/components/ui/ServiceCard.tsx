import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  service: {
    icon: LucideIcon;
    title: string;
    description: string;
    price: string;
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon, title, description, price } = service;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="mb-4">
        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
          <Icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-purple-600 font-semibold">{price}</p>
    </motion.div>
  );
}