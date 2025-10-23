import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/F141043A-1F73-4134-B40A-97028266DBCA.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvRjE0MTA0M0EtMUY3My00MTM0LUI0MEEtOTcwMjgyNjZEQkNBLkpQRyIsImlhdCI6MTc2MDgxNDMwNiwiZXhwIjozMzI5NjgxNDMwNn0.p6MRmoGGbcOyOTbqUD9m-XyYDpMcMSbxhG27uId3hL4',
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/IMG_20220714_065955_072.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvSU1HXzIwMjIwNzE0XzA2NTk1NV8wNzIuanBnIiwiaWF0IjoxNzYwODE0MzQ4LCJleHAiOjMzMjk2ODE0MzQ4fQ.WsyEIZIV1Z2tOuSoBoWiWGqGusW7oD-VGwLElgcXm9k',
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BAF15CC5-0C9E-4CE8-B501-9B5A450CB8E9.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvQkFGMTVDQzUtMEM5RS00Q0U4LUI1MDEtOUI1QTQ1MENCOEU5LkpQRyIsImlhdCI6MTc2MDgxNDQzMywiZXhwIjozMzI5NjgxNDQzM30.VxjLN18r63Y2_w1BHexluamywMnyfRT_CdXz5Gyjaf8',
  'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/d5f65763-1a27-498f-9969-e90bd8a844b5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvZDVmNjU3NjMtMWEyNy00OThmLTk5NjktZTkwYmQ4YTg0NGI1LmpwZyIsImlhdCI6MTc2MDgxNDQ5MywiZXhwIjozMzI5NjgxNDQ5M30.1pyU8Je0ix6ra-lVavERgZE2ya_pZEtvrjnp-W15EUc',
];

export function InstagramFeed() {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-pink-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-light mb-6 text-neutral-900">
            Follow
            <span className="block gradient-text">Along</span>
          </h2>
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

        <div className="md:grid md:grid-cols-4 gap-6 max-w-4xl mx-auto flex md:flex-none overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post}
              href="https://www.instagram.com/faced.by_cyniee_makeup?igsh=a2UxdW00ZXU0bngy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[70vw] md:w-auto snap-center"
            >
              <img
                src={post}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}