import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LogoSVG } from './Logo';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowRight, ChevronRight, X, Shield, FileText, Cookie, Check } from 'lucide-react';

type ModalType = 'privacy' | 'terms' | 'cookies' | null;

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  });
  const [cookiesSaved, setCookiesSaved] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const handleOpenModal = (e: React.MouseEvent, type: ModalType) => {
    e.preventDefault();
    setActiveModal(type);
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
      { name: 'Privacy Policy', href: '#', type: 'privacy' as ModalType },
      { name: 'Terms of Service', href: '#', type: 'terms' as ModalType },
    ]}
  ];

  return (
    <footer className="relative pt-20 pb-10 bg-black text-white transition-colors duration-300 overflow-hidden">
      {/* Background Video - Fully visible and clear */}
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
        {/* Subtle gradient overlay to ensure text contrast without obscuring video */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/40 pointer-events-none" />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Newsletter / CTA Banner Container */}
        <div className="mb-16 p-8 lg:p-12 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-3">
                Stay Informed
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Subscribe to Strategic Insights
              </h3>
              <p className="text-slate-300 text-base mt-2 font-medium">
                Get monthly industry analysis, strategic insights, and growth framework updates directly to your inbox.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md">
              {subscribed ? (
                <div className="px-6 py-4 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 rounded-2xl text-center font-bold">
                  ✓ Thank you for subscribing!
                </div>
              ) : (
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your corporate email"
                    required
                    className="flex-1 px-6 py-4 bg-slate-950/80 border border-white/15 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 font-medium"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 whitespace-nowrap active:scale-95"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Main Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo & Description Column (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3.5">
              <LogoSVG className="w-12 h-12 shadow-2xl rounded-2xl border border-white/10" isLight={true} />
              <div>
                <span className="text-2xl font-black text-white tracking-wider block leading-none">
                  ZAVIYAR
                </span>
                <p className="text-[10px] font-black text-indigo-400 tracking-[0.25em] mt-1 uppercase">
                  Consultant Agency
                </p>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed font-medium max-w-md">
              Transforming potential into market leadership through tailored strategic advisory, operational efficiency, and organizational excellence.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-11 h-11 bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all hover:-translate-y-1 shadow-lg"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Dynamic Links */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] border-b border-white/10 pb-3">{column.title}</h4>
              <ul className="space-y-3.5">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={link.type ? (e) => handleOpenModal(e, link.type!) : undefined}
                      className="text-slate-300 hover:text-indigo-400 transition-colors text-sm font-semibold flex items-center gap-2 group cursor-pointer"
                    >
                      <ChevronRight size={12} className="text-indigo-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 px-8 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-3xl mb-12">
          <div className="flex items-center gap-4 text-slate-200 font-medium text-sm">
            <div className="w-11 h-11 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-2xl flex items-center justify-center shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Email Us</p>
              <span className="font-bold text-white">hello@zaviyar.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-200 font-medium text-sm">
            <div className="w-11 h-11 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-2xl flex items-center justify-center shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Call Us</p>
              <span className="font-bold text-white">+92 300 1234567</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-200 font-medium text-sm">
            <div className="w-11 h-11 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-2xl flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Visit Us</p>
              <span className="font-bold text-white">Strategic Way, Suite 500, Karachi</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/10 text-slate-400 text-xs font-bold">
          <p>&copy; {new Date().getFullYear()} Zaviyar Consultant Agency. All rights reserved.</p>
          <div className="flex gap-8">
            <button onClick={(e) => handleOpenModal(e, 'privacy')} className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={(e) => handleOpenModal(e, 'terms')} className="hover:text-white transition-colors cursor-pointer">Terms of Service</button>
            <button onClick={(e) => handleOpenModal(e, 'cookies')} className="hover:text-white transition-colors cursor-pointer">Cookies Settings</button>
          </div>
        </div>
      </div>

      {/* Pop-up Modal Container */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-0"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative z-10 w-full max-w-2xl bg-slate-900 border border-white/15 text-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                    {activeModal === 'privacy' && <Shield size={20} />}
                    {activeModal === 'terms' && <FileText size={20} />}
                    {activeModal === 'cookies' && <Cookie size={20} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {activeModal === 'privacy' && 'Privacy Policy'}
                      {activeModal === 'terms' && 'Terms of Service'}
                      {activeModal === 'cookies' && 'Cookies Settings'}
                    </h3>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Zaviyar Consultant Agency
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Body Content */}
              <div className="p-8 overflow-y-auto space-y-6 text-slate-300 text-sm leading-relaxed font-medium">
                {activeModal === 'privacy' && (
                  <>
                    <p>
                      At <strong>Zaviyar Consultant Agency</strong>, we take your data privacy very seriously. This policy outlines how we collect, store, and protect your personal and corporate information when you use our website or engage our consulting services.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider text-indigo-400">1. Information Collection</h4>
                      <p>
                        We collect information you voluntarily provide through contact forms, newsletter subscriptions, and corporate inquiry forms, including your name, corporate email address, telephone number, and company name.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider text-indigo-400">2. How We Use Information</h4>
                      <p>
                        Your information is strictly used to deliver tailored consulting advice, communicate project updates, process consultation inquiries, and send relevant strategic insights. We never sell or share your data with third-party advertisers.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider text-indigo-400">3. Data Security & Confidentiality</h4>
                      <p>
                        We employ enterprise-grade encryption and secure database controls to safeguard client data. Confidentiality is fundamental to our consulting relationship.
                      </p>
                    </div>
                  </>
                )}

                {activeModal === 'terms' && (
                  <>
                    <p>
                      Welcome to <strong>Zaviyar Consultant Agency</strong>. By accessing our platform or engaging our services, you agree to comply with the following terms and conditions.
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider text-indigo-400">1. Consulting Engagements</h4>
                      <p>
                        All advisory engagements, deliverables, timeline expectations, and fee structures are governed by specific Non-Disclosure Agreements (NDAs) and Statements of Work (SOWs) executed between Zaviyar and the client.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider text-indigo-400">2. Intellectual Property</h4>
                      <p>
                        All proprietary frameworks, methodologies, research reports, and custom strategies developed during engagements remain protected under corporate copyright laws.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-white font-bold uppercase text-xs tracking-wider text-indigo-400">3. Limitation of Liability</h4>
                      <p>
                        Zaviyar provides strategic recommendations based on rigorous market analysis. Final business decisions and implementation results remain the operational responsibility of the client.
                      </p>
                    </div>
                  </>
                )}

                {activeModal === 'cookies' && (
                  <>
                    <p>
                      We use cookies to enhance your browsing experience, analyze web traffic, and optimize site performance. You can customize your cookie preferences below:
                    </p>

                    <div className="space-y-4 pt-2">
                      {/* Essential Cookies */}
                      <div className="p-4 bg-slate-800/60 border border-white/10 rounded-2xl flex items-center justify-between gap-4">
                        <div>
                          <h5 className="text-white font-bold text-sm">Essential Cookies</h5>
                          <p className="text-xs text-slate-400 mt-0.5">Required for core site security and navigation.</p>
                        </div>
                        <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full text-xs font-black uppercase">
                          Always Active
                        </span>
                      </div>

                      {/* Analytics Cookies */}
                      <div className="p-4 bg-slate-800/60 border border-white/10 rounded-2xl flex items-center justify-between gap-4">
                        <div>
                          <h5 className="text-white font-bold text-sm">Analytics & Insights</h5>
                          <p className="text-xs text-slate-400 mt-0.5">Helps us measure site traffic and improve performance.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCookiePreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${cookiePreferences.analytics ? 'bg-indigo-600' : 'bg-slate-700'}`}
                        >
                          <div className={`w-5 h-5 rounded-full bg-white transition-transform transform absolute top-0.5 ${cookiePreferences.analytics ? 'translate-x-6' : 'translate-x-0.5'}`} />
                        </button>
                      </div>

                      {/* Marketing Cookies */}
                      <div className="p-4 bg-slate-800/60 border border-white/10 rounded-2xl flex items-center justify-between gap-4">
                        <div>
                          <h5 className="text-white font-bold text-sm">Marketing & Personalization</h5>
                          <p className="text-xs text-slate-400 mt-0.5">Tailors relevant strategic insights and announcements.</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCookiePreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                          className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${cookiePreferences.marketing ? 'bg-indigo-600' : 'bg-slate-700'}`}
                        >
                          <div className={`w-5 h-5 rounded-full bg-white transition-transform transform absolute top-0.5 ${cookiePreferences.marketing ? 'translate-x-6' : 'translate-x-0.5'}`} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-8 py-5 border-t border-white/10 bg-slate-900/90 backdrop-blur-md flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400 font-medium">
                  {cookiesSaved && activeModal === 'cookies' && (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <Check size={14} /> Preferences Saved!
                    </span>
                  )}
                </span>
                <div className="flex items-center gap-3">
                  {activeModal === 'cookies' && (
                    <button
                      onClick={() => {
                        setCookiesSaved(true);
                        setTimeout(() => {
                          setCookiesSaved(false);
                          setActiveModal(null);
                        }, 1000);
                      }}
                      className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg cursor-pointer"
                    >
                      Save Preferences
                    </button>
                  )}
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-white/10 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
