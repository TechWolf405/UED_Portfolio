import PortfolioItem from "@/components/ItemPortfolio";
import ParallaxBackground from "@/components/Parallax";

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
    
    <main className="w-full h-full py-16 px-24 overflow-y-auto">
      {/* <ParallaxBackground/> */}
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="text-[color:var(--color-scampi)]">Portfolio</span>
            <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10">My Work</span>
          </h2>
        </div>
        
        <p className="port-text text-lg text-center max-w-3xl mx-auto mb-12 text-gray-300">
          Here is some of my work that I've done in various programming languages.
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