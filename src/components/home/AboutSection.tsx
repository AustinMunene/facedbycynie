import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img
          src="https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/purple1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvcHVycGxlMS5qcGciLCJpYXQiOjE3NDU0MDE4ODUsImV4cCI6MjA2MDc2MTg4NX0.MMUqH7P5a4VXYZwZFFGRQ_ELVSvb828G8hSFqRH0rHg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/Cynie.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvQ3luaWUuanBnIiwiaWF0IjoxNzQ1NDAxNjQ0LCJleHAiOjIwNjA3NjE2NDR9.JarekKw671iBfhdbQyex5v6AiPNSlTUY84b4R5sW3EY"
                alt="Makeup artist at work"
                className="w-full h-[550px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-white"
            >
              <h3 className="text-4xl font-light mb-6">About Me</h3>
              <p className="text-neutral-200 mb-4 text-base">
                Everything has its beauty, but not everyone sees it(Andy worhol).
                As a certified makeup Artist I have had the privilege of seeing
                over 50 smiles over the past one year and as stated very well by
                Andy I take pride in enhancing and bringing out the beauty in
                different kinds of people that need it for different events. This
                includes Television shows, Bridal, birthdays, Corporate shots and
                specialevents and I now have an extensive portfolio comprising
                everything beauty.
              </p>
              <p className="text-neutral-200 mb-6 text-base">
                My approach combines technical expertise with an artistic eye,
                ensuring each client receives a personalized experience that
                brings out their best features.
              </p>
              <Link
                to="/blog"
                className="inline-flex items-center text-base text-white hover:text-neutral-200 transition-colors"
              >
                Discover the latest Makeup trends
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}