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
              className={`relative group p-6 sm:p-7 rounded-2xl border transition-all duration-500 flex flex-col justify-between h-full overflow-hidden ${
                service.featured 
                ? 'bg-[#FCFAF8] border-indigo-100 shadow-xl shadow-indigo-500/5' 
                : 'bg-slate-50/50 border-slate-100 hover:bg-white shadow-sm hover:shadow-xl'
              }`}
            >
              {/* Rotating Glowing Dot Border on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                <div className="absolute inset-[2px] bg-white rounded-[0.9rem] transition-colors duration-300" />
              </div>

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-105 shadow-md shadow-indigo-500/20">
                      <service.icon size={22} />
                    </div>
                    <ArrowRight size={18} className="text-slate-400 group-hover:text-indigo-600 transition-all -rotate-45 group-hover:rotate-0" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-normal mb-5">
                    {service.description}
                  </p>
                </div>
                
                <a 
                  href="#contact"
                  className="pt-4 border-t border-slate-100 flex items-center gap-2 group/btn"
                >
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">Learn More</span>
                </a>
              </div>
            </motion.div>
          ))}

          
          {/* Custom Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 mt-6 p-1 rounded-2xl sm:rounded-3xl bg-indigo-600 shadow-xl shadow-indigo-500/15"
          >
            <div className="bg-white rounded-[1.35rem] p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900 tracking-tight">Need a custom strategic blueprint?</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                  Our specialists work alongside your team to build resilient, high-growth organizations. Let's discuss your specific goals.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 shrink-0">
                <a href="#contact" className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-indigo-500/20 text-center">
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
