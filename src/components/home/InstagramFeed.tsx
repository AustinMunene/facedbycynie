import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BAF15CC5-0C9E-4CE8-B501-9B5A450CB8E9.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvQkFGMTVDQzUtMEM5RS00Q0U4LUI1MDEtOUI1QTQ1MENCOEU5LkpQRyIsImlhdCI6MTc0NTQwMTMxMywiZXhwIjoyMDYwNzYxMzEzfQ.oM0bVc9oKlhuqM8JQ1sAD_dZ46COvZC0v6g3TwEpknk',
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/IMG_20220714_065955_072.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvSU1HXzIwMjIwNzE0XzA2NTk1NV8wNzIuanBnIiwiaWF0IjoxNzQ1NDAxNDU4LCJleHAiOjIwNjA3NjE0NTh9.TsoyNL5ncrgXvSpJdUwKuVKnQyX4VqZSNGhpU6m2VRY',
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/EMW.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvRU1XLmpwZyIsImlhdCI6MTc0NTQwMTUyNSwiZXhwIjoyMDYwNzYxNTI1fQ.8J_p5d1sknxxDH78MJaM-r0ptwx68pLmD5MLtU1D2vQ',
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/F141043A-1F73-4134-B40A-97028266DBCA.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvRjE0MTA0M0EtMUY3My00MTM0LUI0MEEtOTcwMjgyNjZEQkNBLkpQRyIsImlhdCI6MTc0NTQwMTM3NCwiZXhwIjoyMDYwNzYxMzc0fQ.-x18KyKxVEBcGqzD4bxpgoh5WpxJ4BnNu0eyouCfVRk',
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-light mb-6">Follow Along</h2>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <Instagram className="mr-2" size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@faced.bycyniee?_t=8sI7zwEL6HO&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-neutral-900 hover:text-neutral-600 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 mr-2"
                fill="currentColor"
              >
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post}
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden"
            >
              <img
                src={post}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}