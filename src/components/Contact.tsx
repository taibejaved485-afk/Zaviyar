import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
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
    // Clear error when user starts typing
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
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', company: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-full mx-auto px-4 sm:px-8 lg:px-12">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Whether you have a specific challenge or simply want to explore how we can support your business, reach out today.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <Reveal>
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">How to Reach Us</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Phone</h4>
                      <p className="text-slate-900 dark:text-white font-medium">+92 (300) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Email</h4>
                      <p className="text-slate-900 dark:text-white font-medium">contact@zaviyar.agency</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Office</h4>
                      <p className="text-slate-900 dark:text-white font-medium leading-relaxed">
                        Zaviyar Corporate Plaza, Suite 405<br />
                        Main Boulevard, Lahore, Pakistan
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center text-indigo-600 shadow-sm">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Hours</h4>
                      <p className="text-slate-900 dark:text-white font-medium">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-600 p-10 rounded-3xl text-white shadow-xl shadow-indigo-600/20">
                <h3 className="text-2xl font-bold mb-4">Book a Free Consultation</h3>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  Not sure where to start? We'll discuss your business, understand your challenges, and outline how Zaviyar can help you achieve your goals, with no obligation.
                </p>
                <button className="w-full bg-white text-indigo-600 font-bold py-4 rounded-xl hover:bg-indigo-50 transition-colors shadow-lg">
                  Schedule Now
                </button>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal>
            <div className="bg-white dark:bg-slate-800 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">Thank you for reaching out. One of our consultants will get back to you shortly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-indigo-600 dark:text-indigo-400 font-semibold underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                      <input 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="text" 
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'} dark:text-white rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all`}
                        placeholder="Jane Doe"
                      />
                      {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email" 
                        className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'} dark:text-white rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all`}
                        placeholder="jane@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Phone Number (Optional)</label>
                    <input 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="tel" 
                      className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'} dark:text-white rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="+92 300 1234567"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Company Name</label>
                    <input 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text" 
                      className="w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 dark:text-white rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={4}
                      className={`w-full px-5 py-4 bg-slate-50 dark:bg-slate-900/50 border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 dark:border-slate-700 focus:ring-indigo-500'} dark:text-white rounded-xl focus:ring-2 focus:border-transparent outline-none transition-all resize-none`}
                      placeholder="How can we help you?"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${isSubmitting ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-600/20 active:scale-95'}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
