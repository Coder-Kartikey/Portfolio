import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Code2, Database, Brain, Rocket } from 'lucide-react';

export default function About () {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const coreValues = [
    { 
      icon: Code2, 
      title: 'Technical Excellence', 
      description: 'Delivering high-performance solutions with modern architecture patterns and industry best practices',
      color: 'from-blue-400 to-cyan-500'
    },
    { 
      icon: Rocket, 
      title: 'Business Impact', 
      description: 'Building solutions that drive measurable results and create tangible value for organizations',
      color: 'from-purple-400 to-pink-500'
    },
    { 
      icon: Brain, 
      title: 'Innovation Leadership', 
      description: 'Leading adoption of emerging technologies and AI integration to solve complex business challenges',
      color: 'from-green-400 to-emerald-500'
    },
    { 
      icon: Database, 
      title: 'Scalable Solutions', 
      description: 'Architecting systems that grow with business needs while maintaining performance and reliability',
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-blue-400">My Journey</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Results-driven Full Stack Developer with proven expertise in delivering scalable applications 
                that integrate advanced AI/ML capabilities. Currently pursuing advanced studies while building 
                production-ready solutions that drive business value and user engagement.
              </p>
              <p>
                I specialize in architecting end-to-end systems that seamlessly blend modern web technologies 
                with intelligent automation. From responsive user interfaces to robust backend APIs, and from 
                data processing pipelines to ML model deployment - I deliver comprehensive solutions across 
                the entire technology stack.
              </p>
              <p>
                My approach combines technical excellence with business acumen, ensuring every project not only 
                meets technical requirements but also delivers measurable impact. I stay current with emerging 
                technologies and industry best practices to consistently deliver innovative solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5
                }}
                className="group relative bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <value.icon size={20} className="text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h4 className="text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                        {value.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Sparkles */}
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
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl mb-8 text-blue-400">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-gray-700 rounded-full text-gray-300 hover:bg-blue-600 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}