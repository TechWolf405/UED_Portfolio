"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { HiCode, HiOutlinePencilAlt, HiOutlineLightBulb } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Show skills animation after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkills(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Skill items for the animated bubble
  const skillItems = [
    { icon: HiCode, label: "React", color: "bg-[color:var(--color-downy-l)] dark:bg-[color:var(--color-downy-d)]" },
    { icon: HiOutlinePencilAlt, label: "UI/UX", color: "bg-[color:var(--color-deluge-l)] dark:bg-[color:var(--color-deluge-d)]" },
    { icon: HiOutlineLightBulb, label: "Design", color: "bg-[color:var(--color-careys-pink-l)] dark:bg-[color:var(--color-careys-pink-d)]" },
  ];

  return (
    <section className="w-full min-h-screen py-12 md:py-8 px-8 md:px-12 flex items-start md:items-center relative overflow-hidden">
      {/* Left margin for navbar on mobile */}
      <div className="absolute top-0 left-0 w-16 h-full bg-transparent z-10 md:hidden" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: (Math.random() * 100 - 50).toFixed(2), 
              y: (Math.random() * 100 - 50).toFixed(2),
              opacity: (0.2 + Math.random() * 0.3).toFixed(2)
            }}
            animate={{
              x: (Math.random() * 100 - 50).toFixed(2),
              y: (Math.random() * 100 - 50).toFixed(2),
              opacity: (0.2 + Math.random() * 0.3).toFixed(2)
            }}
            transition={{
              duration: (15 + Math.random() * 20).toFixed(2),
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className={`absolute ${
              ["w-64 h-64", "w-96 h-96", "w-48 h-48"][i % 3]
            } rounded-full blur-3xl ${
              [
                "from-[color:var(--color-downy-l)]/20 dark:from-[color:var(--color-downy-d)]/20", 
                "from-[color:var(--color-scampi-l)]/20 dark:from-[color:var(--color-scampi-d)]/20", 
                "from-[color:var(--color-careys-pink-l)]/20 dark:from-[color:var(--color-careys-pink-d)]/20"
              ][i % 3]
            } ${
              [
                "to-[color:var(--color-downy-l)]/5 dark:to-[color:var(--color-downy-d)]/5", 
                "to-[color:var(--color-scampi-l)]/5 dark:to-[color:var(--color-scampi-d)]/5", 
                "to-[color:var(--color-careys-pink-l)]/5 dark:to-[color:var(--color-careys-pink-d)]/5"
              ][i % 3]
            } bg-gradient-to-r`}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-background-l)] via-[color:var(--color-ship-cove-l)]/10 to-[color:var(--color-scampi-l)]/10 dark:from-[color:var(--color-background-d)] dark:via-[color:var(--color-ship-cove-d)]/10 dark:to-[color:var(--color-scampi-d)]/10 opacity-40 z-0" />

      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-center max-w-6xl gap-12 md:gap-16 z-10 pt-12 md:pt-0 pl-8 md:pl-0">
        {/* Left Column - Text & Buttons (Moved to top on mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full md:w-3/5 md:order-2 order-1 text-center md:text-left"
        >
          {/* Dynamic Typing Introduction */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 text-[color:var(--color-text-l)] dark:text-[color:var(--color-text-d)]">
            <TypeAnimation
              sequence={[
                'Hi, I\'m Anushka Jadhav', 
                1000, 
                'A UI/UX Designer', 
                1000,
                'A Web Developer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          {/* Gradient subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-lg md:text-xl mb-4 md:mb-5">
              Crafting digital experiences that blend 
              <span className="bg-gradient-to-r from-[color:var(--color-jacarta-l)] to-[color:var(--color-scampi-l)] dark:from-[color:var(--color-jacarta-d)] dark:to-[color:var(--color-scampi-d)] text-transparent bg-clip-text font-medium"> creativity with cutting-edge technology</span>
            </p>
          </motion.div>

          {/* Brief intro text */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[color:var(--color-chambray-l)] dark:text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto md:mx-0 text-sm md:text-base"
          >
            I specialize in creating intuitive interfaces and responsive websites
            that deliver exceptional user experiences across all devices.
            Let's build something amazing together!
          </motion.p>

          {/* Interactive Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
            {[
              { 
                icon: FaDownload, 
                text: 'Download CV', 
                color: 'bg-[color:var(--color-jacarta-l)] hover:bg-[color:var(--color-jacarta-l)]/80 dark:bg-[color:var(--color-jacarta-d)] dark:hover:bg-[color:var(--color-jacarta-d)]/80',
                href: '/resume.pdf'
              },
              { 
                icon: FaLinkedin, 
                text: 'LinkedIn', 
                color: 'bg-[color:var(--color-scampi-l)] hover:bg-[color:var(--color-scampi-l)]/80 dark:bg-[color:var(--color-scampi-d)] dark:hover:bg-[color:var(--color-scampi-d)]/80',
                href: 'https://linkedin.com/in/anushka-jadhav-a45411257'
              },
              { 
                icon: FaGithub, 
                text: 'GitHub', 
                color: 'bg-[color:var(--color-deluge-l)] hover:bg-[color:var(--color-deluge-l)]/80 dark:bg-[color:var(--color-deluge-d)] dark:hover:bg-[color:var(--color-deluge-d)]/80',
                href: 'https://github.com/TechWolf405'
              }
            ].map((button, index) => (
              <motion.a
                key={button.text}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.8 + index * 0.2,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center gap-1 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-full 
                  text-white text-sm md:text-base font-medium tracking-wide
                  transition-all duration-300 ease-out
                  ${button.color}
                `}
              >
                <button.icon className="text-lg md:text-xl" />
                {button.text}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Column - Profile Image (Moved to bottom on mobile) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
          className="w-full md:w-2/5 flex justify-center mt-8 md:mt-0 md:order-1 order-2"
        >
          <div className="relative flex items-center justify-center scale-90 md:scale-100">
            {/* Animated rings around profile image - hidden on small mobile screens */}
            <motion.div 
              animate={{ 
                rotate: 360,
                transition: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute rounded-full border-2 border-dashed border-[color:var(--color-scampi-l)] dark:border-[color:var(--color-scampi-d)] opacity-50 hidden sm:block"
              style={{ width: '120%', height: '120%', top: '-10%', left: '-10%' }}
            />
            <motion.div 
              animate={{ 
                rotate: -360,
                transition: { duration: 30, repeat: Infinity, ease: "linear" }
              }}
              className="absolute rounded-full border-2 border-dashed border-[color:var(--color-deluge-l)] dark:border-[color:var(--color-deluge-d)] opacity-30 hidden sm:block"
              style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
            />
            
            {/* Profile Image with Hover Effect */}
            <motion.div 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(105, 95, 166, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative rounded-full overflow-hidden border-4 border-white/20 dark:border-black/20 shadow-xl w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 z-10"
            >
              <Image 
                src="/img/hero.png" 
                alt="Portfolio Hero"
                width={400}
                height={600}
                onLoad={() => setIsImageLoaded(true)}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Glow effect on hover */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-jacarta-l)]/40 dark:from-[color:var(--color-jacarta-d)]/40 to-[color:var(--color-scampi-l)]/40 dark:to-[color:var(--color-scampi-d)]/40 mix-blend-overlay"
              />
            </motion.div>
            
            {/* Floating skill bubbles with spawn-and-spread animation - adjusted for mobile */}
            <div className="absolute inset-0 pointer-events-none">
              <AnimatePresence>
                {showSkills && skillItems.map((skill, index) => {
                  // Calculate positions to spread evenly in a circle
                  // Smaller radius on mobile
                  const angle = index * (Math.PI * 2 / 3) + (Math.PI / 6);
                  const radius = isMobile ? 150 : 200; // Smaller circle on mobile
                  
                  return (
                    <motion.div
                      key={skill.label}
                      initial={{ 
                        opacity: 0, 
                        scale: 0,
                        x: 0,
                        y: 0
                      }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        x: Math.cos(angle) * radius,
                        y: Math.sin(angle) * radius
                      }}
                      transition={{ 
                        opacity: { delay: index * 0.2, duration: 0.3 },
                        scale: { delay: index * 0.2, duration: 0.5 },
                        x: { delay: index * 0.2 + 0.3, duration: 0.8, type: "spring", stiffness: 50 },
                        y: { delay: index * 0.2 + 0.3, duration: 0.8, type: "spring", stiffness: 50 }
                      }}
                      className={`absolute ${skill.color} text-white p-2 sm:p-3 rounded-full shadow-lg flex items-center justify-center pointer-events-auto`}
                      style={{ 
                        width: isMobile ? '36px' : '45px', 
                        height: isMobile ? '36px' : '45px',
                        left: '50%',
                        top: '50%',
                        marginLeft: isMobile ? '-18px' : '-22.5px', // Half of width to center
                        marginTop: isMobile ? '-18px' : '-22.5px',  // Half of height to center
                        zIndex: 20
                      }}
                    >
                      {/* Icon with bobbing animation */}
                      <motion.div
                        animate={{
                          y: [0, -5, 0, 5, 0]
                        }}
                        transition={{
                          duration: 3 + index,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "easeInOut"
                        }}
                      >
                        <skill.icon className="text-lg sm:text-xl" />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}