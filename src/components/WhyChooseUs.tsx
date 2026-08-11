import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Users, Award, ArrowRight } from 'lucide-react';
import { Value } from '../types';

const values: Value[] = [
  {
    title: 'Integrity',
    description: 'Integrity guides every recommendation we make. We believe in transparency, honest communication, and always acting in the best interest of our clients.'
  },
  {
    title: 'Excellence',
    description: 'Excellence drives our work. We hold ourselves to the highest standards, continuously refining our methods to deliver the best possible outcomes.'
  },
  {
    title: 'Partnership',
    description: 'Partnership defines our relationships. We see ourselves not as outside consultants, but as invested partners in your success.'
  },
  {
    title: 'Innovation',
    description: 'Innovation shapes our thinking. We stay ahead of industry trends and bring fresh, forward-looking perspectives to every engagement.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-8 sm:py-10 bg-[#FCFAF8] overflow-hidden transition-colors duration-300 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-100/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header & Core Values Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-3 border border-indigo-100">
              <ShieldCheck size={14} className="fill-current" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Experience Meets <span className="text-indigo-600">Insight</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-3 font-normal">
              Businesses today face constant change. Navigating this landscape requires more than good intentions; it requires experience, insight, and a trusted partner who understands the bigger picture.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We take the time to understand your business from the inside out, then design strategies tailored specifically to your needs, resources, and ambitions.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-5 sm:p-6 bg-white rounded-2xl border border-slate-200/80 hover:shadow-xl transition-all duration-500 group overflow-hidden"
              >
                {/* Rotating Glowing Dot Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                  <div className="absolute inset-[2px] bg-white rounded-[0.9rem] transition-colors duration-300" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-indigo-600 transition-colors tracking-tight">{v.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team & Trust Cards */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-6 sm:p-7 bg-slate-900 rounded-2xl text-white relative overflow-hidden flex flex-col justify-between"
          >
            {/* Rotating Glowing Dot Border on Hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#818cf8_335deg,#c084fc_352deg,#ffffff_360deg)] blur-md opacity-90" />
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#818cf8_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
              <div className="absolute inset-[2px] bg-slate-900 rounded-[0.95rem]" />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-600/20">
                <Users size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 tracking-tight text-indigo-400">Our Team</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                Behind Zaviyar is a team of experienced professionals with diverse backgrounds in strategic planning and organizational development. Each member brings a wealth of knowledge and a passion for helping businesses succeed.
              </p>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/80 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Rotating Glowing Dot Border on Hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
              <div className="absolute inset-[2px] bg-white rounded-[0.95rem]" />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center mb-4 shadow-xs text-indigo-600">
                <Award size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight text-indigo-600">Why Trust Us</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                We deliver on our promises. We take the time to understand your challenges, communicate clearly, and remain accountable for the results we help create. This dedication builds long-lasting partnerships.
              </p>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-indigo-600 text-white rounded-xl font-extrabold uppercase tracking-widest text-xs hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-600/25 hover:-translate-y-0.5 active:scale-95"
          >
            <span>Start Your Transformation</span>
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
