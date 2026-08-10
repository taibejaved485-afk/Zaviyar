import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, HeartHandshake, Zap, Sparkles } from 'lucide-react';

const commitments = [
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Strategic Partnership",
    description: "We act as an extension of your team, deeply aligning with your business goals and culture to ensure seamless integration and mutual success."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Unwavering Integrity",
    description: "Transparency and honesty are at the core of every consultation. We provide clear, unbiased advice even when it means challenging the status quo."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Sustainable Results",
    description: "We don't just solve immediate problems; we build scalable frameworks and transfer knowledge to ensure your growth is continuous and long-lasting."
  }
];

export default function Commitment() {
  return (
    <section className="py-12 sm:py-16 bg-white transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute top-1/4 -right-64 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-64 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100"
          >
            <Zap size={14} className="fill-current" />
            <span>Our Promise</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight"
          >
            A Commitment to <span className="text-indigo-600">Your Success</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We measure our success by the success of our clients. From the first consultation to the final implementation, we remain hands-on, transparent, and committed to delivering results that matter. Our goal is not just to advise, but to become a trusted extension of your team, invested in your growth every step of the way.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {commitments.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              whileHover={{ y: -12 }}
              className="p-10 bg-[#FCFAF8] rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 relative group transition-all duration-500 overflow-hidden"
            >
              {/* Number Background - Enhanced visibility */}
              <div className="absolute right-4 top-4 text-8xl font-black text-slate-200 select-none opacity-80 group-hover:text-indigo-500/20 transition-colors duration-500 leading-none">
                0{idx + 1}
              </div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
              
              <div className="absolute bottom-8 right-8 text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <CheckCircle2 size={32} />
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1.5 bg-indigo-600 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
