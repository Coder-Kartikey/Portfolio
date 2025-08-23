import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, Database, Brain, Sparkles, Zap } from 'lucide-react';
import avatarImage from '../assets/images/avatar-image.png';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const words = useMemo(() => [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Gen AI Specialist',
    'Tech Innovator'
  ], []);

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(prev => isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1));

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-500/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-purple-500/20 rounded-full"
        />

        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Main Avatar Container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-80 h-80 relative">
                  {/* Glowing Background */}
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-xl"
                  />

                  {/* Avatar Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-full h-full rounded-full overflow-hidden border-4 border-blue-400/50 shadow-2xl"
                  >
                    <img
                      src={avatarImage}
                      alt="CoderKP Avatar"
                      className="w-full h-full object-cover"
                    />
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <motion.div className="absolute -top-4 left-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg"
                  >
                    <Code className="text-white" size={20} />
                  </motion.div>
                </motion.div>

                <motion.div className="absolute top-8 -right-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                    className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg"
                  >
                    <Brain className="text-white" size={20} />
                  </motion.div>
                </motion.div>

                <motion.div className="absolute -bottom-4 right-8">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg"
                  >
                    <Database className="text-white" size={20} />
                  </motion.div>
                </motion.div>

                <motion.div className="absolute bottom-8 -left-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, -180, -360]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center shadow-lg"
                  >
                    <Zap className="text-white" size={20} />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Sparkle Effects */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                >
                  <Sparkles className="text-yellow-400" size={16} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl mb-4"
              >
                Hi! I'm <span className="text-blue-400">CoderKP</span>
              </motion.h1>
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-2xl sm:text-3xl text-gray-300"
                >
                  A{' '}
                  <span className="text-blue-400 border-r-2 border-blue-400 pr-1">
                    {text}
                  </span>
                </motion.h2>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Experienced Full Stack Developer specializing in AI/ML integration and scalable web solutions. 
              Proven track record in delivering high-performance applications that drive business value.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              >
                View Projects
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToAbout}
                className="px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-lg transition-colors"
              >
                About Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on smaller screens to prevent collision */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown size={32} className="text-gray-400 hover:text-blue-400 transition-colors" />
        </motion.div>
      </motion.div>
    </div >
  );
};
