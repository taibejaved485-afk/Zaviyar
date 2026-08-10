import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Settings, 
  Building2, 
  BarChart3, 
  RefreshCw, 
  Rocket 
} from 'lucide-react';

const services = [
  {
    icon: <TrendingUp size={32} />,
    title: 'Business Strategy',
    description: 'Every successful business begins with a clear strategy. We work closely with leadership teams to define goals, assess market opportunities, and develop actionable roadmaps.'
  },
  {
    icon: <Users size={32} />,
    title: 'Management Consulting',
    description: 'Strong management is the backbone of any organization. We focus on improving leadership effectiveness and building structures that support accountability.'
  },
  {
    icon: <Settings size={32} />,
    title: 'Operations Improvement',
    description: 'We conduct thorough assessments to identify bottlenecks. From workflow redesign to resource allocation, our recommendations are practical and efficient.'
  },
  {
    icon: <Building2 size={32} />,
    title: 'Organizational Development',
    description: 'As businesses grow, internal structures must evolve. We assist in designing effective structures and improving internal communication.'
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Financial Analysis',
    description: 'Sound decisions require reliable data. We provide in-depth financial analysis to help you understand where your business stands and where opportunities lie.'
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Change Management',
    description: 'Change is inevitable, but not disruptive. We help ensure smooth transitions with minimal resistance and maximum buy-in from your team.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Startup Advisory',
    description: 'Early decisions shape future success. We offer dedicated advisory for startups, from business planning to operational setup.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 text-white"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 dark:text-slate-500 max-w-2xl mx-auto"
          >
            Comprehensive consulting solutions designed to address the challenges organizations face at every stage of growth.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-slate-800/50 dark:bg-slate-900/50 rounded-2xl border border-slate-700/50 dark:border-slate-800 hover:border-indigo-500/50 transition-all hover:-translate-y-1 group"
            >
              <div className="text-indigo-400 dark:text-indigo-500 mb-6 group-hover:text-indigo-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-slate-400 dark:text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
          
          {/* Approach Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 bg-indigo-600 dark:bg-indigo-700 rounded-3xl flex flex-col md:flex-row items-center gap-8 shadow-2xl shadow-indigo-600/20 dark:shadow-none"
          >
            <div className="md:w-1/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Our Approach</h3>
              <p className="text-indigo-100 text-sm">Beyond recommendations—we stay engaged until results are achieved.</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-indigo-50 leading-relaxed text-sm">
                Every engagement begins with a thorough understanding of your business and objectives. We develop customized strategies, work collaboratively throughout implementation, and provide ongoing support to ensure lasting impact.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
