import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, Zap } from 'lucide-react';
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

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Zaviyar Consultant Agency was founded on a simple belief: that every business deserves access to expert guidance that is honest, practical, and results-oriented. What began as a small team of dedicated professionals has grown into a trusted consulting agency known for its integrity, insight, and commitment to client success.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Our Mission</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    To empower businesses with the tools, strategies, and confidence they need to thrive in an ever-changing marketplace.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Our Vision</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    We envision a future where businesses of all sizes have access to the same caliber of strategic thinking traditionally reserved for large corporations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative z-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 to-transparent" />
              <div className="p-12 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">Why Clients Trust Us</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-center italic">
                  "Our clients trust us because we deliver on our promises. We take the time to understand their challenges, communicate clearly throughout the process, and remain accountable for the results we help create."
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <div className="px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">Integrity First</div>
                  <div className="px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 shadow-sm">Results Driven</div>
                </div>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-600/5 rounded-full blur-2xl" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-indigo-100 dark:hover:border-indigo-900/50 transition-colors"
            >
              <h4 className="text-xl font-bold text-indigo-600 mb-3">{value.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
