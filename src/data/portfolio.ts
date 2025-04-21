import { PortfolioItem } from '../types/portfolio';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Bridal Makeup',
    description: 'Edge of Glamour',
    category: 'editorial',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/36E83A37-7FDA-44F4-B149-0A368DA601F8.JPG',
    beforeImage: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/36E83A37-7FDA-44F4-B149-0A368DA601F8.JPG',
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
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/BeautyPlus_20220717145605336_save.jpg',
  },
  {
    id: '3',
    title: 'Makeup Tutorial',
    description: 'Watch how to create this stunning look',
    category: 'tutorial',
    isVideo: true,
    videoUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/1f7207c08d4e4888a93d9c5b033b4258.MOV',
    videoThumbnailUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/36E83A37-7FDA-44F4-B149-0A368DA601F8.JPG',
  },
  {
    id: '4',
    title: 'Photography Makeup',
    description: 'Specialized makeup optimized for photography and video',
    category: 'special-effects',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/beige.jpg',
    beforeImage: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/beige.jpg',
  },
  {
    id: '5',
    title: 'Natural Glam',
    description: 'Everyday glam makeup look',
    category: 'casual',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/AA1A4985-4DF7-4365-B336-AD4CDA5D3C0F.JPG',
  },
  {
    id: '6',
    title: 'Let your makeup tell your story',
    description: 'Tell Your story with your style',
    category: 'casual',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/PHOTO-2024-12-11-11-51-19.jpg',
    testimonial: {
      author: 'Anonymous',
      text: 'I felt like the most beautiful version of myself on my wedding day. Thank you, Cynie!',
      rating: 5,
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
    },
  },
  {
    id: '7',
    title: 'Avant-Garde Editorial',
    description: 'Creative and bold editorial makeup',
    category: 'editorial',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/public/Images/IMG_20220714_065955_072.jpg',
  },
];