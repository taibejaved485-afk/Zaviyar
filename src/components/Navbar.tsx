import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, Search as SearchIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoSVG } from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
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

    // Check initial theme
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <LogoSVG className="w-11 h-11 shadow-md rounded-2xl" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-wider text-slate-900 dark:text-white leading-none">
                ZAVIYAR
              </span>
              <span className="text-[10px] font-bold tracking-widest text-indigo-600 uppercase mt-1">
                Consultant Agency
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {!isSearchOpen ? (
              <>
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className={`text-sm font-medium transition-colors hover:text-indigo-500 ${scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </>
            ) : null}

            <div className="relative" ref={searchRef}>
              <div className="flex items-center">
                <motion.div
                  initial={false}
                  animate={{ width: isSearchOpen ? '240px' : '0px', opacity: isSearchOpen ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search sections, services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-[240px] px-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-l-lg text-sm text-slate-900 dark:text-white focus:ring-0 outline-none"
                  />
                </motion.div>
                <button
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setSearchQuery('');
                  }}
                  className={`p-2 transition-colors ${isSearchOpen ? 'bg-slate-100 dark:bg-slate-800 rounded-r-lg text-indigo-600' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-500'}`}
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
                    className="absolute right-0 top-full mt-2 w-[300px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden"
                  >
                    {filteredResults.length > 0 ? (
                      <div className="py-2">
                        {filteredResults.map((result, idx) => (
                          <a
                            key={idx}
                            href={result.href}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery('');
                            }}
                            className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                          >
                            <span className="text-sm font-medium text-slate-900 dark:text-white">{result.name}</span>
                            <span className="text-[10px] px-2 py-0.5 bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 rounded-full uppercase tracking-widest">{result.category}</span>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-6 text-center text-sm text-slate-500">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!isSearchOpen && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-500 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            )}

            {!isSearchOpen && (
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                href="#contact"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
              >
                Get Started
              </motion.a>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 dark:text-white"
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
            className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="relative mb-6">
                <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-xl text-slate-900 dark:text-white outline-none"
                />
                {searchQuery && (
                  <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl shadow-xl z-10 max-h-[200px] overflow-y-auto">
                    {filteredResults.map((result, idx) => (
                      <a
                        key={idx}
                        href={result.href}
                        onClick={() => {
                          setIsOpen(false);
                          setSearchQuery('');
                        }}
                        className="block px-4 py-3 text-sm text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-700 last:border-none"
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
                  className="block text-lg font-medium text-slate-900 dark:text-white hover:text-indigo-600"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-indigo-600 text-white text-center py-3 rounded-xl font-semibold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

