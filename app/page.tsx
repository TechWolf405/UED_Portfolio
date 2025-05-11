import Image from 'next/image';
import MainButton from '@/components/MainButton';

export default function HomePage() {
  return (
    <main className="w-full h-full py-8 px-24 flex items-center">
      <div className="container mx-auto flex-1 flex flex-col md:flex-row items-center md:gap-16">
        <div className="left-header relative mb-12 md:mb-0 md:w-1/2">
          <div className="h-shape absolute top-0 left-0 w-4/5 h-full bg-[color:var(--color-scampi)] transform -z-10"></div>
          <div className="image relative z-10 h-[90%] w-[68%] ml-auto mr-4 overflow-hidden rounded-3xl bg-black">
            <Image
              src="/img/hero.png"
              alt="Portfolio Hero"
              width={400}
              height={600}
              className="w-full h-full object-cover transition-all duration-500 filter hover:grayscale"
            />
          </div>
        </div>
        
        <div className="right-header md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">
            Hi, I&apos;m <span className="text-[color:var(--color-scampi)]">Solano Milan Diaz.</span>
            <br />A Web Developer.
          </h1>
          <p className="text-lg mb-8 max-w-xl text-gray-300">
            I&apos;m a Web Developer, I love to create beautiful and functional websites.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, libero?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis sed aut!
          </p>
          <div className="btn-con">
            <MainButton text="Download CV" icon="fas fa-download" />
          </div>
        </div>
      </div>
    </main>
  );
}