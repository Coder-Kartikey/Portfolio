import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import logoImage from '../assets/images/logo-image.png';
import resume from '../assets/pdfs/resume.pdf';

interface HeaderProps {
  activeSection: string;
}


export default function Header( { activeSection }: HeaderProps) {


  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center overflow-hidden p-1">
                <img 
                  src={logoImage} 
                  alt="CoderKP Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <motion.div
                className="absolute inset-0 bg-blue-500 rounded-lg opacity-50"
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(59, 130, 246, 0.7)',
                    '0 0 0 10px rgba(59, 130, 246, 0)',
                    '0 0 0 0 rgba(59, 130, 246, 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-xl text-white">CoderKP</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  activeSection === item.id 
                    ? 'text-blue-400' 
                    : 'text-gray-300 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Resume Button - Always Visible */}
          <div className="flex items-center space-x-4">
            <motion.a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-blue-800 hover:bg-blue-700 rounded-lg transition-colors text-sm"
            >
              <FileText size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Resume</span>
              <span className="sm:hidden text-xs">CV</span>
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-400 bg-gray-800' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              {/* Resume button removed from mobile menu since it's now always visible */}
            </div>
          </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
};
