import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap, Award, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
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
    <section id="about" className="py-24 sm:py-32 bg-white overflow-hidden transition-colors duration-300 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-50 rounded-full opacity-20" />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Strategic Approach</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              Unlocking <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Untapped Potential</span> in Every Business
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              At Zaviyar Consultant Agency, we believe that every business has potential waiting to be unlocked. We work alongside business owners and teams to identify opportunities, solve operational challenges, and build strategies that stand the test of time.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch mb-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase border border-indigo-100">
                <Zap size={14} className="fill-current" />
                <span>Our Story</span>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Zaviyar Consultant Agency was founded on a simple belief: that every business deserves access to expert guidance that is honest, practical, and results-oriented. What began as a small team has grown into a trusted consulting agency known for its integrity and commitment to client success.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                Our approach combines deep industry expertise with a genuine understanding of your unique goals, ensuring every recommendation is practical and built for long-term success.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative p-8 bg-[#FCFAF8] rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Rotating Glowing Dot Border on Hover */}
                <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                  <div className="absolute inset-[2px] bg-[#FCFAF8] group-hover:bg-white rounded-[2.35rem] transition-colors duration-300" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    To empower businesses with tools and strategies needed to thrive in an ever-changing marketplace.
                  </p>
                </div>
              </div>

              <div className="relative p-8 bg-[#FCFAF8] rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Rotating Glowing Dot Border on Hover */}
                <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                  <div className="absolute inset-[2px] bg-[#FCFAF8] group-hover:bg-white rounded-[2.35rem] transition-colors duration-300" />
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-4">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    A future where businesses of all sizes have access to the same caliber of strategic thinking traditionally reserved for large corporations.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative h-full aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/about-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="backdrop-blur-md bg-white/20 border border-white/20 p-5 rounded-3xl text-white">
                    <stat.icon size={20} className="mb-2 text-indigo-300" />
                    <div className="text-2xl font-black">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest font-black opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100">
              <ShieldCheck size={14} className="fill-current" />
              <span>Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">Experience Meets <span className="text-indigo-600">Insight</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
              Businesses today face constant change. Navigating this landscape requires more than good intentions; it requires experience, insight, and a trusted partner who understands the bigger picture.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              We take the time to understand your business from the inside out, then design strategies tailored specifically to your needs, resources, and ambitions.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {values.map((v, idx) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative p-8 bg-[#FCFAF8] rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 group overflow-hidden"
              >
                {/* Rotating Glowing Dot Border on Hover */}
                <div className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                  <div className="absolute inset-[2px] bg-[#FCFAF8] group-hover:bg-white rounded-[2.35rem] transition-colors duration-300" />
                </div>

                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors tracking-tight">{v.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>



        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-32 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-10 lg:p-14 bg-slate-900 rounded-[4rem] text-white relative overflow-hidden flex flex-col justify-between"
          >
            {/* Rotating Glowing Dot Border on Hover */}
            <div className="absolute inset-0 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#818cf8_335deg,#c084fc_352deg,#ffffff_360deg)] blur-md opacity-90" />
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#818cf8_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
              <div className="absolute inset-[2px] bg-slate-900 rounded-[3.85rem]" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-10 shadow-2xl shadow-indigo-600/20">
                <Users size={32} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black mb-6 tracking-tight uppercase tracking-widest text-indigo-400">Our Team</h3>
              <p className="text-slate-400 text-lg lg:text-xl leading-relaxed font-medium">
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
            className="group p-10 lg:p-14 bg-[#FCFAF8] rounded-[4rem] border border-slate-100 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Rotating Glowing Dot Border on Hover */}
            <div className="absolute inset-0 rounded-[4rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
              <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
              <div className="absolute inset-[2px] bg-[#FCFAF8] rounded-[3.85rem]" />
            </div>

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white border border-slate-100 rounded-2xl flex items-center justify-center mb-10 shadow-sm text-indigo-600">
                <Award size={32} />
              </div>
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight uppercase tracking-widest text-indigo-600">Why Trust Us</h3>
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed font-medium">
                We deliver on our promises. We take the time to understand your challenges, communicate clearly, and remain accountable for the results we help create. This dedication builds long-lasting partnerships.
              </p>
            </div>
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          </motion.div>
        </div>


        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-indigo-600 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 transition-all shadow-2xl shadow-indigo-600/30 hover:-translate-y-1 active:scale-95"
          >
            Start Your Transformation <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
