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
  ShieldCheck,
  Sparkles,
  Calendar,
  FileText,
  CheckCircle2
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 perspective-1000">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8, 
                scale: 1.015,
                transition: { type: "spring", stiffness: 400, damping: 25 } 
              }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`relative group p-6 sm:p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full overflow-hidden transform-gpu ${
                service.featured 
                ? 'bg-[#FCFAF8] border-indigo-200 shadow-lg shadow-indigo-500/10 hover:shadow-[0_20px_40px_rgba(99,102,241,0.18)] hover:border-indigo-400' 
                : 'bg-slate-50/50 border-slate-200/80 hover:bg-white shadow-xs hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] hover:border-indigo-300'
              }`}
            >
              {/* Rotating Glowing Dot Border on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                <div className="absolute inset-[2px] bg-white rounded-[0.9rem] transition-colors duration-300" />
              </div>

              {/* Subtle top light gradient glow on hover */}
              <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40">
                      <service.icon size={22} />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-indigo-50 flex items-center justify-center transition-colors duration-300">
                      <ArrowRight size={16} className="text-slate-400 group-hover:text-indigo-600 transition-all duration-300 -rotate-45 group-hover:rotate-0 group-hover:scale-110" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm font-normal mb-5">
                    {service.description}
                  </p>
                </div>
                
                <a 
                  href="#contact"
                  className="pt-4 border-t border-slate-100 group-hover:border-indigo-100/60 flex items-center gap-2 group/btn transition-colors duration-300"
                >
                  <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">Explore Service</span>
                  <ArrowRight size={13} className="text-indigo-600 opacity-70 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}

          
          {/* Executive Strategic Blueprint Banner */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 mt-6 relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl px-6 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-6 text-white group"
          >
            {/* Background Ambient Glows & Grid Pattern */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-indigo-600/40 transition-all duration-700" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none -mb-20 group-hover:bg-purple-600/30 transition-all duration-700" />
            
            {/* Subtle grid line background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-8">
              <div className="flex-1 text-center lg:text-left">
                {/* Pill Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 rounded-full text-xs font-bold uppercase tracking-widest mb-2.5 backdrop-blur-md">
                  <Sparkles size={13} className="text-indigo-400 animate-pulse" />
                  <span>Custom Strategic Blueprint</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-3xl font-extrabold mb-2.5 text-white tracking-tight leading-tight">
                  Ready to Architect Your <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-200 bg-clip-text text-transparent">Next Growth Milestone?</span>
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal mb-3.5">
                  Our senior consultants work directly alongside your executive team to audit operational gaps, optimize resource allocation, and build a high-impact growth roadmap tailored to your industry.
                </p>

                {/* Feature Bullet Perks */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs sm:text-sm font-medium text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-indigo-400 shrink-0" />
                    <span>Tailored Strategy Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-indigo-400 shrink-0" />
                    <span>1-on-1 Senior Executive Call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-indigo-400 shrink-0" />
                    <span>100% Confidential Audit</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons & Badge */}
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center justify-center gap-3 shrink-0 w-full sm:w-auto">
                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
                >
                  <Calendar size={17} />
                  <span>Book Consultation</span>
                  <ArrowRight size={15} />
                </a>

                <a 
                  href="#contact" 
                  className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 text-center"
                >
                  <FileText size={17} />
                  <span>View Full Brochure</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

