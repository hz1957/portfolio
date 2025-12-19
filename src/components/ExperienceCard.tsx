interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  current: boolean;
}

export function ExperienceCard({ title, company, period, description, current }: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-blue-500">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl mb-1">{title}</h3>
          <p className="text-blue-600">{company}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          current 
            ? 'bg-green-100 text-green-700' 
            : 'bg-slate-100 text-slate-600'
        }`}>
          {period}
        </span>
      </div>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
