import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'EDKA Digital',
      period: '2021 - Present',
      description: 'Leading the development of complex enterprise applications, focusing on infrastructure scalability and team leadership.',
      achievements: [
        'Architected and implemented a distribution management system serving 10k+ active users.',
        'Reduced infrastructure costs by 30% through optimized Kubernetes orchestration.',
        'Mentored junior developers and established CI/CD best practices.',
        'Implemented real-time data synchronization using WebSockets and Redis.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Aungthamardi',
      period: '2019 - 2021',
      description: 'Developed and maintained various internal systems and client-facing applications.',
      achievements: [
        'Built a real-time trading platform with low-latency updates.',
        'Integrated multiple third-party payment gateways and logistics services.',
        'Modernized legacy PHP systems to Laravel, improving performance by 40%.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A journey of building impactful solutions and leading technical excellence.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line - Centered on Desktop, Left on Mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot on the line */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-[#030712] -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className="glass-card p-6 sm:p-8 rounded-2xl hover:border-blue-500/30 transition-all group">
                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end md:text-right' : ''}`}>
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Briefcase size={18} className="text-blue-400 shrink-0" />
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <div className={`flex flex-wrap items-center gap-2 text-slate-400 text-xs sm:text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <span className="hidden sm:inline mx-1">•</span>
                        <span className="text-blue-400 font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <p className={`text-sm sm:text-base text-slate-400 mb-6 leading-relaxed ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                      {exp.achievements.map((item, i) => (
                        <li 
                          key={i} 
                          className={`text-slate-300 text-xs sm:text-sm flex items-start gap-3 ${
                            index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                          }`}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          <span className="flex-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
