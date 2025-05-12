interface MainButtonProps {
  text: string;
  icon: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function MainButton({ text, icon, href = "#", onClick, type = 'button', disabled = false }: MainButtonProps) {
  const buttonContent = (
    <div className={`main-btn group flex items-center rounded-full transition-all duration-300 px-4 py-2
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gradient-to-r'}
      text-[color:var(--color-text-l)] dark:text-[color:var(--color-text-d)]
      hover:from-[color:var(--color-jacarta-l)] hover:to-[color:var(--color-scampi-l)]
      dark:hover:from-[color:var(--color-jacarta-d)] dark:hover:to-[color:var(--color-scampi-d)]`}>
      <span className="btn-text px-6 py-3">{text}</span>
      <span className="btn-icon bg-[color:var(--color-scampi-l)] dark:bg-[color:var(--color-scampi-d)] 
                       group-hover:bg-transparent w-12 h-12 rounded-full flex items-center justify-center">
        <i className={icon}></i>
      </span>
    </div>
  );

  return (
    <button onClick={onClick} type={type} className="inline-block" disabled={disabled}>
      {buttonContent}
    </button>
  );
}
