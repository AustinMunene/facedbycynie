import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, ArrowRight, Heart, Camera } from 'lucide-react';

const categories = [
  {
    icon: Heart,
    title: 'Bridal Makeup',
    description:
      'Perfect for your special day with long-lasting, camera-ready results.',
  },
  {
    icon: Calendar,
    title: 'Special Events',
    description:
      'Makeup for parties, photoshoots, and any special occasion.',
  },
  {
    icon: Camera,
    title: 'Editorial & Creative',
    description:
      'Bold, artistic looks for creative projects and fashion shoots.',
  },
];

export function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blush-50 pt-28 lg:pt-36 pb-16">
        <div className="container mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="hce-eyebrow mb-4">Services</p>
            <h1 className="text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[1.02] mb-5 text-warmgray-900">
              Professional{' '}
              <span className="italic text-blush-600">Services</span>
            </h1>
            <p className="text-warmgray-500 text-[14px] leading-[1.8] mb-9 max-w-xl mx-auto">
              Unleash your beauty with my professional makeup services. From
              bridal to editorial, I specialize in creating stunning
              transformations that enhance your natural beauty.
            </p>
            <Link to="/book" className="btn-pill group">
              <Sparkles
                size={16}
                strokeWidth={1.5}
                className="group-hover:rotate-12 transition-transform duration-300"
              />
              Book Your Transformation
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="group-hover:translate-x-1 transition-transform duration-280"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-20 lg:py-28 bg-cream-50">
        <div className="container mx-auto px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="hce-eyebrow mb-3">What I Offer</p>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1] mb-4 text-warmgray-900">
              A Full Range of Artistry
            </h2>
            <p className="text-warmgray-500 max-w-xl mx-auto text-[13px] leading-[1.8]">
              From bridal makeup to special events, I provide professional
              services tailored to your unique style and occasion.
            </p>
          </motion.div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="hce-card group p-7 text-center"
                >
                  <div className="w-12 h-12 bg-blush-100 rounded-full flex items-center justify-center mx-auto mb-5 transition-colors duration-280 group-hover:bg-blush-200">
                    <Icon className="w-5 h-5 text-blush-600" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[17px] text-warmgray-900 mb-2.5">
                    {category.title}
                  </h3>
                  <p className="text-warmgray-500 text-[12.5px] leading-[1.7]">
                    {category.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <p className="text-warmgray-600 text-[14px] mb-6">
              Ready to transform your look? Let's create something beautiful
              together.
            </p>
            <Link to="/book" className="btn-pill group">
              <Calendar size={16} strokeWidth={1.5} />
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
