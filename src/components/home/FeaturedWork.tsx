import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const featuredImages = [
  {
    url: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/36E83A37-7FDA-44F4-B149-0A368DA601F8%202.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvMzZFODNBMzctN0ZEQS00NEY0LUIxNDktMEEzNjhEQTYwMUY4IDIuSlBHIiwiaWF0IjoxNzYwODEzNjg5LCJleHAiOjMzMjk2ODEzNjg5fQ.bh3CZw5monmAAAfjayl0e3WAFXCDF9QWa5R5tYnRA7A',
    category: 'Editorial',
  },
  {
    url: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/Nails.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvTmFpbHMuanBnIiwiaWF0IjoxNzYwODEzNTM2LCJleHAiOjMzMjk2ODEzNTM2fQ.zmQhiauBq07y4b2_zNbubXFwAJIhh4OPhgktkFtU96c',
    category: 'Natural glam',
  },
  {
    url: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/8534276E-A0DF-42C2-841F-32289CC3EB67.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvODUzNDI3NkUtQTBERi00MkMyLTg0MUYtMzIyODlDQzNFQjY3LkpQRyIsImlhdCI6MTc2MDgxMzc3MCwiZXhwIjozMzI5NjgxMzc3MH0.1lTSSx4DEfNY2_CQHccwWRIHXwm99IhLjCuD-8V5nI0',
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
