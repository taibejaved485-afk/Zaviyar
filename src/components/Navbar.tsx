import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoSVG } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);

  const searchableContent = [
    { name: 'About Us', href: '#about', category: 'Section' },
    { name: 'Our Process', href: '#process', category: 'Section' },
    { name: 'Services', href: '#services', category: 'Section' },
    { name: 'Strategic Planning', href: '#services', category: 'Service' },
    { name: 'Operational Excellence', href: '#services', category: 'Service' },
    { name: 'Financial Advisory', href: '#services', category: 'Service' },
    { name: 'Digital Transformation', href: '#services', category: 'Service' },
    { name: 'Market Analysis', href: '#services', category: 'Service' },
    { name: 'Human Capital', href: '#services', category: 'Service' },
    { name: 'Contact Us', href: '#contact', category: 'Section' },
    { name: 'FAQs', href: '#faq', category: 'Section' },
  ];

  const filteredResults = searchableContent.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-2xl shadow-slate-200/20 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LogoSVG className="w-12 h-12 shadow-xl rounded-2xl" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">
                ZAVIYAR
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-indigo-600 uppercase mt-1">
                Consultant Agency
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {!isSearchOpen ? (
              <div className="flex items-center gap-8">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="text-xs lg:text-sm font-black uppercase tracking-widest text-slate-600 hover:text-indigo-600 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
            ) : null}

            <div className="relative" ref={searchRef}>
              <div className="flex items-center">
                <motion.div
                  initial={false}
                  animate={{ width: isSearchOpen ? '300px' : '0px', opacity: isSearchOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search Zaviyar insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[300px] px-6 py-3 bg-[#FCFAF8] border border-slate-100 rounded-2xl text-sm text-slate-900 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-600 outline-none font-medium"
                  />
                </motion.div>
                <button
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setSearchQuery('');
                  }}
                  className={`p-3 transition-all duration-300 rounded-2xl ${isSearchOpen ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {isSearchOpen ? <X size={20} /> : <SearchIcon size={20} />}
                </button>
              </div>

              {/* Search Results Dropdown */}
              <AnimatePresence>
                {isSearchOpen && searchQuery && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-4 w-[350px] bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-50"
                  >
                    {filteredResults.length > 0 ? (
                      <div className="py-4">
                        {filteredResults.map((result, idx) => (
                          <a
                            key={idx}
                            href={result.href}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center justify-between px-6 py-4 hover:bg-[#FCFAF8] transition-colors group"
                          >
                            <span className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{result.name}</span>
                            <span className="text-[10px] px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full font-black uppercase tracking-widest">{result.category}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="px-6 py-10 text-center text-sm text-slate-500 font-medium">
                        No results found for <span className="font-bold">"{searchQuery}"</span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!isSearchOpen && (
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest transition-all shadow-xl shadow-indigo-600/20 active:scale-95 hover:-translate-y-0.5"
              >
                Inquiry
              </motion.a>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 bg-slate-50 text-slate-900 rounded-2xl"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-8 space-y-6">
              <div className="relative mb-8">
                <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-[#FCFAF8] border-none rounded-2xl text-slate-900 outline-none font-medium"
                />
                {searchQuery && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl z-50 max-h-[300px] overflow-y-auto">
                    {filteredResults.map((result, idx) => (
                      <a
                        key={idx}
                        href={result.href}
                        onClick={() => {
                          setIsOpen(false);
                          setSearchQuery('');
                        }}
                        className="block px-6 py-4 text-base font-bold text-slate-900 border-b border-slate-100 last:border-none"
                      >
                        {result.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-black uppercase tracking-widest text-slate-900 hover:text-indigo-600"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-indigo-600 text-white text-center py-5 rounded-[1.5rem] font-black uppercase tracking-widest shadow-xl shadow-indigo-600/20"
              >
                Inquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

