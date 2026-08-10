import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !/^\+?[\d\s-]{7,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (!value.trim()) {
      if (name === 'fullName' || name === 'email' || name === 'message') {
        setErrors(prev => ({ ...prev, [name]: `${name === 'fullName' ? 'Full name' : name.charAt(0).toUpperCase() + name.slice(1)} is required` }));
      }
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-white transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50 pointer-events-none" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 xl:gap-32 items-stretch">
          {/* Sidebar Area */}
          <div className="lg:w-2/5 xl:w-1/3 flex flex-col justify-between">
            <div>
              <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100">
                <MessageSquare size={14} className="fill-current" />
                <span>Contact Center</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
                Let's Start a <span className="text-indigo-600">Conversation</span>
              </h2>
              <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                Whether you have a specific challenge or simply want to explore how we can support your business, reach out today for a confidential consultation.
              </p>
            </Reveal>

            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: '+92 (300) 123-4567' },
                { icon: Mail, label: 'Email', value: 'contact@zaviyar.agency' },
                { icon: MapPin, label: 'Office', value: 'Zaviyar Corporate Plaza, Lahore' },
                { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM' }
              ].map((item, idx) => (
                <div key={idx}>
                  <Reveal>
                    <div className="flex items-center gap-6 p-6 rounded-3xl hover:bg-[#FCFAF8] transition-all duration-500 group border border-transparent hover:border-slate-200">
                      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-lg border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</h4>
                        <p className="text-lg text-slate-900 font-bold tracking-tight">{item.value}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 p-10 bg-indigo-600 rounded-[2.5rem] text-white shadow-2xl shadow-indigo-500/25 relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4 tracking-tight">Priority Support?</h3>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed font-medium">
                  Existing clients can access our dedicated support portal 24/7 for immediate assistance.
                </p>
                <button className="flex items-center gap-3 text-base font-black bg-white text-indigo-600 px-8 py-4 rounded-2xl hover:bg-indigo-50 transition-all hover:translate-x-2 shadow-xl">
                  Client Portal <ArrowRight size={20} />
                </button>
              </div>
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Form Area */}
          <div className="lg:w-3/5 xl:w-2/3 w-full flex">
            <Reveal className="w-full flex">
              <div className="bg-[#FCFAF8] p-10 md:p-16 rounded-[3.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 relative w-full">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      className="text-center py-20"
                    >
                      <div className="w-28 h-28 bg-green-50 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-lg border border-green-100">
                        <CheckCircle2 size={56} />
                      </div>
                      <h3 className="text-4xl font-black text-slate-900 mb-6 tracking-tight">Message Sent!</h3>
                      <p className="text-xl text-slate-600 mb-12 max-w-md mx-auto font-medium leading-relaxed">
                        Thank you for reaching out. A senior consultant will review your inquiry and respond within 24 business hours.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="text-indigo-600 font-black hover:underline text-lg tracking-tight"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} noValidate className="space-y-10">
                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Full Name</label>
                          <input 
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text" 
                            className={`w-full px-8 py-5 bg-white border ${errors.fullName ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-[1.5rem] focus:ring-4 focus:border-indigo-600 outline-none transition-all shadow-sm text-lg font-medium`}
                            placeholder="Jane Doe"
                          />
                          {errors.fullName && <p className="text-red-500 text-sm mt-2 font-bold ml-1 uppercase tracking-wider">{errors.fullName}</p>}
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email Address</label>
                          <input 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="email" 
                            className={`w-full px-8 py-5 bg-white border ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-[1.5rem] focus:ring-4 focus:border-indigo-600 outline-none transition-all shadow-sm text-lg font-medium`}
                            placeholder="jane@company.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm mt-2 font-bold ml-1 uppercase tracking-wider">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-3">
                          <label className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Phone (Optional)</label>
                          <input 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="tel" 
                            className={`w-full px-8 py-5 bg-white border ${errors.phone ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-[1.5rem] focus:ring-4 focus:border-indigo-600 outline-none transition-all shadow-sm text-lg font-medium`}
                            placeholder="+92 300 1234567"
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-2 font-bold ml-1 uppercase tracking-wider">{errors.phone}</p>}
                        </div>
                        <div className="space-y-3">
                          <label className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Company</label>
                          <input 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            type="text" 
                            className="w-full px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-[1.5rem] focus:ring-4 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all shadow-sm text-lg font-medium"
                            placeholder="Acme Corp"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Message</label>
                        <textarea 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={5}
                          className={`w-full px-8 py-6 bg-white border ${errors.message ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-[1.5rem] focus:ring-4 focus:border-indigo-600 outline-none transition-all resize-none shadow-sm text-lg font-medium`}
                          placeholder="How can we help you?"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm mt-2 font-bold ml-1 uppercase tracking-wider">{errors.message}</p>}
                      </div>

                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className={`w-full py-6 rounded-[1.5rem] font-black text-xl text-white transition-all shadow-2xl flex items-center justify-center gap-4 tracking-tight ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/30 hover:-translate-y-1 active:scale-[0.98]'}`}
                      >
                        {isSubmitting ? 'Processing Inquiry...' : 'Send Message'}
                        {!isSubmitting && <Send size={24} />}
                      </button>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
