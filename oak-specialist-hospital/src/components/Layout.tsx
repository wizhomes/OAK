import React, { useState, useEffect } from 'react';
import { Heart, Stethoscope, Clock, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Search, Menu, X, User, Globe, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Logo from '../assets/images/LOGO.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleLang = () => setLang(prev => prev === 'EN' ? 'FR' : 'EN');
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    { title: 'Doctors', href: '/doctors' },
    { title: 'Departments', href: '/departments' },
    { title: 'Health Blog', href: '/blog' },
    { title: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-md py-2 text-slate-900' : 'bg-transparent py-4 text-white'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group h-8 md:h-12">
          <img src={Logo} alt="Oak Hospital Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.title} 
              to={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-red-400 ${location.pathname === link.href ? (isScrolled ? 'text-red-600' : 'text-red-400') : (isScrolled ? 'text-slate-600' : 'text-white/90')}`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className={`${isScrolled ? 'text-slate-400 hover:text-red-600' : 'text-white hover:bg-white/10'}`}>
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" onClick={toggleLang} className={`flex items-center gap-2 font-bold text-xs ${isScrolled ? 'text-slate-600 hover:text-red-600' : 'text-white hover:bg-white/10'}`}>
            <Globe className="w-4 h-4" />
            {lang}
          </Button>
          <div className={`w-[1px] h-6 ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`}></div>
          <Link to="/book">
            <Button className={`${isScrolled ? 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200' : 'bg-white text-red-600 hover:bg-red-50'} rounded-xl px-6 h-12 font-bold uppercase tracking-widest text-[10px]`}>
              Book Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 relative z-50" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="text-slate-900" /> : <Menu className={isScrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[9999] flex flex-col p-6 lg:hidden"
            style={{ height: '100vh', width: '100vw' }}
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between mb-8">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                <img src={Logo} alt="Logo" className="h-10 w-auto object-contain" />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-12 h-12 flex items-center justify-center bg-slate-100 text-slate-900 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav Links - Centered vertically and horizontally */}
            <nav className="flex-grow flex flex-col justify-center items-center space-y-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="w-full"
                >
                  <Link 
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full py-4 text-2xl md:text-3xl font-black italic uppercase tracking-tighter text-center transition-all active:scale-95 ${
                      location.pathname === link.href ? 'text-red-600' : 'text-slate-900'
                    }`}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto space-y-8 pb-6 pt-6 border-t border-slate-100"
            >
              <Link to="/book" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full h-16 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl shadow-xl shadow-red-100 uppercase tracking-widest text-xs">
                  Book Appointment Now
                </Button>
              </Link>
              <div className="flex items-center justify-center gap-8">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 rounded-full bg-slate-50 text-slate-400 hover:text-red-600 hover:bg-red-50 transition-all">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
             <Link to="/" className="flex items-center gap-2 h-12">
              <img src={Logo} alt="Oak Hospital Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              Providing compassionate, world-class healthcare with the latest medical technology and the most experienced specialists in Ghana.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 rounded-full bg-slate-800 hover:bg-red-600 transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li><Link to="/about" className="hover:text-red-400 transition-colors">About Our Hospital</Link></li>
              <li><Link to="/doctors" className="hover:text-red-400 transition-colors">Find a Doctor</Link></li>
              <li><Link to="/departments" className="hover:text-red-400 transition-colors">Our Departments</Link></li>
              <li><Link to="/emergency" className="hover:text-red-400 transition-colors">Emergency Services</Link></li>
              <li><Link to="/blog" className="hover:text-red-400 transition-colors">Health Information</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>Cardiology Care</li>
              <li>Maternal & Child Health</li>
              <li>Surgical Operations</li>
              <li>Diagnostic Radiology</li>
              <li>Physical Therapy</li>
              <li>Oncology Department</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-6 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0" />
                <span>Spintex Road, Near Flower Pot Junction, Accra, Ghana</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <div>
                  <p>+233 (0) 30 281 1211</p>
                  <p className="text-xs text-slate-500">Emergency: 24/7 Available</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0" />
                <span>Open 24 Hours / 7 Days</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Oak Specialist Hospital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-red-400">Privacy Policy</a>
            <a href="#" className="hover:text-red-400">Terms of Service</a>
            <a href="#" className="hover:text-red-400">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-0 w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Integration Floating Button */}
      <a 
        href="https://wa.me/233302811211" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
  );
}
