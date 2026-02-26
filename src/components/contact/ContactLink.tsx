import { ReactNode } from 'react';
import Card from '../common/Card';

interface ContactLinkProps {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactLink = ({ icon, label, value, href }: ContactLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      <Card className="p-5 flex items-center gap-4 group cursor-pointer hover:translate-x-1">
        <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-neutral-800 group-hover:border-neutral-200 transition-all flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
            {label}
          </p>
          <p className="text-neutral-800 font-medium text-sm truncate">
            {value}
          </p>
        </div>
        <svg
          className="w-4 h-4 text-neutral-300 group-hover:text-neutral-500 transition-colors flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Card>
    </a>
  );
};

export default ContactLink;
