import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Commitment() {
  return (
    <section className="py-20 bg-indigo-50 dark:bg-indigo-900/10 transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Commitment</h2>
          <p className="text-lg text-slate-700 dark:text-slate-400 leading-relaxed mb-8">
            We measure our success by the success of our clients. From the first consultation to the final implementation, we remain hands-on, transparent, and committed to delivering results that matter.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold">
              <CheckCircle2 size={20} />
              <span>Hands-on Support</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold">
              <CheckCircle2 size={20} />
              <span>Full Transparency</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-semibold">
              <CheckCircle2 size={20} />
              <span>Result Driven</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
