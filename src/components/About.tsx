import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
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

const stats = [
  { label: 'Successful Projects', value: '500+', icon: CheckCircle2 },
  { label: 'Client Retention', value: '98%', icon: Users },
  { label: 'Growth Facilitated', value: '$1.2B', icon: TrendingUp },
  { label: 'Expert Consultants', value: '45+', icon: Award },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden transition-colors duration-300 relative">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-stretch mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 w-fit border border-indigo-100">
              <Zap size={14} className="fill-current" />
              <span>Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              Driving Business <span className="text-indigo-600">Transformation</span> Since 2010
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 font-medium">
              Zaviyar Consultant Agency was founded on a simple belief: that every business deserves access to expert guidance that is honest, practical, and results-oriented. What began as a small team of dedicated professionals has grown into a trusted consulting agency known for its integrity, insight, and commitment to client success.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-8 bg-[#FCFAF8] rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-md mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Mission</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  To empower businesses with the tools, strategies, and confidence they need to thrive in an ever-changing marketplace.
                </p>
              </div>
              <div className="p-8 bg-[#FCFAF8] rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-md mb-6">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">Our Vision</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  We envision a future where businesses of all sizes have access to the same caliber of strategic thinking.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group w-full lg:h-full"
          >
            {/* Video Container matching height on desktop */}
            <div className="relative h-full aspect-square md:aspect-video lg:aspect-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-500/10 border-[8px] border-white transition-all duration-500 group-hover:shadow-indigo-500/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/about-video.mp4" type="video/mp4" />
              </video>
              
              {/* Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/20 opacity-60" />
              
              {/* Floating Glass Stats */}
              <div className="absolute inset-x-8 bottom-8 grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-3xl text-white shadow-xl">
                    <stat.icon size={24} className="mb-3 text-indigo-300" />
                    <div className="text-3xl font-black">{stat.value}</div>
                    <div className="text-xs uppercase tracking-[0.2em] font-black opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Central Play Decoration */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-2xl">
                    <Zap size={28} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50" />
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-100"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-8 text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Our Core Values</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mt-12 sm:mt-16">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 sm:p-10 bg-[#FCFAF8] rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500"
            >
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-3 sm:mb-4 tracking-tight">{value.title}</h4>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
