import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Instagram,
  Mail,
  MapPin,
  Calendar,
  Clock,
} from 'lucide-react';
import { services } from '../data/services';

export function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date) {
      alert('Please fill in all required fields');
      return;
    }
    
    const subject = `Booking Request - ${formData.service}`;
    const body = `Hello Cynie,

I would like to book an appointment with you. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Requested: ${formData.service}
Preferred Date: ${formData.date}

Additional Details:
${formData.message || 'No additional details provided'}

Please let me know your availability and confirm the appointment.

Thank you!`;
    
    // Create mailto link and open default mail app
    const mailtoLink = `mailto:cynthiachiuri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Try to open mail app
    try {
      window.location.href = mailtoLink;
    } catch (error) {
      // Fallback for some browsers
      window.open(mailtoLink, '_blank');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light mb-6 text-neutral-900">
              Book Your
              <span className="block gradient-text">Transformation</span>
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Ready to unleash your ultimate glow? Let's create something beautiful together. 
              Book your appointment and let your beauty shine brighter than ever.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8"
            >
              <h2 className="text-3xl font-serif font-light mb-8 text-neutral-900">
                Book Your
                <span className="block gradient-text">Appointment</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.title}>
                          {service.title} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-neutral-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your vision, special requirements, or any questions you have..."
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  <Calendar className="mr-2" size={20} />
                  Send Booking Request
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-serif font-light mb-6 text-neutral-900">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:0740377992"
                    className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
                  >
                    <Phone className="w-6 h-6 text-pink-600 mr-4" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Phone</h4>
                      <p className="text-pink-600">0740377992</p>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:cynthiachiuri@gmail.com"
                    className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl hover:from-pink-100 hover:to-purple-100 transition-all duration-300"
                  >
                    <Mail className="w-6 h-6 text-pink-600 mr-4" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Email</h4>
                      <p className="text-pink-600">cynthiachiuri@gmail.com</p>
                    </div>
                  </a>
                  
                  <div className="flex items-center p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
                    <MapPin className="w-6 h-6 text-pink-600 mr-4" />
                    <div>
                      <h4 className="font-medium text-neutral-900">Location</h4>
                      <p className="text-pink-600">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Available Services Section */}
      <div className="py-20 bg-gradient-to-br from-neutral-50 via-white to-pink-50/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-neutral-900">
              Available
              <span className="block gradient-text">Services</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose from our range of professional makeup services designed to enhance your natural beauty
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8 hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-serif font-medium mb-4 text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold gradient-text">
                    {service.price}
                  </span>
                  <Clock className="w-5 h-5 text-neutral-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
