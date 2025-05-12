import BlogItem from '@/components/BlogItem';

// Blog data
const blogItems = [
  {
    id: 1,
    imgSrc: '/img/port6.jpg',
    title: 'How to Create Your Own Website',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?',
  },
  {
    id: 2,
    imgSrc: '/img/blog1.jpg',
    title: 'How to Become an Expert in Web Design',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?',
  },
  {
    id: 3,
    imgSrc: '/img/blog2.jpg',
    title: 'Become a Web Designer in 10 Days',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?',
  },
  {
    id: 4,
    imgSrc: '/img/blog3.jpg',
    title: 'Debugging made easy with Web Inspector',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?',
  },
  {
    id: 5,
    imgSrc: '/img/port1.jpg',
    title: 'Get started with Web Design and UI Design',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?',
  },
  {
    id: 6,
    imgSrc: '/img/port3.jpg',
    title: 'This is what you need to know about Web Design',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?',
  },
];

export default function BlogsPage() {
  return (
    <main className="w-full h-full py-16 px-24 overflow-y-auto dark:bg-[color:var(--color-background-d)] bg-[color:var(--color-background-l)] dark:text-[color:var(--color-text-d)] text-[color:var(--color-text-l)]">
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="dark:text-[color:var(--color-scampi-d)] text-[color:var(--color-scampi-l)]">Blogs</span>
            <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 opacity-10 text-6xl whitespace-nowrap dark:text-[color:var(--color-jacarta-d)] text-[color:var(--color-jacarta-l)]">My Blogs</span>
          </h2>
        </div>
        
        <div className="blogs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogItems.map((blog) => (
            <BlogItem 
              key={blog.id}
              imgSrc={blog.imgSrc}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}