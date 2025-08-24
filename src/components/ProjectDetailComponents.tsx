import React, { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import { Calendar, Users, Monitor, CheckCircle, ImageIcon, Play, Github } from 'lucide-react';
import { ProjectData } from '../data/projectsData';

interface ProjectHeroProps {
  project: ProjectData;
  onBack: () => void;
}

export function ProjectHero({ project, onBack }: ProjectHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all mb-8 group bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500/50"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Projects</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <project.icon size={36} className="text-white" />
              </motion.div>
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full border border-green-500/30 backdrop-blur-sm"
                  >
                    {project.status}
                  </motion.span>
                  <span className="text-gray-400 text-sm">{project.timeline}</span>
                </div>
                <p className="text-blue-300">{project.overview}</p>
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {project.title}
            </h1>
            <h2 className="text-xl text-blue-400 mb-6">{project.subtitle}</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <Play size={18} />
                <span>Live Demo</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-6 py-3 border border-gray-600 hover:border-blue-400 rounded-lg transition-all hover:bg-gray-800/50"
              >
                <Github size={18} />
                <span>Source Code</span>
              </motion.a>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-2 text-sm text-gray-300"
                >
                  <CheckCircle size={16} className="text-green-400" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Project Metrics */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {project.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                      <metric.icon size={20} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-2xl text-blue-400">{metric.value}</div>
                      <div className="text-gray-400 text-sm">{metric.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <ProjectLiveDemoAndPreview project={project} />
        </div>
      </div>
    </div>
  );
}

interface ProjectMetricsAndPreviewProps {
  project: ProjectData;
}

export function ProjectLiveDemoAndPreview({ project }: ProjectMetricsAndPreviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="space-y-6"
    >
      {/* Animated Demo Preview */}
      <ProjectLiveDemo project={project} />

      {/* Project Preview Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="bg-gray-800/70 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
      >
        <div className="flex items-center space-x-2 mb-4">
          <ImageIcon size={20} className="text-blue-400" />
          <h3 className="text-blue-400">Screenshots</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {project.previewImages.map((imageUrl, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg border border-gray-600 hover:border-blue-400/50 transition-all duration-300"
            >
              <img
                src={imageUrl}
                alt={`${project.title} preview ${index + 1}`}
                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-2 py-1 rounded">
                Screenshot {index + 1}
              </div>
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute top-2 right-2 w-8 h-8 bg-blue-500/80 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <ImageIcon size={14} className="text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

interface ProjectLiveDemoProps {
  project: ProjectData;
}

export function ProjectLiveDemo({ project }: ProjectLiveDemoProps) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [iframeTimeout, setIframeTimeout] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    setIframeLoaded(false);
    setIframeError(false);
    setIframeTimeout(false);
    if (project.live) {
      timeoutRef.current = setTimeout(() => {
        setIframeTimeout(true);
      }, 8000); // 8 seconds timeout
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [project.live]);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
    setIframeError(false);
    setIframeTimeout(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleIframeError = () => {
    setIframeError(true);
    setIframeLoaded(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="bg-gray-800/70 backdrop-blur-sm pt-2 mt-6 p-6 rounded-xl border border-gray-700"
    >
      {project.live && !iframeError && !iframeTimeout ? (
        <>
          <div className="flex items-center space-x-2 mb-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Play size={20} className="text-green-400" />
            </motion.div>
            <h3 className="text-green-400">{iframeLoaded ? 'Live Demo Preview' : 'Preview'}</h3>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group h-96 cursor-pointer overflow-hidden rounded-lg border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-500"
          >
            {/* Fallback image overlayed until iframe loads */}
            {!iframeLoaded && (

              <img
                src={project.animatedPreview}
                alt={`${project.title} animated demo fallback`}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-10 bg-black/20"
                style={{ pointerEvents: 'none' }}
              />
            )}
            <div className="relative w-full h-96 overflow-hidden">
              <iframe
                src={project.live}
                title={`${project.title} live preview`}
                className="w-full h-96 object-cover transition-transform duration-500 absolute z-20 top-0 left-0"
                style={{
                  width: "200%",
                  height: "200%",
                  transform: "scale(0.5)",
                  transformOrigin: "top left",
                  border: "none"
                }}
                onLoad={handleIframeLoad}
                onError={handleIframeError}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Hover-only LIVE indicator in green circle, top right, only if iframe is loaded */}
            {/* Hover-only LIVE indicator in green circle, top right, only if iframe is loaded */}
            <div className="absolute top-2 right-2 transition-opacity z-30">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={
                  'px-3 py-1 bg-green-500/25 text-white text-xs rounded-full backdrop-blur-sm ' +
                  (iframeLoaded ? 'opacity-0 group-hover:opacity-100' : 'opacity-0')
                }
                style={{ pointerEvents: 'none' }}
              >
                LIVE
              </motion.div>
            </div>
          </motion.div>
        </>
      ) : (
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Play size={20} className="text-green-400" />
            </motion.div>
            <h3 className="text-green-400">Project Preview</h3>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group h-96 cursor-pointer overflow-hidden rounded-lg border-2 border-green-400/30 hover:border-green-400/60 transition-all duration-500"
          >
            <img
              src={project.animatedPreview}
              alt={`${project.title} animated demo fallback`}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500 absolute inset-0 z-10 bg-black/20"
              style={{ pointerEvents: 'none' }}
            />
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}


interface ProjectInfoCardsProps {
  project: ProjectData;
  isInView: boolean;
}

export function ProjectInfoCards({ project, isInView }: ProjectInfoCardsProps) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Calendar className="text-blue-400" size={24} />
            <h3 className="text-blue-400 text-lg">Timeline</h3>
          </div>
          <p className="text-3xl mb-2">{project.timeline}</p>
          <p className="text-gray-400">Development Period</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Users className="text-blue-400" size={24} />
            <h3 className="text-blue-400 text-lg">Team</h3>
          </div>
          <p className="text-3xl mb-2">{project.team}</p>
          <p className="text-gray-400">Project Structure</p>
        </motion.div>

        <motion.div
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Monitor className="text-blue-400" size={24} />
            <h3 className="text-blue-400 text-lg">Category</h3>
          </div>
          <p className="text-3xl mb-2 capitalize">{project.category}</p>
          <p className="text-gray-400">Project Type</p>
        </motion.div>
      </motion.div>
      {/* Technologies Used */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="text-center mb-16"
      >
        <h3 className="text-3xl mb-8">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technologies Used
          </span>
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {project.tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all backdrop-blur-sm"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

