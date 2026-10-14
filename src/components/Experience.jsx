import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Full Stack Software Engineer',
      company: 'KBZ Bank',
      period: 'March 2026 – Present · Yangon',
      description: 'On-site full stack work on internal banking systems, payroll, and document search.',
      achievements: [
        'Built payroll services for bank-to-bank and bank-to-wallet transfers, and pay advance services, on a microservices architecture.',
        'Integrated third-party enterprise APIs and defined API contracts for internal banking systems.',
        'Built internal workflow applications with maker-checker approval, including a knowledge wiki and document search for DOC and PDF files.',
        'Implemented LLM retrieval-augmented generation (RAG) with Amazon Bedrock and Bedrock Knowledge Bases, using Amazon S3 for document storage.',
        'Delivered services on AWS with DynamoDB, EKS, EC2, and Lambda, and set up CI/CD pipelines.',
        'Reviewed functional specification documents with business analysts and product teams and checked technical feasibility.',
        'Built frontend interfaces from UI/UX designs and worked with cross-functional teams on code quality, security compliance, and system reliability.',
      ]
    },
    {
      role: 'Senior Full Stack Developer',
      company: 'EDKA Digital Company Limited',
      period: 'October 2023 – December 2025 · Mandalay · Remote',
      description: 'Team lead for enterprise web applications, internal products, and client systems.',
      achievements: [
        'Acted as team lead: reviewed code, mentored junior developers, and trained and guided interns and juniors.',
        'Set up Docker and CI/CD pipelines and provided infrastructure support for project environments.',
        'Managed internal products as project manager, including a ticketing system, an internal payroll system, and KPI tracking and reporting.',
        'Built a real-time ticker for Grand Royal, a mini ERP, a CMS, and an internal contract management system.',
        'Engineered enterprise web applications with Node.js, PHP, React, Vue.js, and Laravel, using modular architecture for high-traffic systems.',
        'Designed RESTful API specifications and microservice boundaries with solution architects, and integrated third-party services.',
        'Diagnosed database and application bottlenecks, and introduced automated testing and test-driven development (TDD).',
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Freelance',
      period: 'February 2022 – August 2023 · Yangon · Remote',
      description: 'Client applications from requirements gathering through deployment.',
      achievements: [
        'Built an internal sales application for Manulife.',
        'Built the Aungmadi internal ERP system in collaboration with EDKA Digital.',
        'Built the Stallion Distribution Management System.',
        'Delivered client applications with React, Vue.js, TypeScript, Laravel, and Node.js.',
        'Built serverless back-end services and RESTful APIs to reduce server infrastructure overhead.',
        'Set up local and cloud Docker environments and shortened the path from development to production.',
        'Built responsive interfaces and improved frontend performance, cross-browser compatibility, and SEO.',
      ]
    },
    {
      role: 'Junior Web Developer',
      company: 'ZED Myanmar Company Limited',
      period: 'September 2020 – November 2021 · Yangon',
      description: 'Website features, production fixes, and release checks.',
      achievements: [
        'Developed and maintained website features and fixed defects on production web applications.',
        'Implemented page and interface updates from team requirements and existing designs.',
        'Participated in testing and release checks before changes were deployed.',
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Experience</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Six years building web applications and internal enterprise systems, from ZED Myanmar to KBZ Bank.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line - Centered on Desktop, Left on Mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 -translate-x-1/2" />

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
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-50 dark:border-[#030712] -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className="glass-card p-6 sm:p-8 rounded-2xl hover:border-blue-500/30 transition-all group">
                    <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? 'md:items-end md:text-right' : ''}`}>
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <Briefcase size={18} className="text-blue-600 dark:text-blue-400 shrink-0" />
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <div className={`flex flex-wrap items-center gap-2 text-slate-500 dark:text-slate-400 text-xs sm:text-sm ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <span className="hidden sm:inline mx-1">•</span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</span>
                      </div>
                    </div>

                    <p className={`text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 leading-relaxed ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description}
                    </p>

                    <ul className={`space-y-3 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                      {exp.achievements.map((item, i) => (
                        <li 
                          key={i} 
                          className={`text-slate-700 dark:text-slate-300 text-xs sm:text-sm flex items-start gap-3 ${
                            index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
                          }`}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0" />
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
