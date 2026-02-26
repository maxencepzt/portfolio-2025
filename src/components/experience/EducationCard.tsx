import Card from '../common/Card';

interface EducationCardProps {
  period: string;
  title: string;
  school: string;
  desc?: string;
}

const EducationCard = ({ period, title, school, desc }: EducationCardProps) => {
  return (
    <Card className="p-6 h-auto">
      <span className="text-neutral-400 text-xs font-medium">{period}</span>
      <h4 className="text-base font-semibold text-neutral-900 mt-2">{title}</h4>
      <p className="text-accent text-sm font-medium mt-1">{school}</p>
      {desc && (
        <p className="text-neutral-400 text-sm mt-3 leading-relaxed">{desc}</p>
      )}
    </Card>
  );
};

export default EducationCard;
