import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Briefcase, 
  Trophy, 
  GraduationCap, 
  Users, 
  Calendar, 
  MapPin, 
  Award, 
  Code, 
  Rocket, 
  Zap,
  Star,
  CheckCircle,
  Target,
  Lightbulb,
  Medal,
  Crown,
  Coffee,
  Building
} from 'lucide-react';

export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Timeline categories
  const categories = [
    { id: 'all', label: 'All', icon: Star },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'hackathons', label: 'Hackathons', icon: Code },
    { id: 'training', label: 'Training', icon: GraduationCap },
    { id: 'leadership', label: 'Leadership', icon: Crown },
  ];

  // Timeline data - you can customize this with your actual achievements
  const timelineData = [
    {
      id: '1',
      category: 'leadership',
      type: 'Leadership',
      title: 'Training & Placement Coordinator',
      organization: 'Computer Science Department',
      location: 'College Campus',
      duration: 'Aug 2024 - Present',
      status: 'ongoing',
      description: 'Leading the T&P activities for CS department, organizing career guidance sessions, coordinating with companies for placement drives, and mentoring junior students.',
      achievements: [
        'Increased placement participation by 40%',
        'Organized 15+ career guidance sessions',
        'Coordinated with 25+ companies'
      ],
      skills: ['Leadership', 'Communication', 'Event Management'],
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      id: '2',
      category: 'hackathons',
      type: 'Hackathon',
      title: 'Smart India Hackathon 2024',
      organization: 'Government of India',
      location: 'National Level',
      duration: 'Sep 2024',
      status: 'completed',
      description: 'Developed an AI-powered solution for smart city management. Built a comprehensive platform integrating IoT sensors, machine learning, and real-time analytics.',
      achievements: [
        'Secured Top 10 position nationally',
        'Developed end-to-end AI solution',
        'Led a team of 6 developers'
      ],
      skills: ['AI/ML', 'IoT', 'Team Leadership', 'React'],
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/10'
    },
    {
      id: '3',
      category: 'training',
      type: 'Certification',
      title: 'Full Stack Web Development',
      organization: 'Tech Training Institute',
      location: 'Online',
      duration: 'Jun 2024 - Aug 2024',
      status: 'completed',
      description: 'Comprehensive training in MERN stack development, including advanced topics like microservices, deployment strategies, and performance optimization.',
      achievements: [
        'Built 5+ full-stack applications',
        'Mastered MERN stack development',
        'Achieved 95% course completion score'
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10'
    },
    {
      id: '4',
      category: 'internships',
      type: 'Internship',
      title: 'Frontend Development Intern',
      organization: 'Tech Startup',
      location: 'Remote',
      duration: 'May 2024 - Jul 2024',
      status: 'completed',
      description: 'Worked on developing responsive web applications using React and modern UI frameworks. Collaborated with design team to implement pixel-perfect interfaces.',
      achievements: [
        'Improved app performance by 30%',
        'Implemented 20+ UI components',
        'Reduced loading time by 40%'
      ],
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git'],
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: '5',
      category: 'leadership',
      type: 'Event',
      title: 'TechFest Hackathon Organizer',
      organization: 'College Technical Society',
      location: 'College Campus',
      duration: 'Mar 2024',
      status: 'completed',
      description: 'Organized and managed a 48-hour hackathon with 200+ participants. Handled logistics, mentoring, judging coordination, and sponsor relations.',
      achievements: [
        'Successfully managed 200+ participants',
        'Coordinated with 10+ industry mentors',
        'Secured ₹2L+ in prizes and sponsorships'
      ],
      skills: ['Event Management', 'Project Coordination', 'Networking'],
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-500/10'
    },
    {
      id: '6',
      category: 'hackathons',
      type: 'Hackathon',
      title: 'HackIndia 2024',
      organization: 'Tech Community',
      location: 'Delhi',
      duration: 'Jan 2024',
      status: 'completed',
      description: 'Built an AI-powered expense tracker with natural language processing for automatic categorization and smart budget recommendations.',
      achievements: [
        'Won Best AI Implementation Award',
        'Integrated GPT API successfully',
        'Completed project in 36 hours'
      ],
      skills: ['Python', 'OpenAI API', 'React', 'Machine Learning'],
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  // Filter timeline data based on active category
  const filteredData = activeCategory === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.category === activeCategory);

  // Sort by date (assuming more recent items have higher IDs for demo)
  const sortedData = filteredData.sort((a, b) => parseInt(b.id) - parseInt(a.id));

  return (
    <section ref={ref} className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-32 right-20 w-24 h-24 border border-blue-500/10 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 6, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 border border-purple-500/10 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.2, 1]
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity }
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            {/* <Target className="text-blue-400" size={32} /> */}
            <h2 className="text-4xl">Journey & Achievements</h2>
            {/* <Target className="text-blue-400" size={32} /> */}
          </div>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive timeline of my professional journey, achievements, and contributions to the tech community.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex justify-center flex-wrap gap-2 p-2 bg-gray-800 rounded-xl border border-gray-700">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon size={16} />
                <span>{category.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

          {/* Timeline Items */}
          <div className="space-y-8">
            {sortedData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-900 z-10 ${item.bgColor}`}
                  style={{
                    background: `linear-gradient(135deg, ${item.color.split(' ')[1]}, ${item.color.split(' ')[3]})`
                  }}
                />

                {/* Content Card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    rotateY: index % 2 === 0 ? 2 : -2
                  }}
                  className={`ml-12 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="group relative bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                    {/* Gradient Background */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-3">
                          <motion.div 
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, -5, 5, 0]
                            }}
                            transition={{ duration: 0.4 }}
                            className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.bgColor} group-hover:shadow-lg transition-all duration-300`}
                            style={{
                              background: `linear-gradient(135deg, ${item.color.split(' ')[1]}20, ${item.color.split(' ')[3]}20)`
                            }}
                          >
                            <item.icon size={20} className={item.color.includes('blue') ? 'text-blue-400' : 
                              item.color.includes('purple') ? 'text-purple-400' :
                              item.color.includes('green') ? 'text-green-400' :
                              item.color.includes('yellow') ? 'text-yellow-400' :
                              item.color.includes('orange') ? 'text-orange-400' : 'text-blue-400'} />
                          </motion.div>
                          
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className={`px-2 py-1 text-xs rounded-full ${item.bgColor} font-medium`}>
                                {item.type}
                              </span>
                              {item.status === 'ongoing' && (
                                <motion.div
                                  animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity
                                  }}
                                  className="flex items-center space-x-1"
                                >
                                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                  <span className="text-xs text-green-400">Ongoing</span>
                                </motion.div>
                              )}
                            </div>
                            <h3 className="text-xl text-white group-hover:text-blue-300 transition-colors">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                              <div className="flex items-center space-x-1">
                                <Building size={14} />
                                <span>{item.organization}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={14} />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* <div className="text-right">
                          <div className="flex items-center space-x-1 text-blue-400 text-sm">
                            <Calendar size={14} />
                            <span>{item.duration}</span>
                          </div>
                        </div> */}
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4 group-hover:text-gray-200 transition-colors">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-blue-400 mb-2 flex items-center space-x-1">
                          <Award size={14} />
                          <span>Key Achievements</span>
                        </h4>
                        <div className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 + i * 0.05 }}
                              className="flex items-center space-x-2 text-sm text-gray-400"
                            >
                              <CheckCircle size={12} className="text-green-400" />
                              <span>{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-medium text-blue-400 mb-2">Skills Applied</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600 hover:border-blue-500/50 hover:text-white transition-all duration-200"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating Effects */}
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
                      <Star size={16} className="text-yellow-400" />
                    </motion.div>

                    {/* Hover Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {hoveredItem === item.id && [...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-blue-400 rounded-full"
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
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Lightbulb className="text-yellow-400" size={24} />
              <h3 className="text-xl text-blue-400">The Journey Continues...</h3>
              <Lightbulb className="text-yellow-400" size={24} />
            </div>
            <p className="text-gray-400 mb-4">
              Every experience shapes the developer I'm becoming.
            </p>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-400"
            >
              <Rocket size={24} className="mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}