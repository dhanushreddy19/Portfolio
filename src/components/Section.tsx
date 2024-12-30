import React, { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-indigo-900 mb-6">{title}</h2>
      {children}
    </section>
  );
}