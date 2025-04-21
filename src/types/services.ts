export type ServiceCategory = 
  | 'full-face'
  | 'bridal'
  | 'special-occasion'
  | 'touch-up'
  | 'enhancement'
  | 'photography'
  | 'lessons'
  | 'editorial';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  category: ServiceCategory;
  duration: string;
}