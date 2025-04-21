import React from 'react';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';

export function PortfolioPage() {
  return (
    <div className="pt-20">
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h1>
          <p className="text-gray-600 max-w-2xl">
            Explore my collection of stunning makeup transformations and
            artistic creations. From bridal beauty to creative editorial looks,
            discover the artistry of Faced by Cynie.
          </p>
        </div>
      </div>
      <PortfolioGrid />
    </div>
  );
}
