'use client';

// import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxBackground() {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });
    const { scrollYProgress } = useScroll(); // global page scroll


  // Mountains move up
  const mountainsY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Stars move to right
  const starsX = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Stars layer */}
      <motion.img
        src="/stars.png"
        alt="Stars"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ x: starsX }}
      />

      {/* Planets layer (static) */}
      <img
        src="/planets.png"
        alt="Planets"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />

      {/* Mountains layer (scrolls) */}
      <motion.img
        src="/mountains.png"
        alt="Mountains"
        className="absolute top-0 left-0 w-full h-full object-cover z-20"
        style={{ y: mountainsY }}
      />

      {/* Title */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
        <motion.h1
          className="text-white text-6xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Blogs
        </motion.h1>
      </div>
    </div>
  );
}
