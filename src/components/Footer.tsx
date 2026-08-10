import React, { useState } from 'react';
import { LogoSVG } from './Logo';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowRight, ChevronRight } from 'lucide-react';

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

  const footerLinks = [
    { title: 'Company', links: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Process', href: '#process' },
      { name: 'Strategic Vision', href: '#about' },
      { name: 'Human Capital', href: '#services' },
    ]},
    { title: 'Services', links: [
      { name: 'Market Analysis', href: '#services' },
      { name: 'Digital Strategy', href: '#services' },
      { name: 'Operational Excellence', href: '#services' },
      { name: 'Financial Advisory', href: '#services' },
    ]},
    { title: 'Resources', links: [
      { name: 'FAQs', href: '#faq' },
      { name: 'Contact Support', href: '#contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ]}
  ];

  return (
    <footer className="relative pt-16 pb-8 border-t border-slate-800 bg-slate-950 text-white transition-colors duration-300 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-100"
        >
          <source src="/footer-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <LogoSVG className="w-12 h-12 shadow-xl rounded-2xl" isLight={true} />
              <div>
                <span className="text-xl font-black text-white tracking-wider block leading-none">
                  ZAVIYAR
                </span>
                <p className="text-[10px] font-black text-indigo-400 tracking-widest mt-1 uppercase">
                  Consultant Agency
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed font-medium">
              Ready to take your business to the next level? Reach out to Zaviyar Consultant Agency today and let us help you build a strategy for lasting success.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-indigo-600 hover:text-white transition-all hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Links */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-6">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm font-bold flex items-center gap-2 group">
                      <ChevronRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/10 mb-8">
          <div className="flex items-center gap-4 text-slate-300 font-bold text-sm">
            <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>
            <span>hello@zaviyar.com</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-bold text-sm">
            <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300 font-bold text-sm">
            <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <span>Strategic Way, Suite 500, Karachi</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Zaviyar Consultant Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>

  );
}
