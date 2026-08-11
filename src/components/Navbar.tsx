import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Search as SearchIcon, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoSVG } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const searchRef = useRef<HTMLDivElement>(null);

  const searchableContent = [
    { name: 'About Us', href: '#about', category: 'Section' },
    { name: 'Why Choose Us', href: '#why-choose-us', category: 'Section' },
    { name: 'Services', href: '#services', category: 'Section' },
    { name: 'Our Process', href: '#process', category: 'Section' },
    { name: 'Testimonials', href: '#testimonials', category: 'Section' },
    { name: 'Strategic Planning', href: '#services', category: 'Service' },
    { name: 'Operational Excellence', href: '#services', category: 'Service' },
    { name: 'Financial Advisory', href: '#services', category: 'Service' },
    { name: 'Digital Transformation', href: '#services', category: 'Service' },
    { name: 'Contact Us', href: '#contact', category: 'Section' },
    { name: 'FAQs', href: '#faq', category: 'Section' },
  ];

  const filteredResults = searchableContent.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section scroll tracking
      const sections = ['about', 'why-choose-us', 'services', 'process', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Why Us', href: '#why-choose-us', id: 'why-choose-us' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-lg shadow-indigo-950/5 py-3' 
        : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
    }`}>
      {/* Top subtle border line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-indigo-600" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="relative flex justify-between items-center">
          
          {/* Brand Logo & Tagline */}
          <a href="#home" className="flex items-center gap-3 group outline-none">
            <div className="relative">
              <LogoSVG className="w-10 h-10 sm:w-11 sm:h-11 shadow-md rounded-2xl group-hover:scale-105 group-hover:rotate-3 transition-all duration-300" />
              <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 leading-none group-hover:text-indigo-600 transition-colors">
                  ZAVIYAR
                </span>
              </div>
              <span className="text-[9px] font-extrabold tracking-[0.2em] text-indigo-600 uppercase mt-0.5">
                Consulting Agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Absolute Center */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/80 shadow-xs backdrop-blur-md absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'text-indigo-600 font-black'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white rounded-full shadow-xs border border-slate-200/60 -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Header Actions (Search + Phone + CTA) */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Search Box */}
            <div className="relative" ref={searchRef}>
              <div className="flex items-center">
                <motion.div
                  initial={false}
                  animate={{ width: isSearchOpen ? '260px' : '0px', opacity: isSearchOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <input
                    autoFocus={isSearchOpen}
                    type="text"
                    placeholder="Search insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[260px] px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 outline-none font-medium"
                  />
                </motion.div>

                <button
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setSearchQuery('');
                  }}
                  title="Search (Ctrl + K)"
                  className={`p-2.5 transition-all duration-200 rounded-xl border flex items-center gap-1.5 ${
                    isSearchOpen 
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' 
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-indigo-600 shadow-2xs'
                  }`}
                >
                  {isSearchOpen ? <X size={16} /> : <SearchIcon size={16} />}
                  {!isSearchOpen && (
                    <span className="text-[10px] font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50 hidden xl:inline-block">
                      ⌘K
                    </span>
                  )}
                </button>
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {isSearchOpen && searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    className="absolute right-0 top-full mt-3 w-[320px] bg-white rounded-2xl shadow-xl border border-slate-200/80 overflow-hidden z-50 p-2"
                  >
                    {filteredResults.length > 0 ? (
                      <div className="space-y-1">
                        {filteredResults.map((result, idx) => (
                          <a
                            key={idx}
                            href={result.href}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-indigo-50/70 transition-colors group"
                          >
                            <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{result.name}</span>
                            <span className="text-[9px] px-2 py-0.5 bg-white border border-slate-200 text-indigo-600 rounded-md font-black uppercase tracking-wider">{result.category}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center text-xs text-slate-500 font-medium">
                        No results for <span className="font-bold">"{searchQuery}"</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Primary CTA Button */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="relative group overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md shadow-indigo-600/20 flex items-center gap-2"
            >
              {/* Shiny reflection hover effect */}
              <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
              <Sparkles size={14} className="text-indigo-200" />
              <span>Book Strategy</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => {
                setIsSearchOpen(!isSearchOpen);
                setIsOpen(false);
              }}
              className="p-2.5 bg-slate-100 text-slate-700 rounded-xl"
              aria-label="Toggle Search"
            >
              <SearchIcon size={18} />
            </button>
            <button 
              onClick={() => {
                setIsOpen(!isOpen);
                setIsSearchOpen(false);
              }}
              className="p-2.5 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-600/20 active:scale-95 transition-transform"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200/80 overflow-hidden shadow-2xl"
          >
            <div className="px-5 py-6 space-y-4">
              
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-800 hover:text-indigo-600 hover:bg-indigo-50/60 transition-all"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={15} className="text-slate-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3.5 rounded-xl font-extrabold uppercase tracking-widest text-xs shadow-lg shadow-indigo-600/20"
                >
                  <Sparkles size={14} />
                  <span>Book Consultation</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Search Overlay Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white px-4 py-3 border-b border-slate-200 shadow-lg"
          >
            <div className="relative">
              <SearchIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                autoFocus
                type="text"
                placeholder="Search services or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 outline-none font-medium focus:ring-2 focus:ring-indigo-500/20"
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              >
                <X size={16} />
              </button>
            </div>

            {searchQuery && filteredResults.length > 0 && (
              <div className="mt-2 bg-white rounded-xl border border-slate-200 shadow-md max-h-[220px] overflow-y-auto">
                {filteredResults.map((result, idx) => (
                  <a
                    key={idx}
                    href={result.href}
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery('');
                    }}
                    className="flex items-center justify-between px-4 py-2.5 border-b border-slate-100 last:border-none text-xs font-bold text-slate-800"
                  >
                    <span>{result.name}</span>
                    <span className="text-[9px] px-2 py-0.5 bg-indigo-50 text-indigo-600 rounded font-bold uppercase">{result.category}</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


