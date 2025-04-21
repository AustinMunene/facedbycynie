import React from 'react';
import { Clock } from 'lucide-react';
import { Service } from '../../types/services';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex items-center text-gray-500 mb-4">
        <Clock size={16} className="mr-2" />
        <span>{service.duration}</span>
      </div>
      <p className="text-purple-600 font-semibold mb-4">{service.price}</p>
      <Link
        to="/book"
        className="inline-block w-full text-center py-2 px-4 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
      >
        Book Now
      </Link>
    </div>
  );
}