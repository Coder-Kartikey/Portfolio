import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Code2, Database, Brain, Rocket, User, MapPin, Calendar, Target, Coffee, Sparkles, ArrowRight, CheckCircle, BookOpen, Heart } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Quick facts about me 
  const quickFacts = [
    {
      icon: Target,
      label: 'Focus',
      value: 'AI-Powered Web Apps',
      description: 'Building intelligent solutions',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: BookOpen,
      label: 'Learning',
      value: 'Generative AI & LLMs',
      description: 'Always exploring new tech',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Heart,
      label: 'Passion',
      value: 'Problem Solving',
      description: 'Creating meaningful impact',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: User,
      label: 'Aspiring',
      value: 'Full Stack Developer',
      description: 'Passionate CS Student',
      color: 'from-blue-400 to-cyan-500'
    },
  ];

  // Highlight key achievements/qualities 
  const highlights = [
    {
      icon: CheckCircle,
      text: "Full-Stack Mindset with an AI Specialization",
      subtext: "Building complete, end-to-end applications with a focus on modern AI integration."
    },
    {
      icon: CheckCircle,
      text: "Deep Dive into Core Principles",
      subtext: "Grounded in core CS principles like OOP and C++, not just high-level frameworks."
    },
    {
      icon: CheckCircle,
      text: "Problem-First Approach to Technology",
      subtext: "Applying the right technology to solve the problem, from CNNs to RAG pipelines."
    },
    // {
    //   icon: CheckCircle,
    //   text: "Focus on Performance and Scalability",
    //   subtext: "Crafting performant and scalable solutions designed to work well under pressure."
    // },
    {
      icon: CheckCircle,
      text: "Passionate Lifelong Learner",
      subtext: "Constantly exploring, reading, and building to stay on the cutting edge of the industry."
    }
  ];

  const coreValues = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing clean, performant, and maintainable code to build robust applications.',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: Brain,
      title: 'AI & ML Integration',
      description: 'Leveraging Gen AI & machine learning to build smarter, more capable, and feature-rich applications.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Rocket,
      title: 'Intuitive UI/UX',
      description: 'Crafting responsive and accessible interfaces focused on a great user experience.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Database,
      title: 'Full Stack Development',
      description: 'Developing across the entire stack, from front-end UI to backend APIs and databases.',
      color: 'from-orange-400 to-red-500'
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-800/50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.8) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">

            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="text-4xl"
                >
                  👋
                </motion.div>
                <h3 className="text-3xl text-blue-400">Hello, World!</h3>
              </div>

              {/* Quick intro tagline */}
              <motion.p
                className="text-xl text-gray-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                A CS student building{' '}
                <span className="text-blue-400 font-semibold">intelligent web applications</span>{' '}
                that blend traditional development with{' '}
                <span className="text-purple-400 font-semibold">AI/ML capabilities</span>.
              </motion.p>
            </motion.div>

            {/* Quick Facts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -2
                  }}
                  onMouseEnter={() => setHoveredCard(fact.label)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-gray-900 p-4 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Gradient Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start space-x-3">
                      <motion.div
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0]
                        }}
                        transition={{ duration: 0.4 }}
                        className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <fact.icon size={18} className="text-white" />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 uppercase tracking-wide">
                          {fact.label}
                        </div>
                        <div className="text-white font-medium group-hover:text-blue-300 transition-colors">
                          {fact.value}
                        </div>
                        <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                          {fact.description}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating sparkle */}
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      rotate: 360,
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Sparkles size={12} className="text-blue-400" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}

          {/* What Sets Me Apart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-4"
          >
            <h4 className="text-xl text-blue-400 mb-4 flex items-center space-x-2">
              <Target size={20} />
              <span>What Sets Me Apart</span>
            </h4>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3 group cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 group-hover:bg-green-500/30 transition-colors"
                  >
                    <CheckCircle size={16} className="text-green-400" />
                  </motion.div>
                  <div>
                    <p className=" text-gray-300 group-hover:text-white transition-colors">
                      {highlight.text}
                    </p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                      {highlight.subtext}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* My core Qualities */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            {/* <Coffee className="text-blue-400" size={24} /> */}
            <h3 className="text-2xl text-blue-400">My Core Qualities</h3>
            {/* <Coffee className="text-blue-400" size={24} /> */}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6"
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
                  scale: 1.05,
                  y: -8,
                  rotateY: 2
                }}
                onMouseEnter={() => setHoveredCard(value.title)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
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

                {/* Enhanced Floating Effects */}
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
                  <Sparkles size={16} className="text-blue-400" />
                </motion.div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        x: [0, Math.random() * 60 - 30],
                        y: [0, Math.random() * 60 - 30],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeInOut"
                      }}
                      style={{
                        left: `${Math.random() * 80 + 10}%`,
                        top: `${Math.random() * 80 + 10}%`,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            {/* <Coffee className="text-blue-400" size={24} /> */}
            <h3 className="text-2xl text-blue-400">My Core Technologies</h3>
            {/* <Coffee className="text-blue-400" size={24} /> */}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'React', color: 'hover:bg-blue-600' },
              { name: 'Node.js', color: 'hover:bg-green-600' },
              { name: 'MongoDB', color: 'hover:bg-green-500' },
              { name: 'Python', color: 'hover:bg-yellow-600' },
              { name: 'LangChain', color: 'hover:bg-orange-600' },
              { name: 'TensorFlow', color: 'hover:bg-orange-500' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 bg-gray-700 rounded-full text-gray-300 ${skill.color} hover:text-white transition-all duration-300 cursor-pointer border border-gray-600 hover:border-transparent hover:shadow-lg`}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}