import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    quote: "Zaviyar Consultant Agency transformed our operational workflow. Their strategic insight helped us scale 40% faster than our initial projections.",
    author: "Arsalan Khan",
    role: "CEO",
    company: "TechNova Solutions"
  },
  {
    quote: "The team at Zaviyar doesn't just provide advice; they provide partnership. Their management consulting was instrumental in our recent restructuring success.",
    author: "Sarah Ahmed",
    role: "Operations Director",
    company: "GreenSphere Logistics"
  },
  {
    quote: "Expert guidance from the first meeting. Their startup advisory services gave us the solid foundation we needed to secure our Series A funding.",
    author: "Bilal Sheikh",
    role: "Founder",
    company: "BlueOcean FinTech"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-[#FCFAF8] transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100"
          >
            <MessageSquareQuote size={14} className="fill-current" />
            <span>Success Stories</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Client <span className="text-indigo-600">Success Stories</span>
          </motion.h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] border border-slate-100 shadow-2xl shadow-slate-200/50 relative overflow-hidden">
            {/* Massive Background Quote Icon */}
            <Quote className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 text-indigo-50 opacity-20 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10"
              >
                <div className="flex justify-center mb-8 sm:mb-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-500/20">
                    <Quote size={24} className="sm:w-8 sm:h-8" fill="currentColor" />
                  </div>
                </div>
                
                <blockquote className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-900 font-bold leading-tight mb-8 sm:mb-12 italic text-center tracking-tight px-4 sm:px-0">
                  "{testimonials[current].quote}"
                </blockquote>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-px bg-indigo-200 mb-6 sm:mb-8" />
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-slate-900 mb-2 tracking-tight">
                    {testimonials[current].author}
                  </h4>
                  <p className="text-xs sm:text-sm lg:text-base text-indigo-600 font-black uppercase tracking-widest text-center">
                    {testimonials[current].role} <br className="sm:hidden" /> — {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons inside the card */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 sm:left-4 sm:right-4 flex justify-between pointer-events-none">
              <button
                onClick={prev}
                className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl text-slate-400 hover:text-indigo-600 transition-all border border-slate-100 pointer-events-auto hover:-translate-x-1"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={next}
                className="p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl text-slate-400 hover:text-indigo-600 transition-all border border-slate-100 pointer-events-auto hover:translate-x-1"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-500 rounded-full ${
                  current === idx 
                  ? 'w-12 h-3 bg-indigo-600' 
                  : 'w-3 h-3 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
