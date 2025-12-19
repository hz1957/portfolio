import { ReactNode } from 'react';

interface SectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function Section({ icon, title, children }: SectionProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-blue-100 text-blue-600">
          {icon}
        </div>
        <h2 className="text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
