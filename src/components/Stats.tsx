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
    <section className="py-16 sm:py-24 bg-[#FCFAF8] relative overflow-hidden transition-colors duration-300 border-y border-slate-100">
      {/* Background visual accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[120px] -ml-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -mr-64 -mb-64 pointer-events-none" />
      
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative p-8 sm:p-10 bg-white rounded-[2.5rem] border border-slate-100/80 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 group overflow-hidden flex flex-col items-center justify-center text-center group-hover:-translate-y-2"
            >
              {/* Rotating Glowing Dot Border on Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                <div className="absolute inset-[2px] bg-white rounded-[2.35rem] transition-colors duration-300" />
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 bg-indigo-50 text-indigo-600 rounded-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-indigo-600/30 group-hover:scale-110">
                  {stat.icon}
                </div>
                
                <div className="text-4xl sm:text-5xl lg:text-5xl font-black text-slate-900 mb-3 tabular-nums tracking-tight group-hover:text-indigo-600 transition-colors">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-[0.15em] leading-relaxed">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
