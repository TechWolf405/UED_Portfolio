'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import MainButton from '@/components/MainButton';
import SkillCard from '@/components/SkillCard';
import TimelineItem from '@/components/TimelineItem';

const skills = [
  { title: 'Python' },
  { title: 'HTML/CSS' },
  { title: 'JavaScript' },
  { title: 'C/C++' },
  { title: 'Java' },
  { title: 'React' },
  { title: 'Flask' },
  { title: 'Numpy' },
  { title: 'Pandas' },
  { title: 'Matplotlib' },
  { title: 'Tkinter' },
  { title: 'Selenium' },
  { title: 'MySQL' },
  { title: 'SQLAlchemy' },
  { title: 'Git' },
  { title: 'GitHub' },
  { title: 'Postman' },
  { title: 'Figma' },
  { title: 'Justinmind' },
  { title: 'Canva' },
  { title: 'Tableau' },
  { title: 'PowerBi' },
];

// Timeline data - updated with your education and experience
const timelineItems = [
  {
    year: '2025 - present',
    title: 'Exponential Award',
    company: 'SPIT Alumni Network',
    description: 'Honored for exceptional personal and academic growth in Computer Engineering.',
  },
  {
    year: '2024',
    title: 'Topper in Developing Soft Skills',
    company: 'NPTEL',
    description: 'Achieved top position in Developing Soft Skills and Personality course by Prof. T. Ravichandran.',
  },
  {
    year: '2024',
    title: 'Completing 100 Days of Code: The Complete Python Pro Bootcamp by Angela Yu',
    company: 'Udemy',
    description: 'Gained hands-on experience using various Python libraries like Selenium, Numpy, and Pandas, and made my own Blog Website with User authentication and Content Management.',
  },
  {
    year: '2023',
    title: 'SE Hackathon Recognition',
    company: 'SPIT',
    description: 'Secured a position among TOP 12 teams in SE Hackathon organized by SPIT.',
  },
  {
    year: '2023',
    title: 'Topper in Enhancing Soft Skills and Personality',
    company: 'NPTEL',
    description: 'Achieved top position in enhancing Soft Skills and Personality course by Prof. T. Ravichandran.',
  },
  {
    year: '2022',
    title: 'B.Tech in Computer Engineering',
    company: 'Sardar Patel Institute of Technology',
    description: 'CGPA: 7.68. Focusing on computer engineering fundamentals and expanding software development skills.',
  },
  {
    year: '2022',
    title: 'HSC Grade 12',
    company: 'Shri T.P. Bhatia College of Science',
    description: 'Completed Higher Secondary Certificate with 73.67%, with focus on science and mathematics.',
  },
  {
    year: '2020',
    title: 'SSC Grade 10',
    company: 'Kid\'s Land High School',
    description: 'Completed Secondary School Certificate with an excellent score of 95.64%.',
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
        className="fixed inset-0 z-0 
        dark:bg-gradient-to-br dark:from-[color:var(--color-jacarta-d)]/20 
        dark:via-[color:var(--color-deluge-d)]/20 dark:to-[color:var(--color-ship-cove-d)]/20
        bg-gradient-to-br from-[color:var(--color-careys-pink-l)]/30 
        via-[color:var(--color-ship-cove-l)]/30 to-[color:var(--color-wedgewood-l)]/30 
        opacity-30 pointer-events-none"
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
            className="text-4xl font-bold text-center 
            dark:text-[color:var(--color-text-d)] text-[color:var(--color-text-l)]"
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
            <h4 className="text-2xl font-bold mb-4 
            text-[color:var(--color-downy-l)] dark:text-[color:var(--color-downy-d)]">
              Information About me
            </h4>
            <p className="text-lg mb-6 
            dark:text-gray-300 text-gray-700">
              I am a motivated Software Developer and BTech student in Computer Engineering with a 
              strong foundation in Python for backend development and HTML, CSS, and JavaScript for 
              frontend work. <br /> <br /> I have hands-on experience using various Python libraries 
              like Selenium, Numpy, and Pandas, and I'm comfortable integrating APIs. Currently, 
              I'm diving into React, aiming to become a full-stack developer. I'm passionate about 
              leveraging technology to create impactful solutions and enjoy collaborating on projects 
              that challenge me to grow my skills.
            </p>
            <div className="btn-con">
              <MainButton text="Download CV" icon="fas fa-download" />
            </div>
          </motion.div>
          
          <div className="right-about grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { value: '7.68', label: 'CGPA\nBTech' },
              { value: '95.6%', label: 'SSC\nGrade 10' },
              { value: 'Top 12', label: 'SE\nHackathon' },
              { value: '2025', label: 'Exponential\nAward' }
            ].map((item, index) => (
              <div 
                key={index} 
                className="about-item border 
                dark:border-gray-700 border-gray-300 
                p-8 rounded-lg 
                dark:bg-gradient-to-r dark:from-[color:var(--color-jacarta-d)]/30 
                dark:to-[color:var(--color-deluge-d)]/30
                bg-gradient-to-r from-[color:var(--color-careys-pink-l)]/30 
                to-[color:var(--color-ship-cove-l)]/30
                transition-all duration-300 hover:transform hover:translate-y-[-5px]"
              >
                <div className="abt-text">
                  <p className="large-text text-4xl font-extrabold 
                  text-[color:var(--color-scampi-l)] dark:text-[color:var(--color-scampi-d)]">
                    {item.value}
                  </p>
                  <p className="small-text text-lg dark:text-gray-300 text-gray-700">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Skills section */}
        <div className="about-stats mb-16">
          <h4 className="stat-title text-2xl font-bold mb-8 
          text-[color:var(--color-downy-l)] dark:text-[color:var(--color-downy-d)]">
            My Skills
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} />
            ))}
          </div>
        </div>
        
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
          before:w-0.5 
          before:bg-[color:var(--color-scampi-l)] 
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
                    className="
                    dark:bg-[color:var(--color-jacarta-d)] bg-white 
                    dark:border-[color:var(--color-deluge-d)] border-gray-200
                    border rounded-xl p-6 shadow-lg 
                    transition-all duration-300"
                  >
                    <p className="text-sm 
                    dark:text-gray-400 text-gray-500 
                    mb-1">{item.year}</p>
                    <h5 className="text-xl font-semibold mb-1 
                    dark:text-[color:var(--color-text-d)] text-[color:var(--color-text-l)]">
                      {item.title} 
                      <span className="
                      text-[color:var(--color-scampi-l)] 
                      dark:text-[color:var(--color-scampi-d)]"> 
                        - {item.company}
                      </span>
                    </h5>
                    <p className="
                    dark:text-gray-300 text-gray-700">
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