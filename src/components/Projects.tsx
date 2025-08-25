import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, Code, Database, Brain, Smartphone } from 'lucide-react';

interface ProjectsProps {
  onProjectSelect?: (projectId: number) => void;
}

export default function Projects({ onProjectSelect }: ProjectsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Chat Application',
      description: 'A real-time chat application with AI integration using OpenAI API, built with React+TS and Node.js.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'OpenAI', 'Socket.io'],
      category: 'ai',
      github: 'https://github.com/codekp',
      live: 'https://demo.example.com',
      icon: Brain
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tags: ['React', 'Express', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com/codekp',
      live: 'https://demo.example.com',
      icon: Code
    },
    {
      id: 3,
      title: 'ML Image Classifier',
      description: 'Deep learning model for image classification using TensorFlow, deployed with FastAPI backend.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'FastAPI', 'Docker'],
      category: 'ml',
      github: 'https://github.com/codekp',
      live: 'https://demo.example.com',
      icon: Brain
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Mobile-first task management application with real-time sync and collaborative features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      github: 'https://github.com/codekp',
      live: 'https://demo.example.com',
      icon: Smartphone
    },
    {
      id: 5,
      title: 'Data Analytics Dashboard',
      description: 'Interactive dashboard for data visualization and analytics with real-time updates.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      category: 'fullstack',
      github: 'https://github.com/codekp',
      live: 'https://demo.example.com',
      icon: Database
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'Generate high-quality content using advanced AI models with customizable parameters.',
      image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=500&h=300&fit=crop',
      tags: ['Next.js', 'OpenAI', 'Tailwind', 'Prisma'],
      category: 'ai',
      github: 'https://github.com/codekp',
      live: 'https://demo.example.com',
      icon: Brain
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai' || p.category === 'ml').length },
    { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category === filter || 
        (filter === 'ai' && (project.category === 'ai' || project.category === 'ml'))
      );

  return (
    <section ref={ref} className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in full-stack development and AI/ML-powered applications.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-2 p-2 bg-gray-900 rounded-lg border border-gray-700">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm transition-all ${
                  filter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label} ({category.count})
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              onClick={() => onProjectSelect?.(project.id)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                {/* Project Icon */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <project.icon size={20} className="text-white" />
                </div>
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800/80 rounded-full flex items-center justify-center hover:bg-gray-700"
                  >
                    <Github size={16} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-blue-600/80 rounded-full flex items-center justify-center hover:bg-blue-500"
                  >
                    <ExternalLink size={16} className="text-white" />
                  </motion.a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-md border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* View Details Button */}
                <div className="text-blue-400 text-sm font-medium opacity-50 group-hover:opacity-100 transition-opacity">
                  Click to view full details →
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
          >
            View All Projects on GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
