import React, { useState } from 'react';
import { LogoSVG } from './Logo';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-16 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
          <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
            {/* Light version of logo for dark background */}
            <LogoSVG className="w-10 h-10" isLight={false} />
            <div>
              <span className="text-lg font-bold text-white tracking-wider block leading-none">
                ZAVIYAR CONSULTANT AGENCY
              </span>
              <p className="text-xs text-slate-400 mt-1">
                Strategic Solutions. Sustainable Growth.
              </p>
            </div>
          </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto lg:mx-0 text-center lg:text-left">
              Empowering businesses through strategic solutions and sustainable growth. Partner with us to unlock your organization's full potential.
            </p>
          </div>

          {/* Newsletter */}
          <div className="text-center lg:text-left">
            <h4 className="text-white font-bold mb-6">Strategy Insights</h4>
            <p className="text-slate-400 text-sm mb-6">Subscribe to our newsletter for periodic business strategies and market insights.</p>
            {subscribed ? (
              <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl text-sm">
                Thank you! You've been subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="bg-slate-800 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-600 w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <div className="flex flex-col lg:items-end gap-3 text-sm font-medium text-slate-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About Us</a>
              <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Zaviyar Consultant Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
