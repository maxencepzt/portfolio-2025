import Card from '../common/Card';
import TechBadge from '../common/TechBadge';

interface ExperienceCardProps {
  title: string;
  company: string;
  type: string;
  period: string;
  description: string[];
  techs: string[];
}

const ExperienceCard = ({
  title,
  company,
  type,
  period,
  description,
  techs,
}: ExperienceCardProps) => {
  return (
    <Card className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h4 className="text-lg font-semibold text-neutral-900">{title}</h4>
          <p className="text-accent font-medium text-sm">{company}</p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <TechBadge label={type} />
          <span className="text-neutral-400 text-xs">{period}</span>
        </div>
      </div>
      <ul className="space-y-2 mb-4">
        {description.map((item, i) => (
          <li
            key={i}
            className="text-neutral-500 text-sm flex items-start gap-2"
          >
            <span className="text-neutral-300 mt-1.5 text-[6px]">●</span>
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </Card>
  );
};

export default ExperienceCard;
