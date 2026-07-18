import { AboutContent } from './AboutContent';
import { AboutImage } from './AboutImage';

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream-50">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AboutImage />
          <AboutContent />
        </div>
      </div>
    </section>
  );
}
