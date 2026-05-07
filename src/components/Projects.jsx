import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Distribution Management System',
      description: 'A large-scale enterprise system for managing logistics and inventory. Built with microservices architecture and Kubernetes.',
      tech: ['Laravel', 'React', 'Docker', 'Kubernetes', 'Redis'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Manulife Internal App',
      description: 'High-security internal application for financial data management and reporting. Focused on performance and reliability.',
      tech: ['Java Spring Boot', 'Vue.js', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    },
    {
      title: 'Real-time Socket Chat',
      description: 'High-concurrency chat platform supporting thousands of concurrent connections with real-time status updates.',
      tech: ['Node.js', 'Socket.io', 'React', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
      github: '#',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of complex applications I've architected and built.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="p-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-600/20 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] sm:text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
