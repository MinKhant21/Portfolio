import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Get in Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Interested in collaboration or have a technical challenge? Let's discuss.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 h-fit">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-sm sm:text-base text-slate-900 dark:text-white">Email</h4>
                <a href="mailto:kaungminkhant.dev.mm@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base break-all">
                  kaungminkhant.dev.mm@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-3 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0 h-fit">
                <MessageSquare size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1 text-sm sm:text-base text-slate-900 dark:text-white">LinkedIn</h4>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm sm:text-base">
                  linkedin.com/in/kaungminkhant
                </a>
              </div>
            </div>

            <div className="glass-card p-5 sm:p-6 rounded-2xl border-l-4 border-blue-600 dark:border-blue-500">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 italic leading-relaxed">
                "I'm always open to discussing architecture, system design, and high-scale applications."
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 sm:p-8 rounded-2xl space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5 sm:mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white text-sm"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5 sm:mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white text-sm"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 mb-1.5 sm:mb-2">Message</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-blue-600 dark:focus:border-blue-500 outline-none transition-all text-slate-900 dark:text-white text-sm resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button className="w-full py-3.5 sm:py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center justify-center gap-2 group text-sm sm:text-base">
              Send Message
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
