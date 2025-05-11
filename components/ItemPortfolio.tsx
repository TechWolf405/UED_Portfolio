import Image from 'next/image';

interface PortfolioItemProps {
  imgSrc: string;
}

export default function PortfolioItem({ imgSrc }: PortfolioItemProps) {
  return (
    <div className="portfolio-item rounded-xl overflow-hidden relative h-64 group">
      <div className="image h-full w-full">
        <Image
          src={imgSrc}
          alt="Portfolio item"
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hover-items">
        <h3 className="text-2xl font-semibold mb-4 text-white">Project Source</h3>
        <div className="icons flex gap-4">
          <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
}