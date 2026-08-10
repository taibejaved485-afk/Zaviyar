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
    <section className="py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 tabular-nums">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
