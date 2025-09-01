import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Zap, Rocket, Star, Sparkles } from 'lucide-react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showLoader, setShowLoader] = useState(true);

  const loadingTexts = [
    'Initializing creative mode...',
    'Loading awesome projects...',
    'Compiling skills database...',
    'Booting up innovation engine...',
    'Ready to showcase!'
  ];

  useEffect(() => {
    // Scale factor for 2.5s -> 3.5s: 3.5/2.5 = 1.4
    const scale = 1.4;
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (Math.random() * 15 + 5) * (200 * scale / 200);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 200 * scale);

    // Update loading text
    const textInterval = setInterval(() => {
      setCurrentText((prev) => {
        const currentIndex = loadingTexts.indexOf(prev);
        const nextIndex = currentIndex + 1 < loadingTexts.length ? currentIndex + 1 : 0;
        return loadingTexts[nextIndex];
      });
    }, 600 * scale);

    // Complete loading after 3.5 seconds
    const completionTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setShowLoader(false);
        setTimeout(() => {
          onLoadingComplete();
        }, 500 * scale); // Allow exit animation to complete
      }, 300 * scale);
    }, 3500);

    // Initialize first text
    setCurrentText(loadingTexts[0]);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(completionTimer);
    };
  }, [onLoadingComplete]);

  if (!showLoader) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 * 1.4 }}
        className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.8) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            rotate: { duration: 8 * 1.4, repeat: Infinity, ease: "linear" },
            scale: { duration: 4 * 1.4, repeat: Infinity }
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-500/20 rotate-45"
          animate={{
            rotate: [45, 405],
            scale: [1, 1.3, 1]
          }}
          transition={{
            rotate: { duration: 6 * 1.4, repeat: Infinity, ease: "linear" },
            scale: { duration: 3 * 1.4, repeat: Infinity }
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-16 h-16 border border-green-500/20 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: { duration: 5 * 1.4, repeat: Infinity, ease: "linear" },
            scale: { duration: 2.5 * 1.4, repeat: Infinity }
          }}
        />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 * 1.4,
              repeat: Infinity,
              delay: i * 0.2 * 1.4,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Main Content */}
        <div className="text-center relative z-10 max-w-md mx-auto px-4">
          {/* Logo/Brand Section */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 * 1.4, ease: "backOut" }}
            className="mb-8"
          >
            <div className="relative">
              {/* Outer Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4 * 1.4, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto border-4 border-blue-500/30 rounded-full relative"
              >
                {/* Inner Elements */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3 * 1.4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 border-2 border-purple-500/40 rounded-full flex items-center justify-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                    }}
                    className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                  >
                    <Code size={16} className="text-white" />
                  </motion.div>
                </motion.div>

                {/* Orbiting Icons */}
                {[Zap, Rocket, Star, Sparkles].map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-6 h-6 -top-1 -right-1"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 3 * 1.4,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.2 * 1.4
                    }}
                    style={{
                      transformOrigin: `12px 60px`,
                      transform: `rotate(${index * 90}deg)`
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: -360
                      }}
                      transition={{
                        scale: { duration: 1 * 1.4, repeat: Infinity },
                        rotate: { duration: 3 * 1.4, repeat: Infinity, ease: "linear" }
                      }}
                    >
                      <Icon size={12} className="text-blue-400" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Pulsing Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2 * 1.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Brand Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 * 1.4, delay: 0.3 * 1.4 }}
            className="mb-8"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CoderKP
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 * 1.4, delay: 0.6 * 1.4 }}
              className="text-gray-400 mt-2"
            >
              Full Stack Developer & AI Enthusiast
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 * 1.4, delay: 0.9 * 1.4 }}
            className="mb-6"
          >
            <div className="relative">
              {/* Progress Bar Background */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
                {/* Progress Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 * 1.4, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full relative"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    animate={{
                      x: [-100, 200]
                    }}
                    transition={{
                      duration: 1.5 * 1.4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>
              
              {/* Progress Percentage */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1 * 1.4, repeat: Infinity }}
                className="text-center mt-2 text-sm text-blue-400 font-medium"
              >
                {Math.round(progress)}%
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 * 1.4, delay: 1.2 * 1.4 }}
            className="h-6"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={currentText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 * 1.4 }}
                className="text-gray-400 text-sm"
              >
                {currentText}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 * 1.4, delay: 1.5 * 1.4 }}
            className="flex justify-center space-x-1 mt-4"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{
                  duration: 1 * 1.4,
                  repeat: Infinity,
                  delay: i * 0.2 * 1.4
                }}
                className="w-2 h-2 bg-blue-400 rounded-full"
              />
            ))}
          </motion.div>
        </div>

        {/* Corner Decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 * 1.4, delay: 0.5 * 1.4 }}
          className="absolute top-8 left-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10 * 1.4, repeat: Infinity, ease: "linear" }}
          >
            <Star size={20} className="text-yellow-400/60" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 * 1.4, delay: 0.7 * 1.4 }}
          className="absolute top-8 right-8"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12 * 1.4, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={18} className="text-purple-400/60" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 * 1.4, delay: 0.9 * 1.4 }}
          className="absolute bottom-8 left-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8 * 1.4, repeat: Infinity, ease: "linear" }}
          >
            <Code size={16} className="text-green-400/60" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 * 1.4, delay: 1.1 * 1.4 }}
          className="absolute bottom-8 right-8"
        >
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15 * 1.4, repeat: Infinity, ease: "linear" }}
          >
            <Rocket size={22} className="text-blue-400/60" />
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}