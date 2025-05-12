import Image from 'next/image';
import Link from 'next/link';

// Blog Item Component
interface BlogItemProps {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
}

export function BlogItem({ imgSrc, title, description, link }: BlogItemProps) {
  return (
    <Link 
      href={link} 
      target="_blank"
      className="blog group rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
        bg-[color:var(--color-jacarta-l)]/10 dark:bg-[color:var(--color-jacarta-d)]/20
        border border-[color:var(--color-ship-cove-l)]/30 dark:border-[color:var(--color-ship-cove-d)]/30"
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="blog-text p-6">
        <h4 className="text-xl font-semibold mb-3 
          text-[color:var(--color-downy-l)] dark:text-[color:var(--color-downy-d)]
          group-hover:text-[color:var(--color-scampi-l)] dark:group-hover:text-[color:var(--color-scampi-d)]
          transition-colors duration-300">
          {title}
        </h4>
        <p className="text-[color:var(--color-chambray-l)] dark:text-gray-300 
          text-opacity-90 dark:text-opacity-80">
          {description}
        </p>
      </div>
    </Link>
  );
}