import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-slate-900 transition-colors duration-300 min-h-[80vh] flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 opacity-100"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Subtle Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/70" />
      </div>

      <div className="w-full px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
              Strategic <span className="text-indigo-400">Solutions.</span><br />
              Sustainable <span className="text-indigo-400">Growth.</span>
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium"
            >
              {"Zaviyar Consultant Agency partners with businesses to turn complex challenges into clear, actionable strategies that drive measurable results.".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.05,
                    delay: index * 0.02,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/20 hover:shadow-indigo-500/40 group"
              >
                Book a Consultation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
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
