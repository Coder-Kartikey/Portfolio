import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { IconType } from 'react-icons';
import { VscVscode } from 'react-icons/vsc';
import { FaJava, FaNetworkWired, FaProjectDiagram, FaCubes, FaServer, FaDatabase, FaLayerGroup } from 'react-icons/fa';
import { SiReact, SiHtml5, SiTypescript, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiPython, SiFastapi, SiTensorflow, SiScikitlearn, SiFirebase, SiPostgresql, SiMongoose, SiMongodb, SiMysql, SiSupabase, SiMui, SiShadcnui, SiOpencv, SiNumpy, SiKeras, SiJavascript, SiCplusplus, SiRedux, SiRedis, SiWebpack, SiPostman, SiCloudinary, SiNpm, SiFigma, SiVercel, SiGithub, SiRender, SiCanva, SiAuthentik, SiJsonwebtokens, SiGooglecolab, SiSocketdotio, SiPassport } from 'react-icons/si';
// import { Sparkles } from 'lucide-react';


type Skill = {
  name: string;
  icon: IconType;
  iconColor: string;
  color: string;
};

type SkillCategory = {
  title: string;
  icon: string;
  skills: Skill[];
};

export default function Skills() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, iconColor: '#8CC84B', color: 'from-green-400 to-green-600' },
        { name: 'TypeScript', icon: SiTypescript, iconColor: '#3178C6', color: 'from-gray-500 to-gray-700' },
        { name: 'Python', icon: SiPython, iconColor: '#3776AB', color: 'from-yellow-400 to-yellow-600' },
        { name: 'C++', icon: SiCplusplus, iconColor: '#00599C', color: 'from-teal-400 to-teal-600' },
        { name: 'Java', icon: FaJava, iconColor: '#F89820', color: 'from-pink-400 to-pink-600' },
        { name: 'HTML5 / CSS3', icon: SiHtml5, iconColor: '#5C3EE8', color: 'from-green-600 to-green-800' },
      ]
    },
    {
      title: 'Architecture & Paradigms',
      icon: '🏛️',
      skills: [
        { name: 'RESTful APIs', icon: FaNetworkWired, iconColor: '#8CC84B', color: 'from-green-400 to-green-600' },
        { name: 'MVC Pattern', icon: FaProjectDiagram, iconColor: '#6366F1', color: 'from-indigo-400 to-indigo-600' },
        { name: `OOP`, icon: FaCubes, iconColor: '#F59E42', color: 'from-yellow-400 to-yellow-600' },
        { name: 'Microservices', icon: FaServer, iconColor: '#10B981', color: 'from-teal-400 to-teal-600' },
        { name: 'Authentication', icon: SiAuthentik, iconColor: '#FD4B2D', color: 'from-green-600 to-green-800' },
        { name: 'State Management', icon: FaLayerGroup, iconColor: '#F89820', color: 'from-pink-400 to-pink-600' }
      ]
    },
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'React', icon: SiReact, iconColor: '#61DAFB', color: 'from-blue-400 to-blue-600' },
        { name: 'Redux Toolkit', icon: SiRedux, iconColor: '#764ABC', color: 'from-blue-500 to-blue-700' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, iconColor: '#06B6D4', color: 'from-cyan-400 to-cyan-600' },
        { name: 'Shadcn UI', icon: SiShadcnui, iconColor: '#000000', color: 'from-gray-600 to-gray-800' },
        { name: 'Material UI', icon: SiMui, iconColor: '#007FFF', color: 'from-green-400 to-green-600' },
        { name: 'Bootstrap', icon: SiBootstrap, iconColor: '#7952B3', color: 'from-blue-400 to-purple-600' },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, iconColor: '#8CC84B', color: 'from-green-400 to-green-600' },
        { name: 'Express.js', icon: SiExpress, iconColor: '#000000', color: 'from-gray-500 to-gray-700' },
        { name: 'FastAPI', icon: SiFastapi, iconColor: '#009688', color: 'from-teal-400 to-teal-600' },
        { name: 'Socket.IO', icon: SiSocketdotio, iconColor: '#010101', color: 'from-gray-600 to-gray-800' },
        { name: 'Mongoose', icon: SiMongoose, iconColor: '#5C3EE8', color: 'from-green-600 to-green-800' },
        { name: 'Passport.js', icon: SiPassport, iconColor: '#34E27A', color: 'from-green-600 to-green-800' }
      ]
    },
    {
      title: 'AI/ML & Modern Technologies',
      icon: '🤖',
      skills: [
        { name: 'LangChain', icon: SiScikitlearn, iconColor: '#F7931E', color: 'from-orange-300 to-orange-500' },
        { name: 'TensorFlow', icon: SiTensorflow, iconColor: '#FF6F20', color: 'from-orange-400 to-orange-600' },
        { name: 'Keras', icon: SiKeras, iconColor: '#D00000', color: 'from-red-400 to-red-600' },
        { name: 'NumPy', icon: SiNumpy, iconColor: '#013243', color: 'from-green-400 to-blue-600' },
        { name: 'OpenCV', icon: SiOpencv, iconColor: '#5C3EE8', color: 'from-green-400 to-blue-600' },
        { name: 'Faiss', icon: FaDatabase, iconColor: '#FFD21E', color: 'from-purple-400 to-purple-600' },
      ]
    },
    {
      title: 'Database & BaaS',
      icon: '☁️',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, iconColor: '#4DB33D', color: 'from-green-500 to-green-700' },
        { name: 'MySQL', icon: SiMysql, iconColor: '#00758F', color: 'from-blue-500 to-blue-700' },
        { name: 'PostgreSQL', icon: SiPostgresql, iconColor: '#336791', color: 'from-blue-600 to-blue-800' },
        { name: 'Supabase', icon: SiSupabase, iconColor: '#3FCF8E', color: 'from-red-400 to-red-600' },
        { name: 'Firebase', icon: SiFirebase, iconColor: '#DD2C00', color: 'from-yellow-500 to-orange-600' },
        { name: 'Redis', icon: SiRedis, iconColor: '#2496ED', color: 'from-blue-400 to-blue-600' },
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', icon: SiGithub, iconColor: '#181717', color: 'from-gray-800 to-gray-600' },
        { name: 'Google Colab', icon: SiGooglecolab, iconColor: '#FF9900', color: 'from-yellow-400 to-yellow-600' },
        { name: 'JWT (JSON Web Tokens)', icon: SiJsonwebtokens, iconColor: '#2496ED', color: 'from-blue-400 to-blue-600' },
        { name: 'Vercel', icon: SiVercel, iconColor: '#000000', color: 'from-gray-800 to-gray-600' },
        { name: 'Render', icon: SiRender, iconColor: '#FCC624', color: 'from-yellow-400 to-yellow-600' },
        { name: 'Postman', icon: SiPostman, iconColor: '#FF6C37', color: 'from-orange-400 to-orange-600' },
        { name: 'VS Code', icon: VscVscode, iconColor: '#007ACC', color: 'from-blue-400 to-blue-600' },
        { name: 'Figma', icon: SiFigma, iconColor: '#F24E1E', color: 'from-red-400 to-red-600' },
        { name: 'Canva', icon: SiCanva, iconColor: '#00C4CC', color: 'from-blue-400 to-blue-600' },
        { name: 'npm', icon: SiNpm, iconColor: '#CB3837', color: 'from-red-400 to-red-600' },
        { name: 'Webpack', icon: SiWebpack, iconColor: '#8DD6F9', color: 'from-blue-400 to-blue-600' },
        { name: 'Cloudinary', icon: SiCloudinary, iconColor: '#F7B93A', color: 'from-yellow-400 to-yellow-600' }
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
                        {React.createElement(skill.icon as React.ElementType, { className: 'w-7 h-7', color: skill.iconColor })}
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
              This section is a living snapshot of my current passions and projects.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
