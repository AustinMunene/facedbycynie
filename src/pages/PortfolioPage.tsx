import { motion } from 'framer-motion';
import { PortfolioGrid } from '../components/portfolio/PortfolioGrid';
import { PageTransition } from '../components/layout/PageTransition';

export function PortfolioPage() {
  return (
    <PageTransition>
      <div>
        {/* Hero Section */}
        <div className="bg-blush-50 pt-28 lg:pt-36 pb-14 lg:pb-16">
          <div className="container mx-auto px-5 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="text-center max-w-2xl mx-auto"
            >
              <p className="hce-eyebrow mb-4">Portfolio</p>
              <h1 className="text-[clamp(2rem,4vw,3.2rem)] leading-[1.05] mb-5 text-warmgray-900">
                My Portfolio
              </h1>
              <p className="text-warmgray-500 text-[14px] leading-[1.8]">
                Explore my collection of stunning makeup transformations and
                artistic creations — from bridal beauty to creative editorial
                looks, discover the artistry of Faced by Cynie.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="bg-cream-50">
          <PortfolioGrid />
        </div>
      </div>
    </PageTransition>
  );
}
