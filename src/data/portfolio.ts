import { PortfolioItem } from '../types/portfolio';
import { getPublicImageUrl } from '../utils/supabase';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Bridal Makeup',
    description: 'Edge of Glamour',
    category: 'bridal',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BRidal.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvQlJpZGFsLmpwZyIsImlhdCI6MTc2MDgxNDg2NywiZXhwIjozMzI5NjgxNDg2N30.oae_z7WW4RhaonND8Oc_wP9xAP3pkfO8Zkf3601M1M8',
    beforeImage: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BRidal.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvQlJpZGFsLmpwZyIsImlhdCI6MTc2MDgxNDg2NywiZXhwIjozMzI5NjgxNDg2N30.oae_z7WW4RhaonND8Oc_wP9xAP3pkfO8Zkf3601M1M8',
    products: [
      'Charlotte Tilbury Airbrush Flawless Foundation',
      'Pat McGrath Divine Rose Palette',
    ],
    testimonial: {
      author: 'Anonymous',
      text: 'Cynie did an amazing job with my bridal makeup! She understood exactly what I wanted and made me feel so beautiful on my special day.',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: '2',
    title: 'Abstract Elegance',
    description:
      'Editorial makeup inspired by abstract art and bold imagination',
    category: 'editorial',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BeautyPlus_20220717145605336_save.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvQmVhdXR5UGx1c18yMDIyMDcxNzE0NTYwNTMzNl9zYXZlLmpwZyIsImlhdCI6MTc2MDgxNDk1NiwiZXhwIjozMzI5NjgxNDk1Nn0.PC5tnvomUl0xGTtZXlJMsKII3eQGBEfR6-qOczqYVXc',
  },
  {
    id: '3',
    title: 'Photography Makeup',
    description: 'Specialized makeup optimized for photography and video',
    category: 'special-effects',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/Nails.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvTmFpbHMuanBnIiwiaWF0IjoxNzYwODE1MTcwLCJleHAiOjMzMjk2ODE1MTcwfQ.ZwDPcwYNkubrcK0ehMdNqEIUYtUCIbjkgWqL-N37qOE',
    beforeImage: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/Nails.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvTmFpbHMuanBnIiwiaWF0IjoxNzYwODE1MTcwLCJleHAiOjMzMjk2ODE1MTcwfQ.ZwDPcwYNkubrcK0ehMdNqEIUYtUCIbjkgWqL-N37qOE',
  },
  {
    id: '4',
    title: 'Natural Glam',
    description: 'Everyday glam makeup look',
    category: 'casual',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/EMW.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvRU1XLmpwZyIsImlhdCI6MTc2MDgxNTI4MywiZXhwIjozMzI5NjgxNTI4M30.ZiXEq_11dfaEP0S2-yTcVoSHMflmSb8lq1WyLkiPjJo',
  },
  {
    id: '5',
    title: 'Let your makeup tell your story',
    description: 'Tell Your story with your style',
    category: 'casual',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/PHOTO-2024-12-11-11-51-19.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvUEhPVE8tMjAyNC0xMi0xMS0xMS01MS0xOS5qcGciLCJpYXQiOjE3NjA4MTUyMjgsImV4cCI6MzMyOTY4MTUyMjh9.Er5vPSpwsAFNjyeqtyTKxM1XbWGFgo15c4n7N-vDWo0',
    testimonial: {
      author: 'Anonymous',
      text: 'I felt like the most beautiful version of myself on my wedding day. Thank you, Cynie!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: '6',
    title: 'Avant-Garde Editorial',
    description: 'Creative and bold editorial makeup',
    category: 'editorial',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/36E83A37-7FDA-44F4-B149-0A368DA601F8%202.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yYTY3MWQwNy0wNmZhLTRkOTYtYWY1Yy04OGFiMjg0Y2QwODciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJJbWFnZXMvMzZFODNBMzctN0ZEQS00NEY0LUIxNDktMEEzNjhEQTYwMUY4IDIuSlBHIiwiaWF0IjoxNzYwODE1MzYyLCJleHAiOjMzMjk2ODE1MzYyfQ.4RoontEpv-wGY3GvU_SeJVNzguEbJE21NkXGmfNtzhU',
  },
];