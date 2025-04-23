import { PortfolioItem } from '../types/portfolio';
import { getPublicImageUrl } from '../utils/supabase';

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Elegant Bridal Makeup',
    description: 'Edge of Glamour',
    category: 'bridal',
    imageUrl: getPublicImageUrl('https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BRidal.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvQlJpZGFsLmpwZyIsImlhdCI6MTc0NTQwMjEzMywiZXhwIjoyMDYwNzYyMTMzfQ.iDx5LeSd3oA2aR1g1SZHb85G7J-LrA8iNYZzRti4VoM'),
    beforeImage: getPublicImageUrl('https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BRidal.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvQlJpZGFsLmpwZyIsImlhdCI6MTc0NTQwMjEzMywiZXhwIjoyMDYwNzYyMTMzfQ.iDx5LeSd3oA2aR1g1SZHb85G7J-LrA8iNYZzRti4VoM'),
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
    imageUrl: getPublicImageUrl('https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/BeautyPlus_20220717145605336_save.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvQmVhdXR5UGx1c18yMDIyMDcxNzE0NTYwNTMzNl9zYXZlLmpwZyIsImlhdCI6MTc0NTQwNzE5MSwiZXhwIjoyMDYwNzY3MTkxfQ.BoA0xv7UzVovMjj_ziVXugFcZne4TF1nMdnK82Tfuro'),
  },
  {
    id: '3',
    title: 'Photography Makeup',
    description: 'Specialized makeup optimized for photography and video',
    category: 'special-effects',
    imageUrl: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/F141043A-1F73-4134-B40A-97028266DBCA.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvRjE0MTA0M0EtMUY3My00MTM0LUI0MEEtOTcwMjgyNjZEQkNBLkpQRyIsImlhdCI6MTc0NTQwNzI1MCwiZXhwIjoyMDYwNzY3MjUwfQ.1YqHauwidJX2CcFjeUIJeuGLZpJctPN8L4vAVVPrSuI',
    beforeImage: 'https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/F141043A-1F73-4134-B40A-97028266DBCA.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvRjE0MTA0M0EtMUY3My00MTM0LUI0MEEtOTcwMjgyNjZEQkNBLkpQRyIsImlhdCI6MTc0NTQwNzI1MCwiZXhwIjoyMDYwNzY3MjUwfQ.1YqHauwidJX2CcFjeUIJeuGLZpJctPN8L4vAVVPrSuI',
  },
  {
    id: '4',
    title: 'Natural Glam',
    description: 'Everyday glam makeup look',
    category: 'casual',
    imageUrl: getPublicImageUrl('https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/36E83A37-7FDA-44F4-B149-0A368DA601F8.JPG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvMzZFODNBMzctN0ZEQS00NEY0LUIxNDktMEEzNjhEQTYwMUY4LkpQRyIsImlhdCI6MTc0NTQwNzMzOSwiZXhwIjoyMDYwNzY3MzM5fQ.e1NyhGbKyuM0cGEqUo_hWFuVgO1ai8COIqZDCRqCdJM'),
  },
  {
    id: '5',
    title: 'Let your makeup tell your story',
    description: 'Tell Your story with your style',
    category: 'casual',
    imageUrl: getPublicImageUrl('https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/PHOTO-2024-12-11-11-51-19.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvUEhPVE8tMjAyNC0xMi0xMS0xMS01MS0xOS5qcGciLCJpYXQiOjE3NDU0MDcwNzYsImV4cCI6MjA2MDc2NzA3Nn0.7bP9hMupIMGW7BHsphNbWrpA9oBzkHKnN7hMhm0-u_I'),
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
    imageUrl: getPublicImageUrl('https://obchjnyedxcbxxmfhnsc.supabase.co/storage/v1/object/sign/Images/IMG_20220714_065955_072.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzBkNjFlMGU0LTI2NjktNDk0NC1iMWU5LTdiNWE1ZDRhNDI4NSJ9.eyJ1cmwiOiJJbWFnZXMvSU1HXzIwMjIwNzE0XzA2NTk1NV8wNzIuanBnIiwiaWF0IjoxNzQ1NDA3MTI2LCJleHAiOjIwNjA3NjcxMjZ9.ynyvzNHbDLLOvw4703KXaj9ArI2Jin_1pM6zq1YVNno'),
  },
];