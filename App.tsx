import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ChevronUp } from 'lucide-react';
import { BRAND_NAME, NAVIGATION_LINKS, SERVICES, TESTIMONIALS, GALLERY_IMAGES, SERVICE_ICONS } from './constants';
import { Button } from './components/Button';
import { ChatWidget } from './components/ChatWidget';

// --- Sub-components defined here for single-file XML simplicity where logical ---

// 1. Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-rose-900' : 'text-rose-900 lg:text-white'}`}>
          {BRAND_NAME.toUpperCase()}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm tracking-widest uppercase hover:text-rose-400 transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <Button size="sm" variant={isScrolled ? 'primary' : 'secondary'} className="ml-4">Book Now</Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-rose-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 lg:hidden animate-fade-in-down border-t border-rose-100">
           {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-stone-800 text-sm tracking-widest uppercase hover:text-rose-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full">Book Appointment</Button>
        </div>
      )}
    </header>
  );
};

// 2. Hero Component
const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Salon Ambience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/30"></div> {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50/90 to-transparent"></div> {/* Gradient to blend with next section */}
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <p className="text-white/90 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in">Welcome to {BRAND_NAME}</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight drop-shadow-lg animate-fade-in-up">
          Unveil Your <br/> <span className="italic text-rose-200">Inner Radiance</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
          Where luxury meets artistry. Experience the pinnacle of hair, skin, and wellness treatments in an oasis of calm.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <Button size="lg" variant="secondary">View Services</Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-stone-900 hover:border-white">Contact Us</Button>
        </div>
      </div>
    </section>
  );
};

// 3. About Section
const About = () => {
  return (
    <section id="about" className="py-24 bg-rose-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-rose-200 z-0"></div>
             <img 
               src="https://picsum.photos/800/1000?random=10" 
               alt="Our Philosophy" 
               className="relative z-10 w-full h-auto shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-rose-500 tracking-widest uppercase mb-2">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-800 mb-8 leading-tight">Redefining Beauty <br/> Through <span className="italic text-rose-900">Elegance</span></h3>
            <p className="text-stone-600 mb-6 leading-relaxed text-lg">
              Founded on the belief that beauty is a personal journey, {BRAND_NAME} was created to be a sanctuary for those seeking refinement and relaxation. We combine traditional techniques with modern innovation to deliver results that feel as good as they look.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed text-lg">
              Our team of master stylists and estheticians are dedicated to perfection. We use only premium, eco-conscious products that nurture your natural beauty.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-rose-900"></div>
              <span className="font-serif italic text-xl text-stone-800">Élise & Co.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 4. Services Section
const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-stone-800 mb-4">Curated Treatments</h2>
          <div className="h-1 w-20 bg-rose-200 mx-auto mb-6"></div>
          <p className="text-stone-500">Indulge in our selection of premium services designed to rejuvenate and inspire.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.category as keyof typeof SERVICE_ICONS];
            return (
              <div key={service.id} className="group p-8 border border-stone-100 hover:border-rose-200 bg-rose-50/30 hover:bg-white hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-rose-100 text-rose-900 flex items-center justify-center rounded-full mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-stone-800 mb-2">{service.title}</h3>
                <p className="text-stone-500 mb-4 text-sm leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-stone-100">
                  <span className="font-semibold text-rose-900">{service.price}</span>
                  <button className="text-xs uppercase tracking-wider text-stone-400 group-hover:text-rose-900 transition-colors">Book</button>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
           <Button variant="outline">View Full Menu</Button>
        </div>
      </div>
    </section>
  );
};

// 5. Gallery Section
const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-900 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif mb-2">Visual Diary</h2>
            <p className="text-stone-400">Glimpses into our world of beauty.</p>
          </div>
          <a href="#" className="hidden md:block text-rose-300 hover:text-white transition-colors border-b border-rose-300 pb-1 text-sm tracking-widest uppercase mt-4 md:mt-0">Follow on Instagram</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
             <div key={img.id} className={`relative group overflow-hidden ${idx === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
               <img 
                 src={img.url} 
                 alt={img.alt} 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/20 transition-all duration-500"></div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. Testimonials Section
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-rose-50">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl font-serif text-stone-800 mb-16">Kind Words</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 shadow-sm relative">
              <div className="text-rose-200 absolute top-4 left-6 text-6xl font-serif">"</div>
              <p className="text-stone-600 mb-6 relative z-10 italic leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-900 font-serif font-bold">
                   {t.name[0]}
                 </div>
                 <div>
                   <h4 className="text-stone-900 font-bold text-sm">{t.name}</h4>
                   <span className="text-stone-400 text-xs uppercase tracking-wider">{t.role}</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 7. Contact Section
const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif text-stone-800">Visit Us</h2>
            <p className="text-stone-600 text-lg">We look forward to welcoming you to our sanctuary. Booking in advance is highly recommended.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-rose-900 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-800">Location</h4>
                  <p className="text-stone-600">123 Boulevard of Dreams<br/>Beverly Hills, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-rose-900 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-800">Phone</h4>
                  <p className="text-stone-600">(310) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-rose-900 mt-1" />
                <div>
                  <h4 className="font-bold text-stone-800">Email</h4>
                  <p className="text-stone-600">concierge@lumiere-salon.com</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="font-bold text-stone-800 mb-4">Opening Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-stone-600 text-sm">
                <p>Mon - Fri</p> <p>9:00 AM - 8:00 PM</p>
                <p>Saturday</p> <p>10:00 AM - 6:00 PM</p>
                <p>Sunday</p> <p>Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 p-8 md:p-12">
            <h3 className="text-2xl font-serif text-stone-800 mb-6">Send an Inquiry</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full bg-white border-none p-4 placeholder-stone-400 focus:ring-1 focus:ring-rose-300 outline-none" />
                <input type="text" placeholder="Last Name" className="w-full bg-white border-none p-4 placeholder-stone-400 focus:ring-1 focus:ring-rose-300 outline-none" />
              </div>
              <input type="email" placeholder="Email Address" className="w-full bg-white border-none p-4 placeholder-stone-400 focus:ring-1 focus:ring-rose-300 outline-none" />
              <select className="w-full bg-white border-none p-4 text-stone-500 focus:ring-1 focus:ring-rose-300 outline-none">
                <option>Interested in...</option>
                <option>Hair Styling</option>
                <option>Skincare</option>
                <option>Bridal</option>
                <option>Other</option>
              </select>
              <textarea rows={4} placeholder="Your Message" className="w-full bg-white border-none p-4 placeholder-stone-400 focus:ring-1 focus:ring-rose-300 outline-none"></textarea>
              <Button className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// 8. Footer Component
const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 border-b border-stone-800 pb-16">
          <div className="md:col-span-1">
            <a href="#" className="text-3xl font-serif font-bold tracking-widest mb-6 block">{BRAND_NAME.toUpperCase()}</a>
            <p className="text-stone-400 text-sm leading-relaxed">
              Elevating the standard of beauty and wellness with every touch.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-serif mb-6">Menu</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li><a href="#services" className="hover:text-rose-300 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-rose-300 transition-colors">Lookbook</a></li>
              <li><a href="#about" className="hover:text-rose-300 transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="hover:text-rose-300 transition-colors">Reviews</a></li>
            </ul>
          </div>

           <div>
            <h4 className="text-lg font-serif mb-6">Legal</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-rose-300 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-rose-300 transition-colors">Accessibility</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-900 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-900 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-rose-900 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-stone-500 text-xs">
          <p>&copy; {new Date().getFullYear()} {BRAND_NAME} Beauty Lounge. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <span>Designed with elegance</span>
             <div className="w-1 h-1 bg-stone-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Layout
function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      <ChatWidget />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 left-6 bg-white border border-stone-200 p-3 rounded-full shadow-lg hover:bg-rose-50 transition-all z-40 text-stone-600 animate-fade-in"
        >
          <ChevronUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;