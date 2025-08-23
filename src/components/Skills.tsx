import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from 'framer-motion';
// import { Sparkles } from 'lucide-react';

export default function Skills() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', icon: '⚛️', color: 'from-blue-400 to-blue-600' },
        { name: 'TypeScript', icon: '📘', color: 'from-blue-500 to-blue-700' },
        { name: 'Next.js', icon: '▲', color: 'from-gray-600 to-gray-800' },
        { name: 'Tailwind CSS', icon: '🎨', color: 'from-cyan-400 to-cyan-600' },
        { name: 'React Native', icon: '📱', color: 'from-blue-400 to-purple-600' },
        { name: 'Vue.js', icon: '💚', color: 'from-green-400 to-green-600' }
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: '🟢', color: 'from-green-400 to-green-600' },
        { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-yellow-600' },
        { name: 'Express.js', icon: '🚀', color: 'from-gray-500 to-gray-700' },
        { name: 'Django', icon: '🎯', color: 'from-green-600 to-green-800' },
        { name: 'FastAPI', icon: '⚡', color: 'from-teal-400 to-teal-600' },
        { name: 'GraphQL', icon: '🔗', color: 'from-pink-400 to-pink-600' }
      ]
    },
    {
      title: 'AI/ML & Data Science',
      icon: '🤖',
      skills: [
        { name: 'TensorFlow', icon: '🧠', color: 'from-orange-400 to-orange-600' },
        { name: 'PyTorch', icon: '🔥', color: 'from-red-400 to-red-600' },
        { name: 'Scikit-learn', icon: '📊', color: 'from-orange-300 to-orange-500' },
        { name: 'OpenAI API', icon: '🤖', color: 'from-green-400 to-blue-600' },
        { name: 'Pandas', icon: '🐼', color: 'from-purple-400 to-purple-600' },
        { name: 'Jupyter', icon: '📓', color: 'from-orange-500 to-red-500' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: '☁️',
      skills: [
        { name: 'MongoDB', icon: '🍃', color: 'from-green-500 to-green-700' },
        { name: 'PostgreSQL', icon: '🐘', color: 'from-blue-600 to-blue-800' },
        { name: 'AWS', icon: '☁️', color: 'from-orange-500 to-orange-700' },
        { name: 'Docker', icon: '🐳', color: 'from-blue-400 to-blue-600' },
        { name: 'Firebase', icon: '🔥', color: 'from-yellow-500 to-orange-600' },
        { name: 'Redis', icon: '🔴', color: 'from-red-400 to-red-600' }
      ]
    }
  ];

  const handleMouseEnter = (skillName: string) => {
    setHoveredSkill(skillName);
  };

  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };

  return (
    <section ref={ref} className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center lg:justify-start mb-8">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl text-blue-400">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                      type: "spring",
                      stiffness: 200
                    }}
                    onMouseEnter={() => handleMouseEnter(skill.name)}
                    onMouseLeave={handleMouseLeave}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                    }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-xl p-4 h-24 flex flex-col items-center justify-center bg-gray-800 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer">
                      {/* Gradient Background */}
                      <motion.div 
                        className={`absolute inset-0 bg-gradient-to-r ${skill.color}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredSkill === skill.name ? 0.10 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Skill Icon */}
                      <motion.div
                        animate={hoveredSkill === skill.name ? { 
                          scale: [1, 1.2, 1],
                          rotate: [0, 5, -5, 0]
                        } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-2xl mb-1"
                      >
                        {skill.icon}
                      </motion.div>

                      {/* Skill Name */}
                      <span className="text-xs text-center text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>

                      {/* Animated Border */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-blue-400"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: hoveredSkill === skill.name ? [0, 1, 0] : 0,
                          scale: hoveredSkill === skill.name ? [0.8, 1.05, 1] : 0.8
                        }}
                        transition={{ duration: 0.8 }}
                      />

                      {/* Floating Particles */}
                      <AnimatePresence>
                        {hoveredSkill === skill.name && (
                          <>
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                                initial={{ 
                                  opacity: 0,
                                  x: 0,
                                  y: 0,
                                  scale: 0
                                }}
                                animate={{
                                  opacity: [0, 1, 0],
                                  x: (Math.random() - 0.5) * 40,
                                  y: (Math.random() - 0.5) * 40,
                                  scale: [0, 1, 0]
                                }}
                                exit={{
                                  opacity: 0,
                                  scale: 0,
                                  transition: { duration: 0.2 }
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  delay: i * 0.2
                                }}
                              />
                            ))}
                          </>
                        )}                      
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Current Focus Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl text-center mb-8 text-blue-400">What I'm Currently...</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Learning",
                icon: "📚",
                content: "Advanced LangChain & Vector Databases",
                subtitle: "Building intelligent AI agents",
                color: "from-blue-500 to-cyan-500",
                updated: "2 days ago"
              },
              {
                title: "Building", 
                icon: "🔨",
                content: "AI-Powered Code Review Assistant",
                subtitle: "Using GPT-4 & GitHub API",
                color: "from-purple-500 to-pink-500",
                updated: "Active now"
              },
              {
                title: "Reading",
                icon: "📖", 
                content: "Clean Architecture by Robert Martin",
                subtitle: "Improving code design patterns",
                color: "from-green-500 to-emerald-500",
                updated: "1 week ago"
              },
              {
                title: "Excited About",
                icon: "⚡",
                content: "AI in Web Development",
                subtitle: "The future is intelligent UIs",
                color: "from-orange-500 to-red-500",
                updated: "Always"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateY: 5
                }}
                className="group relative bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient Background */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-2 h-2 bg-green-400 rounded-full"
                  />
                  <span className="text-xs text-gray-500">{item.updated}</span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <motion.div
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="text-blue-400 text-sm uppercase tracking-wide">
                        {item.title}
                      </h4>
                    </div>
                  </div>

                  <motion.h5 
                    className="text-white mb-2 group-hover:text-blue-100 transition-colors"
                    initial={false}
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {item.content}
                  </motion.h5>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Interactive Elements */}
                  {/* <motion.div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Sparkles className="text-yellow-400" size={16} />
                  </motion.div> */}
                </div>

                {/* Floating Particles on Hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * 100 - 50],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center mt-8"
          >
            <p className="text-gray-400 text-sm">
              Fun Fact: I regularly update these to keep my portfolio fresh and engaging
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
