import PortfolioItem from "@/components/ItemPortfolio";

// Portfolio data
const portfolioItems = [
  {
    id: 1,
    imgSrc: '/projtect1.png',
    title: 'Blog Website with User Authentication & Content Management',
    technologies: 'Flask, SQLite, WTForms, Bootstrap',
  },
  {
    id: 2,
    imgSrc: '/blog3.webp',
    title: 'Plane Crash Search using Bayesian Search Theory',
    technologies: 'HTML, CSS, LeafletJS, Bayesian Theory',
  },
  {
    id: 3,
    imgSrc: '/blog2.webp',
    title: ' Fashion Recommender System (SE Hackathon Top 12)',
    technologies: 'ResNet, Collaborative Filtering, Django',
  },
  // Add more items similarly...
];

export default function PortfolioPage() {
  return (
    <main className="w-full min-h-screen py-16 px-6 sm:px-12 md:px-24 overflow-y-auto dark:bg-[color:var(--color-background-d)] bg-[color:var(--color-background-l)] dark:text-[color:var(--color-text-d)] text-[color:var(--color-text-l)]">
      <div className="container mx-auto">
        <div className="relative text-center mb-16">
          <h2 className="text-4xl font-bold relative z-10">
            My <span className="dark:text-[color:var(--color-scampi-d)] text-[color:var(--color-scampi-l)]">Portfolio</span>
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 text-6xl font-bold opacity-10 dark:text-[color:var(--color-jacarta-d)] text-[color:var(--color-jacarta-l)] whitespace-nowrap">
              My Work
            </span>
          </h2>
        </div>
        
        <p className="port-text text-lg text-center max-w-3xl mx-auto mb-16 dark:text-gray-300 text-gray-700">
          Here is some of my work that I&apos;ve done in various programming languages and technologies, showcasing my skills and passion for creating innovative solutions.
        </p>
        
        <div className="portfolios grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioItem 
              key={item.id} 
              imgSrc={item.imgSrc}
              title={item.title}
              technologies={item.technologies}
            />          
          ))}
        </div>
      </div>
    </main>
  );
}