import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Sparkles, ArrowRight } from 'lucide-react';

export function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-5 text-neutral-900">
              Professional
              <span className="block gradient-text">Services</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-10">
              Unleash your beauty with my professional makeup services! From bridal to editorial, 
              I specialize in creating stunning transformations that enhance your natural beauty.
            </p>
            
            {/* Creative Booking Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <Link
                to="/book"
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl font-script font-medium tracking-wide rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 hover:scale-105"
              >
                <Sparkles className="mr-3 group-hover:rotate-12 transition-transform duration-300" size={24} />
                <span className="relative z-10">Book Your Transformation</span>
                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              </Link>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-pink-200 rounded-full opacity-60"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-2 -left-4 w-6 h-6 bg-purple-200 rounded-full opacity-60"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-5 text-neutral-900">
              What I
              <span className="block gradient-text">Offer</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              From bridal makeup to special events, I provide a full range of professional makeup services 
              tailored to your unique style and occasion.
            </p>
          </motion.div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4 text-neutral-900">Bridal Makeup</h3>
              <p className="text-neutral-600 leading-relaxed">
                Perfect for your special day with long-lasting, camera-ready results
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4 text-neutral-900">Special Events</h3>
              <p className="text-neutral-600 leading-relaxed">
                Makeup for parties, photoshoots, and any special occasion
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4 text-neutral-900">Editorial & Creative</h3>
              <p className="text-neutral-600 leading-relaxed">
                Bold, artistic looks for creative projects and fashion shoots
              </p>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-lg text-neutral-600 mb-6">
              Ready to transform your look? Let's create something beautiful together.
            </p>
            <Link
              to="/book"
              className="btn-primary"
            >
              <Calendar className="mr-2" size={20} />
              Book Your Appointment
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
