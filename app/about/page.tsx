// import MainButton from '@/components/MainButton';
// import ProgressBar from '@/components/ProgressBar';
// import TimelineItem from '@/components/TimelineItem';

// // Skills data
// const skills = [
//   { title: 'html5', percentage: 80 },
//   { title: 'css3', percentage: 95 },
//   { title: 'javascript', percentage: 75 },
//   { title: 'ReactJS', percentage: 75 },
//   { title: 'NodeJS', percentage: 87 },
//   { title: 'Python', percentage: 70 },
// ];

// // Timeline data
// const timelineItems = [
//   {
//     year: '2010 - present',
//     title: 'Web Developer',
//     company: 'Vircrosoft',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
//   },
//   {
//     year: '2008 - 2011',
//     title: 'Software Engineer',
//     company: 'Boogle, Inc.',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
//   },
//   {
//     year: '2016 - 2017',
//     title: 'C++ Programmer',
//     company: 'Slime Tech',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
//   },
//   {
//     year: '2009 - 2013',
//     title: 'Business Degree',
//     company: 'Sussex University',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
//   },
//   {
//     year: '2013 - 2016',
//     title: 'Computer Science Degree',
//     company: 'Brookes University',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
//   },
//   {
//     year: '2017 - present',
//     title: '3d Animation',
//     company: 'Brighton University',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
//   },
// ];

// export default function AboutPage() {
//   return (
//     <main className="w-full h-full py-16 px-24 overflow-y-auto">
//       <div className="container mx-auto">
//         <div className="relative mb-16">
//           <h2 className="text-4xl font-bold">
//             About <span className="text-[color:var(--color-scampi)]">me</span>
//             <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10">my stats</span>
//           </h2>
//         </div>
        
//         {/* About section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
//           <div className="left-about">
//             <h4 className="text-2xl font-bold mb-4 text-[color:var(--color-downy)]">Information About me</h4>
//             <p className="text-lg mb-6 text-gray-300">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. 
//               Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, 
//               vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
//               delectus dolore fugiat exercitationem a, 
//               ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
//               Harum non necessitatibus deleniti eum soluta.
//             </p>
//             <div className="btn-con">
//               <MainButton text="Download CV" icon="fas fa-download" />
//             </div>
//           </div>
          
//           <div className="right-about grid grid-cols-1 sm:grid-cols-2 gap-6">
//             <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
//               <div className="abt-text">
//                 <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">650+</p>
//                 <p className="small-text text-lg">Projects <br /> Completed</p>
//               </div>
//             </div>
//             <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
//               <div className="abt-text">
//                 <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">10+</p>
//                 <p className="small-text text-lg">Years of <br /> experience</p>
//               </div>
//             </div>
//             <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
//               <div className="abt-text">
//                 <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">300+</p>
//                 <p className="small-text text-lg">Happy <br /> Clients</p>
//               </div>
//             </div>
//             <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
//               <div className="abt-text">
//                 <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">400+</p>
//                 <p className="small-text text-lg">Customer <br /> reviews</p>
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Skills section */}
//         <div className="about-stats mb-16">
//           <h4 className="stat-title text-2xl font-bold mb-8 text-[color:var(--color-downy)]">My Skills</h4>
//           <div className="progress-bars grid grid-cols-1 md:grid-cols-2 gap-8">
//             {skills.map((skill, index) => (
//               <ProgressBar 
//                 key={index}
//                 title={skill.title}
//                 percentage={skill.percentage}
//               />
//             ))}
//           </div>
//         </div>
        
//         {/* Timeline section */}
//         <h4 className="stat-title text-2xl font-bold mb-8 text-[color:var(--color-downy)]">My Timeline</h4>
//         <div className="timeline grid gap-12 mb-16">
//           {timelineItems.map((item, index) => (
//             <TimelineItem 
//               key={index}
//               year={item.year}
//               title={item.title}
//               company={item.company}
//               description={item.description}
//             />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }

'use client';

import MainButton from '@/components/MainButton';
import SkillCard from '@/components/SkillCard';
import TimelineItem from '@/components/TimelineItem';

// Skills data - updated with your technical skills
const skills = [
  { title: 'Python' },
  { title: 'HTML/CSS' },
  { title: 'JavaScript' },
  { title: 'C/C++' },
  { title: 'Java' },
  { title: 'React' },
  { title: 'Flask' },
  { title: 'Numpy' },
  { title: 'Pandas' },
  { title: 'Matplotlib' },
  { title: 'Tkinter' },
  { title: 'Selenium' },
  { title: 'MySQL' },
  { title: 'SQLAlchemy' },
  { title: 'Git' },
  { title: 'GitHub' },
  { title: 'Postman' },
  { title: 'Figma' },
  { title: 'Justinmind' },
  { title: 'Canva' },
  { title: 'Tableau' },
  { title: 'PowerBi' },
];

// Timeline data - updated with your education and experience
const timelineItems = [
  {
    year: '2025 - present',
    title: 'Exponential Award',
    company: 'SPIT Alumni Network',
    description: 'Honored for exceptional personal and academic growth in Computer Engineering.',
  },
  {
    year: '2024',
    title: 'Topper in Developing Soft Skills',
    company: 'NPTEL',
    description: 'Achieved top position in Developing Soft Skills and Personality course by Prof. T. Ravichandran.',
  },
  {
    year: '2024',
    title: 'Completing 100 Days of Code: The Complete Python Pro Bootcamp by Angela Yu',
    company: 'Udemy',
    description: 'Gained hands-on experience using various Python libraries like Selenium, Numpy, and Pandas, and made my own Blog Website with User authentication and Content Management.',
  },
  {
    year: '2023',
    title: 'SE Hackathon Recognition',
    company: 'SPIT',
    description: 'Secured a position among TOP 12 teams in SE Hackathon organized by SPIT.',
  },
  {
    year: '2023',
    title: 'Topper in Enhancing Soft Skills and Personality',
    company: 'NPTEL',
    description: 'Achieved top position in enhancing Soft Skills and Personality course by Prof. T. Ravichandran.',
  },
  {
    year: '2022',
    title: 'B.Tech in Computer Engineering',
    company: 'Sardar Patel Institute of Technology',
    description: 'CGPA: 7.68. Focusing on computer engineering fundamentals and expanding software development skills.',
  },
  {
    year: '2022',
    title: 'HSC Grade 12',
    company: 'Shri T.P. Bhatia College of Science',
    description: 'Completed Higher Secondary Certificate with 73.67%, with focus on science and mathematics.',
  },
  {
    year: '2020',
    title: 'SSC Grade 10',
    company: 'Kid\'s Land High School',
    description: 'Completed Secondary School Certificate with an excellent score of 95.64%.',
  },
  
  
  
];

export default function AboutPage() {
  return (
    <main className="w-full h-full py-16 px-24 overflow-y-auto">
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold">
            About <span className="text-[color:var(--color-scampi)]">me</span>
            <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10">my profile</span>
          </h2>
        </div>
        
        {/* About section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="left-about">
            <h4 className="text-2xl font-bold mb-4 text-[color:var(--color-downy)]">Information About me</h4>
            <p className="text-lg mb-6 text-gray-300">
              I am a motivated Software Developer and BTech student in Computer Engineering with a 
              strong foundation in Python for backend development and HTML, CSS, and JavaScript for 
              frontend work. <br /> <br /> I have hands-on experience using various Python libraries 
              like Selenium, Numpy, and Pandas, and I'm comfortable integrating APIs. Currently, 
              I'm diving into React, aiming to become a full-stack developer. I'm passionate about 
              leveraging technology to create impactful solutions and enjoy collaborating on projects 
              that challenge me to grow my skills.
            </p>
            <div className="btn-con">
              <MainButton text="Download CV" icon="fas fa-download" />
            </div>
          </div>
          
          <div className="right-about grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">7.68</p>
                <p className="small-text text-lg">CGPA <br /> BTech</p>
              </div>
            </div>
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">95.6%</p>
                <p className="small-text text-lg">SSC <br /> Grade 10</p>
              </div>
            </div>
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">Top 12</p>
                <p className="small-text text-lg">SE <br /> Hackathon</p>
              </div>
            </div>
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">2025</p>
                <p className="small-text text-lg">Exponential <br /> Award</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} />
          ))}
        </div> */}
        {/* Skills section */}
        <div className="about-stats mb-16">
          <h4 className="stat-title text-2xl font-bold mb-8 text-[color:var(--color-downy)]">My Skills</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} title={skill.title} />
            ))}
          </div>
        </div>

        
        {/* Timeline section */}
        <h4 className="stat-title text-2xl font-bold mb-8 text-[color:var(--color-downy)]">My Timeline</h4>
        <div className="timeline grid gap-12 mb-16">
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index}
              year={item.year}
              title={item.title}
              company={item.company}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
}