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
    <section id="faq" className="py-10 sm:py-14 bg-white transition-colors duration-300 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[150px] -ml-64 -mt-64 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[150px] -mr-64 -mb-64 opacity-50 pointer-events-none" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100"
          >
            <HelpCircle size={14} className="fill-current" />
            <span>Support Center</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight"
          >
            Common <span className="text-indigo-600">Questions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium"
          >
            Everything you need to know about partnering with Zaviyar for your strategic growth.
          </motion.p>
        </div>

        <div className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[2.5rem] transition-all duration-500 overflow-hidden border ${
                activeIndex === index 
                ? 'bg-[#FCFAF8] border-indigo-200 shadow-2xl shadow-indigo-500/5' 
                : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50'
              }`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
              >
                <span className={`text-xl lg:text-2xl font-bold transition-colors duration-300 tracking-tight ${
                  activeIndex === index ? 'text-indigo-600' : 'text-slate-900'
                }`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 ml-6 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  activeIndex === index 
                  ? 'bg-indigo-600 text-white rotate-0 shadow-lg shadow-indigo-600/30' 
                  : 'bg-slate-50 text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600'
                }`}>
                  {activeIndex === index ? <Minus size={22} /> : <Plus size={22} />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-8 md:px-12 pb-8 text-lg lg:text-xl text-slate-600 leading-relaxed font-medium border-t border-indigo-100/50 pt-6">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center p-6 sm:p-8 lg:p-10 bg-indigo-600 rounded-2xl sm:rounded-3xl text-white shadow-xl shadow-indigo-500/15 w-full relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-1000" />
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-extrabold mb-2 tracking-tight">Still have questions?</h3>
            <p className="text-indigo-100 text-sm sm:text-base mb-6 font-normal">We're here to help you navigate your strategic journey.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all shadow-md text-center active:scale-95">
                Contact Support
              </a>
              <a href="#contact" className="px-6 py-3 bg-indigo-500 text-white border border-indigo-400 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-all text-center active:scale-95">
                Book a Consultation
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
