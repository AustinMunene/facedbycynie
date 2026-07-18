import { Hero } from '../components/home/Hero';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { FeaturedWork } from '../components/home/FeaturedWork';
import { AboutSection } from '../components/home/AboutSection';
import { InstagramFeed } from '../components/home/InstagramFeed';
import { BirthdayTeaser } from '../birthday/BirthdayTeaser';

export function HomePage() {
  return (
    <div>
      <BirthdayTeaser />
      <Hero />
      <AboutSection />
      <FeaturedWork />
      <FeaturedServices />
      <InstagramFeed />
    </div>
  );
}
