import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Code } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { ProjectHero, ProjectInfoCards } from './ProjectDetailComponents';

interface ProjectDetailProps {
  projectId: number;
  onBack: () => void;
}

export default function ProjectDetail({ projectId, onBack }: ProjectDetailProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Project not found</h2>
          <button onClick={onBack} className="text-blue-400 hover:text-blue-300">
            ← Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="min-h-screen pt-16">
      <ProjectHero project={project} onBack={onBack} />

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ProjectInfoCards project={project} isInView={isInView} />
        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Key Highlights
            </span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {project.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={20} />
                </motion.div>
                <span className="text-gray-300 leading-relaxed">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Implementation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Implementation
            </span>
          </h3>
          <div className="space-y-6">
            {Object.entries(project.technicalDetails).map(([category, details], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.01, y: -2 }}
                className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
              >
                <h4 className="text-xl text-blue-400 mb-4 flex items-center space-x-2">
                  <Code size={20} />
                  <span>{category}</span>
                </h4>
                <p className="text-gray-300 leading-relaxed">{details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges & Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Challenges & Solutions
            </span>
          </h3>
          <div className="space-y-8">
            {project.challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                whileHover={{ scale: 1.01, y: -5 }}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Animated Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                  whileHover={{
                    background: [
                      "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                      "linear-gradient(to right, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
                      "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative z-10 grid md:grid-cols-2 gap-8">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        className="w-4 h-4 bg-red-400 rounded-full"
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      />
                      <h4 className="text-red-400 text-lg group-hover:text-red-300 transition-colors">Challenge</h4>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className="w-2 h-2 bg-red-400/50 rounded-full"
                      />
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{challenge.problem}</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ x: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.div
                        className="w-4 h-4 bg-green-400 rounded-full"
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ duration: 0.3 }}
                      />
                      <h4 className="text-green-400 text-lg group-hover:text-green-300 transition-colors">Solution</h4>
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 + 1 }}
                        className="w-2 h-2 bg-green-400/50 rounded-full"
                      />
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">{challenge.solution}</p>
                  </motion.div>
                </div>

                {/* Corner Sparkle Effect */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity }
                  }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}