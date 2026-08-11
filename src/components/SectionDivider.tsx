import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Hexagon, Diamond, Layers, Star, Compass, Award } from 'lucide-react';

interface SectionDividerProps {
  variant?: 'glow' | 'badge' | 'dots' | 'gradient-bar';
  icon?: 'sparkles' | 'hexagon' | 'diamond' | 'layers' | 'star' | 'compass' | 'award';
  title?: string;
  bgClass?: string;
}

export default function SectionDivider({ 
  variant = 'glow', 
  icon = 'sparkles',
  title,
  bgClass = 'bg-white'
}: SectionDividerProps) {
  const renderIcon = () => {
    switch (icon) {
      case 'hexagon': return <Hexagon size={16} className="text-indigo-600 fill-indigo-600/20" />;
      case 'diamond': return <Diamond size={16} className="text-purple-600 fill-purple-600/20" />;
      case 'layers': return <Layers size={16} className="text-blue-600" />;
      case 'star': return <Star size={16} className="text-amber-500 fill-amber-500/20" />;
      case 'compass': return <Compass size={16} className="text-indigo-600" />;
      case 'award': return <Award size={16} className="text-purple-600" />;
      default: return <Sparkles size={16} className="text-indigo-600" />;
    }
  };

  if (variant === 'gradient-bar') {
    return (
      <div className={`relative py-3 sm:py-4 flex items-center justify-center overflow-hidden ${bgClass}`}>
        <div className="w-full max-w-7xl px-4 sm:px-8 flex items-center gap-4">
          <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-indigo-400/40 to-indigo-600" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-2xl bg-indigo-50/80 border border-indigo-200/60 backdrop-blur-md shadow-sm"
          >
            {renderIcon()}
            {title && (
              <span className="text-xs font-black uppercase tracking-widest text-indigo-900">
                {title}
              </span>
            )}
          </motion.div>
          <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-indigo-400/40 to-indigo-600" />
        </div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`relative py-3 sm:py-4 flex items-center justify-center overflow-hidden ${bgClass}`}>
        <div className="w-full max-w-7xl px-4 sm:px-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-indigo-300" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-md shadow-slate-200/50"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-300 to-indigo-300" />
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`relative py-3 sm:py-4 flex items-center justify-center overflow-hidden ${bgClass}`}>
        <div className="w-full max-w-7xl px-4 sm:px-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-indigo-400/60" />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2.5 px-4 py-1.5 bg-white border border-indigo-100 shadow-xl shadow-indigo-500/10 rounded-full text-slate-700 text-xs font-black uppercase tracking-widest group hover:border-indigo-300 transition-all cursor-default"
          >
            {renderIcon()}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
              {title || 'Zaviyar Consulting'}
            </span>
          </motion.div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-slate-200 to-indigo-400/60" />
        </div>
      </div>
    );
  }

  // Default 'glow' variant: Glowing center badge with double gradient stroke
  return (
    <div className={`relative py-3 sm:py-4 flex items-center justify-center overflow-hidden ${bgClass}`}>
      <div className="w-full max-w-7xl px-4 sm:px-8 flex items-center gap-4">
        {/* Left gradient line */}
        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-indigo-500/40 to-indigo-600" />
        
        {/* Floating animated icon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="relative group p-2.5 rounded-2xl bg-white border border-indigo-100 shadow-xl shadow-indigo-500/15 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-md group-hover:blur-lg transition-all" />
          <div className="relative z-10 flex items-center justify-center gap-2">
            {renderIcon()}
            {title && (
              <span className="text-xs font-black tracking-widest text-slate-800 uppercase pl-1">
                {title}
              </span>
            )}
          </div>
        </motion.div>

        {/* Right gradient line */}
        <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent via-indigo-500/40 to-indigo-600" />
      </div>
    </div>
  );
}
