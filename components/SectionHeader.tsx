import React from 'react';

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className = "" }) => {
  return (
    <h3 className={`font-display uppercase text-2xl md:text-3xl tracking-wide mb-4 ${className}`}>
      {title}
    </h3>
  );
};