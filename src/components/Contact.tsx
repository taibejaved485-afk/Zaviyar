import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare, ArrowRight, User, Building2, Sparkles, ShieldCheck } from 'lucide-react';
import { Reveal } from './Reveal';

const SERVICES_LIST = [
  'Strategic Planning',
  'Digital Transformation',
  'Market Analysis',
  'Organizational Growth',
  'Other'
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState('Strategic Planning');
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

  const handleQuickTemplate = (templateText: string) => {
    setFormData(prev => ({
      ...prev,
      message: templateText
    }));
    if (errors.message) {
      setErrors(prev => {
        const next = { ...prev };
        delete next.message;
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-10 sm:py-14 bg-white transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50 rounded-full blur-[150px] -mr-64 -mt-64 opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] -ml-64 -mb-64 opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent pointer-events-none" />

      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Sidebar Area */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold tracking-[0.15em] uppercase mb-4 border border-indigo-100">
                  <MessageSquare size={14} className="fill-current" />
                  <span>Contact Center</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 leading-tight tracking-tight">
                  Get in <span className="text-indigo-600">Touch</span>
                </h2>
                <p className="text-base text-slate-600 mb-8 leading-relaxed font-normal">
                  We would love to hear from you. Whether you have a specific challenge or are seeking advisory services, our team is ready to assist.
                </p>
              </Reveal>

              <div className="space-y-3">
                {[
                  { icon: Phone, label: 'Phone', value: '+92 (300) 123-4567' },
                  { icon: Mail, label: 'Email', value: 'contact@zaviyar.agency' },
                  { icon: MapPin, label: 'Office', value: 'Zaviyar Corporate Plaza, Lahore' },
                  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 9:00 AM - 6:00 PM' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <Reveal>
                      <div className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#FCFAF8] transition-all duration-300 group border border-transparent hover:border-slate-100">
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-indigo-600 shadow-sm border border-slate-100 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shrink-0">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{item.label}</h4>
                          <p className="text-sm text-slate-900 font-semibold tracking-tight">{item.value}</p>
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
              className="p-6 bg-indigo-600 rounded-2xl text-white shadow-xl shadow-indigo-500/15 relative overflow-hidden group mt-4"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={18} className="text-indigo-200" />
                  <h3 className="text-base font-bold tracking-tight">Priority Client Support</h3>
                </div>
                <p className="text-indigo-100 text-xs mb-4 leading-relaxed font-normal">
                  Existing clients can access our dedicated support portal for expedited 24/7 inquiries.
                </p>
                <button className="flex items-center gap-2 text-xs font-bold bg-white text-indigo-600 px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-all hover:translate-x-1 shadow-md">
                  <span>Client Portal</span> <ArrowRight size={14} />
                </button>
              </div>
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
            </motion.div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7 flex flex-col w-full">
            <Reveal className="w-full h-full flex flex-col flex-1">
              <div className="bg-[#FCFAF8] p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50 relative w-full h-full flex flex-col justify-between overflow-hidden">
                {/* Decorative subtle header line inside card */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600" />

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      className="text-center py-16 my-auto"
                    >
                      <div className="w-20 h-20 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md border border-green-100">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Message Sent Successfully!</h3>
                      <p className="text-sm sm:text-base text-slate-600 mb-8 max-w-md mx-auto font-normal leading-relaxed">
                        Thank you for reaching out. A senior Zaviyar strategist will review your inquiry regarding <span className="font-semibold text-indigo-600">{selectedService}</span> and respond within 24 business hours.
                      </p>
                      <button 
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline text-sm tracking-tight bg-indigo-50 px-5 py-2.5 rounded-xl border border-indigo-100 transition-colors"
                      >
                        <Sparkles size={16} />
                        <span>Send another message</span>
                      </button>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit} noValidate className="space-y-6 flex-1 flex flex-col justify-between">
                      {/* Form Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200/60">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 tracking-tight">Send Us a Message</h3>
                          <p className="text-xs text-slate-500">Fill out the form below and we'll connect with you shortly.</p>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200/80 rounded-full text-[11px] font-semibold text-emerald-700">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span>Avg Response: &lt; 2 hrs</span>
                        </div>
                      </div>

                      <div className="space-y-5">
                        {/* Service Selector Chips */}
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles size={14} className="text-indigo-600" />
                            <span>Area of Interest</span>
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {SERVICES_LIST.map((service) => {
                              const isSelected = selectedService === service;
                              return (
                                <button
                                  key={service}
                                  type="button"
                                  onClick={() => setSelectedService(service)}
                                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-200 flex items-center gap-1.5 border ${
                                    isSelected
                                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-500/20 scale-[1.02]'
                                      : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
                                  }`}
                                >
                                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                                  {service}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Name & Email Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                              <span>Full Name</span>
                              <span className="text-indigo-600">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <User size={16} />
                              </div>
                              <input 
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="text" 
                                className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.fullName ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-xl focus:ring-2 focus:border-indigo-600 outline-none transition-all shadow-xs text-sm font-medium`}
                                placeholder="Jane Doe"
                              />
                            </div>
                            {errors.fullName && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.fullName}</p>}
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                              <span>Email Address</span>
                              <span className="text-indigo-600">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Mail size={16} />
                              </div>
                              <input 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="email" 
                                className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.email ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-xl focus:ring-2 focus:border-indigo-600 outline-none transition-all shadow-xs text-sm font-medium`}
                                placeholder="jane@company.com"
                              />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
                          </div>
                        </div>

                        {/* Phone & Company Row */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                              Phone (Optional)
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Phone size={16} />
                              </div>
                              <input 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type="tel" 
                                className={`w-full pl-10 pr-4 py-3 bg-white border ${errors.phone ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-xl focus:ring-2 focus:border-indigo-600 outline-none transition-all shadow-xs text-sm font-medium`}
                                placeholder="+92 300 1234567"
                              />
                            </div>
                            {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                              Company / Organization
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                                <Building2 size={16} />
                              </div>
                              <input 
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                type="text" 
                                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 text-slate-900 rounded-xl focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 outline-none transition-all shadow-xs text-sm font-medium"
                                placeholder="Acme Corp"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Message Area with Quick Prompts */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
                              <span>Message</span>
                              <span className="text-indigo-600">*</span>
                            </label>
                            <span className="text-[11px] text-slate-400 font-medium">
                              {formData.message.length} characters
                            </span>
                          </div>

                          {/* Quick Message Suggestions */}
                          <div className="flex flex-wrap items-center gap-1.5 mb-1">
                            <span className="text-[11px] text-slate-400 font-medium mr-1">Quick topics:</span>
                            <button
                              type="button"
                              onClick={() => handleQuickTemplate("I would like to schedule an initial strategic consultation to discuss our growth objectives.")}
                              className="text-[11px] px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                            >
                              + Schedule Consultation
                            </button>
                            <button
                              type="button"
                              onClick={() => handleQuickTemplate("We are looking for expert advisory on digital transformation and organizational scaling.")}
                              className="text-[11px] px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                            >
                              + Digital Transformation
                            </button>
                          </div>

                          <div className="relative">
                            <textarea 
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              rows={4}
                              className={`w-full p-3.5 bg-white border ${errors.message ? 'border-red-500 focus:ring-red-100' : 'border-slate-200 focus:ring-indigo-100'} text-slate-900 rounded-xl focus:ring-2 focus:border-indigo-600 outline-none transition-all resize-none shadow-xs text-sm font-medium min-h-[120px]`}
                              placeholder="Tell us about your project or organizational goals..."
                            ></textarea>
                          </div>
                          {errors.message && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.message}</p>}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button 
                        disabled={isSubmitting}
                        type="submit" 
                        className={`w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all shadow-lg flex items-center justify-center gap-2 tracking-wide mt-2 ${
                          isSubmitting 
                            ? 'bg-indigo-400 cursor-not-allowed' 
                            : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20 hover:-translate-y-0.5 active:scale-[0.99]'
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Processing Inquiry...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <Send size={16} />
                          </>
                        )}
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

