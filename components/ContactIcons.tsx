export default function ContactIcons() {
    return (
      <div className="contact-icons">
        <div className="contact-icon flex gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[color:var(--color-scampi)] flex items-center justify-center text-lg transition-all duration-300 hover:bg-[color:var(--color-downy)]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[color:var(--color-scampi)] flex items-center justify-center text-lg transition-all duration-300 hover:bg-[color:var(--color-downy)]">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[color:var(--color-scampi)] flex items-center justify-center text-lg transition-all duration-300 hover:bg-[color:var(--color-downy)]">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[color:var(--color-scampi)] flex items-center justify-center text-lg transition-all duration-300 hover:bg-[color:var(--color-downy)]">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    );
  }