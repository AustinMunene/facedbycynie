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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      className="hce-card group flex flex-col p-6 h-full"
    >
      <div className="w-11 h-11 rounded-full bg-blush-100 flex items-center justify-center mb-4 transition-colors duration-280 group-hover:bg-blush-200">
        <Icon className="w-[18px] h-[18px] text-blush-600" strokeWidth={1.5} />
      </div>

      <h3 className="text-[16px] leading-tight text-warmgray-900 mb-2">
        {title}
      </h3>

      <p className="text-warmgray-500 text-[12.5px] leading-[1.7] mb-5 flex-1">
        {description}
      </p>

      <div className="pt-3.5 border-t border-warmgray-200/70 flex items-center justify-between">
        <span className="hce-eyebrow text-[9px] tracking-[0.18em] text-warmgray-400">
          Pricing
        </span>
        <span className="font-serif text-[15px] text-blush-600">{price}</span>
      </div>
    </motion.div>
  );
}
