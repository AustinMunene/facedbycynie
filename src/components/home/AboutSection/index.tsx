import React from 'react';
import { AboutContent } from './AboutContent';
import { AboutImage } from './AboutImage';

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}