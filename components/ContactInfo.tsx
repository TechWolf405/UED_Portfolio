interface ContactInfoProps {
  icon: string;
  title: string;
  value: string;
}

export default function ContactInfo({ icon, title, value }: ContactInfoProps) {
  return (
    <div className="contact-item flex">
      <div className="icon mr-4 flex items-center">
        <i className={`${icon} dark:text-[color:var(--color-scampi-d)] light:text-[color:var(--color-scampi-l)] text-xl mr-2`}></i>
        <span className="font-medium">{title}</span>
      </div>
      <p className="dark:text-gray-300 light:text-gray-700">: {value}</p>
    </div>
  );
}