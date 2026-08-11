import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  Users, 
  Settings, 
  Building2, 
  BarChart3, 
  RefreshCw, 
  Rocket,
  ArrowRight,
  Globe,
  ShieldCheck
} from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: 'Business Strategy',
    description: 'Every successful business begins with a clear strategy. We define goals, assess market opportunities, and develop actionable roadmaps that align with your vision.',
    featured: true
  },
  {
    icon: Users,
    title: 'Management Consulting',
    description: 'Improving leadership effectiveness and building structures that support accountability, performance, and strong decision-making backbone.',
    featured: false
  },
  {
    icon: Settings,
    title: 'Operations Improvement',
    description: 'We conduct thorough assessments of existing operations to identify bottlenecks and redesign workflows for maximum resource efficiency.',
    featured: false
  },
  {
    icon: Building2,
    title: 'Organizational Development',
    description: 'Designing effective structures and building a culture that supports collaboration, helping organizations scale without losing cohesion.',
    featured: false
  },
  {
    icon: BarChart3,
    title: 'Financial Analysis',
    description: 'In-depth performance analysis to understand where your business stands, supporting smarter budgeting, forecasting, and resource planning.',
    featured: true
  },
  {
    icon: RefreshCw,
    title: 'Change Management',
    description: 'Ensuring smooth transitions with minimal resistance and maximum team buy-in during restructuring or technology adoption shifts.',
    featured: false
  },
  {
    icon: Rocket,
    title: 'Startup Advisory',
    description: 'Helping founders build on a solid foundation, from initial business planning and market positioning to operational setup from day one.',
    featured: false
  },
  {
    icon: Globe,
    title: 'Market Intelligence',
    description: 'Identifying emerging trends and competitive shifts before they impact your business, ensuring you stay ahead of the market curve.',
    featured: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-8 sm:py-12 bg-white transition-colors duration-300 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100"
            >
              <Globe size={14} className="fill-current" />
              <span>Our Services</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight"
            >
              Comprehensive Business <span className="text-indigo-600">Guidance</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 lg:max-w-md leading-relaxed font-medium"
          >
            At Zaviyar Consultant Agency, we offer a range of consulting services designed to address the challenges organizations face at every stage of growth.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative group p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] border transition-all duration-500 flex flex-col justify-between h-full overflow-hidden ${
                service.featured 
                ? 'bg-[#FCFAF8] border-indigo-100 shadow-xl shadow-indigo-500/5' 
                : 'bg-slate-50/50 border-slate-100 hover:bg-white shadow-sm hover:shadow-2xl'
              }`}
            >
              {/* Rotating Glowing Dot Border on Hover */}
              <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                <div className="absolute inset-[2px] bg-white rounded-[2.35rem] transition-colors duration-300" />
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-indigo-500/20">
                      <service.icon size={28} />
                    </div>
                    <ArrowRight size={20} className="text-slate-400 group-hover:text-indigo-600 transition-all -rotate-45 group-hover:rotate-0" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-slate-900 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium mb-8">
                    {service.description}
                  </p>
                </div>
                
                <a 
                  href="#contact"
                  className="pt-6 border-t border-slate-100 flex items-center gap-4 group/btn"
                >
                  <span className="text-sm font-black text-indigo-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">Learn More</span>
                </a>
              </div>
            </motion.div>
          ))}

          
          {/* Custom Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 mt-8 p-1 rounded-[3rem] bg-indigo-600 shadow-2xl shadow-indigo-500/20"
          >
            <div className="bg-white rounded-[2.9rem] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 text-slate-900 tracking-tight">Need a custom strategic blueprint?</h3>
                <p className="text-slate-600 text-xl leading-relaxed max-w-xl font-medium">
                  Our specialists work alongside your team to build resilient, high-growth organizations. Let's discuss your specific goals.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 shrink-0">
                <a href="#contact" className="px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black transition-all hover:-translate-y-1 shadow-xl shadow-indigo-500/25 text-center">
                  Book a Consultation
                </a>
                <a href="#contact" className="px-10 py-5 bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 rounded-2xl font-black transition-all hover:-translate-y-1 text-center">
                  View Full Brochure
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
