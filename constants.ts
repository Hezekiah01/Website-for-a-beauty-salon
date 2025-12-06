import { Service, Testimonial, GalleryImage } from './types';
import { Scissors, Sparkles, Feather, Droplet } from 'lucide-react';

export const BRAND_NAME = "Lumière";
export const TAGLINE = "Unveil Your Inner Radiance";

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  { id: '1', title: 'Signature Cut & Style', description: 'Precision cutting tailored to your face shape, finished with a luxury blowout.', price: '$85+', category: 'hair' },
  { id: '2', title: 'Balayage & Gloss', description: 'Hand-painted highlights for a natural, sun-kissed look, including a shine treatment.', price: '$220+', category: 'hair' },
  { id: '3', title: 'Radiance Facial', description: 'A customized 60-minute treatment to exfoliate, hydrate, and revitalize tired skin.', price: '$130', category: 'skin' },
  { id: '4', title: 'Gel Manicure Deluxe', description: 'Long-lasting gel polish with cuticle care and a relaxing hand massage.', price: '$55', category: 'nails' },
  { id: '5', title: 'Aromatherapy Massage', description: 'Full body massage using essential oils to relieve tension and promote deep relaxation.', price: '$110', category: 'spa' },
  { id: '6', title: 'Bridal Package', description: 'Complete wedding day styling including hair, makeup, and a trial session.', price: '$350+', category: 'spa' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Sophia R.', role: 'Loyal Client', text: 'Lumière is simply the best. The atmosphere is so calming, and my hair has never looked better. Highly recommend the Balayage!', rating: 5 },
  { id: '2', name: 'Elena M.', role: 'Bride', text: 'They made my wedding day perfect. The team was professional, calming, and made me feel like a queen.', rating: 5 },
  { id: '3', name: 'Isabella K.', role: 'New Client', text: 'A hidden gem. The facial treatment was transformative. I left glowing and feeling completely refreshed.', rating: 5 },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://picsum.photos/600/800?random=1', alt: 'Elegant Hairstyle', category: 'Hair' },
  { id: '2', url: 'https://picsum.photos/600/800?random=2', alt: 'Manicure Detail', category: 'Nails' },
  { id: '3', url: 'https://picsum.photos/600/800?random=3', alt: 'Spa Interior', category: 'Interior' },
  { id: '4', url: 'https://picsum.photos/600/800?random=4', alt: 'Makeup Session', category: 'Makeup' },
  { id: '5', url: 'https://picsum.photos/600/800?random=5', alt: 'Product Display', category: 'Products' },
  { id: '6', url: 'https://picsum.photos/600/800?random=6', alt: 'Relaxation Area', category: 'Interior' },
];

export const SERVICE_ICONS = {
  hair: Scissors,
  skin: Sparkles,
  nails: Feather,
  spa: Droplet,
};
