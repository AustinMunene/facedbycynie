import { PortfolioItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Makeup',
    description: 'Edge of Glamour',
    category: 'bridal',
    imageUrl: 'https://imgur.com/C0wE8sm.jpeg',
    beforeImage: 'https://imgur.com/C0wE8sm.jpeg',
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
    imageUrl: 'https://imgur.com/F4jQgfy.jpeg',
      beforeImage: 'https://imgur.com/F4jQgfy.jpeg',
    },
  {
    id: '4',
    title: 'Natural Glam',
    description: 'Everyday glam makeup look',
    category: 'casual',
    imageUrl: 'https://imgur.com/1JdCK54.jpeg',
  },
  {
    id: '5',
    title: 'Let your makeup tell your story',
    description: 'Tell Your story with your style',
    category: 'casual',
    imageUrl: 'https://imgur.com/bQ6HJw2.jpeg',
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
    imageUrl: 'https://imgur.com/HCJ0Ge0.jpeg',
  },
];