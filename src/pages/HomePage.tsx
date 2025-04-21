import React from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { AboutSection } from '../components/home/AboutSection';
import { InstagramFeed } from '../components/home/InstagramFeed';

export function HomePage() {
  return (
    <div className="bg-neutral-50">
      <Hero />
      <AboutSection />
      <FeaturedWork />
      <FeaturedServices />
      <InstagramFeed />
    </div>
  );
}