import Image from 'next/image';

interface PortfolioItemProps {
  imgSrc: string;
  title: string;
  technologies: string;
}

export default function PortfolioItem({ imgSrc, title, technologies }: PortfolioItemProps) {
  return (
    <div className="portfolio-item rounded-xl overflow-hidden relative group border border-gray-700 dark:border-[color:var(--color-deluge-d)] h-80 w-full shadow-lg">
      {/* Image always visible */}
      <div className="image h-full w-full">
        <Image
          src={imgSrc}
          alt={title}
          width={500}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content that slides in from bottom on hover */}
      <div className="absolute inset-0 bg-[color:var(--color-jacarta-l)] dark:bg-[color:var(--color-jacarta-d)] bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center p-6">
        <h3 className="text-xl font-semibold mb-2 text-[color:var(--color-downy-l)] dark:text-[color:var(--color-downy-d)]">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">{technologies}</p>
        
        <h4 className="text-lg font-semibold mb-4 text-[color:var(--color-scampi-l)] dark:text-[color:var(--color-scampi-d)]">Project Source</h4>
        <div className="icons flex gap-4">
          <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy-l)] dark:bg-[color:var(--color-downy-d)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 text-[color:var(--color-background-d)] hover:text-white">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy-l)] dark:bg-[color:var(--color-downy-d)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 text-[color:var(--color-background-d)] hover:text-white">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy-l)] dark:bg-[color:var(--color-downy-d)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 text-[color:var(--color-background-d)] hover:text-white">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}