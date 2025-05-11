import Link from 'next/link';

interface MainButtonProps {
  text: string;
  icon: string;
  href?: string;
  onClick?: () => void;
}

export default function MainButton({ text, icon, href = "#", onClick }: MainButtonProps) {
  const buttonContent = (
    <div className="main-btn group flex items-center rounded-full transition-all duration-300 hover:bg-gradient-to-r from-[color:var(--color-jacarta)] to-[color:var(--color-scampi)]">
      <span className="btn-text px-6 py-3">{text}</span>
      <span className="btn-icon bg-[color:var(--color-scampi)] group-hover:bg-transparent w-12 h-12 rounded-full flex items-center justify-center">
        <i className={icon}></i>
      </span>
    </div>
  );

  if (onClick) {
    return (
      <button onClick={onClick} className="inline-block">
        {buttonContent}
      </button>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {buttonContent}
    </Link>
  );
}