'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MainButton from '@/components/MainButton';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiPython 
} from 'react-icons/si';

const skills = [
  { 
    title: 'HTML5', 
    icon: SiHtml5, 
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
  { 
    title: 'CSS3', 
    icon: SiCss3, 
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  { 
    title: 'JavaScript', 
    icon: SiJavascript, 
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  { 
    title: 'ReactJS', 
    icon: SiReact, 
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  { 
    title: 'NodeJS', 
    icon: SiNodedotjs, 
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  { 
    title: 'Python', 
    icon: SiPython, 
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
];

const timelineItems = [
  {
    year: '2010 - present',
    title: 'Web Developer',
    company: 'Vircrosoft',
    description: 'Built and maintained high-performance web applications.',
  },
  {
    year: '2008 - 2011',
    title: 'Software Engineer',
    company: 'Boogle, Inc.',
    description: 'Designed scalable backend systems and APIs.',
  },
  {
    year: '2016 - 2017',
    title: 'C++ Programmer',
    company: 'Slime Tech',
    description: 'Created optimized game engines and simulations.',
  },
  {
    year: '2009 - 2013',
    title: 'Business Degree',
    company: 'Sussex University',
    description: 'Studied business strategy and project management.',
  },
  {
    year: '2013 - 2016',
    title: 'Computer Science Degree',
    company: 'Brookes University',
    description: 'Focused on software engineering and AI.',
  },
  {
    year: '2017 - present',
    title: '3D Animation',
    company: 'Brighton University',
    description: 'Explored interactive media and visual storytelling.',
  },
];

export default function AboutPage() {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <main 
      ref={ref}
      className="relative w-full min-h-screen py-16 px-6 md:px-12 lg:px-24 
      dark:bg-[color:var(--color-background-d)] bg-[color:var(--color-background-l)] 
      dark:text-[color:var(--color-text-d)] text-[color:var(--color-text-l)]"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 z-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 
        dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20 opacity-30 pointer-events-none"
      />

      <div ref={containerRef} className="container mx-auto relative z-10">
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mb-16"
        >
          <motion.h2 
            style={{ y: textY }}
            className="text-4xl font-bold text-center"
          >
            About <span className="text-[color:var(--color-scampi-l)] dark:text-[color:var(--color-scampi-d)]">me</span>
            <motion.span 
              className="block absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 
              opacity-10 text-6xl whitespace-nowrap 
              dark:text-[color:var(--color-jacarta-d)] text-[color:var(--color-jacarta-l)]"
            >
              my journey
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* About Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold mb-4 text-[color:var(--color-downy-l)] dark:text-[color:var(--color-downy-d)]">
              Information About me
            </h4>
            <p className="text-lg mb-6 dark:text-gray-300 text-gray-700">
              I'm a passionate developer who loves building interactive and scalable web applications. 
              With a strong foundation in both frontend and backend technologies, I thrive in full-stack environments.
              <br /><br />
              I also enjoy exploring creative disciplines like 3D animation and visual storytelling, which bring a unique flair to my projects.
            </p>
            <MainButton text="Download CV" icon="fas fa-download" />
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Projects Completed', value: '650+' },
              { label: 'Years of Experience', value: '10+' },
              { label: 'Happy Clients', value: '300+' },
              { label: 'Customer Reviews', value: '400+' },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)"
                }}
                className="p-6 border rounded-xl 
                dark:border-gray-700 border-gray-300 
                bg-white/60 dark:bg-gray-800/60 
                backdrop-blur-md 
                transition-all duration-300 
                hover:border-[color:var(--color-scampi-l)] 
                dark:hover:border-[color:var(--color-scampi-d)]"
              >
                <p className="text-3xl font-extrabold 
                text-[color:var(--color-scampi-l)] 
                dark:text-[color:var(--color-scampi-d)]">
                  {item.value}
                </p>
                <p className="text-lg">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h4 className="text-2xl font-bold mb-8 text-center 
          text-[color:var(--color-downy-l)] dark:text-[color:var(--color-downy-d)]">
            My Skills
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-5 py-3 rounded-full 
                  ${skill.bgColor} ${skill.color} 
                  font-semibold shadow-md cursor-pointer 
                  transition-all duration-300 group`}
                >
                  <SkillIcon className="text-2xl group-hover:animate-bounce" />
                  <span>{skill.title}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-2xl font-bold mb-8 text-center 
          text-[color:var(--color-downy-l)] dark:text-[color:var(--color-downy-d)]">
            My Timeline
          </h4>
          <div className="relative before:content-[''] before:absolute before:top-0 before:bottom-0 
          before:w-0.5 before:bg-[color:var(--color-scampi-l)] 
          dark:before:bg-[color:var(--color-scampi-d)] 
          before:left-1/2 before:-translate-x-1/2">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.2
                }}
                viewport={{ once: true }}
                className={`mb-8 flex items-center w-full 
                ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="w-1/2"></div>
                <div className="relative w-1/2 pl-8 pr-4 py-4">
                  <div className="absolute w-4 h-4 
                  bg-[color:var(--color-scampi-l)] 
                  dark:bg-[color:var(--color-scampi-d)] 
                  rounded-full 
                  top-1/2 -translate-y-1/2 
                  -left-2 z-10" />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 
                    border dark:border-gray-700 
                    rounded-xl p-6 shadow-lg 
                    transition-all duration-300"
                  >
                    <p className="text-sm text-gray-400 mb-1">{item.year}</p>
                    <h5 className="text-xl font-semibold mb-1">
                      {item.title} 
                      <span className="text-[color:var(--color-scampi-l)] 
                      dark:text-[color:var(--color-scampi-d)]"> 
                        - {item.company}
                      </span>
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}