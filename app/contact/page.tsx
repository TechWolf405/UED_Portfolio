import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactIcons from '@/components/ContactIcons';

// Contact info data
const contactItems = [
  {
    icon: 'fas fa-map-marker-alt',
    title: 'Location',
    value: 'Mumbai, India',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Email',
    value: 'anushka.jadhav22@spit.ac.in | anushkajadhavwrk@gmail.com',
  },
  {
    icon: 'fas fa-user-graduate',
    title: 'Education',
    value: 'Sardar Patel Institute of Technology, Mumbai',
  },
  {
    icon: 'fas fa-phone',
    title: 'Mobile Number',
    value: '9321817880',
  },
  {
    icon: 'fas fa-globe-africa',
    title: 'Languages',
    value: 'English, Hindi, Marathi',
  },
];

export default function ContactPage() {
  return (
    <main className="w-full h-full py-16 px-24 overflow-y-auto dark:bg-[color:var(--color-background-d)] bg-[color:var(--color-background-l)] dark:text-[color:var(--color-text-d)] text-[color:var(--color-text-l)]">
      <div className="container mx-auto">
        <div className="relative mb-16">
          <h2 className="text-4xl font-bold">
            Contact <span className="dark:text-[color:var(--color-scampi-d)] text-[color:var(--color-scampi-l)]">Me</span>
            <span className="bg-text absolute -top-8 left-1/2 transform -translate-x-1/2 -z-10 opacity-10 text-6xl whitespace-nowrap dark:text-[color:var(--color-jacarta-d)] text-[color:var(--color-jacarta-l)]">Contact</span>
          </h2>
        </div>
        
        <div className="contact-content-con grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="left-contact">
            <h4 className="text-2xl font-bold mb-4 dark:text-[color:var(--color-downy-d)] text-[color:var(--color-downy-l)]">Contact me here</h4>
            <p className="text-lg mb-8 dark:text-gray-300 text-gray-700">
              Feel free to reach out for collaborations, questions, or just to say hi — I would love to connect!
            You can contact me through the form below or via my social media links.
            </p>
            
            <div className="contact-info space-y-6 mb-8">
              {contactItems.map((item, index) => (
                <ContactInfo 
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  value={item.value}
                />
              ))}
            </div>
            
            <ContactIcons />
          </div>
          
          <ContactForm />
        </div>
      </div>
    </main>
  );
}