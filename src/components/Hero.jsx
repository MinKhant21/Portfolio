import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative pt-16 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Full Stack Software Engineer at KBZ Bank
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white"
          >
            Hi, I'm <span className="text-gradient block sm:inline">Kaung Min Khant</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mb-10 leading-relaxed px-2"
          >
            A <span className="text-slate-900 dark:text-white font-medium">Full Stack Software Engineer</span> with 6 years of experience building
            <span className="text-slate-900 dark:text-white font-medium"> web applications and internal enterprise systems</span>.
            I work with JavaScript, TypeScript, Node.js, React, Vue.js, PHP, Laravel, microservices, and AWS. Based in Yangon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all flex items-center justify-center group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full glass-card hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-semibold transition-all flex items-center justify-center"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 md:mt-16 flex items-center gap-4 sm:gap-6"
          >
            <a href="https://github.com/MinKhant21" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kaung-min-khant-224b8b327" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-card hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:kaungminkhant.dev.mm@gmail.com" className="p-3 rounded-full glass-card hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-all">
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
