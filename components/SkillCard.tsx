// 'use client';

// import { motion } from 'framer-motion';
// import { FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava } from 'react-icons/fa';
// import { SiCplusplus } from 'react-icons/si';

// interface SkillCardProps {
//   title: string;
// }

// const iconMap: Record<string, JSX.Element> = {

//   Python: <FaPython size={32} className="text-yellow-400" />,
//   'HTML/CSS': (
//     <div className="flex gap-1">
//       <FaHtml5 size={28} className="text-orange-500" />
//       <FaCss3Alt size={28} className="text-blue-500" />
//     </div>
//   ),
//   JavaScript: <FaJs size={32} className="text-yellow-300" />,
//   'C/C++': <SiCplusplus size={32} className="text-blue-400" />,
//   React: <FaReact size={32} className="text-cyan-400" />,
//   Java: <FaJava size={32} className="text-red-500" />,
// };

// export default function SkillCard({ title }: SkillCardProps) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05, rotate: 1 }}
//       whileTap={{ scale: 0.95 }}
//       className="flex flex-col items-center justify-center p-6 border border-gray-700 rounded-xl bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/40 shadow-md transition-all duration-300"
//     >
//       {iconMap[title] || <div className="text-white">?</div>}
//       <p className="mt-3 text-lg font-medium text-white">{title}</p>
//     </motion.div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
// import { BsQuestionCircle } from 'react-icons/bs';
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaFlask,
  FaFigma,
  FaTable,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiNumpy,
  SiPandas,
  // SiMatplotlib,
  SiMysql,
  SiPostman,
  SiSqlalchemy,
  // SiPowerbi,
  SiCanva,
  SiSelenium,
  SiTableau,
  // SiTkinter,
  SiJavascript,
  // SiJustinmind,
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
  // Matplotlib: <SiMatplotlib className="text-blue-500 text-4xl" />,
  // Tkinter: <SiTkinter className="text-purple-400 text-4xl" />,
  Selenium: <SiSelenium className="text-green-400 text-4xl" />,
  MySQL: <SiMysql className="text-blue-300 text-4xl" />,
  SQLAlchemy: <SiSqlalchemy className="text-orange-300 text-4xl" />,
  Git: <FaGitAlt className="text-orange-600 text-4xl" />,
  GitHub: <FaGithub className="text-white text-4xl" />,
  Postman: <SiPostman className="text-orange-400 text-4xl" />,
  Figma: <FaFigma className="text-pink-500 text-4xl" />,
  // Justinmind: <SiJustinmind className="text-indigo-400 text-4xl" />,
  Canva: <SiCanva className="text-blue-500 text-4xl" />,
  Tableau: <SiTableau className="text-blue-400 text-4xl" />,
  // PowerBi: <SiPowerbi className="text-yellow-400 text-4xl" />,
};

// export default function SkillCard({ title }: SkillCardProps) {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//         rotate: 1,
//         boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
//         borderRadius: '1rem',
//       }}
//       // className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 cursor-pointer transition-all duration-300"
//       style={{
//         borderImage: 'linear-gradient(45deg, #7F00FF, #00C9FF) 1',
//         borderStyle: 'solid',
//         borderWidth: '2px',
//         borderRadius: '1rem',
//       }}
//     >
//       <div className="bg-[#0f0f0f] rounded-[1rem] p-4 flex flex-col items-center justify-center space-y-2">
//         {iconMap[title] || <BsQuestionCircle className="text-gray-400 text-4xl" />}
//         <span className="text-lg font-medium text-white">{title}</span>
//       </div>
//     </motion.div>
//   );
// }


// export default function SkillCard({ title }: SkillCardProps) {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//         rotate: 1,
//         boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
//         borderRadius: '1rem',
//       }}
//       style={{
//         borderImage: 'linear-gradient(45deg, #7F00FF, #00C9FF) 1',
//         borderStyle: 'solid',
//         borderWidth: '2px',
//         borderRadius: '1rem',
//         padding: '4px', // add space to show gradient border
//       }}
//     >
//       <div className="bg-[#0f0f0f] rounded-[0.75rem] p-4 flex flex-col items-center justify-center space-y-2">
//         {iconMap[title] || <BsQuestionCircle className="text-gray-400 text-4xl" />}
//         <span className="text-lg font-medium text-white">{title}</span>
//       </div>
//     </motion.div>
//   );
// }

export default function SkillCard({ title }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
        borderRadius: '1rem',
      }}
      className="rounded-xl" // Tailwind rounded corners always applied
      style={{
        borderImage: 'linear-gradient(45deg, #7F00FF, #00C9FF) 1',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderRadius: '1rem', // Ensure this is consistent with motion hover
        padding: '4px',
        backgroundClip: 'padding-box',
      }}
    >
      <div className="bg-[#0f0f0f] rounded-lg p-4 flex flex-col items-center justify-center space-y-2 w-full h-full">
        {iconMap[title] || <BsQuestionCircle className="text-gray-400 text-4xl" />}
        <span className="text-lg font-medium text-white">{title}</span>
      </div>
    </motion.div>
  );
}


// export default function SkillCard({ title }: SkillCardProps) {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//         rotate: 1,
//         boxShadow: '0 0 15px rgba(0, 255, 255, 0.5)',
//         borderRadius: '1rem', // keep this in hover
//       }}
//       style={{
//         borderImage: 'linear-gradient(45deg, #7F00FF, #00C9FF) 1',
//         borderStyle: 'solid',
//         borderWidth: '2px',
//         borderRadius: '1rem', // this makes it rounded by default
//       }}
//     >
//       <div className="bg-[#0f0f0f] rounded-[1rem] p-4 flex flex-col items-center justify-center space-y-2">
//         {iconMap[title] || <BsQuestionCircle className="text-gray-400 text-4xl" />}
//         <span className="text-lg font-medium text-white">{title}</span>
//       </div>
//     </motion.div>
//   );
// }


// // export default function SkillCard({ title }: SkillCardProps) {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//         rotate: 1,
//         boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
//       }}
//       className="p-[2px] rounded-[1rem] bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 transition-all duration-300"
//     >
//       <div className="bg-[#0f0f0f] rounded-[1rem] p-4 flex flex-col items-center justify-center space-y-2">
//         {iconMap[title] || <BsQuestionCircle className="text-gray-400 text-4xl" />}
//         <span className="text-lg font-medium text-white">{title}</span>
//       </div>
//     </motion.div>
//   );
// }
