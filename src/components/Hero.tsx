import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50 dark:bg-indigo-900/10 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-60" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              Strategic Solutions. Sustainable Growth.
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-slate-900 dark:text-white leading-[1.05] mb-8 tracking-tight">
              Empowering Businesses to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Unlock Potential</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Zaviyar Consultant Agency partners with businesses to turn complex challenges into clear, actionable strategies that drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 group"
              >
                Book a Consultation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
