import Image from 'next/image';
import Link from 'next/link';

interface BlogItemProps {
  imgSrc: string;
  title: string;
  description: string;
  link: string; // add this
}

export default function BlogItem({ imgSrc, title, description, link }: BlogItemProps) {
  return (
    <Link href="#" className="blog rounded-xl overflow-hidden bg-[color:var(--color-jacarta-d)]/20 dark:bg-[color:var(--color-jacarta-d)]/20 light:bg-[color:var(--color-jacarta-l)]/20 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-gray-800 dark:border-gray-800 light:border-gray-300">
      <div className="h-48 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="blog-text p-6">
        <h4 className="text-xl font-semibold mb-3 text-[color:var(--color-downy-d)] dark:text-[color:var(--color-downy-l)]">
          {title}
        </h4>
        <p className="text-text-l dark:text-gray-300 light:text-gray-700">
          {description}
        </p>
      </div>
    </Link>
  );
}