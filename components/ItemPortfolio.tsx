// import Image from 'next/image';

// interface PortfolioItemProps {
//   imgSrc: string;
//   title: string;
//   technologies: string;
// }

// export default function PortfolioItem({ imgSrc, title, technologies }: PortfolioItemProps) {
//   return (
//     <div className="portfolio-item rounded-xl overflow-hidden relative group border border-gray-700">
//       <div className="image h-64 w-full">
//         <Image
//           src={imgSrc}
//           alt={title}
//           width={400}
//           height={300}
//           className="h-full w-full object-cover"
//         />
//       </div>
//       <div className="bg-[color:var(--color-jacarta)] p-4">
//         <h3 className="text-xl font-semibold text-[color:var(--color-downy)]">{title}</h3>
//         <p className="text-sm text-gray-300 mt-2">{technologies}</p>
//       </div>
//       <div className="hover-items">
//         <h3 className="text-2xl font-semibold mb-4 text-white">Project Source</h3>
//         <div className="icons flex gap-4">
//           <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
//             <i className="fab fa-github"></i>
//           </a>
//           <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
//             <i className="fab fa-behance"></i>
//           </a>
//           <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
//             <i className="fab fa-youtube"></i>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }



// // export default function PortfolioItem({ imgSrc }: PortfolioItemProps) {
// //   return (
// //     <div className="portfolio-item rounded-xl overflow-hidden relative h-64 group">
// //       <div className="image h-full w-full">
// //         <Image
// //           src={imgSrc}
// //           alt="Portfolio item"
// //           width={400}
// //           height={300}
// //           className="h-full w-full object-cover"
// //         />
// //       </div>
// //       <div className="hover-items">
// //         <h3 className="text-2xl font-semibold mb-4 text-white">Project Source</h3>
// //         <div className="icons flex gap-4">
// //           <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
// //             <i className="fab fa-github"></i>
// //           </a>
// //           <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
// //             <i className="fab fa-behance"></i>
// //           </a>
// //           <a href="#" className="icon w-12 h-12 rounded-full bg-[color:var(--color-downy)] flex items-center justify-center text-lg transition-all duration-300 hover:scale-110">
// //             <i className="fab fa-youtube"></i>
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

import Image from 'next/image';

interface PortfolioItemProps {
  imgSrc: string;
  title: string;
  technologies: string;
}

export default function PortfolioItem({ imgSrc, title, technologies }: PortfolioItemProps) {
  return (
    <div className="portfolio-item rounded-xl overflow-hidden relative group border border-gray-700 h-80 w-full">
      {/* Image always visible */}
      <div className="image h-full w-full">
        <Image
          src={imgSrc}
          alt={title}
          width={500}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      {/* Title always visible */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-[color:var(--color-jacarta)] bg-opacity-90">
        <h3 className="text-xl font-semibold text-[color:var(--color-downy)]">{title}</h3>
      </div>
      
      {/* Content that slides in from bottom on hover */}
      <div className="absolute inset-0 bg-[color:var(--color-jacarta)] bg-opacity-90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex flex-col justify-center items-center p-6">
        <h3 className="text-xl font-semibold mb-2 text-[color:var(--color-downy)]">{title}</h3>
        <p className="text-sm text-gray-300 mb-6">{technologies}</p>
        
        <h4 className="text-lg font-semibold mb-4 text-white">Project Source</h4>
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