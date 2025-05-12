import { motion } from 'framer-motion';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: string;
}

export default function TimelineItem({ year, title, company, description }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="timeline-item"
    >
      <div className="timeline-item">
      <div className="tl-icon dark:bg-[color:var(--color-jacarta-d)] light:bg-[color:var(--color-jacarta-l)] h-10 w-10 rounded-full flex items-center justify-center">
        <i className="fas fa-briefcase text-white"></i>
      </div>
      <p className="tl-duration text-sm dark:text-gray-400 light:text-gray-500 mb-2">{year}</p>
      <h5 className="text-xl font-medium mb-2">
        {title}<span className="dark:text-[color:var(--color-scampi-d)] light:text-[color:var(--color-scampi-l)]"> - {company}</span>
      </h5>
      <p className="dark:text-gray-300 light:text-gray-700">{description}</p>
    </div>
    </motion.div>
    
  );
}