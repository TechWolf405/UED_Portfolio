import BlogItem from '@/components/BlogItem';
// import ParallaxBackground from '@/components/Parallax';
import ParallaxBackground from '@/components/Parallax';

// Blog data
const blogItems = [
  {
    id: 1,
    imgSrc: '/blog1.webp',
    title: 'Shrink It Without Losing It: Exploring Huffman, RLE, and LZW Compression!',
    description: 'Today, we are diving into three super cool lossless compression techniques that power much of our digital world. ',
    link: 'https://medium.com/@anushka.jadhav22/shrink-it-without-losing-it-exploring-huffman-rle-and-lzw-compression-94cdfd7450b4', // internal link or external URL
  },
  {
    id: 2,
    imgSrc: '/blog2.webp',
    title: 'Printf(“Hello World: Debugging My First Hackathon”)',
    description: 'Embark on my first college hackathon journey and discover the valuable lessons I learned.',
    link: 'https://medium.com/@anushka.jadhav22/printf-hello-world-debugging-my-first-hackathon-364a291c894a',
  },
  {
    id: 3,
    imgSrc: '/blog3.webp',
    title: 'The Highs and Lows of Building a Computer Engineering Project',
    description: 'Developed a simulation tool based on Bayesian Search Theory to locate lost objects in the ocean, blending Python logic with an interactive frontend — a journey shared through our teammate’s perspective.',
    link: 'https://medium.com/@anushka.jadhav22/printf-hello-world-debugging-my-first-hackathon-364a291c894a',
  },
  // Add links for other items...
];

export default function BlogsPage() {
  return (
    <main className="w-full h-full py-16 px-24 overflow-y-auto">
    {/* <ParallaxBackground/> */}
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-[color:var(--color-scampi)]">Blogs</span>
            <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10">My Blogs</span>
          </h2>
        </div>
        
        <div className="blogs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogItems.map((blog) => (
            <BlogItem 
              key={blog.id}
              imgSrc={blog.imgSrc}
              title={blog.title}
              description={blog.description}
              link={blog.link} // pass link here
            />
          ))}
        </div>
      </div>
    </main>
  );
}