import React, { useRef, useState } from "react";
import type { ElementType } from 'react';
import { motion, useInView } from "framer-motion";
import {
  Briefcase,
  Trophy,
  GraduationCap,
  Users,
  MapPin,
  Award,
  Code,
  Rocket,
  Star,
  CheckCircle,
  Lightbulb,
  Crown,
  Building
} from 'lucide-react';
import { TbTrophy } from "react-icons/tb";
export default function Timeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Timeline categories
  const categories: { id: string; label: string; icon: ElementType }[] = [
    { id: 'all', label: 'All', icon: Star },
    { id: 'internships', label: 'Internships', icon: Briefcase },
    { id: 'hackathons', label: 'Hackathons', icon: Code },
    { id: 'training', label: 'Training', icon: GraduationCap },
    { id: 'leadership', label: 'Leadership', icon: Crown },
  ];

  // Timeline data 
  const timelineData: Array<{
    id: string;
    category: string;
    type: string;
    title: string;
    organization: string;
    location: string;
    duration: string;
    status: string;
    description: string;
    achievements: string[];
    skills: string[];
    icon: ElementType;
    color: string;
    bgColor: string;
  }> = [
      {
        id: '1',
        category: 'leadership',
        type: 'Leadership',
        title: 'Training & Placement Coordinator',
        organization: 'T&P Cell',
        location: 'College Campus',
        duration: 'Aug 2024 - Present',
        status: 'ongoing',
        description: 'Serving as the primary liaison between the student body and potential employers. My role involves organizing career workshops, managing company outreach, and mentoring students to prepare them for recruitment processes.',
        achievements: [
          'Facilitating connections with tech companies',
          'Organizing career development sessions',
          'Mentoring junior students on resume building'
        ],
        skills: ['Leadership', 'Communication', 'Event Management', 'Networking'],
        icon: Crown,
        color: 'from-purple-500 to-pink-500',
        bgColor: 'bg-purple-500/10'
      },
      {
        id: '2',
        category: 'leadership',
        type: 'Leadership',
        title: 'Organizer, SIH 2025',
        organization: 'Smart India Hackathon',
        location: 'College Campus',
        duration: 'Ongoing',
        status: 'ongoing',
        description: 'Leading the organization of our college\'s internal Smart India Hackathon. My responsibilities include coordinating teams, mentoring participants on project ideation, and managing the overall event logistics.',
        achievements: [
          'Leading the largest technical event on campus',
          'Mentoring 20+ student teams',
          'Coordinating with faculty and judges'
        ],
        skills: ['Leadership', 'Project Management', 'Mentoring'],
        icon: Users,
        color: 'from-indigo-500 to-purple-500',
        bgColor: 'bg-indigo-500/10'
      },
      {
        id: '3',
        category: 'training',
        type: 'Open Source Contribution',
        title: 'Open Source Contributor',
        organization: 'GirlScript Summer of Code',
        location: 'Remote',
        duration: 'May 2024 - Aug 2024',
        status: 'completed',
        description: 'Contributed to various open-source projects, focusing on frontend and UI/UX enhancements using React.js. My key contribution involved a major optimization that significantly reduced page load times.',
        achievements: [
          'Reduced application load time by 75%',
          'Contributed to multiple open-source codebases',
          'Collaborated in a remote, agile environment'
        ],
        skills: ['Open Source', 'React.js', 'UI/UX', 'Optimization'],
        icon: GraduationCap,
        color: 'from-green-500 to-emerald-500',
        bgColor: 'bg-green-500/10'
      },
      {
        id: '4',
        category: 'internships',
        type: 'Internship',
        title: 'Cyber Security Intern',
        organization: 'IBM SkillsBuild',
        location: 'Remote',
        duration: 'Jan 2025 - Feb 2025',
        status: 'completed',
        description: 'Gained hands-on experience in enterprise-level security protocols. My work involved identifying security flaws in simulated applications and applying threat modeling principles to develop secure application designs.',
        achievements: [
          'Identified and analyzed security flaws',
          'Applied modern threat modeling techniques',
          'Strengthened understanding of secure design'
        ],
        skills: ['Cyber Security', 'Threat Modeling', 'Vulnerability Analysis'],
        icon: Briefcase,
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-500/10'
      },
      {
        id: '5',
        category: 'hackathons',
        type: 'Hackathon',
        title: 'Bharatiya Antariksh Hackathon 2025',
        organization: 'ISRO',
        location: 'National Level',
        duration: '2025',
        status: 'completed',
        description: 'Developed "Warden AI," a Deep Learning project leveraging a custom CNN to detect forest fires from satellite imagery. This project was my official submission for the hackathon, focusing on aiding disaster response.',
        achievements: [
          'Developed a custom CNN model with TensorFlow',
          'Achieved over 90% validation accuracy',
          'Applied advanced computer vision techniques'
        ],
        skills: ['Deep Learning', 'CNN', 'TensorFlow', 'Computer Vision'],
        icon: Trophy,
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-500/10'
      },
      {
        id: '6',
        category: 'hackathons',
        type: 'Hackathon',
        title: 'Level 4 Cleared in Bajaj HackRx 6.0',
        organization: 'Bajaj Finserv',
        location: 'Online',
        duration: 'Multi-Stage Event',
        status: 'completed',
        description: 'Developed a high-throughput RAG Pipeline API using Gemini and FastAPI. Engineered an advanced fusion retrieval system and a dynamic API key rotation to handle high performance benchmarks.',
        achievements: [
          'Successfully cleared Level 4 testing',
          'Engineered a high-performance RAG API',
          'Implemented advanced fusion retrieval'
        ],
        skills: ['Generative AI', 'FastAPI', 'LangChain', 'Python'],
        icon: TbTrophy as ElementType,
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-500/10'
      },
      {
        id: '7',
        category: 'hackathons',
        type: 'Competitive Programming',
        title: 'Finalist in Reverse CodingX',
        organization: 'IIT Madras',
        location: 'National Level',
        duration: 'Jan 2025',
        status: 'completed',
        description: 'Achieved a finalist position among 1,841 participants in a high-pressure reverse coding competition. This required quickly analyzing complex code behavior to deduce the underlying algorithms and logic.',
        achievements: [
          'Ranked as a Finalist (Top Tier)',
          'Competed against 1800+ participants',
          'Demonstrated advanced problem-solving skills'
        ],
        skills: ['Algorithms', 'Problem-Solving', 'C++', 'Data Structures'],
        icon: Trophy,
        color: 'from-yellow-500 to-orange-500',
        bgColor: 'bg-yellow-500/10'
      },
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
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm transition-all duration-300 ${activeCategory === category.id
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
                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
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
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
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