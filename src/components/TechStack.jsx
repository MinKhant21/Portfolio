import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: 'PHP (Laravel)', category: 'Backend' },
    { name: 'Java (Spring Boot)', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'React', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Microservices', category: 'Architecture' },
    { name: 'Clean Architecture', category: 'Architecture' },
    { name: 'TDD', category: 'Testing' },
    { name: 'PostgreSQL', category: 'Database' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="tech-stack" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Tech Stack</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My diverse technical arsenal for building high-performance, scalable systems.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="text-[10px] sm:text-sm text-blue-600 dark:text-blue-400 font-medium mb-1 uppercase tracking-wider">{tech.category}</div>
              <div className="text-sm sm:text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{tech.name}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
