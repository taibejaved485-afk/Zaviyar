import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Target, Eye, Zap, Award, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

function TypewriterText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [displayedText, setDisplayedText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isInView) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          setIsDone(true);
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [isInView, text]);

  return (
    <p ref={ref} className="text-xl text-slate-600 leading-relaxed font-medium min-h-[5rem]">
      {displayedText}
      {!isDone && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          className="inline-block w-0.5 h-5 bg-indigo-600 ml-1 translate-y-0.5 align-middle"
        />
      )}
    </p>
  );
}

const stats = [
  { label: 'Successful Projects', value: '500+', icon: CheckCircle2 },
  { label: 'Client Retention', value: '98%', icon: Users },
  { label: 'Growth Facilitated', value: '$1.2B', icon: TrendingUp },
  { label: 'Expert Consultants', value: '45+', icon: Award },
];

export default function About() {
  return (
    <section id="about" className="py-8 sm:py-10 bg-white overflow-hidden transition-colors duration-300 relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-slate-50 rounded-full opacity-20" />
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-600 font-black tracking-[0.3em] uppercase text-xs mb-6 block">Our Strategic Approach</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
              Unlocking <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Untapped Potential</span> in Every Business
            </h2>
            <TypewriterText text="At Zaviyar Consultant Agency, we believe that every business has potential waiting to be unlocked. We work alongside business owners and teams to identify opportunities, solve operational challenges, and build strategies that stand the test of time." />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-4">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-between space-y-6 h-full"
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

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="relative p-6 bg-[#FCFAF8] rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Rotating Glowing Dot Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                  <div className="absolute inset-[2px] bg-[#FCFAF8] group-hover:bg-white rounded-[0.9rem] transition-colors duration-300" />
                </div>

                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm mb-3">
                    <Target size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">Our Mission</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    To empower businesses with tools and strategies needed to thrive in an ever-changing marketplace.
                  </p>
                </div>
              </div>

              <div className="relative p-6 bg-[#FCFAF8] rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden">
                {/* Rotating Glowing Dot Border on Hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none p-[2px] z-0 overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#a855f7_352deg,#ffffff_360deg)] blur-md opacity-90" />
                  <div className="absolute top-1/2 left-1/2 w-[300%] h-[300%] animate-spin-dot bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_300deg,#6366f1_335deg,#38bdf8_352deg,#ffffff_360deg)]" />
                  <div className="absolute inset-[2px] bg-[#FCFAF8] group-hover:bg-white rounded-[0.9rem] transition-colors duration-300" />
                </div>

                <div className="relative z-10">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm mb-3">
                    <Eye size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">Our Vision</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
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
            className="relative h-full min-h-[380px] flex"
          >
            <div className="relative w-full h-full min-h-full rounded-3xl overflow-hidden shadow-xl border-4 border-white flex flex-col justify-end">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/about-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
              <div className="relative z-10 p-5 sm:p-6 grid grid-cols-2 gap-3">
                {stats.slice(0, 2).map((stat, idx) => (
                  <div key={idx} className="backdrop-blur-md bg-white/20 border border-white/20 p-4 rounded-2xl text-white">
                    <stat.icon size={18} className="mb-1.5 text-indigo-300" />
                    <div className="text-xl font-bold"><AnimatedCounter value={stat.value} /></div>
                    <div className="text-[10px] uppercase tracking-wider font-bold opacity-80">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
