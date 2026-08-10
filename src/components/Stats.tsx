import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { Users, Briefcase, Award, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Successful Projects', value: 500, suffix: '+', icon: <Briefcase size={24} /> },
  { label: 'Satisfied Clients', value: 250, suffix: '+', icon: <Users size={24} /> },
  { label: 'Years of Experience', value: 15, suffix: '+', icon: <Award size={24} /> },
  { label: 'Average Growth', value: 45, suffix: '%', icon: <TrendingUp size={24} /> },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-[#FCFAF8] relative overflow-hidden transition-colors duration-300 border-y border-slate-100">
      {/* Background visual accents */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-200 to-transparent" />
      
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="text-center group relative px-4"
            >
              <div className="flex justify-center mb-6 relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-indigo-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-4 sm:p-5 bg-white rounded-2xl border border-slate-200 text-indigo-600 group-hover:text-white group-hover:bg-indigo-600 group-hover:border-indigo-500 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/20">
                  {stat.icon}
                </div>
              </div>
              
              <div className="relative">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tabular-nums tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm font-bold text-slate-500 uppercase tracking-[0.2em] leading-relaxed">
                  {stat.label}
                </div>
              </div>

              {/* Vertical divider for desktop */}
              {idx < stats.length - 1 && (
                <div className="hidden lg:block absolute right-[-1px] top-1/2 -translate-y-1/2 w-px h-16 bg-slate-200" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
