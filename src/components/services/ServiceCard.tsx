import { Clock, ArrowRight } from 'lucide-react';
import { Service } from '../../types/services';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="hce-card group flex flex-col p-6 h-full">
      <h3 className="text-[17px] leading-tight text-warmgray-900 mb-2.5">
        {service.title}
      </h3>
      <p className="text-warmgray-500 text-[12.5px] leading-[1.7] mb-4 flex-1">
        {service.description}
      </p>

      <div className="flex items-center gap-2 text-warmgray-400 text-[12px] mb-4">
        <Clock size={14} strokeWidth={1.5} />
        <span className="tracking-[0.02em]">{service.duration}</span>
      </div>

      <div className="pt-4 border-t border-warmgray-200/70 flex items-center justify-between mb-5">
        <span className="hce-eyebrow text-[9px] tracking-[0.18em] text-warmgray-400">
          Pricing
        </span>
        <span className="font-serif text-[16px] text-blush-600">
          {service.price}
        </span>
      </div>

      <Link to="/book" className="btn-pill w-full group/btn">
        Book Now
        <ArrowRight
          size={14}
          strokeWidth={1.5}
          className="transition-transform duration-280 group-hover/btn:translate-x-1"
        />
      </Link>
    </div>
  );
}
