import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
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
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Client Success Stories</h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <Quote className="text-indigo-200 dark:text-indigo-900/30 w-16 h-16 fill-indigo-50 dark:fill-indigo-900/10" />
              </div>
              <p className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 italic leading-relaxed mb-10">
                "{testimonials[current].quote}"
              </p>
              <div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{testimonials[current].author}</h4>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-100 dark:border-slate-700 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-slate-800 rounded-full shadow-lg text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors border border-slate-100 dark:border-slate-700 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === idx ? 'w-8 bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
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
