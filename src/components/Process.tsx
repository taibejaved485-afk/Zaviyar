import React from 'react';
import { motion } from 'motion/react';
import { Search, Lightbulb, Cog, LineChart } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & Audit',
    description: 'We dive deep into your current operations, market position, and challenges to identify hidden opportunities.',
    icon: <Search size={32} />,
    color: 'bg-blue-500'
  },
  {
    title: 'Strategic Blueprint',
    description: 'A custom-designed roadmap tailored to your specific goals, resources, and competitive landscape.',
    icon: <Lightbulb size={32} />,
    color: 'bg-indigo-500'
  },
  {
    title: 'Seamless Execution',
    description: 'Our consultants work alongside your team to implement strategies with precision and accountability.',
    icon: <Cog size={32} />,
    color: 'bg-purple-500'
  },
  {
    title: 'Scale & Optimize',
    description: 'Continuous monitoring and refinement to ensure sustainable growth and long-term success.',
    icon: <LineChart size={32} />,
    color: 'bg-pink-500'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Proven Process</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A methodical approach to solving complex business problems and driving measurable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative z-10 bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none group hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`w-16 h-16 ${step.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                {step.icon}
              </div>
              <div className="absolute top-8 right-8 text-4xl font-black text-slate-100 dark:text-slate-800 pointer-events-none group-hover:text-slate-200 dark:group-hover:text-slate-700 transition-colors">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
