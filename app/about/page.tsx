import MainButton from '@/components/MainButton';
import ProgressBar from '@/components/ProgressBar';
import TimelineItem from '@/components/TimelineItem';

// Skills data
const skills = [
  { title: 'html5', percentage: 80 },
  { title: 'css3', percentage: 95 },
  { title: 'javascript', percentage: 75 },
  { title: 'ReactJS', percentage: 75 },
  { title: 'NodeJS', percentage: 87 },
  { title: 'Python', percentage: 70 },
];

// Timeline data
const timelineItems = [
  {
    year: '2010 - present',
    title: 'Web Developer',
    company: 'Vircrosoft',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
  },
  {
    year: '2008 - 2011',
    title: 'Software Engineer',
    company: 'Boogle, Inc.',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
  },
  {
    year: '2016 - 2017',
    title: 'C++ Programmer',
    company: 'Slime Tech',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
  },
  {
    year: '2009 - 2013',
    title: 'Business Degree',
    company: 'Sussex University',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
  },
  {
    year: '2013 - 2016',
    title: 'Computer Science Degree',
    company: 'Brookes University',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
  },
  {
    year: '2017 - present',
    title: '3d Animation',
    company: 'Brighton University',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.',
  },
];

export default function AboutPage() {
  return (
    <main className="w-full h-full py-16 px-24 overflow-y-auto">
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold">
            About <span className="text-[color:var(--color-scampi)]">me</span>
            <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10">my stats</span>
          </h2>
        </div>
        
        {/* About section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div className="left-about">
            <h4 className="text-2xl font-bold mb-4 text-[color:var(--color-downy)]">Information About me</h4>
            <p className="text-lg mb-6 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eveniet labore nihil obcaecati consequatur. Debitis error doloremque, 
              vero eos vel nemo eius voluptatem dicta tenetur modi. <br /> <br /> La musica
              delectus dolore fugiat exercitationem a, 
              ipsum quidem quo enim natus accusamus labore dolores nam. Unde.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Harum non necessitatibus deleniti eum soluta.
            </p>
            <div className="btn-con">
              <MainButton text="Download CV" icon="fas fa-download" />
            </div>
          </div>
          
          <div className="right-about grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">650+</p>
                <p className="small-text text-lg">Projects <br /> Completed</p>
              </div>
            </div>
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">10+</p>
                <p className="small-text text-lg">Years of <br /> experience</p>
              </div>
            </div>
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">300+</p>
                <p className="small-text text-lg">Happy <br /> Clients</p>
              </div>
            </div>
            <div className="about-item border border-gray-700 p-8 rounded-lg bg-gradient-to-r from-[color:var(--color-background)] to-[color:var(--color-jacarta)]/30 transition-all duration-300 hover:transform hover:translate-y-[-5px]">
              <div className="abt-text">
                <p className="large-text text-4xl font-extrabold text-[color:var(--color-scampi)]">400+</p>
                <p className="small-text text-lg">Customer <br /> reviews</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills section */}
        <div className="about-stats mb-16">
          <h4 className="stat-title text-2xl font-bold mb-8 text-[color:var(--color-downy)]">My Skills</h4>
          <div className="progress-bars grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <ProgressBar 
                key={index}
                title={skill.title}
                percentage={skill.percentage}
              />
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