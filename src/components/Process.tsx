import React from 'react';
import { motion } from 'motion/react';
import { Search, Lightbulb, Cog, LineChart, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Discovery & Audit',
    description: 'We dive deep into your current operations, market position, and challenges to identify hidden opportunities.',
    icon: Search,
    color: 'from-blue-600 to-blue-400',
    details: ['Data Collection', 'Market Research', 'GAP Analysis']
  },
  {
    title: 'Strategic Blueprint',
    description: 'A custom-designed roadmap tailored to your specific goals, resources, and competitive landscape.',
    icon: Lightbulb,
    color: 'from-indigo-600 to-indigo-400',
    details: ['Resource Mapping', 'Goal Setting', 'Risk Assessment']
  },
  {
    title: 'Seamless Execution',
    description: 'Our consultants work alongside your team to implement strategies with precision and accountability.',
    icon: Cog,
    color: 'from-purple-600 to-purple-400',
    details: ['Agile Implementation', 'Team Training', 'Active Support']
  },
  {
    title: 'Scale & Optimize',
    description: 'Continuous monitoring and refinement to ensure sustainable growth and long-term success.',
    icon: LineChart,
    color: 'from-pink-600 to-pink-400',
    details: ['Performance Tracking', 'Iterative Updates', 'Global Scaling']
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#FCFAF8] transition-colors duration-300 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100"
          >
            <Lightbulb size={14} className="fill-current" />
            <span>Our Methodology</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight"
          >
            How We Deliver <span className="text-indigo-600">Results</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A methodical approach to solving complex business problems and driving measurable growth through precise strategic execution.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="relative z-10 group"
            >
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-indigo-500/10 transition-all duration-500 flex flex-col h-full overflow-hidden group-hover:-translate-y-4">
                {/* Step Number Background - Made more visible */}
                <div className="absolute right-4 top-4 text-8xl font-black text-slate-200/80 select-none pointer-events-none group-hover:text-indigo-500/20 transition-colors duration-500 leading-none">
                  0{idx + 1}
                </div>

                <div className="w-20 h-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mb-10 shadow-xl shadow-indigo-500/20 group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500 shrink-0 relative z-10">
                  <step.icon size={36} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 flex-grow">
                    {step.description}
                  </p>

                  <div className="space-y-4">
                    {step.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest group/item transition-colors duration-300 hover:text-indigo-600">
                        <div className="w-6 h-6 rounded-lg bg-slate-50 flex items-center justify-center shadow-sm group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all duration-300">
                          <ChevronRight size={14} />
                        </div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
