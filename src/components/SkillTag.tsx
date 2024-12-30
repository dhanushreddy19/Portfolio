import React from 'react';

interface SkillTagProps {
  name: string;
}

export function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
      {name}
    </span>
  );
}