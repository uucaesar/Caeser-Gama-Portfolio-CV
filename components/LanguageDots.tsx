import React from 'react';

interface LanguageDotsProps {
  level: number; // 1-5
}

export const LanguageDots: React.FC<LanguageDotsProps> = ({ level }) => {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((dot) => (
        <div
          key={dot}
          className={`w-3 h-3 rounded-full border border-current ${
            dot <= level ? 'bg-current' : 'bg-transparent'
          }`}
        />
      ))}
    </div>
  );
};