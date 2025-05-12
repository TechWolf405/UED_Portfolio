import PortfolioItem from "@/components/ItemPortfolio";

// Portfolio data
const portfolioItems = [
  { id: 1, imgSrc: '/img/port1.jpg' },
  { id: 2, imgSrc: '/img/port2.jpg' },
  { id: 3, imgSrc: '/img/port3.jpg' },
  { id: 4, imgSrc: '/img/port4.jpg' },
  { id: 5, imgSrc: '/img/port5.jpg' },
  { id: 6, imgSrc: '/img/port2.jpg' },
  { id: 7, imgSrc: '/img/port7.jpg' }
];

export default function PortfolioPage() {
  return (
    <main className="w-full h-full py-16 px-24 overflow-y-auto dark:bg-[color:var(--color-background-d)] bg-[color:var(--color-background-l)] dark:text-[color:var(--color-text-d)] text-[color:var(--color-text-l)]">
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold">
            My <span className="dark:text-[color:var(--color-scampi-d)] text-[color:var(--color-scampi-l)]">Portfolio</span>
            <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 opacity-10 text-6xl whitespace-nowrap dark:text-[color:var(--color-jacarta-d)] text-[color:var(--color-jacarta-l)]">My Work</span>
          </h2>
        </div>
        
        <p className="port-text text-lg text-center max-w-3xl mx-auto mb-12 dark:text-gray-300 text-gray-700">
          Here is some of my work that I've done in various programming languages.
        </p>
        
        <div className="portfolios grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <PortfolioItem 
              key={item.id} 
              imgSrc={item.imgSrc} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}