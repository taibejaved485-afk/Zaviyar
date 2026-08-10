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
    <footer className="bg-white py-24 border-t border-slate-100 transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          {/* Logo & Description */}
          <div>
          <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
            <LogoSVG className="w-12 h-12 shadow-sm rounded-2xl" isLight={false} />
            <div>
              <span className="text-xl font-black text-slate-900 tracking-wider block leading-none">
                ZAVIYAR
              </span>
              <p className="text-[10px] font-black text-indigo-600 tracking-widest mt-1 uppercase">
                Consultant Agency
              </p>
            </div>
          </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0 text-center lg:text-left font-medium">
              Empowering global businesses through precision strategic solutions and measurable sustainable growth. Partner with Lahore's premier consulting experts.
            </p>
          </div>

          {/* Newsletter */}
          <div className="text-center lg:text-left">
            <h4 className="text-slate-900 font-black text-lg mb-8 tracking-tight">Strategy Insights</h4>
            <p className="text-slate-600 text-base mb-8 font-medium">Subscribe to our newsletter for periodic business strategies and market insights from our lead consultants.</p>
            {subscribed ? (
              <div className="bg-indigo-50 border border-indigo-100 text-indigo-600 px-6 py-4 rounded-2xl font-bold">
                Thank you! You've been subscribed.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="bg-[#FCFAF8] border border-slate-100 text-slate-900 px-6 py-4 rounded-2xl text-base outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 w-full font-medium"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl text-base font-black transition-all whitespace-nowrap shadow-xl shadow-indigo-600/20 active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Links */}
          <div className="text-center lg:text-right">
            <h4 className="text-slate-900 font-black text-lg mb-8 tracking-tight">Quick Links</h4>
            <div className="flex flex-col lg:items-end gap-4 text-base font-black text-slate-500 uppercase tracking-widest">
              <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-indigo-600 transition-colors">About Us</a>
              <a href="#services" className="hover:text-indigo-600 transition-colors">Our Services</a>
              <a href="#faq" className="hover:text-indigo-600 transition-colors">FAQs</a>
              <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-bold">
          <p className="uppercase tracking-widest">&copy; {new Date().getFullYear()} Zaviyar Consultant Agency. All rights reserved.</p>
          <div className="flex gap-8 uppercase tracking-widest">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
