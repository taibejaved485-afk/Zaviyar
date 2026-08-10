import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What industries do you specialize in?",
    answer: "At Zaviyar Consultant Agency, we work across a wide range of industries including technology, logistics, finance, and manufacturing. Our strategies are built on fundamental business principles that are applicable to both startups and established corporations."
  },
  {
    question: "How long does a typical consulting engagement last?",
    answer: "Engagement duration varies based on the scope of the project. Strategic planning might take 4-8 weeks, while complex operational transformations can last several months. We offer both project-based and ongoing advisory relationships."
  },
  {
    question: "Do you offer custom solutions or fixed packages?",
    answer: "We strictly believe in tailored strategies. While we have structured methodologies for assessments, every recommendation is custom-designed to fit your specific needs, resources, and ambitions."
  },
  {
    question: "How do you measure the success of your consulting services?",
    answer: "Success is measured by pre-defined KPIs established at the start of our partnership. These typically include measurable metrics such as operational efficiency gains, revenue growth, cost reduction, or improved leadership performance scores."
  },
  {
    question: "Is there an initial consultation fee?",
    answer: "No, we offer a free initial consultation to understand your business challenges and outline how we can help. This ensures we are the right fit for your goals before any commitment is made."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl">
              <HelpCircle size={32} />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Common Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Everything you need to know about working with Zaviyar Consultant Agency.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-indigo-200 dark:border-indigo-800 bg-indigo-50/30 dark:bg-indigo-900/10' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-slate-200 dark:hover:border-slate-700'}`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-bold text-slate-900 dark:text-white">{faq.question}</span>
                <span className={`flex-shrink-0 ml-4 p-1 rounded-full ${activeIndex === index ? 'bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500'}`}>
                  {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-indigo-100/50 dark:border-indigo-900/30 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
