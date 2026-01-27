interface ExperienceCardProps {
  title: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  achievements?: string[];
  current: boolean;
}

export function ExperienceCard({ 
  title, 
  company, 
  location,
  period, 
  description, 
  achievements,
  current 
}: ExperienceCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md border-l-4 border-blue-500 hover:shadow-xl transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-2xl mb-1">{title}</h3>
          <p className="text-blue-600 mb-1">{company}</p>
          {location && <p className="text-slate-500 text-sm">{location}</p>}
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          current 
            ? 'bg-green-100 text-green-700' 
            : 'bg-slate-100 text-slate-600'
        }`}>
          {period}
        </span>
      </div>
      {description && <p className="text-slate-600 mb-4">{description}</p>}
      {achievements && achievements.length > 0 && (
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="text-blue-500 mt-1">•</span>
              <span className="flex-1">{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}