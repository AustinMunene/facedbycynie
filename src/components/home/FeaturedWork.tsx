import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredImages = [
  {
    url: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/36E83A37-7FDA-44F4-B149-0A368DA601F8.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvMzZFODNBMzctN0ZEQS00NEY0LUIxNDktMEEzNjhEQTYwMUY4LkpQRyIsImlhdCI6MTczNzc5MDMzMSwiZXhwIjoyMDUzMTUwMzMxfQ.v_l4MJZQ4j_OD0S6s_ReKdtsACuzNRXblhgUJmZVIdU&t=2025-01-25T07%3A32%3A11.878Z',
    category: 'Editorial',
  },
  {
    url: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/Nails.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvTmFpbHMuanBnIiwiaWF0IjoxNzM1OTkyODA5LCJleHAiOjE4OTM2NzI4MDl9.PzztcH-KDlDlwrDOkEnwyTAuDMCWZ8AkyaT1YIMb3DA&t=2025-01-04T12%3A13%3A29.460Z',
    category: 'Natural glam',
  },
  {
    url: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/8534276E-A0DF-42C2-841F-32289CC3EB67.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJbWFnZXMvODUzNDI3NkUtQTBERi00MkMyLTg0MUYtMzIyODlDQzNFQjY3LkpQRyIsImlhdCI6MTc0MDE0NDU1MiwiZXhwIjo0ODkzNzQ0NTUyfQ.lGIzm3Fl3P77n9lHMhT2H1eDT-MnBEkwd8Hp4wyhzQI',
    category: 'Beauty',
  },
];

export function FeaturedWork() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-light">Featured Work</h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
          >
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image.url}
                  alt={`Featured ${image.category} work`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-xl">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
