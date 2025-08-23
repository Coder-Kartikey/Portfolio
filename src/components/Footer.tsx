import React from "react";
import { motion } from "framer-motion";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import logoImage from '../assets/images/logo-image.png'

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:#' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* First Column - Brand name and logo, Discription and Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center overflow-hidden p-1">
                <img
                  src={logoImage}
                  alt="CoderKP Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl text-white">CoderKP</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Full Stack Developer passionate about creating innovative solutions with AI/ML integration.
              Building the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-400/10 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Secound Column - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Third Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-start"
          >
            <h3 className="text-white mb-4">Get in Touch</h3>
            <div className="space-y-2">
              <p className="text-gray-400">
                <a href="mailto:#" className="hover:text-blue-400 transition-colors">
                  coderkp@example.com
                </a>
              </p>
              <p className="text-gray-400">Prayagraj, UP</p>
              <p className="text-gray-400">
                <a href="tel:+91" className="hover:text-blue-400 transition-colors">
                  +91 73098 XXXXX
                </a>
              </p>
            </div>
          </motion.div>

          {/* Fourth Column - Back to Top Button */}
          <div className="flex justify-center md:justify-end">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors group"
            >
              <ArrowUp size={20} className="text-gray-400 group-hover:text-white" />
            </motion.button>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>&copy; {currentYear} CodeKP.</span>
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="text-red-500" size={16} fill="currentColor" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>
            {/* Fun Footer Message */}
            <p className="text-gray-500 text-xs font-mono">
              console.log("Thanks for visiting! 🚀");
            </p>
          </div>
        </motion.div>
      </div >
    </footer >
  );
};
