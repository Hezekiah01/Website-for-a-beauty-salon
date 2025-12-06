export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  category: 'hair' | 'skin' | 'nails' | 'spa';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}