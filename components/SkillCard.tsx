'use client';

import { motion } from 'framer-motion';
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaFlask,
  FaFigma,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiMysql,
  SiPostman,
  SiSqlalchemy,
  SiCanva,
  SiSelenium,
  SiTableau,
  SiJavascript,
} from 'react-icons/si';
import { BsQuestionCircle } from 'react-icons/bs';

interface SkillCardProps {
  title: string;
}

const iconMap: Record<string, JSX.Element> = {
  Python: <FaPython className="text-yellow-400 text-4xl" />,
  'HTML/CSS': (
    <div className="flex space-x-1">
      <FaHtml5 className="text-orange-500 text-3xl" />
      <FaCss3Alt className="text-blue-500 text-3xl" />
    </div>
  ),
  JavaScript: <SiJavascript className="text-yellow-300 text-4xl" />,
  'C/C++': <SiCplusplus className="text-blue-400 text-4xl" />,
  Java: <FaJava className="text-red-500 text-4xl" />,
  React: <FaReact className="text-cyan-400 text-4xl" />,
  Flask: <FaFlask className="text-gray-300 text-4xl" />,
  Numpy: <SiNumpy className="text-indigo-400 text-4xl" />,
  Pandas: <SiPandas className="text-pink-400 text-4xl" />,
  Selenium: <SiSelenium className="text-green-400 text-4xl" />,
  MySQL: <SiMysql className="text-blue-300 text-4xl" />,
  SQLAlchemy: <SiSqlalchemy className="text-orange-300 text-4xl" />,
  Git: <FaGitAlt className="text-orange-600 text-4xl" />,
  GitHub: <FaGithub className="text-white text-4xl" />,
  Postman: <SiPostman className="text-orange-400 text-4xl" />,
  Figma: <FaFigma className="text-pink-500 text-4xl" />,
  Canva: <SiCanva className="text-blue-500 text-4xl" />,
  Tableau: <SiTableau className="text-blue-400 text-4xl" />,
};

export default function SkillCard({ title }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: '0 0 15px rgba(105, 95, 166, 0.5)', // Using scampi color for shadow
        borderRadius: '1rem',
      }}
      className="rounded-xl" 
      style={{
        // Gradient that works well in both light and dark modes
        borderImage: 'linear-gradient(45deg, #7F00FF, #00C9FF) 1',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '1rem',
        padding: '4px',
        backgroundClip: 'padding-box',
      }}
    >
      <div className="
        dark:bg-[#0f0f0f] 
        bg-white 
        rounded-lg p-4 
        flex flex-col items-center justify-center 
        space-y-2 w-full h-full
        dark:hover:bg-[color:var(--color-deluge-d)]/40
        hover:bg-[color:var(--color-ship-cove-l)]/20
        transition-all duration-300
      ">
        {iconMap[title] || <BsQuestionCircle className="
          text-[color:var(--color-jacarta-l)] 
          dark:text-gray-400 
          text-4xl" 
        />}
        <span className="
          text-lg font-medium 
          dark:text-white 
          text-[color:var(--color-text-l)]
        ">
          {title}
        </span>
      </div>
    </motion.div>
  );
}