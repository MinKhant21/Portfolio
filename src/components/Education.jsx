import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Graduate Diploma in Electronic Engineering',
      institution: 'Government Technical Institute, Kyaukse',
    },
    {
      degree: 'Diploma in Computing (NCC Education Level 4)',
      institution: 'KMD College',
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Education</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <div className="shrink-0">
                <div className="w-fit p-3 rounded-xl bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <GraduationCap size={24} className="sm:w-7 sm:h-7" />
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">{edu.institution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
