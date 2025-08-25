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
    title: 'Clean Code', 
    description: 'Writing clean, performant, and maintainable code to build robust applications.',
    color: 'from-blue-400 to-cyan-500'
  },
  { 
    icon: Rocket, 
    title: 'Intuitive UI/UX', 
    description: 'Crafting responsive and accessible interfaces focused on a great user experience.',
    color: 'from-purple-400 to-pink-500'
  },
  { 
    icon: Brain, 
    title: 'AI & ML Integration', 
    description: 'Leveraging Gen AI & machine learning to build smarter, more capable, and feature-rich applications.',
    color: 'from-green-400 to-emerald-500'
  },
  { 
    icon: Database, 
    title: 'Full Stack Development', 
    description: 'Developing across the entire stack, from front-end UI to backend APIs and databases.',
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
            <h3 className="text-2xl mb-6 text-blue-400">Hello, World!</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm CoderKP, a Computer Science student passionate about the intersection of Full Stack Development and Generative AI.
                I'm not just interested in building websites; I'm driven by the challenge of creating intelligent, responsive applications that can learn, adapt, and provide real value to users.
              </p>
              <p>
                My passion has led me to dive deep into the entire technology stack.
                I build end-to-end solutions, from crafting intuitive front-ends with React to engineering robust APIs with Node.js.
                My projects, which you can explore below, are my playground for integrating these web technologies with the power of Python, especially in data processing and deploying machine learning models.
                I believe the future of web development lies in this seamless blend of functionality and intelligence.
              </p>
              <p>
                I am actively seeking an internship or full-time role where I can apply my skills to real-world challenges.
                As a dedicated learner and collaborative teammate, I'm eager to contribute to a forward-thinking team and grow as a developer.
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
          <h3 className="text-2xl mb-8 text-blue-400">My Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Node.js', 'MongoDB', 'Python', 'LangChain', 'TensorFlow'].map((skill, index) => (
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