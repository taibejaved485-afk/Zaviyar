import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote, Star, TrendingUp, ShieldCheck, Award, Building2, Pause, Play, Grid, LayoutList, ArrowUpRight, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';
import { AnimatedCounter } from './AnimatedCounter';

interface ExtendedTestimonial extends Testimonial {
  highlights?: string[];
  challenge?: string;
  solution?: string;
}

const testimonials: ExtendedTestimonial[] = [
  {
    quote: "Zaviyar Agency transformed our operational workflow completely. Their strategic insight and digital overhaul helped us scale 40% faster than our initial projections with zero downtime.",
    author: "Arsalan Khan",
    role: "Chief Executive Officer",
    company: "TechNova Solutions",
    industry: "Enterprise Software",
    rating: 5,
    metric: "+40%",
    metricLabel: "Operational Growth",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    challenge: "Fragmented legacy workflows slowing down international scaling.",
    solution: "Unified digital strategy & automated cloud architecture.",
    highlights: ["40% Faster Scale", "Zero Downtime", "Cloud Migration"]
  },
  {
    quote: "The team at Zaviyar doesn't just provide advice; they become true growth partners. Their management consulting was instrumental in securing our recent organizational restructuring success.",
    author: "Sarah Ahmed",
    role: "Operations Director",
    company: "GreenSphere Logistics",
    industry: "Supply Chain & Logistics",
    rating: 5,
    metric: "35%",
    metricLabel: "Cost Reduction",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    challenge: "High operational overheads in multi-node distribution networks.",
    solution: "Data-driven route optimization and strategic restructuring.",
    highlights: ["35% Cost Cut", "Optimized Logistics", "Team Alignment"]
  },
  {
    quote: "Expert guidance from the very first meeting. Their startup advisory and pitch architecture gave us the rock-solid foundation we needed to secure our $4.5M Series A funding round.",
    author: "Bilal Sheikh",
    role: "Founder & Managing Director",
    company: "BlueOcean FinTech",
    industry: "Financial Technology",
    rating: 5,
    metric: "$4.5M",
    metricLabel: "Series A Secured",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    challenge: "Refining complex fintech value proposition for institutional investors.",
    solution: "Comprehensive pitch deck architecture and growth modeling.",
    highlights: ["$4.5M Capital", "Institutional Grade", "Rapid Approval"]
  },
  {
    quote: "Working with Zaviyar helped us digitize our healthcare portal seamlessly. Their team handled compliance, security, and user experience with world-class precision.",
    author: "Dr. Mahnoor Malik",
    role: "Head of Digital Health",
    company: "NexGen Health Systems",
    industry: "Healthcare IT",
    rating: 5,
    metric: "2.5x",
    metricLabel: "User Engagement",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80",
    challenge: "Complex HIPAA compliance standards coupled with rigid legacy UI.",
    solution: "Patient-first UX redesign with bank-level encryption standard.",
    highlights: ["2.5x Engagement", "100% HIPAA Compliant", "Modern UX"]
  }
];

const AGENCY_STATS = [
  { value: "98%", label: "Client Retention Rate", icon: Award, sub: "Long-term partnerships" },
  { value: "$50M+", label: "Capital Raised / Saved", icon: TrendingUp, sub: "For client portfolio" },
  { value: "150+", label: "Projects Completed", icon: Building2, sub: "Across 12 industries" },
  { value: "4.9 / 5", label: "Clutch Review Score", icon: Star, sub: "Verified reviews" }
];

const INDUSTRIES = ["All Stories", "Enterprise Software", "Supply Chain & Logistics", "Financial Technology", "Healthcare IT"];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');
  const [selectedIndustry, setSelectedIndustry] = useState("All Stories");

  const filteredTestimonials = testimonials.filter(t => 
    selectedIndustry === "All Stories" ? true : t.industry === selectedIndustry
  );

  const next = () => setCurrent((prev) => (prev + 1) % filteredTestimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + filteredTestimonials.length + filteredTestimonials.length) % filteredTestimonials.length);

  useEffect(() => {
    if (!isPlaying || viewMode === 'grid') return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [isPlaying, viewMode, selectedIndustry, current]);

  // Reset index if filtered list changes
  useEffect(() => {
    setCurrent(0);
  }, [selectedIndustry]);

  const activeStory = filteredTestimonials[current] || testimonials[0];

  return (
    <section className="py-8 sm:py-10 bg-[#FCFAF8] transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[140px] -mr-48 -mt-48 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[140px] -ml-48 -mb-48 opacity-60 pointer-events-none" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center w-full max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[11px] font-bold tracking-[0.15em] uppercase mb-2 border border-indigo-100/80 shadow-xs"
          >
            <MessageSquareQuote size={13} className="fill-current" />
            <span>Verified Client Success</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight"
          >
            Real Results from <span className="text-indigo-600">Real Partners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto"
          >
            Explore how Zaviyar Agency helps enterprise founders, operation directors, and innovators achieve breakthrough milestones.
          </motion.p>
        </div>

        {/* View Mode & Filter Controls Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 bg-white p-2 sm:p-2.5 rounded-2xl border border-slate-200/80 shadow-xs">
          {/* Industry Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {INDUSTRIES.map((ind) => {
              const isSelected = selectedIndustry === ind;
              return (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap border ${
                    isSelected
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200/70 hover:border-indigo-300 hover:text-indigo-600'
                  }`}
                >
                  {ind}
                </button>
              );
            })}
          </div>

          {/* View Mode Toggle Button Group */}
          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-xl border border-slate-200/60 ml-auto">
            <button
              onClick={() => setViewMode('spotlight')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'spotlight'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Spotlight View"
            >
              <LayoutList size={13} />
              <span className="hidden sm:inline">Spotlight</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-indigo-600 shadow-xs'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
              title="Grid View"
            >
              <Grid size={13} />
              <span className="hidden sm:inline">Grid All</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Mode */}
        {viewMode === 'spotlight' ? (
          /* Spotlight View (Hero Featured Card) */
          <div className="relative w-full">
            <div className="bg-white rounded-2xl border border-slate-200/80 shadow-lg shadow-slate-200/50 p-5 sm:p-7 md:p-8 relative overflow-hidden w-full">
              {/* Top gradient accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />
              
              {/* Big Quote Background Watermark */}
              <Quote className="absolute top-3 right-3 sm:top-5 sm:right-5 w-20 h-20 sm:w-32 sm:h-32 text-indigo-50 opacity-40 pointer-events-none" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStory.company + current}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative z-10"
                >
                  {/* Rating Stars & Impact Metric Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-0.5 text-amber-400">
                        {[...Array(activeStory.rating || 5)].map((_, i) => (
                          <Star key={i} size={15} className="fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
                        {activeStory.industry}
                      </span>
                    </div>

                    {activeStory.metric && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 rounded-lg shadow-2xs">
                        <TrendingUp size={14} className="text-emerald-600" />
                        <span className="text-xs font-extrabold text-emerald-800">
                          <AnimatedCounter value={activeStory.metric} /> {activeStory.metricLabel}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Main Quote Content */}
                  <blockquote className="text-base sm:text-lg md:text-xl text-slate-900 font-semibold leading-relaxed mb-4 italic tracking-tight">
                    "{activeStory.quote}"
                  </blockquote>

                  {/* Case Highlights Row */}
                  {activeStory.highlights && (
                    <div className="flex flex-wrap items-center gap-2 mb-4 p-2 bg-slate-50/80 rounded-lg border border-slate-200/60">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mr-1">Impact Highlights:</span>
                      {activeStory.highlights.map((item, idx) => (
                        <span key={idx} className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 bg-white text-slate-700 rounded border border-slate-200 shadow-2xs">
                          <CheckCircle size={11} className="text-indigo-600" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Author Info & Verified Partner Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img 
                          src={activeStory.avatarUrl} 
                          alt={activeStory.author}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover ring-2 ring-indigo-600/30 shadow-sm"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-indigo-600 text-white p-0.5 rounded-full border border-white shadow-2xs">
                          <ShieldCheck size={10} />
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight">
                          {activeStory.author}
                        </h4>
                        <p className="text-xs text-indigo-600 font-semibold">
                          {activeStory.role} <span className="text-slate-400 font-normal">at</span> <span className="text-slate-900 font-bold">{activeStory.company}</span>
                        </p>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg">
                      <Building2 size={14} />
                      <span>{activeStory.company}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls Bar */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors px-2.5 py-1 rounded-lg hover:bg-slate-100"
                >
                  {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                  <span>{isPlaying ? "Auto-play On" : "Auto-play Paused"}</span>
                </button>

                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {filteredTestimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrent(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        current === idx 
                          ? 'w-6 h-2 bg-indigo-600' 
                          : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Go to story ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prev}
                    className="p-1.5 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-lg text-slate-600 transition-all active:scale-95 border border-slate-200/60 shadow-2xs"
                    aria-label="Previous story"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="p-1.5 bg-slate-100 hover:bg-indigo-600 hover:text-white rounded-lg text-slate-600 transition-all active:scale-95 border border-slate-200/60 shadow-2xs"
                    aria-label="Next story"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Grid View Showcase (All Cards Responsive Grid) */
          <div className="grid md:grid-cols-2 gap-4 w-full">
            {filteredTestimonials.map((item, idx) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Top card bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-indigo-50 text-indigo-700 rounded">
                      {item.industry}
                    </span>
                    {item.metric && (
                      <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 flex items-center gap-1">
                        <TrendingUp size={11} />
                        <AnimatedCounter value={item.metric} />
                      </span>
                    )}
                  </div>

                  <blockquote className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed mb-4 italic">
                    "{item.quote}"
                  </blockquote>

                  {item.highlights && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Author footer */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-slate-100">
                  <img 
                    src={item.avatarUrl} 
                    alt={item.author} 
                    className="w-8 h-8 rounded-full object-cover ring-1 ring-indigo-500/20"
                  />
                  <div>
                    <h5 className="text-xs font-bold text-slate-900 leading-tight">{item.author}</h5>
                    <p className="text-[11px] text-indigo-600 font-medium">{item.role} · {item.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Agency Impact Stats Banner - Full Width */}
        <div className="mt-6 w-full grid grid-cols-2 sm:grid-cols-4 gap-3">
          {AGENCY_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200/80 shadow-2xs text-center flex flex-col items-center justify-center group hover:border-indigo-300 hover:shadow-xs transition-all duration-300"
            >
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg mb-2 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                <stat.icon size={18} />
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-xs font-bold text-slate-700 mt-0.5">{stat.label}</div>
              <div className="text-[10px] text-slate-400 font-normal mt-0.5">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



