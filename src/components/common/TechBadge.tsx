interface TechBadgeProps {
  label: string;
}

const TechBadge = ({ label }: TechBadgeProps) => {
  return (
    <span className="px-2.5 py-1 bg-neutral-50 text-neutral-500 text-xs font-medium rounded-md border border-neutral-100">
      {label}
    </span>
  );
};

export default TechBadge;
