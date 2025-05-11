interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description: string;
  }
  
  export default function TimelineItem({ year, title, company, description }: TimelineItemProps) {
    return (
      <div className="timeline-item">
        <div className="tl-icon">
          <i className="fas fa-briefcase"></i>
        </div>
        <p className="tl-duration text-sm text-gray-400 mb-2">{year}</p>
        <h5 className="text-xl font-medium mb-2">
          {title}<span className="text-[color:var(--color-scampi)]"> - {company}</span>
        </h5>
        <p className="text-gray-300">{description}</p>
      </div>
    );
  }