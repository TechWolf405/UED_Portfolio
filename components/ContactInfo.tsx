interface ContactInfoProps {
    icon: string;
    title: string;
    value: string;
  }
  
  export default function ContactInfo({ icon, title, value }: ContactInfoProps) {
    return (
      <div className="contact-item flex">
        <div className="icon mr-4 flex items-center">
          <i className={`${icon} text-[color:var(--color-scampi)] text-xl mr-2`}></i>
          <span className="font-medium">{title}</span>
        </div>
        <p className="text-gray-300">: {value}</p>
      </div>
    );
  }