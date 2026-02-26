import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div
      className={`bg-surface rounded-2xl border border-neutral-100 hover:border-neutral-200 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-100/50 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
